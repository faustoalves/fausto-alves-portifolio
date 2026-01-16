"use client"
import React, { useEffect, useRef } from 'react'
import Button from '../common/ui/button/Button';

type Props = {}

const Works = (props: Props) => {

  return (
    <>
    <section
      className="relative w-full flex flex-col items-start justify-center p-4 mt-10 top-line bottom-line min-h-96 "
    >

      <div className="absolute top-0 right-0 left-0 2xl:right-[50%] 2xl:left-[50%] min-w-full 2xl:translate-x-[-50%] 2xl:w-screen flex items-end justify-end h-full bg-pink-100 dark:bg-pink-950">
        <div className="w-full h-full  max-w-[1456px] mx-auto bg-pink-200 dark:bg-pink-950 p-4"> 
          <h2 className="text-2xl font-bold">
          Works
        </h2>
      </div>

      </div>
      


    </section>
    <div className="relative w-full h-16  flex flex-row justify-between">
    <Button label='Download CV' className='w-1/4 h-16' />


    </div>
</>
  );
}

export default Works