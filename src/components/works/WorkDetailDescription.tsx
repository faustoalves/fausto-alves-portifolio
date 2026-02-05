"use client";

import type { WorkProps } from "@/lib/works";
import { motion } from "framer-motion";

interface Props {
  description: string;
}

const WorkDetailDescription = ({ description }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="light-content"
      dangerouslySetInnerHTML={{ __html: description }}
    />
  );
};

export default WorkDetailDescription;
