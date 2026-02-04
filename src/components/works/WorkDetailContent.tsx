"use client";
import type { WorkContentProps } from "@/lib/works";
import { motion } from "framer-motion";
import { CldImage } from "next-cloudinary";

export const WorkDetailContent = ({ images }: WorkContentProps) => {
  return (
    <div className="w-full h-full py-12 flex flex-col items-center justify-center ">
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: 15 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.7, ease: "easeIn" }}
        className="w-full px-8 lg:px-16 xl:px-24 grid grid-cols-3 gap-0.5 lg:gap-1.5 mx-auto"
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
  const shouldScale = index === 4;

  return (
    <motion.div
      initial={{ opacity: 0, y: 100, scale: 1 }}
      whileInView={{ opacity: 1, y: 0, scale: shouldScale ? 1.8 : 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.9,
        delay: 0.1 * index,
        ease: "easeOut",
        ...(shouldScale
          ? { scale: { delay: 1.7, duration: 0.7, ease: "easeInOut" } }
          : {}),
      }}
      className="w-full h-auto flex flex-col items-center justify-center "
      style={{ zIndex: index === 4 ? 10 : index }}
    >
      <CldImage
        src={image}
        alt={image}
        width={500}
        height={500}
        className="w-full h-auto object-cover rounded-sm lg:rounded-lg border-2 border-purple-700/40 shadow-xl"
        sizes="(max-width: 420px) 12vw,
        (max-width: 768px) 12vw,
        (max-width: 1200px) 10vw,
        (max-width: 1800px) 10vw,
        15vw"
        quality={75}
        loading="lazy"
      />
    </motion.div>
  );
};
