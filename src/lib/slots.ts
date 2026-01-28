export type Slot = {
  dateTimeUTC: string;
  status: "available" | "booked" | "locked";
};

export type AvailableSlotsResponse = {
  period?: { start: string; end: string };
  slots: Slot[];
} | null;
