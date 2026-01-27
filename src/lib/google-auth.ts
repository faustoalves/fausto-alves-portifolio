import { google } from "googleapis";

export function getCalendarClient() {
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL!;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY!.replace(/\\n/g, "\n");
  const scopes = ["https://www.googleapis.com/auth/calendar"];
  const subject = process.env.GOOGLE_IMPERSONATED_USER;

  const auth = subject
    ? new google.auth.JWT({
        email: clientEmail,
        key: privateKey,
        scopes,
        subject,
      })
    : new google.auth.GoogleAuth({
        credentials: {
          client_email: clientEmail,
          private_key: privateKey,
        },
        scopes,
      });

  const calendar = google.calendar({ version: "v3", auth });
  return calendar;
}
