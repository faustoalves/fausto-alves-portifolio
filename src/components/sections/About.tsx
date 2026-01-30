import React from "react";
import Button from "../common/ui/button/Button";
import AboutAvatar from "../about/AboutAvatar";

type Props = {};

const About = (props: Props) => {
  return (
    <section className="w-full grid grid-cols-1 lg:grid-cols-2 relative mt-10 top-line bottom-line ">
      <div className="w-full h-full bottom-line pattern-bg lg:col-span-2 p-4 text-center relative">
        <h2>WHO I AM</h2>
      </div>

      <AboutAvatar />
      <div className="w-full h-full flex justify-center items-start flex-col p-4 text-center lg:text-left text-lg leading-5 gap-6">
        <p className="">Waiting for content</p>
      </div>
    </section>
  );
};

export default About;
