"use client"
import React, { useEffect, useRef } from 'react'
import Button from '../common/ui/button/Button';
import { workList } from '@/lib/works';
import WorkCard from '../works/WorkCard';
import { useScroll } from 'framer-motion';
import Lenis from '@studio-freight/lenis'

type Props = {}

const Works = (props: Props) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])
  return (
    <>
    <section
      ref={container}
      className='w-full flex flex-col items-start justify-center relative mt-10 top-line bottom-line '
    >
      <div className='w-full h-full flex flex-col items-start justify-center mb-10 sticky top-0 gap-4 pb-28'>
        <div className='w-full bottom-line pattern-bg lg:col-span-2 p-4 text-center sticky top-0'>
          <h2>Last works</h2>
        </div>
        {workList.map((work, index) => {
          const targetScale = 1 - ( (workList.length + 1 - index) * 0.05);     
          // return <WorkCard key={work.title} index={index} {...work} progress={scrollYProgress} range={[index * .25, 1]} targetScale={targetScale}/>
          return <WorkCard key={index} index={index} {...work} progress={scrollYProgress} range={[index * (1 /workList.length ), 1]} targetScale={targetScale}/>
        })}
      </div>
    </section>

</>
  );
}

export default Works