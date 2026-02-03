import type { WorkProps } from "@/lib/works";
import WorkHeaderAnimation from "../header/WorkHeaderAnimation";
import React from "react";

type Props = {};

const WorkHeader = (props: WorkProps) => {
  return (
    <section className="w-full h-auto mt-4 flex flex-col items-center justify-center relative top-line bottom-line pattern-bg p-2 ">
      <div className="w-full aspect-square md:aspect-video lg:aspect-16/8 xl:aspect-16/8 flex flex-col items-center justify-center bg-purple-50 dark:bg-purple-900 rounded-lg border-line relative overflow-hidden">
        <WorkHeaderAnimation {...props} />
      </div>
    </section>
  );
};

export default WorkHeader;
