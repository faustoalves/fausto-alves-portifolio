"use client";
import React from "react";
import { WorkProps } from "@/lib/works";
import { motion } from "framer-motion";

type Props = {};

const WorkDescription = ({ description, title }: WorkProps) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="html-content w-full mt-8 lg:w-1/2 lg:mt-10 lg:!text-center mx-auto relative top-line bottom-line pattern-bg p-4 "
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </>
  );
};

export default WorkDescription;
