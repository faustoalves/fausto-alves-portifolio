import React, { useCallback } from "react";
import AgendaDayDot, { AgendaDayDotVariants } from "./AgendaDayDot";
import type { SlotItem } from "@/lib/schedule";
import {
  useScheduleSlotsStore,
  useScheduleStore,
} from "@/stores/ScheduleStore";

type Props = {
  day: number;
  month: number;
  year: number;
  enabled?: boolean;
  actual?: boolean;
};

const AgendaDay = ({
  day,
  month,
  year,
  enabled = true,
  actual = false,
}: Props) => {
  const { slots } = useScheduleSlotsStore();
  const getSlotsForDay = useCallback(() => {
    return slots.filter((slot) => {
      const pad = (n: number) => n.toString().padStart(2, "0");
      const datePrefix = `${year}-${pad(month)}-${pad(day)}`;
      return slot.dateTimeUTC.startsWith(datePrefix);
    });
  }, [slots, year, month, day]);

  const monthLabel = new Date(Date.UTC(2000, month, 1))
    .toLocaleString("en", { month: "short" })
    .toUpperCase();
  // tailwind-variants for agenda item status: 'disable', 'actual', 'available'
  const agendaDayVariants = {
    disable:
      "bg-purple-200 dark:bg-purple-900 text-purple-700 opacity-50 cursor-not-allowed",
    actual:
      "bg-pink-500 text-white border-2 border-pink-200 cursor-not-allowed`",
    available:
      "bg-purple-200 border border-purple-700/20 dark:bg-purple-700 text-purple-700 dark:text-white hover:bg-purple-300 cursor-pointer transition",
  };

  const { schedule, updateSchedule } = useScheduleStore();

  const handleClick = () => {
    if (slots.length === 0) return;
    updateSchedule({ state: "time", day: day, month: month, year: year });
    console.log(schedule);
  };

  const variantClass = !enabled
    ? agendaDayVariants.disable
    : slots.length === 0 && !actual
      ? agendaDayVariants.disable
      : // : agendaDayVariants.disable
        actual
        ? agendaDayVariants.actual
        : agendaDayVariants.available;

  return (
    <div
      className={`relative font-heading w-full aspect-square lg:aspect-4/3 flex items-center justify-center flex-col rounded-sm ${variantClass}`}
      onClick={handleClick}
    >
      <p className="text-center text-base lg:text-2xl leading-5 font-bold relative">
        {day}
      </p>
      <p className=" text-center text-xs lg:text-sm leading-4 relative">
        {monthLabel}
      </p>
      {enabled && (
        <div className="absolute right-0 top-0 p-0.5 lg:p-1 flex flex-col items-start justify-start gap-0.5 lg:gap-0.5">
          {getSlotsForDay().map((slot) => (
            <AgendaDayDot
              key={slot.dateTimeUTC}
              variant={slot.status as AgendaDayDotVariants}
            />
          ))}

          {/* <AgendaDayDot variant="disable" /> */}
        </div>
      )}
    </div>
  );
};

export default AgendaDay;
