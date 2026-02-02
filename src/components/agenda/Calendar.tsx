"use client";
import { useEffect } from "react";
import { useScheduleStore } from "@/stores/ScheduleStore";
import Weeks from "../agenda/Weeks";
import CalendarHeader from "../agenda/CalendarHeader";
import SlotTime from "../agenda/SlotTime";
import { AnimatePresence, motion } from "framer-motion";
import AgendaUserInfo from "../agenda/AgendaUserInfo";
import AgendaSending from "./AgendaSending";

type Props = {};

const Calendar = (props: Props) => {
  const { schedule, updateSchedule } = useScheduleStore();

  useEffect(() => {
    if (schedule.timezone) return;
    const clientTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    updateSchedule({ timezone: clientTimezone });
  }, [schedule.timezone, updateSchedule]);

  return (
    <div className="w-full mx-auto h-full flex flex-col items-center justify-center  px-0 ">
      <div
        className={`w-full lg:w-[calc(50%-1px)] -ml-px flex flex-col relative items-start justify-center  bg-purple-100/50 dark:bg-purple-800 top-line bottom-line `}
      >
        <motion.div
          layout
          className={`w-full h-full flex flex-col items-start justify-center relative p-2 overflow-hidden`}
        >
          <Weeks />
          <AnimatePresence>
            {schedule.state === "time" && <SlotTime key="slot-time" />}
            {schedule.state === "user-info" && (
              <AgendaUserInfo key="agenda-user-info" />
            )}
            {(schedule.state === "sending" ||
              schedule.state === "success" ||
              schedule.state === "error") && (
              <AgendaSending key="agenda-sending" />
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Calendar;
