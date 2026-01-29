"use client";
import { useScheduleStore } from "@/stores/ScheduleStore";
import Weeks from "../agenda/Weeks";
import CalendarHeader from "../agenda/CalendarHeader";
import SlotTime from "../agenda/SlotTime";
import { AnimatePresence, motion } from "framer-motion";
import AgendaUserInfo from "../agenda/AgendaUserInfo";

type Props = {};

const Calendar = (props: Props) => {
  const { schedule } = useScheduleStore();

  return (
    <div className="w-full mx-auto h-full flex flex-col items-center justify-center my-6 px-0 ">
      <div
        className={`w-full lg:w-[calc(50%-1px)] -ml-px flex flex-col relative items-start justify-center my-10 bg-purple-100/50 dark:bg-purple-800 top-line bottom-line `}
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
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Calendar;
