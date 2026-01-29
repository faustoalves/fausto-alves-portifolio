import { useScheduleStore } from "@/stores/ScheduleStore";
import Calendar from "../agenda/Calendar";
import CalendarHeader from "../agenda/CalendarHeader";

type Props = Record<string, unknown>;

const Agenda = (_props: Props) => {
  return (
    <section className="w-full flex flex-col items-start justify-center relative mt-10 top-line bottom-line ">
      <CalendarHeader />
      <Calendar />
    </section>
  );
};

export default Agenda;
