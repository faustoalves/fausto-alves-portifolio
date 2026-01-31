"use client";
import React, { useRef, useEffect } from "react";
import { WorkProps } from "@/lib/works";
import {
  useScroll,
  useTransform,
  MotionValue,
  useMotionValue,
  motion,
} from "framer-motion";
import Benu from "./benu/Benu";
import { CldImage } from "next-cloudinary";
import { useMousePercent } from "@/hooks/MousePercent";

type Props = {
  index: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
};

const WorkCard = ({
  client,
  srcImage,
  srcLogo,
  title,
  link,
  index,
  progress,
  range,
  targetScale,
}: WorkProps & Props) => {
  const color =
    client === "benu"
      ? "from-[#45455F] to-[#303042]"
      : client === "kloster"
        ? "from-[#668753] to-[#547840]"
        : client === "crescimentum"
          ? "from-[#360000] to-[#190000]"
          : client === "hm"
            ? "from-[#D51030] to-[#AE0521]"
            : client === "mementry"
              ? "from-[#504462] to-[#4F4361]"
              : client === "mymc"
                ? "from-[#2B2B2B] to-[#191919]"
                : "#000000";

  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end center"],
  });

  const scale = useTransform(progress, range, [1, targetScale]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [-0.45, 1]);
  const [currentScale, setCurrentScale] = React.useState(1);
  const [currentImageScale, setCurrentImageScale] = React.useState(1);
  useEffect(() => {
    return scale.on("change", (v) => setCurrentScale(v));
  }, [scale]);
  useEffect(() => {
    return imageScale.on("change", (v) =>
      setCurrentImageScale(Math.min(Math.max(v, 0), 1)),
    );
  }, [imageScale]);

  const mousePercent = useMousePercent();

  return (
    <div
      ref={container}
      className="w-full sticky top-0 px-2 lg:px-0 flex items-end justify-center pt-16 lg:pt-24 "
    >
      <div
        className={`w-full lg:w-7/8 aspect-square lg:aspect-21/9 relative flex flex-col-reverse lg:flex-row items-center justify-center origin-top rounded-lg overflow-hidden bg-linear-to-br ${color} drop-shadow-xl border border-purple-200/80 dark:border-purple-800/80`}
        style={{ scale: currentScale, top: `calc(80px + ${index * 20}px)` }}
      >
        <div
          className={`w-full lg:w-1/2 h-1/4 lg:h-full relative flex items-center justify-center bg-linear-to-br ${color} z-2`}
        >
          <CldImage
            src={srcLogo}
            alt={title}
            width={500}
            height={500}
            className="h-2/3 w-3/5 lg:w-3/7 lg:h-auto object-contain"
            loading="lazy"
            sizes="(max-width: 768px) 50vw,
                    (max-width: 1200px) 50vw,
                    33vw"
            style={{
              transform: `translate(${mousePercent.x * 40 - 20}px) translateY(${mousePercent.y * 40 - 20}px)`,
            }}
          />
        </div>
        <div className="w-full lg:w-1/2 h-3/4 lg:h-full relative flex items-center justify-center">
          <CldImage
            src={srcImage}
            alt={title}
            sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw,
        33vw"
            width={1000}
            height={1000}
            className="w-full h-full object-cover scale-110"
            loading="lazy"
            style={{
              transform: `translate(${mousePercent.x * 30 - 15}px) translateY(${mousePercent.y * 30 - 15}px)`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
