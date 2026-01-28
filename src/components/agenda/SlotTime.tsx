import React from "react";
import {
  useScheduleSlotsStore,
  useScheduleStore,
} from "@/stores/ScheduleStore";

type Props = {};

const SlotTime = (props: Props) => {
  const { schedule, updateSchedule } = useScheduleStore();
  const { slots } = useScheduleSlotsStore();
  const monthLabel = new Date(
    Date.UTC(schedule.year, schedule.month - 1, schedule.day),
  ).toLocaleString("en", { month: "long", timeZone: "UTC" });

  const weekday = new Date(
    Date.UTC(schedule.year, schedule.month - 1, schedule.day),
  ).toLocaleString("en", { weekday: "long", timeZone: "UTC" });

  const handleClick = () => {
    updateSchedule({ state: "calendar" });
  };

  return (
    <div
      className="w-full h-full flex flex-col items-start justify-center p-2 lg:p-4 absolute top-0 left-0 right-0 bottom-0 bg-purple-800/20 backdrop-blur-xl "
      onClick={handleClick}
    >
      <div className="flex flex-col gap-2 items-center justify-center w-2/3 p-2 lg:p-4 mx-auto bg-purple-800 rounded-lg drop-shadow-lg">
        <p className="text-2xl font-bold text-white text-center w-full">
          {(() => {
            return <span className="block text-lg text-purple-200 mb-1"></span>;
          })()}
          {weekday} - {schedule.day} {monthLabel}
        </p>
        <p className="text-base font-light uppercase text-white text-center">
          Pick a time
        </p>
        <div className="h-auto grid grid-cols-2 gap-2 w-2/3 mx-auto">
          {slots
            .filter(
              (slot) =>
                slot.dateTimeUTC &&
                (() => {
                  const date = new Date(slot.dateTimeUTC);
                  return (
                    date.getUTCDate() === schedule.day &&
                    date.getUTCMonth() + 1 === schedule.month
                  );
                })(),
            )
            .map((slot, idx) => {
              const date = new Date(slot.dateTimeUTC);
              const hours = String(date.getUTCHours()).padStart(2, "0");
              const minutes = String(date.getUTCMinutes()).padStart(2, "0");
              return (
                <button
                  key={slot.dateTimeUTC + idx}
                  disabled={
                    slot.status === "available"
                  }
                  className="w-full py-2 px-4 my-1 bg-purple-700 rounded cursor-pointer hover:bg-purple-600 transition"
                >
                  {hours}:{minutes} - {hours}:{30}
                </button>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default SlotTime;
