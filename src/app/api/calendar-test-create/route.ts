// app/api/calendar-test-create/route.ts
import { getCalendarClient } from "@/lib/google-auth";

export async function GET() {
  try {
    const calendar = getCalendarClient();

    const start = new Date();
    start.setHours(start.getHours() + 2); // daqui 2h
    const end = new Date(start.getTime() + 30 * 60 * 1000);

    const event = await calendar.events.insert({
      calendarId: process.env.GOOGLE_CALENDAR_ID!,
      requestBody: {
        summary: "Teste portfolio bot",
        description: "Evento de teste criado pela service account.",
        start: {
          dateTime: start.toISOString(),
          timeZone: "America/Sao_Paulo",
        },
        end: {
          dateTime: end.toISOString(),
          timeZone: "America/Sao_Paulo",
        },
      },
      sendUpdates: "none",
    });

    return Response.json({
      success: true,
      event: event.data,
    });
  } catch (err: any) {
    console.error(err);
    return Response.json(
      { success: false, error: err.message, details: err.errors },
      { status: 500 },
    );
  }
}
