import React from "react";
import AgendaItem from "../agenda/AgendaDay";

type Props = {};

const Agenda = (props: Props) => {
  return (
    <section className="w-full flex flex-col items-start justify-center relative mt-10 top-line bottom-line ">
      <div className="w-full bottom-line pattern-bg lg:col-span-2 p-4 text-center relative">
        <h2>Let's work together</h2>
      </div>
      <div className="w-full h-full flex flex-col items-center justify-center my-6 px-4 lg:px-0 ">
        <div className="w-full lg:w-1/2 flex flex-col items-start justify-center my-10 bg-purple-800   mb-50">
          <div className="w-full h-full flex flex-col items-start justify-center p-2 lg:p-4 top-line bottom-line relative">
            <div className="w-full grid grid-cols-7 gap-2 lg:gap-3 ">
              <p className="tracking-widest text-center uppercase text-[10px] lg:text-xs text-purple-300">
                SUN
              </p>
              <p className="tracking-widest text-center uppercase text-[10px] lg:text-xs text-purple-300">
                MON
              </p>
              <p className="tracking-widest text-center uppercase text-[10px] lg:text-xs text-purple-300">
                TUE
              </p>
              <p className="tracking-widest text-center uppercase text-[10px] lg:text-xs text-purple-300">
                WED
              </p>
              <p className="tracking-widest text-center uppercase text-[10px] lg:text-xs text-purple-300">
                THU
              </p>
              <p className="tracking-widest text-center uppercase text-[10px] lg:text-xs text-purple-300">
                FRI
              </p>
              <p className="tracking-widest text-center uppercase text-[10px] lg:text-xs text-purple-300">
                SAT
              </p>
              {[...Array(21)].map((_, i) => (
                <AgendaItem key={i} />
              ))}
              <div className="w-full h-full flex flex-col items-center justify-center col-span-7">
                sssss
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agenda;
