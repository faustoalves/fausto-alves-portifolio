"use client";
import React from "react";
import WorkHeaderColumnTrack from "./WorkHeaderColumnTrack";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  direction: "top" | "bottom";
  index: number;
};

const WorkHeaderColumn = ({ children, direction, index }: Props) => {
  return (
    <motion.div
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // transition={{ duration: 2, delay: 0.4 * index + 0.1, ease: "easeIn" }}
      className={`w-1/5 absolute transform top-[50%] -translate-x-1/2 -translate-y-1/2 rotate-z-25`}
      style={{
        left: `calc(-12% + (144% / 6 * ${index}))`,
      }}
    >
      <WorkHeaderColumnTrack direction={direction} index={index}>
        {children}
      </WorkHeaderColumnTrack>
    </motion.div>
  );
};

export default WorkHeaderColumn;
