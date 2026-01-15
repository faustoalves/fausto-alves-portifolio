import React from 'react'

type Props = {}

const Intro = (props: Props) => {
  return (
    <section className='w-full flex flex-col items-start justify-center relative pt-4 px-4 '>
      <p className='text-lg font-normal  uppercase leading-[18px]'>Hi!, I'm </p>
      <h1 >Fausto Alves</h1>
    </section>
  )
}

export default Intro