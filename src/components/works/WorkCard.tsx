"use client"
import React, { useRef, useEffect } from 'react'
import { WorkProps } from '@/lib/works'
import { useScroll, useTransform, MotionValue, useMotionValue, motion } from 'framer-motion'
import Benu from './benu/Benu'

type Props = {
  index: number
  progress: MotionValue<number>
  range: [number, number]
  targetScale: number
}

const WorkCard = ({index,  title, description, src, color, progress, range, targetScale}: WorkProps & Props) => {

  const container = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end center']
  })

  const scale = useTransform(progress, range, [1, targetScale]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [-0.45, 1])
  const [currentScale, setCurrentScale] = React.useState(1);
  const [currentImageScale, setCurrentImageScale] = React.useState(1);
  useEffect(() => {
    return scale.on("change", (v) => setCurrentScale(v));
  }, [scale]);
  useEffect(() => {
    return imageScale.on("change", (v) => setCurrentImageScale(Math.min(Math.max(v, 0), 1)));
  }, [imageScale]);

  

  return (
    <div ref={container} className="w-full sticky top-0 px-8 lg:px-0 flex items-end justify-center lg:pt-8 ">
      <div className="w-full lg:w-3/4 aspect-square lg:aspect-video  relative flex flex-col items-center justify-center origin-top rounded-lg overflow-hidden  bg-linear-to-br from-[#330e40] to-[#15040f] drop-shadow-xl" 
       style={{ backgroundColor: color, scale: currentScale, top:`calc(80px + ${index * 50}px)`}}>
        <Benu progress={currentImageScale} />
       </div>
    </div>
  )
}

export default WorkCard 