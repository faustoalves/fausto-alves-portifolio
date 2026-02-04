"use client";
import { motion } from "framer-motion";
import React from "react";
type Props = {};

const AboutContent = (props: Props) => {
  const aboutTextStyle =
    "font-bold text-white py-0.5 px-1 bg-pink-600 dark:bg-pink-600 whitespace-nowrap";
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full h-full flex justify-center items-start flex-col p-4 text-center lg:text-left text-lg lg:text-xl lg:leading-8 leading-6 gap-4  mr-auto text-purple-800 dark:text-purple-200 font-medium"
    >
      <p className="">
        <span className={aboutTextStyle}>Senior frontend developer</span>{" "}
        focused on <span className={aboutTextStyle}>UI/UX,</span> with over{" "}
        <span className={aboutTextStyle}>20 years</span> of experience designing
        interfaces that are{" "}
        <span className={aboutTextStyle}>beautiful, fast,</span>{" "}
        <span className={aboutTextStyle}>and well thought out.</span> I enjoy
        the moment where{" "}
        <span className={aboutTextStyle}>design, code, and product meet:</span>{" "}
        understanding the problem, structuring the experience, thinking about
        flows and states, and only then moving into layout and implementation.
      </p>
      <p className="">
        I’ve worked with <span className={aboutTextStyle}>large brands</span>{" "}
        and <span className={aboutTextStyle}>international startups</span>,
        always very close to product and design. At the end of the day I write
        code, but what I really do is{" "}
        <span className={aboutTextStyle}>build clear, consistent,</span>{" "}
        <span className={aboutTextStyle}>and enjoyable experiences</span>, with{" "}
        <span className={aboutTextStyle}>real attention to detail.</span>
      </p>
    </motion.div>
  );
};

export default AboutContent;
