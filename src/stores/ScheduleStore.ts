import type { ScheduleInfo, SlotItem } from "@/lib/schedule";
import { create } from "zustand";

type ScheduleStore = {
  schedule: ScheduleInfo;
  updateSchedule: (updated: Partial<ScheduleInfo>) => void;
};
type ScheduleSlotsStore = {
  slots: SlotItem[];
  updateSlots: (updated: SlotItem[]) => void;
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

export const useScheduleSlotsStore = create<ScheduleSlotsStore>()((set) => ({
  slots: [],
  updateSlots: (updated: SlotItem[]) => set(() => ({ slots: [...updated] })),
}));
