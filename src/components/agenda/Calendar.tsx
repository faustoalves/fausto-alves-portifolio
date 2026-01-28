"use client";
import React, { useEffect, useMemo, useState } from "react";
import AgendaItem from "../agenda/AgendaDay";
import { TimezoneSelector } from "../agenda/TimezoneSelector";
import type { Timezone } from "@/lib/timezone";
import type { AvailableSlotsResponse } from "@/lib/schedule";

type Props = Record<string, unknown>;

function formatSlotInTimezone(dateTimeUTC: string, timezone: string): string {
  return new Date(dateTimeUTC).toLocaleString("pt-BR", {
    timeZone: timezone,
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

/** Data no formato YYYY-MM-DD no fuso dado */
function dateInTimezone(d: Date, tz: string): string {
  return d.toLocaleDateString("en-CA", { timeZone: tz });
}

/** Dia da semana (0=domingo … 6=sábado) para uma data YYYY-MM-DD */
function weekdayOf(dateStr: string): number {
  return new Date(dateStr + "T12:00:00").getUTCDay();
}

const Calendar = (_props: Props) => {
  const [availableSlots, setAvailableSlots] =
    useState<AvailableSlotsResponse>(null);
  const [selectedTimezone, setSelectedTimezone] = useState<Timezone | "">("");

  useEffect(() => {
    const fetchAvailableSlots = async () => {
      try {
        const baseUrl =
          process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
        const res = await fetch(`${baseUrl}/api/schedule/available-slots`);
        if (!res.ok) throw new Error("Failed to fetch slots");
        const data = await res.json();
        setAvailableSlots(data);
      } catch {
        setAvailableSlots(null);
      }
    };
    fetchAvailableSlots();
  }, []);

  const slotsFormatted = useMemo(() => {
    if (!availableSlots?.slots || !selectedTimezone) return [];
    return availableSlots.slots.map((slot) => ({
      ...slot,
      label: formatSlotInTimezone(slot.dateTimeUTC, selectedTimezone),
    }));
  }, [availableSlots?.slots, selectedTimezone]);

  return (
    <section className="w-full flex flex-col items-start justify-center relative mt-10 top-line bottom-line ">
      <div className="w-full bottom-line pattern-bg lg:col-span-2 p-4 text-center relative">
        <h2>Let&apos;s work together</h2>
      </div>
      <div className="w-full h-full flex flex-col items-center justify-center my-6 px-4 lg:px-0 ">
        <div className="w-full lg:w-1/2 flex flex-col items-start justify-center my-10 bg-purple-800   mb-50">
          <div className="w-full h-full flex flex-col items-start justify-center p-2 lg:p-4 top-line bottom-line relative">
            <div className="w-full grid grid-cols-7 gap-2 lg:gap-3 ">
              <p className="tracking-widest text-center uppercase text-[10px] lg:text-xs text-purple-300">
                SUN
              </p>
              <p className="tracking-widest text-center uppercase text-[10px] lg:text-xs text-purple-300">
                MON
              </p>
              <p className="tracking-widest text-center uppercase text-[10px] lg:text-xs text-purple-300">
                TUE
              </p>
              <p className="tracking-widest text-center uppercase text-[10px] lg:text-xs text-purple-300">
                WED
              </p>
              <p className="tracking-widest text-center uppercase text-[10px] lg:text-xs text-purple-300">
                THU
              </p>
              <p className="tracking-widest text-center uppercase text-[10px] lg:text-xs text-purple-300">
                FRI
              </p>
              <p className="tracking-widest text-center uppercase text-[10px] lg:text-xs text-purple-300">
                SAT
              </p>

              {(() => {
                const today = new Date();
                const dayOfWeek = today.getDay();
                const sunday = new Date(today);
                sunday.setHours(0, 0, 0, 0);
                sunday.setDate(today.getDate() - dayOfWeek);

                const tz =
                  selectedTimezone ||
                  Intl.DateTimeFormat().resolvedOptions().timeZone;
                const todayStr = dateInTimezone(today, tz);

                const allSlots = availableSlots?.slots ?? [];

                const slotsForDay = (cellDateStr: string) =>
                  allSlots.filter((slot) => {
                    const slotDateInTz = dateInTimezone(
                      new Date(slot.dateTimeUTC),
                      tz,
                    );
                    return slotDateInTz === cellDateStr;
                  });

                const weeks = [];
                for (let w = 0; w < 3; w++) {
                  const weekDays = [];
                  for (let d = 0; d < 7; d++) {
                    const day = new Date(sunday);
                    day.setDate(sunday.getDate() + w * 7 + d);
                    const cellDateStr = dateInTimezone(day, tz);
                    const wd = weekdayOf(cellDateStr);
                    const isWeekday = wd >= 1 && wd <= 5;
                    const isPast = cellDateStr < todayStr;
                    const isToday = cellDateStr === todayStr;
                    weekDays.push(
                      <AgendaItem
                        key={`week${w}-day${d}`}
                        day={Number(
                          day.toLocaleString("en", {
                            timeZone: tz,
                            day: "numeric",
                          }),
                        )}
                        month={day
                          .toLocaleString("en", {
                            timeZone: tz,
                            month: "short",
                          })
                          .toUpperCase()}
                        slots={slotsForDay(cellDateStr)}
                        enabled={isWeekday && !isPast}
                        actual={isToday}
                      />,
                    );
                  }
                  weeks.push(weekDays);
                }
                return weeks.flat();
              })()}

              <div className="w-full col-span-7 flex flex-col gap-4">
                <TimezoneSelector
                  value={selectedTimezone}
                  onChange={(tz) => setSelectedTimezone(tz)}
                  placeholder="Selecione o fuso horário"
                />
                {/* {selectedTimezone && slotsFormatted.length > 0 && (
                  <div className="w-full">
                    <p className="text-purple-300 text-xs lg:text-sm uppercase tracking-widest mb-2">
                      Horários disponíveis (no seu fuso)
                    </p>
                    <ul className="flex flex-wrap gap-2">
                      {slotsFormatted
                        .filter((s) => s.status === "available")
                        .map((s, i) => (
                          <li
                            key={`${s.dateTimeUTC}-${i}`}
                            className="px-3 py-1.5 rounded bg-purple-700 text-white text-sm"
                          >
                            {s.label}
                          </li>
                        ))}
                    </ul>
                  </div>
                )} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calendar;
