// app/api/schedule/send-confirmation/route.ts
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const {
      participantEmail,
      participantName,
      date,
      time,
      meetLink,
      calendarLink,
    } = await req.json();

    if (!participantEmail || !participantName || !date || !time || !meetLink) {
      return Response.json(
        { success: false, error: "MISSING_FIELDS" },
        { status: 400 },
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

    return Response.json({
      success: true,
      message: "Emails enviados com sucesso",
    });
  } catch (err: any) {
    console.error("Error sending emails:", err);
    return Response.json(
      { success: false, error: err.message },
      { status: 500 },
    );
  }
}
