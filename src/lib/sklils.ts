export type Skill = {
  name: string
  color: string[]
  asset: string
}

export const skillsList: Skill[] = [
  {
    name: 'TypeScript',
    color: ['#007acc70', 'transparent', '#3178c670', '#235a9770'],
    asset: 'ts',
  },
  {
    name: 'JavaScript',
    color: ['#f1e05a', 'transparent', '#c9b939', '#000000'],
    asset: 'js',
  },
  {
    name: 'React',
    color: ['#61dafb70', '#58c4dc70', '#37415170', 'transparent'],
    asset: 'react',
  },

  {
    name: 'Next.js',
    color: ['#9162c070', '#449d5d70', '#61dafb70'],
    asset: 'nextjs',
  },

  {
    name: 'Tailwind CSS',
    color: ['#2383AE70', '#134b6570', 'transparent', '#6DD7B970', '#3d857170  '],
    asset: 'tailwind',
  },
  {
    name: 'Prisma',
    color: ['transparent', '#06b6d470', '#2D374870'],
    asset: 'prisma',
  },
  {
    name: 'Node.js',
    color: ['#83CD2970', 'transparent', '#0c7bb370', '#0d121c70'],
    asset: 'node',
  },

  {
    name: 'Strapi',
    color: ['#9739de70', 'transparent', '#29287570', '#4945ff70'],
    asset: 'strapi',
  },

  {
    name: 'Cypress',
    color: ['#17202A70', 'transparent', '#06b6d470'],
    asset: 'cypress',
  },
  {
    name: 'Playwright',
    color: ['#2EAD3370', '#1D8D2270', 'transparent', '#D6534870', '#C04B4170'],
    asset: 'playwright',
  },
  {
    name: 'Figma',
    color: ['#F24E1E70', '#FF726270', '#A259FF70', '#1ABCFE70', '#0ACF8370', 'transparent'],
    asset: 'figma',
  },
  {
    name: 'Photoshop',
    color: ['#3178C670', 'transparent', '#06b6d470'],
    asset: 'ps',
  },
]