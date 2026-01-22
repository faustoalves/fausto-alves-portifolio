"use client"
import React, { useRef } from 'react'
import { WorkProps } from '@/lib/works'
import { useScroll, useTransform, MotionValue, useMotionValue, motion } from 'framer-motion'

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
    offset: ['start end', 'start start']
  })

  const scale = useTransform(progress, range, [1, targetScale]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [-0.25, 1])
  const [currentScale, setCurrentScale] = React.useState(1);
  const [currentImageScale, setCurrentImageScale] = React.useState(1);

  React.useEffect(() => {
    return scale.on("change", (v) => setCurrentScale(v));
  }, [scale]);
  React.useEffect(() => {
    return imageScale.on("change", (v) => setCurrentImageScale(v));
  }, [imageScale]);


  

  return (
    <div ref={container} className="h-[620px] w-full sticky top-0 px-10 flex items-end justify-center mb-14 ">
      <div className="w-full h-[600px] -top-8 relative flex flex-col items-start justify-center origin-top rounded-lg" 
       style={{ backgroundColor: color, scale: currentScale, top:`calc(80px + ${index * 50}px)` }}>
        <motion.div
              className='w-full h-full flex items-center justify-center text-6xl font-bold'
              // style={{scale: imageScale}}
            >
            {currentImageScale}
            </motion.div>
       </div>
    </div>
  )
}

export default WorkCard 