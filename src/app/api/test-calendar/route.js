import { getCalendar } from "@/lib/google-auth";

export async function GET() {
  try {
    const calendar = await getCalendar();

    const response = await calendar.calendarList.list();

    return Response.json({
      success: true,
      calendars: response.data.items,
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 },
    );
  }
}
