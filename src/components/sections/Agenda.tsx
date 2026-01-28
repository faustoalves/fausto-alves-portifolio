"use client";
import { useScheduleStore } from "@/stores/ScheduleStore";
import Calendar from "../agenda/Calendar";
import CalendarHeader from "../agenda/CalendarHeader";
import SlotTime from "../agenda/SlotTime";

type Props = Record<string, unknown>;

const Agenda = (_props: Props) => {
  const { schedule } = useScheduleStore();
  return (
    <section className="w-full flex flex-col items-start justify-center relative mt-10 top-line bottom-line ">
      <CalendarHeader />
      <div className="w-full h-full flex flex-col items-center justify-center my-6 px-4 lg:px-0 ">
        <div className="w-full lg:w-1/2 flex flex-col items-start justify-center my-10 bg-purple-800   mb-50">
          <div className="w-full h-full flex flex-col items-start justify-center p-2 lg:p-4 top-line bottom-line relative">
            <Calendar />
            {schedule.state === "time" && <SlotTime />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agenda;
