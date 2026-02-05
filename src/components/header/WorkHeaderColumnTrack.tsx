"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  direction: "top" | "bottom";
  index: number;
};

const WorkHeaderColumnTrack = ({ children, direction, index }: Props) => {
  return (
    <motion.div
      // initial={{ y: direction === "top" ? 500 : -500 }}
      // animate={{ y: 0 }}
      // transition={{ duration: 4, delay: 0.4 * index, ease: "easeOut" }}
      className="w-full h-full flex flex-col lg:gap-6 gap-2"
    >
      {children}
    </motion.div>
  );
};

export default WorkHeaderColumnTrack;
