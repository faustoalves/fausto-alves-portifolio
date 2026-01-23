"use client"
import React from 'react'
import type { BenuItemProps } from './Benu'
import { CldImage } from 'next-cloudinary'
import { motion } from 'framer-motion'

interface BenuImageProps extends BenuItemProps {
  progress: number
}

const BenuImage = ({ id, url, x, y, width, height, progress }: BenuImageProps) => {
  // Anima scale de 0.25 → 1 baseado no progress
  const scale = 0.35 + (progress * 0.75);
  let isVisible = progress < 0.8;
  if(id === 1) {
    isVisible = true;
  }

  if(!isVisible) {
    return <></>;
  }
  return (
    <motion.div 
      key={`benu-${id}`}
      style={{ scale }}
      transition={{ease: "easeIn" }} // sem transição, pois é controlado pelo scroll
    >
      <div 
        className="absolute flex items-center origin-center justify-center drop-shadow-xl rounded-xl overflow-hidden" 
        style={{ 
          transform: `translate(${x - 1253/2}px, ${y - 836/2}px)`, 
          width: width, 
          height: height 
        }}
      >
        
         <CldImage 
          src={url} 
          alt={id.toString()} 
          width={width}
          height={height}
          sizes=" 50vw"
          quality={50}
          loading='lazy'
        />
      </div>
    </motion.div>
  );
}

export default BenuImage;
