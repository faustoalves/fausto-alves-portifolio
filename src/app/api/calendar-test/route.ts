// app/api/calendar-test/route.ts
import { getCalendarClient } from "@/lib/google-auth";

export async function GET() {
  try {
    const calendar = getCalendarClient();

    const res = await calendar.events.list({
      calendarId: process.env.GOOGLE_CALENDAR_ID, // seu email
      timeMin: new Date().toISOString(),
      maxResults: 5,
      singleEvents: true,
      orderBy: "startTime",
    });

    return Response.json({
      success: true,
      events: res.data.items,
    });
  } catch (err: any) {
    console.error(err);
    return Response.json(
      { success: false, error: err.message, details: err.errors },
      { status: 500 },
    );
  }
}
