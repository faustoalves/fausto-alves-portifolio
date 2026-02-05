"use client";
import React from "react";
import { WorkContentProps } from "@/lib/works";
import { motion } from "framer-motion";
import { stackList } from "@/lib/works";

type Props = {};

const StackList = ({ title, stack }: WorkContentProps) => {
  return (
    <motion.div className="w-full flex flex-row flex-wrap items-start justify-start gap-1 pt-6 border-t border-purple-100 dark:border-purple-800 px-4">
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.3, ease: "easeInOut", delay: 0.5 }}
        key={title}
        className="text-purple-800 py-1 dark:text-purple-200 font-bold text-xs uppercase tracking-widest w-auto"
      >
        Stack:
      </motion.span>
      {stack.map((item, index) => (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
            delay: 0.05 * index + 0.5,
          }}
          key={title + item}
          className="bg-pink-700 text-pink-200 uppercase  font-bold tracking-wider text-xs px-1.5 py-0.75 rounded-md flex flex-col items-start justify-center"
        >
          <p>{stackList.find((stackItem) => stackItem.name === item)?.label}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StackList;
