// app/api/schedule/send-confirmation/route.ts
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

import { ALLOWED_ORIGINS, logCors } from "@/lib/site";

const ROUTE = "/api/schedule/send-confirmation";

function getCorsHeaders(origin: string | null): HeadersInit | null | undefined {
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
  const allowed = corsHeaders !== null;
  logCors(ROUTE, "OPTIONS", origin, allowed);
  if (!allowed) {
    return new Response(null, { status: 403 });
  }
  return new Response(null, { status: 204, headers: corsHeaders });
}

export async function POST(req: Request) {
  const origin = req.headers.get("origin");
  const corsHeaders = getCorsHeaders(origin);
  const allowed = corsHeaders !== null;
  logCors(ROUTE, "POST", origin, allowed);
  if (!allowed) {
    return Response.json(
      { success: false, error: "CORS_NOT_ALLOWED" },
      { status: 403 },
    );
  }
  try {
    const body = await req.json();
    console.log(body);
    const {
      participantEmail,
      participantName,
      date,
      time,
      meetLink,
      calendarLink,
    } = body;

    if (!participantEmail || !participantName || !date || !time || !meetLink) {
      return Response.json(
        { success: false, error: "MISSING_FIELDS" },
        { status: 400, headers: corsHeaders },
      );
    }

    // Email pro participante
    await resend.emails.send({
      from: "Fausto <noreply@faustoalves.com.br>",
      to: participantEmail,
      subject: `Sua conversa foi confirmada para ${date} às ${time}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Olá ${participantName}! 👋</h2>
          <p>Sua conversa foi confirmada com sucesso.</p>

          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>📅 Data:</strong> ${date}</p>
            <p><strong>🕐 Horário:</strong> ${time}</p>
            <p><strong>🔗 Link da reunião:</strong> <a href="${meetLink}">${meetLink}</a></p>
          </div>

          <p>Clique no link acima para participar da reunião.</p>
          <p>Até lá! 🚀</p>

          <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
          <p style="font-size: 12px; color: #999;">Fausto Alves | Portfolio</p>
        </div>
      `,
    });

    // Email pra você (confirmação interna)
    await resend.emails.send({
      from: "Fausto <noreply@faustoalves.com.br>",
      to: "fausto@faustoalves.com.br",
      subject: `Nova conversa agendada: ${participantName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Nova conversa agendada 📞</h2>

          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Participante:</strong> ${participantName}</p>
            <p><strong>Email:</strong> ${participantEmail}</p>
            <p><strong>📅 Data:</strong> ${date}</p>
            <p><strong>🕐 Horário:</strong> ${time}</p>
            <p><strong>🔗 Link da reunião:</strong> <a href="${meetLink}">${meetLink}</a></p>
            <p><strong>📋 Evento no Calendar:</strong> <a href="${calendarLink}">Abrir</a></p>
          </div>

          <p>Tudo pronto para sua conversa!</p>
        </div>
      `,
    });

    return Response.json(
      {
        success: true,
        message: "Emails enviados com sucesso",
      },
      { headers: corsHeaders },
    );
  } catch (err: any) {
    console.error("Error sending emails:", err);
    return Response.json(
      { success: false, error: err.message },
      { status: 500, headers: corsHeaders ?? undefined },
    );
  }
}
