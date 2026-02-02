export interface ScheduleInfo {
  day: number;
  month: number;
  year: number;
  time: string;
  name: string;
  email: string;
  timezone: string;
  state: "calendar" | "time" | "user-info" | "sending" | "success" | "error";
  subject?: string;
}

export type SlotItem = {
  dateTimeUTC: string;
  status: "available" | "booked" | "locked";
};

export type AvailableSlotsResponse = {
  period?: { start: string; end: string };
  slots: SlotItem[];
} | null;

export function formatSlotInTimezone(
  dateTimeUTC: string,
  timezone: string,
): string {
  return new Date(dateTimeUTC).toLocaleString("pt-BR", {
    timeZone: timezone,
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

/** Data no formato YYYY-MM-DD no fuso dado */
export function dateInTimezone(date: Date, timezone: string): string {
  return date.toLocaleDateString("en-CA", { timeZone: timezone });
}

/** Dia da semana (0=domingo … 6=sábado) para uma data YYYY-MM-DD */
export function weekdayOf(dateStr: string): number {
  return new Date(`${dateStr}T12:00:00Z`).getUTCDay();
}
