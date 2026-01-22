"use client"
import React from 'react'
import { getHeaderByDateTime } from '@/lib/header'
import Image from 'next/image'
import { CldImage } from 'next-cloudinary'
import HeaderImageContainer from '../header/HeaderImageContainer'

type Props = {}

const Header = (props: Props) => {
  const dateTime = new Date();
  dateTime.setHours(10, 0, 0, 0);
  dateTime.setDate(11);
  const daySchedule = getHeaderByDateTime(dateTime);
  return (
    <section className='w-full aspect-8/4 md:aspect-video lg:aspect-16/8 xl:aspect-16/7 mt-4 flex flex-col items-center justify-center relative top-line bottom-line pattern-bg p-2 '>
      <div className='w-full h-full flex flex-col items-center justify-center bg-purple-50 dark:bg-purple-900 rounded-lg border-line relative'>
        {daySchedule && <HeaderImageContainer {...daySchedule} />}

      </div>
    </section>
  )
}

export default Header