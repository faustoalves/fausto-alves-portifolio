import React from "react";
import {
  useScheduleSlotsStore,
  useScheduleStore,
} from "@/stores/ScheduleStore";
import { X } from "lucide-react";
import { motion } from "framer-motion";

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

  const handleClose = () => {
    updateSchedule({ state: "calendar" });
  };

  const handleSelectTime = (time: string) => {
    updateSchedule({ time: time, state: "user-info" });
  };

  return (
    <motion.div
      layout
      className="w-full h-full flex flex-col items-start justify-center p-2 lg:p-4 absolute top-0 left-0 right-0 bottom-0 backface-hidden"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute top-0 left-0 right-0 bottom-0 bg-purple-100/20 dark:bg-purple-800/20 backdrop-blur-xl"
        onClick={handleClose}
      ></motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col gap-2 items-center justify-center w-3/5 p-2 lg:p-4 mx-auto bg-purple-100 dark:bg-purple-800 rounded-lg drop-shadow-lg border-2 border-purple-900/10"
      >
        <button
          onClick={handleClose}
          className="text-purple-800 dark:text-white absolute top-0 right-0 p-4 cursor-pointer"
        >
          <X />
        </button>
        <p className="text-2xl font-semibold text-purple-800 dark:text-white text-center w-full">
          {weekday} - {schedule.day} {monthLabel}
        </p>
        <p className="text-sm tracking-widest uppercase text-purple-800 dark:text-white text-center">
          Pick a time
        </p>
        <div className="h-auto grid grid-cols-2 gap-1 w-full mx-auto">
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
                  onClick={() => handleSelectTime(slot.dateTimeUTC)}
                  disabled={
                    slot.status === "locked" || slot.status === "booked"
                  }
                  className="w-full py-2 px-4  bg-purple-700 rounded cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed hover:bg-purple-600 transition"
                >
                  {hours}:{minutes} - {hours}:{30}
                </button>
              );
            })}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SlotTime;
