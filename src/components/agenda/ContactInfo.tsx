"use client";

import { CalendarDaysIcon, ClockIcon, EarthIcon } from "lucide-react";
import { CldImage } from "next-cloudinary";
import { useScheduleStore } from "@/stores/ScheduleStore";

type Props = {};

const ContactInfo = (props: Props) => {
  const { schedule } = useScheduleStore();
  return (
    <>
      <CldImage
        src="https://res.cloudinary.com/faustoalves/image/upload/v1769095320/portifolio/about/me-real_ukhgix.png"
        alt="Profile"
        width={100}
        height={100}
        className="w-24 h-24 lg:w-32 lg:h-32 object-cover rounded-full border-2 border-purple-200 dark:border-purple-700"
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
              {new Date(schedule.time).getMinutes().toString().padStart(2, "0")}
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
    </>
  );
};

export default ContactInfo;
