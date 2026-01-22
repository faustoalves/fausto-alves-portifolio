import { skillsList } from '@/lib/sklils'
import React from 'react'
import SkillCard from '../skills/SkillCard'

type Props = {}

const Skills = (props: Props) => {
  return (
    <section className='w-full flex flex-col items-start justify-center relative py-4 mt-10 top-line bottom-line '>
      <h2 className='text-2xl font-bold'>Skills</h2>
      <div className='grid w-3/4 mx-auto grid-cols-3 md:grid-cols-4 lg:grid-cols-6 divide divide-cyan-300'>
      {skillsList.map((skill) => (
        <SkillCard key={skill.name} skill={skill} />
      ))}
      </div>
    </section>
  )
}

export default Skills