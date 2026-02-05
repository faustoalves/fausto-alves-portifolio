import { WorkProps } from "@/lib/works";
import { motion } from "framer-motion";
import { CldImage } from "next-cloudinary";
import React, { useEffect } from "react";

type Props = {
  nextAnimation: boolean;
  setNextAnimation: (value: boolean) => void;
};

const WorkHeaderSplashClient = ({
  nextAnimation,
  setNextAnimation,
  srcLogo,
  srcImage,
  client,
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

  const handleAnimationComplete = () => {
    setTimeout(() => {
      setNextAnimation(true);
    }, 3000);
  };

  return (
    <div className="w-full h-full absolute top-0 left-0 overflow-hidden z-1">
      <motion.div
        className={`${
          nextAnimation
            ? "w-1/2 h-1/2 lg:w-1/4 lg:h-1/3 rounded-tr-xl"
            : "w-full h-full bottom-0 left-0  rounded-tr-none"
        }  absolute bottom-0 left-0 transition-all duration-500 ease-in overflow-hidden z-1 flex items-center justify-center bg-linear-to-br ${color} shadow-2xl`}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
          onAnimationComplete={() => handleAnimationComplete()}
          className="w-full h-full flex items-center justify-center"
        >
          <CldImage
            src={srcLogo}
            alt={client}
            width={500}
            height={500}
            className="w-2/4 max-w-40 h-auto object-cover"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WorkHeaderSplashClient;
