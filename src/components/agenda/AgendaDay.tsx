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
    actual:
      "bg-cyan-200  border-cyan-700 text-cyan-800 dark:text-white border-2 dark:bg-cyan-900 dark:border-cyan-800 cursor-not-allowed`",
    disable:
      "bg-purple-200 dark:bg-purple-900 text-purple-700 opacity-50 cursor-not-allowed",
    available:
      "bg-purple-200 border border-purple-700/20 dark:bg-purple-700 text-purple-700 dark:text-white hover:bg-purple-300 cursor-pointer transition",
  };

  const daySlots = getSlotsForDay();

  const { schedule, updateSchedule } = useScheduleStore();

  const handleClick = () => {
    if (daySlots.length === 0 || !enabled) return;
    updateSchedule({ state: "time", day: day, month: month, year: year });
  };

  const variantClass = !enabled
    ? actual
      ? agendaDayVariants.actual
      : agendaDayVariants.disable
    : daySlots.length === 0 && !actual
      ? agendaDayVariants.disable
      : agendaDayVariants.available;

  return (
    <div
      className={`relative overflow-hidden font-heading w-full aspect-6/9 lg:aspect-4/3 py-4 flex items-center group justify-center flex-col rounded-sm ${variantClass}`}
      onClick={handleClick}
    >
      <p className="text-center text-2xl leading-5 font-bold relative">{day}</p>
      <p className=" text-center text-sm leading-4 relative">{monthLabel}</p>
      {daySlots.length > 0 && enabled && (
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-pink-600 dark:bg-pink-600 backdrop-blur-xl translate-y-full group-hover:translate-y-0 transition duration-300 ease-out w-full h-full flex flex-col items-center justify-center">
          <p className="text-center text-2xl leading-5 font-bold relative text-white">
            {day}
            {actual}
          </p>
          <p className=" text-center text-sm leading-4 relative text-white">
            {monthLabel}
          </p>
        </div>
      )}
      {enabled && (
        <div className="absolute bottom-1 lg:right-0 lg:top-0 p-0.5 lg:p-1 flex flex-row lg:flex-col items-start justify-start gap-0.5 lg:gap-0.5">
          {daySlots.map((slot) => (
            <AgendaDayDot
              key={slot.dateTimeUTC}
              variant={slot.status as AgendaDayDotVariants}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default AgendaDay;
