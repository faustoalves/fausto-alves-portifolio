import { cn } from "@/utilities/ui";
import { twMerge } from "tailwind-merge";

const agendaDayDotVariants = {
  booked: "bg-cyan-700 border-cyan-500 dark:bg-cyan-500 dark:border-cyan-700",
  locked: "bg-cyan-700 border-cyan-500 dark:bg-cyan-500 dark:border-cyan-700",
  available: "bg-transparent border-purple-600 dark:border-purple-300",
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
