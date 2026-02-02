import { useScheduleStore } from "@/stores/ScheduleStore";
import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Loader2 } from "lucide-react";

type Props = {};

const AgendaSending = (props: Props) => {
  const { schedule, updateSchedule } = useScheduleStore();

  useEffect(() => {
    const sendSchedule = async () => {
      const baseUrl =
        process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

      try {
        // Only post if state is "sending"
        if (schedule.state === "sending") {
          const response = await fetch(`${baseUrl}/api/schedule/fill-slot`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              day: schedule.day,
              month: schedule.month,
              year: schedule.year,
              time: schedule.time,
              name: schedule.name,
              email: schedule.email,
              timezone: schedule.timezone,
              subject: schedule.subject,
            }),
          });

          if (!response.ok) {
            updateSchedule({ state: "error" });
          } else {
            updateSchedule({ state: "success" });
          }
        }
      } catch (e) {
        updateSchedule({ state: "error" });
      }
    };
    sendSchedule();
  }, [schedule.state, updateSchedule]);

  return (
    <motion.div
      initial={{ translate: "-100% 0%" }}
      animate={{ translate: "0% 0%" }}
      exit={{ translate: "-100% 0%" }}
      transition={{ duration: 0.25, ease: "easeIn" }}
      layout
      className={`w-full h-full flex flex-col lg:flex-row items-center justify-center bg-purple-50 dark:bg-purple-950  p-0 absolute top-0 right-0 divide-y lg:divide-y-0 lg:divide-x divide-purple-200 dark:divide-purple-800 `}
    >
      <AnimatePresence>
        {schedule.state === "sending" && (
          <motion.div
            key="sending"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeIn" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center"
          >
            <Loader2 className="w-10 h-10 animate-spin duration-500 text-purple-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <Loader2 className="w-14 h-14 animate-spin duration-700 text-purple-500/60 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45" />
            <Loader2 className="w-20 h-20 animate-spin duration-1000 text-purple-500/30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90" />
          </motion.div>
        )}
        {schedule.state === "success" && (
          <motion.div
            key="success"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeIn" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex flex-col items-center justify-center text-center"
          >
            <p className="text-purple-500 text-xl lg:text-2xl font-semibold">
              Scheduling successful.
            </p>
            <p className="text-purple-500 text-base lg:text-lg">
              The meeting link will be sent to your email.
            </p>
          </motion.div>
        )}
        {schedule.state === "error" && (
          <motion.div
            key="error"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeIn" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex flex-col items-center justify-center text-center"
          >
            {" "}
            <p className="text-purple-500 text-xl lg:text-2xl font-semibold">
              Something went wrong!
            </p>
            <p className="text-purple-500 text-base lg:text-lg">
              Please try again later.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default AgendaSending;
