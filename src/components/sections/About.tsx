import React from "react";
import Button from "../common/ui/button/Button";
import AboutAvatar from "../about/AboutAvatar";

type Props = {};

const About = (props: Props) => {
  const aboutTextStyle =
    "font-bold text-white py-0.5 px-1 bg-pink-600 dark:bg-pink-600 whitespace-nowrap";
  return (
    <section className="w-full grid grid-cols-1 lg:grid-cols-2 relative mt-10 top-line bottom-line ">
      <div className="w-full h-full bottom-line pattern-bg lg:col-span-2 p-4 text-center relative">
        <h2>WHO I AM</h2>
      </div>

      <AboutAvatar />
      <div className="w-full h-full flex justify-center items-start flex-col p-4 text-center lg:text-left text-lg lg:text-xl lg:leading-8 leading-6 gap-4  mr-auto text-purple-800 dark:text-purple-200 font-medium">
        <p className="">
          <span className={aboutTextStyle}>Senior frontend developer</span>{" "}
          focused on <span className={aboutTextStyle}>UI/UX,</span> with over{" "}
          <span className={aboutTextStyle}>20 years</span> of experience
          designing interfaces that are{" "}
          <span className={aboutTextStyle}>beautiful, fast,</span>{" "}
          <span className={aboutTextStyle}>and well thought out.</span> I enjoy
          the moment where{" "}
          <span className={aboutTextStyle}>
            design, code, and product meet:
          </span>{" "}
          understanding the problem, structuring the experience, thinking about
          flows and states, and only then moving into layout and implementation.
        </p>
        <p className="">
          I’ve worked with <span className={aboutTextStyle}>large brands</span>{" "}
          and <span className={aboutTextStyle}>international startups</span>,
          always very close to product and design. At the end of the day I write
          code, but what I really do is{" "}
          <span className={aboutTextStyle}>build clear, consistent,</span>{" "}
          <span className={aboutTextStyle}>and enjoyable experiences</span>,
          with <span className={aboutTextStyle}>real attention to detail.</span>
        </p>
      </div>
    </section>
  );
};

export default About;
