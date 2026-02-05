import { skillsList } from "@/lib/sklils";
import React from "react";
import SkillCard from "../skills/SkillCard";

type Props = {};

const Skills = (props: Props) => {
  return (
    <section
      className="w-full flex flex-col items-start justify-center relative mt-10 top-line bottom-line "
      id="skills"
    >
      <div className="w-full h-full bottom-line pattern-bg lg:col-span-2 p-4 text-center relative">
        <h2>Skills</h2>
      </div>
      <div className="grid w-[90%] lg:w-3/4 mx-auto grid-cols-3 md:grid-cols-4 lg:grid-cols-6 border-[0.5px] border-purple-100 dark:border-purple-800 my-16">
        {skillsList.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
