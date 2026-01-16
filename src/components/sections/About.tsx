import React from 'react'
import Button from '../common/ui/button/Button'

type Props = {}

const About = (props: Props) => {
  return (
    <section className='w-full grid grid-cols-1 md:grid-cols-2 relative mt-10 top-line bottom-line '>

      <h2 className='text-2xl font-bold p-6'>About</h2>
      <div className='w-full h-full bg-purple-100 dark:bg-purple-800'>
        <Button label='Download CV' />
      </div>
    </section>
  )
}

export default About