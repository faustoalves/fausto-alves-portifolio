import type { Skill } from '@/lib/sklils'
import PixelCard from '../bits/PixelCard/PixelCard'
import { IconFill, IconStroke } from './icons/Icon'


type Props = {}

const SkillCard = ({ skill }: { skill: Skill }) => {
  const sizeClass = '!aspect-square w-1/3 md:w-1/4 lg:w-1/6 xl:w-[12.5%] 2xl:w-[186px]'

  return (
    <div
      className={`relative flex justify-center items-center border border-baseline group bg-transparent hover:bg-baseline duration-700 ${sizeClass}`}
    >
      <PixelCard
        gap={2}
        speed={120}
        colors={`${skill.color.join(',')}`}
        className="w-full h-full"
        noFocus={false}
      >
        <div className={`absolute h-full w-full`}>
          <div className="relative w-full h-full ">
            <div className="absolute w-full h-full opacity-0 group-hover:opacity-80 duration-800 delay-100 transition-all">
              <div
                className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]
            from-background from-30% to-transparent to-120% opacity-100"
              ></div>
              <div className="absolute w-full h-full bg-gradient-to-t from-background from-20% to-transparent to-70% opacity-100"></div>
            </div>
            <div className="relative flex flex-col justify-center items-center w-full h-full">
              <div className="flex justify-center items-center relative translate-y-0 group-hover:translate-y-[-14px] transition-all duration-500">
                <IconStroke
                  name={skill.asset}
                  className="absolute w-12 h-12 text-baseline translate-y-0 group-hover:scale-[140%] lg:group-hover:scale-[170%] group-hover:text-background group-hover:blur-md group-hover:translate-y-[4px] transition-transform duration-300 m-auto"
                />
                <IconFill
                  name={skill.asset}
                  className="absolute w-12 h-12 group-hover:scale-[130%] lg:group-hover:scale-[150%] transition-all duration-500 opacity-0 group-hover:opacity-100 m-auto text-foreground"
                />
              </div>
              <p className="text-foreground font-[500] text-[14px] absolute -bottom-12 group-hover:bottom-2 lg:group-hover:bottom-6 transition-all duration-300 ease-out">
                {skill.name}
              </p>
            </div>
          </div>
        </div>
      </PixelCard>
    </div>
  )
}

export default SkillCard
