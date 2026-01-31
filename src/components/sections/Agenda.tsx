import { useScheduleStore } from "@/stores/ScheduleStore";
import Calendar from "../agenda/Calendar";
import CalendarHeader from "../agenda/CalendarHeader";

type Props = Record<string, unknown>;

const Agenda = (_props: Props) => {
  return (
    <section className="w-full flex flex-col items-start justify-center relative mt-10 top-line bottom-line gap-6 mb-10 ">
      <CalendarHeader />
      <p className="text-balance w-full lg:max-w-1/2 mx-auto text-center text-lg lg:text-xl leading-7">
        Pick a time for a 30-minute chat and we’ll explore together what you’re
        building or looking for.
      </p>
      <Calendar />
    </section>
  );
};

export default Agenda;
