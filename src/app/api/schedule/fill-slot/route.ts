import { getCalendarClient } from "@/lib/google-auth";

const ALLOWED_ORIGINS = [
  "https://www.faustoalves.com.br",
  "https://portifolio.faustoalves.com.br",
  "https://faustoalves.com.br",
];

function getCorsHeaders(
  origin: string | null,
): HeadersInit | null | undefined {
  if (!origin) return undefined;
  if (!ALLOWED_ORIGINS.includes(origin)) return null;
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "POST,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

export async function OPTIONS(req: Request) {
  const origin = req.headers.get("origin");
  const corsHeaders = getCorsHeaders(origin);
  if (corsHeaders === null) {
    return new Response(null, { status: 403 });
  }
  return new Response(null, { status: 204, headers: corsHeaders });
}

async function checkSlotAvailability(calendar: any, dateTime: string) {
  const slotStart = new Date(dateTime);
  const slotEnd = new Date(slotStart.getTime() + 30 * 60 * 1000);

  const response = await calendar.freebusy.query({
    requestBody: {
      timeMin: slotStart.toISOString(),
      timeMax: slotEnd.toISOString(),
      items: [{ id: process.env.GOOGLE_CALENDAR_ID! }],
    },
  });

  const busy =
    response.data.calendars?.[process.env.GOOGLE_CALENDAR_ID!]?.busy || [];
  return busy.length === 0;
}

async function ensureMeetAllowed(calendar: any) {
  const response = await calendar.calendars.get({
    calendarId: process.env.GOOGLE_CALENDAR_ID!,
  });

  const allowedTypes =
    response.data.conferenceProperties?.allowedConferenceSolutionTypes ?? [];

  return allowedTypes.includes("hangoutsMeet");
}

export async function POST(req: Request) {
  const origin = req.headers.get("origin");
  const corsHeaders = getCorsHeaders(origin);
  if (corsHeaders === null) {
    return Response.json(
      { success: false, error: "CORS_NOT_ALLOWED" },
      { status: 403 },
    );
  }

  try {
    const { date, time, name, email, timezone } = await req.json();

    if (!date || !time || !name || !email) {
      return Response.json(
        {
          success: false,
          error: "MISSING_FIELDS",
          message: "Todos os campos são obrigatórios.",
        },
        { status: 400, headers: corsHeaders },
      );
    }

    const validSlots = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"];
    if (!validSlots.includes(time)) {
      return Response.json(
        { success: false, error: "INVALID_SLOT", message: "Horário inválido." },
        { status: 400, headers: corsHeaders },
      );
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const maxDate = new Date(tomorrow);
    maxDate.setDate(maxDate.getDate() + 14);

    const selectedDate = new Date(`${date}T00:00:00`);
    if (selectedDate < tomorrow || selectedDate > maxDate) {
      return Response.json(
        {
          success: false,
          error: "INVALID_DATE",
          message: "Data fora do intervalo permitido.",
        },
        { status: 400, headers: corsHeaders },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        {
          success: false,
          error: "INVALID_EMAIL",
          message: "Email inválido.",
        },
        { status: 400, headers: corsHeaders },
      );
    }

    const calendar = getCalendarClient();
    const dateTime = `${date}T${time}:00-03:00`;

    const isAvailable = await checkSlotAvailability(calendar, dateTime);
    if (!isAvailable) {
      return Response.json(
        {
          success: false,
          error: "SLOT_UNAVAILABLE",
          message: "Este horário já foi preenchido.",
        },
        { status: 409, headers: corsHeaders },
      );
    }

    const meetAllowed = await ensureMeetAllowed(calendar);
    if (!meetAllowed) {
      return Response.json(
        {
          success: false,
          error: "MEET_NOT_ALLOWED",
          message:
            "Esta agenda não permite criar Google Meet. Verifique se é uma conta Google Workspace com Meet habilitado e, se estiver usando service account, configure a delegação de domínio e a variável GOOGLE_IMPERSONATED_USER.",
        },
        { status: 400, headers: corsHeaders },
      );
    }

    const slotStart = new Date(dateTime);
    const slotEnd = new Date(slotStart.getTime() + 30 * 60 * 1000);

    const eventResponse = await calendar.events.insert({
      calendarId: process.env.GOOGLE_CALENDAR_ID!,
      requestBody: {
        summary: `Conversa com ${name}`,
        description: `Agendado via portfólio.\n\nParticipante: ${name} (${email})`,
        start: {
          dateTime: slotStart.toISOString(),
          timeZone: "America/Sao_Paulo",
        },
        end: {
          dateTime: slotEnd.toISOString(),
          timeZone: "America/Sao_Paulo",
        },
        conferenceData: {
          createRequest: {
            requestId: `portfolio-${Date.now()}`,
            conferenceSolutionKey: {
              type: "hangoutsMeet",
            },
          },
        },
        reminders: {
          useDefault: true,
        },
      },
      conferenceDataVersion: 1,
    });

    const created = eventResponse.data;

    const meetLink =
      created.conferenceData?.entryPoints?.find(
        (e) => typeof e === "object" && e.entryPointType === "video",
      )?.uri ?? null;

    // 👇 ADICIONA ISSO
    try {
      await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/api/schedule/send-confirmation`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            participantEmail: email,
            participantName: name,
            date,
            time,
            meetLink,
            calendarLink: created.htmlLink,
          }),
        },
      );
    } catch (emailErr) {
      console.error("Erro ao enviar email:", emailErr);
      // Não falha o fluxo se o email der erro
    }

    return Response.json(
      {
        success: true,
        event: {
          id: created.id,
          summary: created.summary,
          start: created.start?.dateTime,
          end: created.end?.dateTime,
          meetLink,
          calendarLink: created.htmlLink,
          participantEmail: email,
          participantName: name,
        },
      },
      { headers: corsHeaders },
    );
  } catch (err: any) {
    console.error("Error in fill-slot:", err);
    return Response.json(
      { success: false, error: err.message, details: err.errors },
      { status: 500, headers: corsHeaders ?? undefined },
    );
  }
}
