"use client"
import { CldImage } from 'next-cloudinary'
import React from 'react'

type Props = {}

const AVATAR_3D_URL = 'https://res.cloudinary.com/faustoalves/image/upload/v1769095321/portifolio/about/me-3d_xtl6oc.png'
const AVATAR_REAL_URL = 'https://res.cloudinary.com/faustoalves/image/upload/v1769095320/portifolio/about/me-real_ukhgix.png'


const AboutAvatar = (props: Props) => {
  return (
    <div className='w-full py-32 group relative perspective-1000 flex items-center justify-center   '>
      <div className='w-[300px] rounded-full border-4 border-purple-500/20 aspect-square transition-all duration-500 transform-3d group-hover:rotate-y-180 group-hover:scale-110 scale-100 z-10'>
        <CldImage
          width="512"
          height="512"
          src={AVATAR_3D_URL}
          sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
          alt="Avatar 3D"
          quality={85}
          className='w-full object-cover rounded-full aspect-square backface-hidden'
        />
        <CldImage
          width="512"
          height="512"
          src={AVATAR_REAL_URL}
          sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
          alt="Avatar Real"
          quality={85}
          className='w-full object-cover rounded-full aspect-square absolute top-0 left-0 backface-hidden rotate-y-180'

        />
      </div>
      <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center group-hover:scale-120 scale-110 md:scale-100 md:group-hover:scale-110 transition-all duration-500 '>
        <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 500 500"
        className='w-full h-full'
      >
        <defs>
          <path
            id="textcircle"
            d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
            transform="rotate(12,250,250)"
          />
        </defs>
        <g className="textcircle uppercase text-2xl font-bold">
          <text textLength="940" className='text-circle '>
            <textPath
              xlinkHref="#textcircle"
              aria-label="Fighting the good battle of pixels since 2005"
              textLength="940"
              className='text-circle text-purple-500 '
            > Fighting the pixel's battle since 2005 -&nbsp;
            </textPath>
          </text>
        </g>
      </svg>
      </div>
    </div>
  )
}

export default AboutAvatar