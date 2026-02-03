"use client";
import { CldImage } from "next-cloudinary";
import React from "react";

type Props = {
  image: string;
};

const WorkHeaderItem = ({ image }: Props) => {
  return (
    <CldImage
      src={image}
      alt="Work Header Item"
      width={309}
      height={667}
      className="w-full object-cover aspect-30/66 rounded-lg outline-2 lg:outline-6 outline-white/20"
      loading="lazy"
      sizes="(max-width: 420px) 8vw,
      (max-width: 768px) 20vw,
      (max-width: 1200px) 20vw,
      (max-width: 1800px) 20vw,
      20vw"
      quality={75}
    />
  );
};

export default WorkHeaderItem;
