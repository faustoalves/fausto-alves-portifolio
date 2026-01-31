import { useScheduleStore } from "@/stores/ScheduleStore";
import { motion } from "framer-motion";
import UserInfoForm from "./UserInfoForm";
import ContactInfo from "./ContactInfo";

type Props = {};

const AgendaUserInfo = (props: Props) => {
  return (
    <motion.div
      initial={{ translate: "0% 100%" }}
      animate={{ translate: "0% 0%" }}
      exit={{ translate: "0% 100%" }}
      transition={{ duration: 0.25, ease: "easeIn" }}
      layout
      className={`w-full h-full flex flex-col lg:flex-row items-center justify-center bg-purple-50 dark:bg-purple-900  p-0 absolute top-0 right-0 divide-y lg:divide-y-0 lg:divide-x divide-purple-200 dark:divide-purple-800 `}
    >
      <div className="w-full lg:w-1/2 h-auto lg:h-full flex flex-row lg:flex-col items-center justify-center p-3 lg:p-6 gap-4">
        <ContactInfo />
      </div>
      <div className="w-full lg:w-1/2 h-auto lg:h-full flex flex-col items-center justify-center p-3 lg:p-6">
        <UserInfoForm />
      </div>
    </motion.div>
  );
};

export default AgendaUserInfo;
