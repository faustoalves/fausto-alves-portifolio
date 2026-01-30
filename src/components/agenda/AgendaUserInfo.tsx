import { useScheduleStore } from "@/stores/ScheduleStore";
import React from "react";
import { motion } from "framer-motion";
import UserInfoForm from "./UserInfoForm";
import { CldImage } from "next-cloudinary";
import { CalendarDaysIcon, ClockIcon, EarthIcon } from "lucide-react";

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
      className={`w-full h-full flex flex-col lg:flex-row items-center justify-center bg-purple-50 dark:bg-purple-900  p-0 absolute top-0 right-0 divide-y lg:divide-y-0 lg:divide-x divide-purple-200 dark:divide-purple-800 `}
      // onClick={() => {
      //   updateSchedule({ state: "calendar" });
      // }}
    >
      <div className="w-full lg:w-1/2 h-2/5 lg:h-full flex flex-row lg:flex-col items-center justify-center p-1 lg:p-6 gap-4">
        <CldImage
          src="https://res.cloudinary.com/faustoalves/image/upload/v1769095320/portifolio/about/me-real_ukhgix.png"
          alt="Profile"
          width={100}
          height={100}
          className="w-24 h-24 lg:w-32 lg:h-32 object-cover rounded-full border-2 border-purple-700"
        />
        <div className="lg:w-full  flex flex-col items-center justify-center gap-2 ">
          <p className="lg:text-lg text-base font-semibold w-auto mx-auto lg:text-center leading-4 pb-2 lg:pb-6">
            <span className="text-purple-500 font-light dark:text-purple-300 lg:text-base">
              Chat with{" "}
            </span>
            <br className="hidden lg:block" />
            Fausto Alves
          </p>
          <div className="w-full h-full flex flex-row items-center justify-start">
            <ClockIcon
              className="w-3 h-3 lg:w-4 lg:h-4 mr-2 text-purple-500 dark:text-purple-300"
              strokeWidth={2}
            />
            <p className="lg:text-sm text-xs w-auto mx-auto  leading-4 font-light text-left">
              <span>
                {new Date(schedule.time).getHours()}:
                {new Date(schedule.time)
                  .getMinutes()
                  .toString()
                  .padStart(2, "0")}
                {" - "}
                {new Date(
                  new Date(schedule.time).getTime() + 30 * 60000,
                ).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </p>
          </div>
          <div className="w-full h-full flex flex-row items-center justify-start">
            <CalendarDaysIcon
              className="w-3 h-3 lg:w-4 lg:h-4 mr-2 text-purple-500 dark:text-purple-300"
              strokeWidth={2}
            />
            <p className="lg:text-sm text-xs w-auto mx-auto  leading-4 font-light text-left">
              <span>
                {new Date(schedule.time).toLocaleDateString("pt-BR", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </p>
          </div>
          <div className="w-full h-full flex flex-row items-center justify-start">
            <EarthIcon
              className="w-3 h-3 lg:w-4 lg:h-4 mr-2 text-purple-500 dark:text-purple-300"
              strokeWidth={2}
            />
            <p className="lg:text-sm text-xs w-auto mx-auto  leading-4 font-light text-left">
              {schedule.timezone}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 h-3/5 lg:h-full flex flex-col items-center justify-center p-1 lg:p-6">
        <UserInfoForm />
      </div>
    </motion.div>
  );
};

export default AgendaUserInfo;
