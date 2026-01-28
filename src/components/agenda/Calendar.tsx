"use client";
import React, { useEffect, useMemo, useState } from "react";
import AgendaItem from "../agenda/AgendaDay";
import { TimezoneSelector } from "../agenda/TimezoneSelector";
import type { Timezone } from "@/lib/timezone";
import { dateInTimezone, weekdayOf } from "@/lib/schedule";
import type { AvailableSlotsResponse, SlotItem } from "@/lib/schedule";
import { useScheduleSlotsStore } from "@/stores/ScheduleStore";

type Props = Record<string, unknown>;

type CalendarCell = {
  key: string;
  day: number;
  month: number;
  year: number;
  slots: SlotItem[];
  enabled: boolean;
  actual: boolean;
};

type CalendarGridProps = {
  cells: CalendarCell[];
  selectedTimezone: Timezone | "";
  onTimezoneChange: (timezone: Timezone | "") => void;
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
const UTC_TZ = "UTC";

const dateStrToUtcDate = (dateStr: string) => new Date(`${dateStr}T12:00:00Z`);

function buildCalendarCells({
  baseDate,
  timezone,
  slots,
  weeksToRender,
}: BuildCalendarCellsArgs): CalendarCell[] {
  const todayStr = baseDate.toLocaleDateString("en-CA");
  const todayDate = dateStrToUtcDate(todayStr);
  const sunday = new Date(todayDate);
  sunday.setUTCDate(todayDate.getUTCDate() - weekdayOf(todayStr));

  const slotsForDay = (cellDateStr: string) =>
    slots.filter((slot) => {
      const slotDateInTz = dateInTimezone(new Date(slot.dateTimeUTC), timezone);
      return slotDateInTz === cellDateStr;
    });

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
          day.toLocaleString("en", { timeZone: UTC_TZ, year: "numeric" }),
        ),
        day: Number(
          day.toLocaleString("en", { timeZone: UTC_TZ, day: "numeric" }),
        ),
        month: Number(
          day.toLocaleString("en", { timeZone: UTC_TZ, month: "numeric" }),
        ),
        slots: slotsForDay(cellDateStr),
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
}: CalendarGridProps) => (
  <div className="w-full grid grid-cols-7 gap-2 lg:gap-3 ">
    {WEEKDAYS.map((weekday) => (
      <p
        key={weekday}
        className="tracking-widest text-center uppercase text-[10px] lg:text-xs text-purple-300"
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
        slots={cell.slots}
        enabled={cell.enabled}
        actual={cell.actual}
      />
    ))}

    <div className="w-full col-span-7 flex flex-col gap-4">
      <TimezoneSelector
        value={selectedTimezone}
        onChange={onTimezoneChange}
        placeholder="Selecione o fuso horário"
      />
    </div>
  </div>
);


const Calendar = (_props: Props) => {
  const { slots, updateSlots } = useScheduleSlotsStore();
  const [selectedTimezone, setSelectedTimezone] = useState<Timezone | "">("");
  useEffect(() => {
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
  }, [updateSlots]);

  const timezone =
    selectedTimezone || Intl.DateTimeFormat().resolvedOptions().timeZone;
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
      selectedTimezone={selectedTimezone}
      onTimezoneChange={setSelectedTimezone}
    />
  );
};

export default Calendar;
