"use client";
import { motion } from "framer-motion";
import { CldImage } from "next-cloudinary";
import React from "react";

type Props = {
  image: string;
  index: number;
  direction: "top" | "bottom";
};

const WorkHeaderItem = ({ image, index, direction }: Props) => {
  const rotate = Math.random() * 30 - 15;
  const translateX = Math.random() * 100 - 50;
  const translateY = Math.random() * 100 - 50;
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 1.3,
        rotateZ: rotate,
        translateX: translateX,
        translateY: translateY,
        y: direction === "top" ? 200 : -200,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        rotateZ: 0,
        y: 0,
        translateX: 0,
        translateY: 0,
      }}
      transition={{
        delay: 0.15 * index,
        type: "spring",
        stiffness: 90,
        damping: 30,
        mass: 1.5,
      }}
    >
      <WorkHeaderItemAnimation
        image={image}
        index={index}
        direction={direction}
      />
    </motion.div>
  );
};

const WorkHeaderItemAnimation = ({ image, index, direction }: Props) => {
  const DELAY = 5; // seconds to wait at scale 1 before and after the pulse
  const PULSE_UP = 1; // seconds to scale 1 → 1.1
  const PULSE_DOWN = 1; // seconds to scale 1.1 → 1
  const CYCLE_DURATION = DELAY + PULSE_UP + PULSE_DOWN + DELAY + 1.8;

  const scaleTimes: [number, number, number, number, number] = [
    0,
    (DELAY + 0.2 * index) / CYCLE_DURATION,
    (DELAY + PULSE_UP + 0.2 * index) / CYCLE_DURATION,
    (DELAY + PULSE_UP + PULSE_DOWN + 0.2 * index) / CYCLE_DURATION,
    1,
  ];

  return (
    <motion.div
      initial={{ scale: 1 }}
      animate={{ scale: [1, 1, 1.05, 1, 1] }}
      transition={{
        duration: CYCLE_DURATION,
        delay: 0.3 * index,
        times: scaleTimes,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
      }}
      style={{ zIndex: index }}
    >
      <CldImage
        src={image}
        alt="Work Header Item"
        width={309}
        height={667}
        className="w-full object-cover aspect-30/66 rounded-lg outline-2 lg:outline-6 outline-white/20"
        sizes="(max-width: 420px) 8vw,
      (max-width: 768px) 20vw,
      (max-width: 1200px) 20vw,
      (max-width: 1800px) 20vw,
      20vw"
        preload
        quality={75}
      />
    </motion.div>
  );
};

export default WorkHeaderItem;
