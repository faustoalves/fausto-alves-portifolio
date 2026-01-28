import React from "react";
import AgendaDayDot, { AgendaDayDotVariants } from "./AgendaDayDot";
import { Slot } from "@/lib/slots";

type Props = {
  day: number;
  month: string;
  slots: Slot[];
  enabled?: boolean;
  actual?: boolean;
};

const AgendaDay = ({
  day,
  month,
  slots,
  enabled = true,
  actual = false,
}: Props) => {
  // tailwind-variants for agenda item status: 'disable', 'actual', 'available'
  const agendaDayVariants = {
    disable: "bg-purple-900 text-purple-500 opacity-50 cursor-not-allowed",
    actual: "bg-pink-500 text-white border-2 border-pink-200",
    available:
      "bg-purple-700 text-white hover:bg-purple-600 cursor-pointer transition",
  };

  const variantClass = !enabled
    ? agendaDayVariants.disable
    : slots.length === 0 && !actual
      ? agendaDayVariants.disable
      : // : agendaDayVariants.disable
        actual
        ? agendaDayVariants.actual
        : agendaDayVariants.available;

  return (
    <div
      className={`relative font-heading w-full aspect-square lg:aspect-4/3 flex items-center justify-center flex-col rounded-sm ${variantClass}`}
    >
      <p className="text-center text-lg lg:text-2xl leading-5 font-bold relative">
        {day}
      </p>
      <p className=" text-center text-xs lg:text-sm leading-4 relative">
        {month}
      </p>
      {enabled && (
        <div className="absolute right-0 top-0 p-0.5 lg:p-1 flex flex-col items-start justify-start gap-0.5 lg:gap-0.75">
          {slots.map((slot) => (
            <AgendaDayDot
              key={slot.dateTimeUTC}
              variant={slot.status as AgendaDayDotVariants}
            />
          ))}
          {/* <AgendaDayDot variant="disable" /> */}
        </div>
      )}
    </div>
  );
};

export default AgendaDay;
