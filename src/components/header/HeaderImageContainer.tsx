"use client"
import type { DayScheduleItem } from '@/lib/header'
import { CldImage } from 'next-cloudinary'
import React from 'react'
import { useMousePercent } from '@/hooks/MousePercent'

type Props = {
  daySchedule: DayScheduleItem
}

const HeaderImageContainer = ({ imageFront, imageBg }: DayScheduleItem) => {

  const mousePercent = useMousePercent();




  return (

    


    <div className='w-full h-full'>
      <div className='w-full h-[calc(125%)] absolute rounded-lg top-[-25%] overflow-hidden '>
      {imageFront && <CldImage
          width="1600"
          height="884"
          src={imageFront}
          sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
          alt="Description of my image"
        quality={75}

          className='w-full h-full relative z-20 object-cover scale-115 md:scale-[107%] md:pt-10'
          style={{
            transform: `translate(${mousePercent.x * 50 - 25}px) translateY(${mousePercent.y * 50 }px)`,
          }}
        />}
      </div>
      <div className='w-full h-full block  overflow-hidden rounded-lg '>
      {imageFront && <CldImage
          width="1519"
          height="700"
          src={imageBg}
          sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
        quality={75}
          alt="Description of my image"
          className='w-full h-full object-cover scale-115 md:scale-[107%]'
          style={{
            transform: `translate(${mousePercent.x * 30 - 15}px) translateY(${mousePercent.y * 30 - 15}px)`,
          }}
        />}
      </div>
    </div>
  )
}

export default HeaderImageContainer