import { cn } from "@/utilities/ui";
import { twMerge } from "tailwind-merge";

const agendaDayDotVariants = {
  booked: "bg-cyan-500",
  locked: "bg-cyan-500",
  available: "bg-transparent",
};

export type AgendaDayDotVariants = keyof typeof agendaDayDotVariants;

const AgendaDayDot = ({ variant }: { variant: AgendaDayDotVariants }) => {
  return (
    <div
      className={twMerge(
        "w-0.75 h-0.75 lg:w-1.5 lg:h-1.5 bg-transparent rounded-full border-[0.5px]",
        cn(agendaDayDotVariants[variant]),
      )}
    ></div>
  );
};

export default AgendaDayDot;
