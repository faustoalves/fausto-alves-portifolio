"use client";
import React, { useEffect, useState } from "react";
import AgendaItem from "../agenda/AgendaDay";
import TimezoneSelector from "../TimezoneSelector";

type Props = Record<string, unknown>;

type AvailableSlots = Record<string, unknown> | null;

const Agenda = (_props: Props) => {
  const [availableSlots, setAvailableSlots] = useState<AvailableSlots>(null);

  useEffect(() => {
    const fetchAvailableSlots = async () => {
      try {
        const baseUrl =
          process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
        const res = await fetch(`${baseUrl}/api/schedule/available-slots`);
        if (!res.ok) throw new Error("Failed to fetch slots");
        const data = await res.json();
        setAvailableSlots(data);
      } catch (error) {
        setAvailableSlots(null);
      }
    };
    fetchAvailableSlots();
  }, []);

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
                // Helper to get today
                const today = new Date();
                // Find the current week's Sunday (start of week)
                const dayOfWeek = today.getDay(); // 0 (Sun) ... 6 (Sat)
                const sunday = new Date(today);
                sunday.setHours(0, 0, 0, 0);
                sunday.setDate(today.getDate() - dayOfWeek);

                // We want 3 weeks, each of 7 days
                const weeks = [];
                for (let w = 0; w < 3; w++) {
                  const weekDays = [];
                  for (let d = 0; d < 7; d++) {
                    const day = new Date(sunday);
                    day.setDate(sunday.getDate() + w * 7 + d);
                    weekDays.push(
                      <AgendaItem
                        key={`week${w}-day${d}`}
                        day={day.getDate()}
                        month={day
                          .toLocaleString("en", { month: "short" })
                          .toUpperCase()}
                        // Optionally, you can pass props for 'date' here
                      />,
                    );
                  }
                  weeks.push(weekDays);
                }
                // Flat array for rendering
                return weeks.flat();
              })()}

              <div className="w-full h-full flex flex-col items-center justify-center col-span-7">
                <TimezoneSelector />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agenda;
