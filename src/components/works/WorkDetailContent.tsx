"use client";
import type { WorkContentProps } from "@/lib/works";
import { motion } from "framer-motion";
import { CldImage } from "next-cloudinary";

export const WorkDetailContent = ({ images }: WorkContentProps) => {
  return (
    <div className="w-full h-full py-12 flex flex-col items-center justify-center order-2 ">
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: 80 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, type: "spring", stiffness: 30, mass: 1 }}
        className="w-full px-8 lg:px-16 xl:px-12 grid grid-cols-3 gap-0.5 lg:gap-1.5 mx-auto"
      >
        <WorkDetailContentTrack>
          {images && (
            <WorkDetailContentItem key={0} image={images[0]} index={0} />
          )}
          {images && (
            <WorkDetailContentItem key={1} image={images[1]} index={3} />
          )}
        </WorkDetailContentTrack>{" "}
        <WorkDetailContentTrack>
          {images && (
            <WorkDetailContentItem key={2} image={images[2]} index={1} />
          )}
          {images && (
            <WorkDetailContentItem key={3} image={images[3]} index={4} />
          )}
          {images && (
            <WorkDetailContentItem key={4} image={images[4]} index={6} />
          )}
        </WorkDetailContentTrack>
        <WorkDetailContentTrack>
          {images && (
            <WorkDetailContentItem key={5} image={images[5]} index={2} />
          )}
          {images && (
            <WorkDetailContentItem key={6} image={images[6]} index={5} />
          )}
        </WorkDetailContentTrack>
      </motion.div>
    </div>
  );
};

const WorkDetailContentTrack = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="w-full aspect-square flex flex-col items-center my-auto justify-center gap-0.5 lg:gap-1.5 ">
      {children}
    </div>
  );
};

const WorkDetailContentItem = ({
  image,
  index,
}: {
  image: string;
  index: number;
}) => {
  const originDirection =
    index === 0
      ? "origin-bottom-right"
      : index === 1
      ? "origin-bottom"
      : index === 2
      ? "origin-bottom-left"
      : index === 3
      ? "origin-top-right"
      : index === 4
      ? "center"
      : index === 5
      ? "origin-top-left"
      : index === 6
      ? "origin"
      : "center";

  const shouldScale = index === 4;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{
        opacity: shouldScale ? 1 : 1,
        y: 0,
        scale: shouldScale ? 1.6 : 1 - 0.05 * index,
      }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 1.6,
        delay: 0.1 * index,
        type: "spring",
        stiffness: 70,
        damping: 10,
        mass: 2,
        ...(shouldScale
          ? {
              scale: {
                delay: 0.8,
                duration: 3,
                type: "spring",
                stiffness: 110,
                damping: 10,
                mass: 2,
              },
            }
          : {}),
      }}
      className={`w-full h-auto flex flex-col items-center justify-center ${originDirection} `}
      style={{ zIndex: index === 4 ? 10 : index }}
    >
      <CldImage
        src={image}
        alt={image}
        width={500}
        height={500}
        className="w-full h-auto object-cover rounded-sm lg:rounded-lg border-2 border-purple-700/40 shadow-xl"
        sizes="(max-width: 420px) 16vw,
        (max-width: 768px) 16vw,
        (max-width: 1200px) 20vw,
        (max-width: 1800px) 20vw,
        25vw"
        quality={75}
        loading="lazy"
      />
    </motion.div>
  );
};
