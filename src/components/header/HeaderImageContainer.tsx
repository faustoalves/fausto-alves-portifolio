"use client";
import type { DayScheduleItem } from "@/lib/header";
import { CldImage } from "next-cloudinary";
import React, { useEffect, useState } from "react";
import { useMousePercent } from "@/hooks/MousePercent";
import { getHeaderByDateTime } from "@/lib/header";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  daySchedule: DayScheduleItem;
};

const HeaderImageContainer = () => {
  const dateTime = new Date();
  const [isAdded, setIsAdded] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsAdded(true);
  //   }, 3000);
  //   return () => clearTimeout(timer);
  // }, []);

  const [isLoaded, setIsLoaded] = useState(false);

  const dateTimeSaoPaulo = new Date(
    dateTime.toLocaleString("en-US", { timeZone: "America/Sao_Paulo" }),
  );
  const daySchedule = getHeaderByDateTime(dateTimeSaoPaulo);
  if (!daySchedule) return null;

  const onCompleteHandler = () => {
    setIsLoaded(true);
  };

  return (
    <div className="w-full h-full">
      <AnimatePresence mode="popLayout">
        {!isAdded ? (
          <HeaderImageContainerContent key="content" setIsAdded={setIsAdded} />
        ) : (
          <HeaderImageContainerSkeleton
            key="skeleton"
            {...daySchedule}
            isLoaded={isLoaded}
            onComplete={onCompleteHandler}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

interface HeaderImageContainerContentProps {
  setIsAdded: (value: boolean) => void;
}

const HeaderImageContainerContent = ({
  setIsAdded,
}: HeaderImageContainerContentProps) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (value === 5) {
      setIsAdded(true);
    }
    const timer = setTimeout(() => {
      setValue((prev) => (prev < 5 ? prev + 1 : prev));
    }, 6000);
    return () => {
      clearTimeout(timer);
    };
  }, [value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 200 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full absolute top-0 left-0 right-0 bottom-0 h-full pt-10 min-h-[calc(100% + 40px)] flex items-center justify-center rounded-lg "
    >
      <AnimatePresence mode="popLayout">
        {value === 1 && (
          <HeaderImageContainerContentItem key="1" text="Hello 1" />
        )}
        {value === 2 && (
          <HeaderImageContainerContentItem key="2" text="Hello 2" />
        )}
        {value === 3 && (
          <HeaderImageContainerContentItem key="3" text="Hello 3" />
        )}
        {value === 4 && (
          <HeaderImageContainerContentItem key="4" text="Hello 4" />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

interface HeaderImageContainerContentItemProps {
  text: string;
}

const HeaderImageContainerContentItem = ({
  text,
}: HeaderImageContainerContentItemProps) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -50,
        transition: { duration: 0.5, ease: "easeIn", delay: 0.6 },
      }}
      animate={{
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, ease: "easeIn", delay: 0.4 },
      }}
      exit={{
        opacity: 0,
        x: 50,
        transition: { duration: 0.5, ease: "easeIn", delay: 0.2 },
      }}
      transition={{ duration: 0.5, ease: "easeIn" }}
      className="w-full h-full flex items-center justify-center absolute top-0 left-0 right-0 bottom-0"
    >
      <h2>{text}</h2>
    </motion.div>
  );
};

interface HeaderImageContainerSkeletonProps extends DayScheduleItem {
  isLoaded: boolean;
  onComplete: () => void;
}
export const HeaderImageContainerSkeleton = ({
  imageFront,
  imageBg,
  onComplete,
  isLoaded,
}: HeaderImageContainerSkeletonProps) => {
  const mousePercent = useMousePercent();
  const [imageFrontLoaded, setImageFrontLoaded] = useState(false);
  const [imageBgLoaded, setImageBgLoaded] = useState(false);

  const handleImageFrontLoad = () => {
    setImageFrontLoaded(true);
  };

  const handleImageBgLoad = () => {
    setImageBgLoaded(true);
  };

  useEffect(() => {
    onComplete();
  }, [imageFrontLoaded, imageBgLoaded]);

  return (
    <>
      <div className="w-full h-[calc(125%)] absolute rounded-lg top-[-25%] overflow-hidden z-10">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 100 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="w-full h-full"
        >
          {imageFront && (
            <CldImage
              width="1600"
              height="884"
              src={imageFront}
              sizes="(max-width: 768px) 100vw,
      (max-width: 1200px) 50vw,
      33vw"
              alt="Description of my image"
              quality={75}
              className="w-full h-full relative z-2 object-cover scale-115 md:scale-[107%] md:pt-10"
              style={{
                transform: `translate(${mousePercent.x * 50 - 25}px) translateY(${mousePercent.y * 50}px)`,
              }}
              onLoad={handleImageFrontLoad}
            />
          )}
        </motion.div>
      </div>
      <div className="w-full h-full max-h-[620px] block overflow-hidden rounded-lg ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 100 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full h-full max-h-[620px]"
        >
          {imageFront && (
            <CldImage
              width="1519"
              height="700"
              src={imageBg}
              sizes="(max-width: 768px) 100vw,
      (max-width: 1200px) 50vw,
      33vw"
              quality={75}
              alt="Description of my image"
              className="w-full h-full object-cover scale-115 md:scale-[107%]"
              style={{
                transform: `translate(${mousePercent.x * 30 - 15}px) translateY(${mousePercent.y * 30 - 15}px)`,
              }}
              onLoad={handleImageBgLoad}
            />
          )}
        </motion.div>
      </div>
    </>
  );
};

export default HeaderImageContainer;
