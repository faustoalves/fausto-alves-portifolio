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
    color: ['#61dafb', '#58c4dc', '#374151', 'transparent'],
    asset: 'react',
  },

  {
    name: 'Next.js',
    color: ['#9162c0', '#449d5d', '#61dafb'],
    asset: 'nextjs',
  },

  {
    name: 'Tailwind CSS',
    color: ['#2383AE', '#134b65', 'transparent', '#6DD7B9', '#3d8571'],
    asset: 'tailwind',
  },
  {
    name: 'Prisma',
    color: ['transparent', '#06b6d4', '#2D3748'],
    asset: 'prisma',
  },
  {
    name: 'Node.js',
    color: ['#83CD29', 'transparent', '#0c7bb3', '#0d121c'],
    asset: 'node',
  },

  {
    name: 'Strapi',
    color: ['#9739de', 'transparent', '#292875', '#4945ff'],
    asset: 'strapi',
  },

  {
    name: 'Cypress',
    color: ['#17202A', 'transparent', '#06b6d4'],
    asset: 'cypress',
  },
  {
    name: 'Playwright',
    color: ['#2EAD33', '#1D8D22', 'transparent', '#D65348', '#C04B41'],
    asset: 'playwright',
  },
  {
    name: 'Figma',
    color: ['#F24E1E', '#FF7262', '#A259FF', '#1ABCFE', '#0ACF83', 'transparent'],
    asset: 'figma',
  },
  {
    name: 'Photoshop',
    color: ['#3178C6', 'transparent', '#06b6d4'],
    asset: 'ps',
  },
]