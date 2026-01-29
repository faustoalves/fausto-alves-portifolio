import type { ScheduleInfo, SlotItem } from "@/lib/schedule";
import { getUserTimezone } from "@/lib/timezone";
import { create } from "zustand";

type ScheduleStore = {
  schedule: ScheduleInfo;
  updateSchedule: (updated: Partial<ScheduleInfo>) => void;
};
export type SlotItemWithTimezone = SlotItem & { dateTimeTZ: string };

type ScheduleSlotsStore = {
  slots: SlotItem[];
  updateSlots: (updated: SlotItem[]) => void;
  getSlotsInTimezone: (timezone?: string) => SlotItemWithTimezone[];
};

const toTimezoneRelativeIso = (dateTimeUTC: string, timezone: string) => {
  const date = new Date(dateTimeUTC);
  if (Number.isNaN(date.getTime())) return dateTimeUTC;

  try {
    const parts = new Intl.DateTimeFormat("en-CA", {
      timeZone: timezone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    }).formatToParts(date);

    const values = Object.fromEntries(
      parts
        .filter((part) => part.type !== "literal")
        .map((part) => [part.type, part.value]),
    );

    const year = Number(values.year);
    const month = Number(values.month);
    const day = Number(values.day);
    const hour = Number(values.hour);
    const minute = Number(values.minute);
    const second = Number(values.second);

    return new Date(
      Date.UTC(year, month - 1, day, hour, minute, second),
    ).toISOString();
  } catch {
    return dateTimeUTC;
  }
};

export const useScheduleStore = create<ScheduleStore>()((set) => ({
  schedule: {
    day: 0,
    month: 0,
    year: 2026,
    time: "",
    name: "",
    email: "",
    timezone: getUserTimezone(),
    state: "calendar",
  },
  updateSchedule: (updated: Partial<ScheduleInfo>) =>
    set((state) => ({
      schedule: { ...state.schedule, ...updated },
    })),
}));

export const useScheduleSlotsStore = create<ScheduleSlotsStore>()((set, get) => ({
  slots: [],
  updateSlots: (updated: SlotItem[]) => set(() => ({ slots: [...updated] })),
  getSlotsInTimezone: (timezone?: string) => {
    const selectedTimezone = timezone ?? getUserTimezone();
    return get().slots.map((slot) => ({
      ...slot,
      dateTimeTZ: toTimezoneRelativeIso(slot.dateTimeUTC, selectedTimezone),
    }));
  },
}));
