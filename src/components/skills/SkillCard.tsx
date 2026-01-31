import type { Skill } from "@/lib/sklils";
import PixelCard from "../bits/PixelCard/PixelCard";
import { IconFill, IconStroke } from "./icons/Icon";

type Props = {};

const SkillCard = ({ skill }: { skill: Skill }) => {
  const sizeClass = "!aspect-square";

  return (
    <>
      <div
        className={`relative flex justify-center items-center border-[0.5px] border-purple-100 dark:border-purple-800 group bg-transparent hover:bg-baseline duration-700 ${sizeClass} block lg:hidden`}
      >
        <div className="w-full h-full block">
          <div className={`absolute h-full w-full`}>
            <div className="relative w-full h-full ">
              <div className="absolute w-full h-full opacity-0 group-hover:opacity-80 duration-800 delay-100 transition-all">
                <div
                  className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))]
            from-purple-100 dark:from-purple-800 from-30% to-transparent to-120% opacity-100"
                ></div>
                <div className="absolute w-full h-full bg-linear-to-t from-purple-50 dark:from-purple-900 from-20% to-transparent to-70% opacity-100"></div>
              </div>
              <div className="relative flex flex-col justify-center items-center w-full h-full">
                <div className="flex justify-center items-center relative translate-y-0 group-hover:translate-y-[-14px] transition-all duration-500">
                  <IconStroke
                    name={skill.asset}
                    className="absolute w-12 h-12 text-purple-300 dark:text-purple-700 translate-y-0 group-hover:scale-[140%] lg:group-hover:scale-[170%] group-hover:text-purple-500 group-hover:blur-md group-hover:translate-y-[4px] transition-transform duration-300 m-auto"
                  />
                  <IconFill
                    name={skill.asset}
                    className="absolute w-12 h-12 group-hover:scale-[130%] lg:group-hover:scale-[150%] transition-all duration-500 opacity-0 group-hover:opacity-100 m-auto text-foreground"
                  />
                </div>
                <p className="text-purple-700 dark:text-purple-300 font-heading uppercase font-semibold text-[11px] text-center lg:text-[14px] absolute bottom-1 lg:-bottom-12 group-hover:bottom-2 lg:group-hover:bottom-6 transition-all duration-300 ease-out">
                  {skill.name}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`relative flex justify-center items-center border-[0.5px] border-purple-100 dark:border-purple-800 group bg-transparent hover:bg-baseline duration-700 ${sizeClass} hidden lg:block`}
      >
        <PixelCard
          gap={2}
          speed={120}
          colors={`${skill.color.join(",")}`}
          className="w-full h-full block"
          noFocus={false}
        >
          <div className={`absolute h-full w-full`}>
            <div className="relative w-full h-full ">
              <div className="absolute w-full h-full opacity-0 group-hover:opacity-80 duration-800 delay-100 transition-all">
                <div
                  className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))]
              from-purple-100 dark:from-purple-800 from-30% to-transparent to-120% opacity-100"
                ></div>
                <div className="absolute w-full h-full bg-linear-to-t from-purple-50 dark:from-purple-900 from-20% to-transparent to-70% opacity-100"></div>
              </div>
              <div className="relative flex flex-col justify-center items-center w-full h-full">
                <div className="flex justify-center items-center relative translate-y-0 group-hover:translate-y-[-14px] transition-all duration-500">
                  <IconStroke
                    name={skill.asset}
                    className="absolute w-12 h-12 text-purple-300 dark:text-purple-700 translate-y-0 group-hover:scale-[140%] lg:group-hover:scale-[170%] group-hover:text-purple-500 group-hover:blur-md group-hover:translate-y-[4px] transition-transform duration-300 m-auto"
                  />
                  <IconFill
                    name={skill.asset}
                    className="absolute w-12 h-12 group-hover:scale-[130%] lg:group-hover:scale-[150%] transition-all duration-500 opacity-0 group-hover:opacity-100 m-auto text-foreground"
                  />
                </div>
                <p className="text-purple-700 dark:text-purple-300 font-heading uppercase font-semibold text-[11px] text-center lg:text-[14px] absolute bottom-1 lg:-bottom-12 group-hover:bottom-2 lg:group-hover:bottom-6 transition-all duration-300 ease-out">
                  {skill.name}
                </p>
              </div>
            </div>
          </div>
        </PixelCard>
      </div>
    </>
  );
};

export default SkillCard;
