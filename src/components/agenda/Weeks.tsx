"use client";
import React, { useEffect, useMemo } from "react";
import AgendaItem from "./AgendaDay";
import { TimezoneSelector } from "./TimezoneSelector";
import { dateInTimezone, weekdayOf } from "@/lib/schedule";
import type { AvailableSlotsResponse, SlotItem } from "@/lib/schedule";
import {
  useScheduleSlotsStore,
  useScheduleStore,
} from "@/stores/ScheduleStore";
import { cn } from "@/lib/utils";

type Props = Record<string, unknown>;

type CalendarCell = {
  key: string;
  day: number;
  month: number;
  year: number;
  enabled: boolean;
  actual: boolean;
};

type CalendarGridProps = {
  cells: CalendarCell[];
  selectedTimezone: string;
  onTimezoneChange: (timezone: string) => void;
  className?: string;
};

type BuildCalendarCellsArgs = {
  baseDate: Date;
  timezone: string;
  slots: SlotItem[];
  weeksToRender: number;
};

const WEEKDAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"] as const;
const WEEKS_TO_RENDER = 3;
const EMPTY_SLOTS: SlotItem[] = [];

const dateStrToUtcDate = (dateStr: string) => new Date(`${dateStr}T12:00:00Z`);

function buildCalendarCells({
  baseDate,
  timezone,
  slots,
  weeksToRender,
}: BuildCalendarCellsArgs): CalendarCell[] {
  const todayStr = dateInTimezone(baseDate, timezone);
  const todayDate = dateStrToUtcDate(todayStr);
  const sunday = new Date(todayDate);
  sunday.setUTCDate(todayDate.getUTCDate() - weekdayOf(todayStr));

  const cells: CalendarCell[] = [];
  for (let w = 0; w < weeksToRender; w++) {
    for (let d = 0; d < 7; d++) {
      const day = new Date(sunday);
      day.setUTCDate(sunday.getUTCDate() + w * 7 + d);
      const cellDateStr = day.toISOString().slice(0, 10);
      const wd = weekdayOf(cellDateStr);
      const isWeekday = wd >= 1 && wd <= 5;
      const isPast = cellDateStr < todayStr;
      const isToday = cellDateStr === todayStr;

      cells.push({
        key: `week${w}-day${d}`,
        year: Number(
          day.toLocaleString("en", { timeZone: timezone, year: "numeric" }),
        ),
        day: Number(
          day.toLocaleString("en", { timeZone: timezone, day: "numeric" }),
        ),
        month: Number(
          day.toLocaleString("en", { timeZone: timezone, month: "numeric" }),
        ),

        enabled: isWeekday && !isPast,
        actual: isToday,
      });
    }
  }

  return cells;
}

const CalendarGrid = ({
  cells,
  selectedTimezone,
  onTimezoneChange,
  className,
}: CalendarGridProps) => (
  <div className={cn("w-full grid grid-cols-7 gap-2 py-2 mx-auto`", className)}>
    {WEEKDAYS.map((weekday) => (
      <p
        key={weekday}
        className="tracking-widest text-center uppercase text-[12px] lg:text-xs py-3 text-purple-500 dark:text-purple-300"
      >
        {weekday}
      </p>
    ))}

    {cells.map((cell) => (
      <AgendaItem
        key={cell.key}
        day={cell.day}
        month={cell.month}
        year={cell.year}
        enabled={cell.enabled}
        actual={cell.actual}
      />
    ))}

    <div className="w-full col-span-7 flex flex-col pt-2">
      <TimezoneSelector
        value={selectedTimezone}
        onChange={onTimezoneChange}
        placeholder="Selecione o fuso horário"
      />
    </div>
  </div>
);

const Weeks = (_props: Props) => {
  const { slots, updateSlots } = useScheduleSlotsStore();
  const { schedule, updateSchedule } = useScheduleStore();

  // After mount, load fetchAvailableSlots after 5s
  useEffect(() => {
    const timer = setTimeout(() => {
      const fetchAvailableSlots = async () => {
        try {
          const baseUrl =
            process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
          const res = await fetch(`${baseUrl}/api/schedule/available-slots`);
          if (!res.ok) throw new Error("Failed to fetch slots");
          const data = await res.json();
          updateSlots((data as AvailableSlotsResponse)?.slots ?? []);
        } catch {
          updateSlots([]);
        }
      };
      fetchAvailableSlots();
    }, 5000);

    return () => clearTimeout(timer);
  }, [updateSlots]);
  // useEffect(() => {
  //   const fetchAvailableSlots = async () => {
  //     try {
  //       const baseUrl =
  //         process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  //       const res = await fetch(`${baseUrl}/api/schedule/available-slots`);
  //       if (!res.ok) throw new Error("Failed to fetch slots");
  //       const data = await res.json();
  //       updateSlots((data as AvailableSlotsResponse)?.slots ?? []);
  //     } catch {
  //       updateSlots([]);
  //     }
  //   };
  //   fetchAvailableSlots();
  // }, [updateSlots]);

  const timezone =
    schedule.timezone || Intl.DateTimeFormat().resolvedOptions().timeZone;
  const calendarCells = useMemo(
    () =>
      buildCalendarCells({
        baseDate: new Date(),
        timezone,
        slots: slots?.length ? slots : EMPTY_SLOTS,
        weeksToRender: WEEKS_TO_RENDER,
      }),
    [slots, timezone],
  );

  return (
    <CalendarGrid
      cells={calendarCells}
      selectedTimezone={schedule.timezone}
      onTimezoneChange={(tz) => {
        updateSchedule({ timezone: tz });
      }}
    />
  );
};

export default Weeks;
