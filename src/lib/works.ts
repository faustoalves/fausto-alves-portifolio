export type WorkProps = {
  title: string
  client: 'mymc' | 'benu' | 'kloster' | 'crescimentum' | 'hm' | 'mementry' 
  srcImage: string
  srcLogo: string
  link: string
}

export const workList: WorkProps[] = [
  {
    client: 'benu',
    title: 'Benu',
    srcImage: 'https://res.cloudinary.com/faustoalves/image/upload/v1769210040/portifolio/work/benu_fcgham.jpg',
    srcLogo: 'https://res.cloudinary.com/faustoalves/image/upload/v1769210033/portifolio/work/logo_benu_e9avwd.png',
    link: "https://www.benu.com.br/",
  },
  {
    client: 'kloster',
    title: 'Kloster',
    srcImage: 'https://res.cloudinary.com/faustoalves/image/upload/v1769210046/portifolio/work/kloster_z4zv8u.jpg',
    srcLogo: 'https://res.cloudinary.com/faustoalves/image/upload/v1769210034/portifolio/work/logo_kloster_kucmap.png',
    link: "https://www.kloster.com.br/",
  },
  {
    client: 'mementry',
    title: 'Mementry',
    srcImage: 'https://res.cloudinary.com/faustoalves/image/upload/v1769210039/portifolio/work/mementry_vfewxt.jpg',
    srcLogo: 'https://res.cloudinary.com/faustoalves/image/upload/v1769210035/portifolio/work/logo_mementry_leeo0k.png',
    link: "https://www.mementry.com.br/",
  },
  {
    client: 'mymc',
    title: 'MyMc',
    srcImage: 'https://res.cloudinary.com/faustoalves/image/upload/v1769210038/portifolio/work/mymc_majjqt.jpg',
    srcLogo: 'https://res.cloudinary.com/faustoalves/image/upload/v1769210032/portifolio/work/LogoMyMc_leyras.png',
    link: "https://www.mymc.com.br/",
  },

  {
    client: 'crescimentum',
    title: 'Crescimentum',
    srcImage: 'https://res.cloudinary.com/faustoalves/image/upload/v1769210037/portifolio/work/crescimentum_dqrh15.jpg',
    srcLogo: 'https://res.cloudinary.com/faustoalves/image/upload/v1769210032/portifolio/work/logo_crescimentum_eh72v0.png',
    link: "https://www.crescimentum.com.br/",
  },
    {
    client: 'hm',
    title: 'HM',
    srcImage: 'https://res.cloudinary.com/faustoalves/image/upload/v1769210036/portifolio/work/eme_y05ozg.jpg',
    srcLogo: 'https://res.cloudinary.com/faustoalves/image/upload/v1769210032/portifolio/work/logo_hm_mdsucd.png',
    link: "https://www.hm.com.br/",
  },
  
]