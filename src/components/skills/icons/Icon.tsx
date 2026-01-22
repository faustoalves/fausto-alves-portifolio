import CypressFill from './CypressFill'
import CypressStroke from './CypressStroke'
import FigmaFill from './FigmaFill'
import FigmaStroke from './FigmaStroke'
import JsFill from './JsFill'
import JsStroke from './JsStroke'
import NestjsFill from './NestjsFill'
import NestjsStroke from './NestjsStroke'
import NextjsFill from './NextjsFill'
import NextjsStroke from './NextjsStroke'
import NodeFill from './NodeFill'
import NodeStroke from './NodeStroke'
import PayloadFill from './PayloadFill'
import PayloadStroke from './PayloadStroke'
import PlaywrightFill from './PlaywrightFill'
import PlaywrightStroke from './PlaywrightStroke'
import PrismaFill from './PrismaFill'
import PrismaStroke from './PrismaStroke'
import PsFill from './PsFill'
import PsStroke from './PsStroke'
import ReactFill from './ReactFill'
import ReactStroke from './ReactStroke'
import StrapiFill from './StrapiFill'
import StrapiStroke from './StrapiStroke'
import TailwindFill from './TailwindFill'
import TailwindStroke from './TailwindStroke'
import TsFill from './TsFill'
import TsStroke from './TsStroke'

export const IconFill = ({ name, ...props }: { name: string } & React.ComponentProps<'svg'>) => {
  const IconComponent = IconFillMap[name as keyof typeof IconFillMap]
  return IconComponent ? <IconComponent {...props} /> : <p>nopz</p>
}

export const IconStroke = ({ name, ...props }: { name: string } & React.ComponentProps<'svg'>) => {
  const IconComponent = IconStrokeMap[name as keyof typeof IconStrokeMap]
  return IconComponent ? <IconComponent {...props} /> : <p>nopz</p>
}

export const IconFillMap = {
  cypress: CypressFill,
  figma: FigmaFill,
  js: JsFill,
  nextjs: NextjsFill,
  node: NodeFill,
  payload: PayloadFill,
  playwright: PlaywrightFill,
  prisma: PrismaFill,
  ps: PsFill,
  react: ReactFill,
  strapi: StrapiFill,
  ts: TsFill,
  nestjs: NestjsFill,
  tailwind: TailwindFill,
} as const

export const IconStrokeMap = {
  cypress: CypressStroke,
  figma: FigmaStroke,
  js: JsStroke,
  nextjs: NextjsStroke,
  node: NodeStroke,
  payload: PayloadStroke,
  playwright: PlaywrightStroke,
  prisma: PrismaStroke,
  ps: PsStroke,
  react: ReactStroke,
  strapi: StrapiStroke,
  ts: TsStroke,
  nestjs: NestjsStroke,
  tailwind: TailwindStroke,
} as const
