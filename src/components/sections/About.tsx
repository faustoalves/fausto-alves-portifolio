import React from "react";
import Button from "../common/ui/button/Button";
import AboutAvatar from "../about/AboutAvatar";
import AboutContent from "../about/AboutContent";

type Props = {};

const About = (props: Props) => {
  const aboutTextStyle =
    "font-bold text-white py-0.5 px-1 bg-pink-600 dark:bg-pink-600 whitespace-nowrap";
  return (
    <section
      className="w-full grid grid-cols-1 lg:grid-cols-2 relative mt-10 top-line bottom-line "
      id="about"
    >
      <div className="w-full h-full bottom-line pattern-bg lg:col-span-2 p-4 text-center relative">
        <h2>WHO I AM</h2>
      </div>

      <AboutAvatar />
      <AboutContent />
    </section>
  );
};

export default About;
