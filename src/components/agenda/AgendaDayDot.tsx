import { cn } from "@/utilities/ui";

const agendaDayDotVariants = {
  disable: "bg-purple-900 text-purple-500 opacity-50 cursor-not-allowed",
  actual: "bg-pink-500 text-white border-2 border-pink-200",
  available:
    "bg-purple-700 text-white hover:bg-purple-600 cursor-pointer transition",
};

export type AgendaDayDotVariants = keyof typeof agendaDayDotVariants;

const AgendaDayDot = ({ variant }: { variant: AgendaDayDotVariants }) => {
  return (
    <div className={cn(agendaDayDotVariants[variant])}>
      <div className="w-0.75 h-0.75 lg:w-1.5 lg:h-1.5 bg-transparent rounded-full border-[0.5px] border-purple-500"></div>
    </div>
  );
};

export default AgendaDayDot;
