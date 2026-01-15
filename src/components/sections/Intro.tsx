import React from 'react'

type Props = {}

const Intro = (props: Props) => {
  return (
    <div className='w-full flex flex-col items-start justify-center relative pt-4 px-4 '>
      <p className='text-lg font-light text-white uppercase leading-[18px]'>Hi!, I'm </p>
      <h1 className='font-heading font-thin text-[54px] leading-[80%] sm:text-[72px] md:text-[92px] lg:text-[120px] xl:text-[160px] uppercase tracking-tighter text-cyan-600 -ml-[0.5%]'>Fausto Alves</h1>
      
    </div>
  )
}

export default Intro