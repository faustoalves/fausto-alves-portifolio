import React from 'react'
import BenuImage from './BenuImage';

export type BenuItemProps = {
  id: number;
  url: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

const BenuListProps:BenuItemProps[] = [
  {
    id: 1,
    url: 'https://res.cloudinary.com/faustoalves/image/upload/v1769183323/portifolio/work/benu/benu_01_fvzzzu.png',
    x: 0,
    y: 0,
    width: 1253,
    height: 836,
  },
  {
    id: 2,
    url: 'https://res.cloudinary.com/faustoalves/image/upload/v1769183323/portifolio/work/benu/benu_02_k7v5pi.png',
    x: 0,
    y: -903,
    width: 1253,
    height: 836,
  },
  {
    id: 3,
    url: 'https://res.cloudinary.com/faustoalves/image/upload/v1769183321/portifolio/work/benu/benu_03_cmqwz3.png',
    x: -1321,
    y: -903,
    width: 1253,
    height: 836,
  },
  {
    id: 4,
    url: 'https://res.cloudinary.com/faustoalves/image/upload/v1769183320/portifolio/work/benu/benu_04_qmmc6e.png',
    x: -764,
    y: 0,
    width: 697,
    height: 1350,
  },
  {
    id: 5,
    url: 'https://res.cloudinary.com/faustoalves/image/upload/v1769183322/portifolio/work/benu/benu_05_fwyzxn.png',
    x: -1321,
    y: 1437,
    width: 1253,
    height: 836,
  },
  {
    id: 6,
    url: 'https://res.cloudinary.com/faustoalves/image/upload/v1769183324/portifolio/work/benu/benu_06_eb5agk.png',
    x: 0,
    y: 902,
    width: 1253,
    height: 836,
  },
  {
    id: 7,
    url: 'https://res.cloudinary.com/faustoalves/image/upload/v1769183325/portifolio/work/benu/benu_07_q1dran.png',
    x: 1320,
    y: 902,
    width: 1253,
    height: 836,
  },
  {
    id: 8,
    url: 'https://res.cloudinary.com/faustoalves/image/upload/v1769183325/portifolio/work/benu/benu_08_ekznjq.png',
    x: 1320,
    y: -535,
    width: 697,
    height: 1350,
  },
  {
    id: 9,
    url: 'https://res.cloudinary.com/faustoalves/image/upload/v1769183320/portifolio/work/benu/benu_09_qeiot3.png',
    x: 1320,
    y: -1438,
    width: 1253,
    height: 836,
  },
]

interface BenuProps {
  progress: number
}


const STAGGER_DELAY = 0.05; // delay entre cada item
const TOTAL_ITEMS = BenuListProps.length;

const Benu = ({ progress }: BenuProps) => {
  return (
    <div className="w-full h-full relative flex scale-50 md:scale-95 items-center justify-center translate-0.5">
      {BenuListProps.map((item, index) => {
        // Calcula o progress individual com stagger
        const itemStart = index * STAGGER_DELAY;
        const itemEnd = itemStart + (1 - item.id * STAGGER_DELAY);

        // Mapeia o progress global para o range do item
        const itemProgress = Math.max(0, Math.min(1, (progress - itemStart) / (itemEnd - itemStart)));

        return (
          <BenuImage 
            key={`benu-${item.id}`}
            {...item} 
            progress={itemProgress}
          />
        );
      })}
    </div>
  );
}

export default Benu;