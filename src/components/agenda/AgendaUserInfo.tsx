import { useScheduleStore } from "@/stores/ScheduleStore";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

const AgendaUserInfo = (props: Props) => {
  const { schedule, updateSchedule } = useScheduleStore();
  return (
    <motion.div
      initial={{ translate: "0% 100%" }}
      animate={{ translate: "0% 0%" }}
      exit={{ translate: "0% 100%" }}
      transition={{ duration: 0.25, ease: "easeIn" }}
      layout
      className={`w-full h-full flex flex-col items-center justify-center bg-purple-100 dark:bg-purple-800 p-2 lg:p-4 absolute top-0 right-0 `}
      onClick={() => {
        updateSchedule({ state: "calendar" });
      }}
    >
      AgendaUserInfo
    </motion.div>
  );
};

export default AgendaUserInfo;
