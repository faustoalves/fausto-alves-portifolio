"use client";
import { motion } from "framer-motion";
import React from "react";
type Props = {};

const AboutContent = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="html-content  w-full h-full "
    >
      <p>
        <strong>Senior frontend developer</strong> focused on{" "}
        <strong>UI/UX,</strong> with over <strong>20 years</strong> of
        experience designing interfaces that are{" "}
        <strong>beautiful, fast,</strong> <strong>and well thought out.</strong>{" "}
        I enjoy the moment where{" "}
        <strong>design, code, and product meet:</strong> understanding the
        problem, structuring the experience, thinking about flows and states,
        and only then moving into layout and implementation.
      </p>
      <p>
        I’ve worked with <strong>large brands</strong> and{" "}
        <strong>international startups</strong>, always very close to product
        and design. At the end of the day I write code, but what I really do is{" "}
        <strong>build clear, consistent,</strong>{" "}
        <strong>and enjoyable experiences</strong>, with{" "}
        <strong>real attention to detail.</strong>
      </p>
    </motion.div>
  );
};

export default AboutContent;
