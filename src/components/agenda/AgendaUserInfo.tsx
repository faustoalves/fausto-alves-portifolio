import { useScheduleStore } from "@/stores/ScheduleStore";
import React from "react";
import { motion } from "framer-motion";
import UserInfoForm from "./UserInfoForm";
import { CldImage } from "next-cloudinary";

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
      className={`w-full h-full flex flex-col lg:flex-row items-center justify-center bg-purple-50 dark:bg-purple-900 gap-2 lg:gap-4 p-2 lg:p-4 absolute top-0 right-0 divide-x divide-purple-200 dark:divide-purple-800 `}
      // onClick={() => {
      //   updateSchedule({ state: "calendar" });
      // }}
    >
      <div className="w-full lg:w-1/3 h-2/5 lg:h-full flex flex-col items-center justify-center">
        <CldImage
          src="https://res.cloudinary.com/faustoalves/image/upload/v1769095320/portifolio/about/me-real_ukhgix.png"
          alt="Profile"
          width={100}
          height={100}
          className="w-32 h-32 object-cover rounded-full border-2 border-purple-700"
        />
      </div>
      <div className="w-full lg:w-2/3 h-3/5 lg:h-full flex flex-col items-center justify-center ">
        <UserInfoForm />
      </div>
    </motion.div>
  );
};

export default AgendaUserInfo;
