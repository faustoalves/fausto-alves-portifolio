import type { ScheduleInfo, SlotItem } from "@/lib/schedule";
import { getUserTimezone, toTimezoneRelativeIso } from "@/lib/timezone";
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

export const useScheduleStore = create<ScheduleStore>()((set) => ({
  schedule: {
    day: 0,
    month: 0,
    year: 2026,
    time: "",
    name: "",
    email: "",
    timezone: "",
    state: "calendar",
  },
  updateSchedule: (updated: Partial<ScheduleInfo>) =>
    set((state) => ({
      schedule: { ...state.schedule, ...updated },
    })),
}));

export const useScheduleSlotsStore = create<ScheduleSlotsStore>()(
  (set, get) => ({
    slots: [],
    updateSlots: (updated: SlotItem[]) => set(() => ({ slots: [...updated] })),
    getSlotsInTimezone: (timezone?: string) => {
      const selectedTimezone = timezone ?? getUserTimezone();
      return get().slots.map((slot) => ({
        ...slot,
        dateTimeTZ: toTimezoneRelativeIso(slot.dateTimeUTC, selectedTimezone),
      }));
    },
  }),
);
