/* eslint-disable @typescript-eslint/no-explicit-any */
// app/api/schedule/available-slots/route.ts
import { getCalendarClient } from "@/lib/google-auth";
import { ALLOWED_ORIGINS, logCors } from "@/lib/site";

const ROUTE = "/api/schedule/available-slots";

const BASE_SLOTS = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"];

const AGENDA_TZ = "-03:00"; // Brasília — mesmo fuso dos slots

function getCorsHeaders(origin: string | null): HeadersInit | null | undefined {
  if (!origin) return undefined;
  if (!ALLOWED_ORIGINS.includes(origin)) return null;
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "GET,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

export async function OPTIONS(req: Request) {
  const origin = req.headers.get("origin");
  const corsHeaders = getCorsHeaders(origin);
  const allowed = corsHeaders !== null;
  logCors(ROUTE, "OPTIONS", origin, allowed);
  if (!allowed) {
    return new Response(null, { status: 403 });
  }
  return new Response(null, { status: 204, headers: corsHeaders });
}

function getLockedSlotsForDate(dateStr: string): number[] {
  // Interpreta a data no fuso da agenda (-03:00) para não depender do TZ do servidor
  const targetDate = new Date(`${dateStr}T12:00:00${AGENDA_TZ}`);
  const dayOfWeek = targetDate.getUTCDay(); // 0 = domingo, 6 = sábado

  // Fim de semana: todos os slots travados
  if (dayOfWeek === 0 || dayOfWeek === 6) {
    return [0, 1, 2, 3, 4, 5];
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  targetDate.setHours(0, 0, 0, 0);

  const daysAhead = Math.floor(
    (targetDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24),
  );

  // Define quantos slots travar baseado na proximidade
  let maxLocked: number;
  if (daysAhead <= 1)
    maxLocked = 4; // amanhã: 4 travados
  else if (daysAhead <= 3)
    maxLocked = 2; // próximos 3 dias: 3 travados
  else if (daysAhead <= 7)
    maxLocked = 1; // próxima semana: 2 travados
  else maxLocked = 0; // depois: 1 travado

  // Usa a data como seed pra gerar sempre os mesmos slots travados
  const seed = targetDate.getTime();
  const rng = (s: number) => {
    const x = Math.sin(s) * 10000;
    return x - Math.floor(x);
  };

  const lockedIndices: number[] = [];
  for (let i = 0; i < maxLocked; i++) {
    const idx = Math.floor(rng(seed + i) * 6);
    if (!lockedIndices.includes(idx)) {
      lockedIndices.push(idx);
    }
  }

  return lockedIndices;
}

export async function GET(req: Request) {
  const origin = req.headers.get("origin");
  const corsHeaders = getCorsHeaders(origin);
  const allowed = corsHeaders !== null;
  logCors(ROUTE, "GET", origin, allowed);
  if (!allowed) {
    return Response.json(
      { success: false, error: "CORS_NOT_ALLOWED" },
      { status: 403 },
    );
  }

  try {
    const calendar = getCalendarClient();

    // 1. Calcula intervalo (amanhã + 15 dias)
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const endDate = new Date(tomorrow);
    endDate.setDate(endDate.getDate() + 14);

    // 2. Consulta freebusy pra todo o período
    const freeBusyResponse = await calendar.freebusy.query({
      requestBody: {
        timeMin: tomorrow.toISOString(),
        timeMax: endDate.toISOString(),
        items: [{ id: process.env.GOOGLE_CALENDAR_ID! }],
      },
    });

    const busySlots =
      freeBusyResponse.data.calendars?.[process.env.GOOGLE_CALENDAR_ID!]
        ?.busy || [];

    // 3. Gera lista plana de slots em UTC
    const slots = [];
    const current = new Date(tomorrow);

    while (current <= endDate) {
      const dateStr = current.toISOString().split("T")[0];
      const daySlots = BASE_SLOTS.map((time, idx) => {
        const dateTime = `${dateStr}T${time}:00-03:00`;
        const slotStart = new Date(dateTime);
        const slotEnd = new Date(slotStart.getTime() + 30 * 60 * 1000);

        // Verifica se está ocupado (booked)
        const isBooked = busySlots.some((busy) => {
          const busyStart = new Date(busy.start!);
          const busyEnd = new Date(busy.end!);
          return slotStart < busyEnd && slotEnd > busyStart;
        });

        if (isBooked) {
          return {
            dateTimeUTC: slotStart.toISOString(),
            status: "booked" as const,
          };
        }

        // Verifica se está travado (locked)
        const lockedIndices = getLockedSlotsForDate(dateStr);
        if (lockedIndices.includes(idx)) {
          return {
            dateTimeUTC: slotStart.toISOString(),
            status: "locked" as const,
          };
        }

        return {
          dateTimeUTC: slotStart.toISOString(),
          status: "available" as const,
        };
      });

      slots.push(...daySlots);

      current.setDate(current.getDate() + 1);
    }

    // 4. Retorna
    return Response.json(
      {
        period: {
          start: tomorrow.toISOString().split("T")[0],
          end: endDate.toISOString().split("T")[0],
        },
        slots,
      },
      { headers: corsHeaders },
    );
  } catch (err: any) {
    console.error("Error in available-slots:", err);
    return Response.json(
      { success: false, error: err.message },
      { status: 500, headers: corsHeaders ?? undefined },
    );
  }
}
