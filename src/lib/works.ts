export type WorkProps = {
  title: string;
  client: "mymc" | "benu" | "kloster" | "crescimentum" | "hm" | "mementry";
  srcImage: string;
  srcLogo: string;
  srcHeader: string;
  slug: string;
  content: WorkContentProps[];
};
export type WorkContentProps = {
  title: string;
  description: string;
  image?: string;
  stack: StackItem;
};

export type StackItem =
  | "next"
  | "tailwind"
  | "typescript"
  | "react"
  | "node"
  | "figma"
  | "photoshop"
  | "strapi"
  | "prisma"
  | "cypress"
  | "selenium"
  | "playwright"
  | "javascript"
  | "html"
  | "css"
  | "vite";

export const workList: WorkProps[] = [
  {
    client: "benu",
    title: "Benu Bestattung und Vorsorge",
    srcImage:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769210040/portifolio/work/benu_fcgham.jpg",
    srcLogo:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769210033/portifolio/work/logo_benu_e9avwd.png",
    srcHeader:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769968021/portifolio/work/benu-screens_ywwfrx.png",
    slug: "benu",
    content: [],
  },
  {
    client: "kloster",
    title: "Klosterwald",
    srcImage:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769210046/portifolio/work/kloster_z4zv8u.jpg",
    srcLogo:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769210034/portifolio/work/logo_kloster_kucmap.png",
    srcHeader:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769968022/portifolio/work/klosterwald--screens_ccb3wh.png",
    slug: "klosterwald",
    content: [],
  },
  {
    client: "mementry",
    title: "Mementry",
    srcImage:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769210039/portifolio/work/mementry_vfewxt.jpg",
    srcLogo:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769210035/portifolio/work/logo_mementry_leeo0k.png",
    srcHeader:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769968021/portifolio/work/mementry-screens_jz8s4x.png",
    slug: "mementry",
    content: [],
  },
  {
    client: "mymc",
    title: "MyMc",
    srcImage:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769210038/portifolio/work/mymc_majjqt.jpg",
    srcLogo:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769210032/portifolio/work/LogoMyMc_leyras.png",
    srcHeader:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769968020/portifolio/work/mymc-screens_yxitf9.png",
    slug: "mymc",
    content: [],
  },

  {
    client: "crescimentum",
    title: "Crescimentum",
    srcImage:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769210037/portifolio/work/crescimentum_dqrh15.jpg",
    srcLogo:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769210032/portifolio/work/logo_crescimentum_eh72v0.png",
    srcHeader:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769968021/portifolio/work/crescimentum-screens_rtt3md.png",
    slug: "crescimentum",
    content: [],
  },
  {
    client: "hm",
    title: "HM",
    srcImage:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769210036/portifolio/work/eme_y05ozg.jpg",
    srcLogo:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769210032/portifolio/work/logo_hm_mdsucd.png",
    srcHeader:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769968021/portifolio/work/hm-screens_css533.png",
    slug: "hm",
    content: [],
  },
];
