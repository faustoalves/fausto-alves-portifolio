export interface ScheduleInfo {
  date: string;
  time: string;
  name: string;
  email: string;
  timezone: string;
  meetLink: string;
  calendarLink: string;
}

export type SlotItem = {
  dateTimeUTC: string;
  status: "available" | "booked" | "locked";
};

export type AvailableSlotsResponse = {
  period?: { start: string; end: string };
  slots: SlotItem[];
} | null;
