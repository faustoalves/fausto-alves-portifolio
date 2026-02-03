export type WorkProps = {
  title: string;
  client: "mymc" | "benu" | "kloster" | "crescimentum" | "hm" | "mementry";
  srcImage: string;
  srcLogo: string;
  srcHeader: string;
  slug: string;
  content: WorkContentProps[];
  headerImages: string[];
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
  | "styled-components"
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
    headerImages: [
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147978/portifolio/mobiles/benu_11_kdssjs.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147978/portifolio/mobiles/benu_04_vganzu.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147978/portifolio/mobiles/benu_06_uiehys.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147978/portifolio/mobiles/benu_12_evfxpo.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147978/portifolio/mobiles/benu_10_o03x7s.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147978/portifolio/mobiles/benu_09_pw340g.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147977/portifolio/mobiles/benu_01_moirbb.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147977/portifolio/mobiles/Benu_03_cfevhb.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147977/portifolio/mobiles/benu_07_uodxrq.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147977/portifolio/mobiles/benu_08_qbypdk.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147977/portifolio/mobiles/benu_05_yreid2.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147977/portifolio/mobiles/benu_02_pb4re6.png",
    ],
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
    headerImages: [
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147995/portifolio/mobiles/klosterwald_12_j4wcxh.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147994/portifolio/mobiles/klosterwald_10_ep1y7b.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147993/portifolio/mobiles/klosterwald_11_crjqoa.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147993/portifolio/mobiles/klosterwald_09_swolgx.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147993/portifolio/mobiles/klosterwald_08_fh2voa.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147992/portifolio/mobiles/klosterwald_07_phopmv.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147991/portifolio/mobiles/klosterwald_06_uj1hmz.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147991/portifolio/mobiles/klosterwald_05_l62dgt.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147990/portifolio/mobiles/klosterwald_04_big3uk.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147990/portifolio/mobiles/klosterwald_03_lgcfdn.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147989/portifolio/mobiles/klosterwald_02_es16yu.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147988/portifolio/mobiles/klosterwald_01_sgttbv.png",
    ],
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
    headerImages: [
      "https://res.cloudinary.com/faustoalves/image/upload/v1770148002/portifolio/mobiles/mementry_11_gkqs1r.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770148002/portifolio/mobiles/mementry_12_nefedc.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770148002/portifolio/mobiles/mementry_10_jioinz.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147999/portifolio/mobiles/mementry_07_w1ahh6.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147999/portifolio/mobiles/mementry_07_w1ahh6.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147998/portifolio/mobiles/mementry_05_t7clqa.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147998/portifolio/mobiles/mementry_08_yld7tg.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147998/portifolio/mobiles/mementry_06_tixm5t.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147998/portifolio/mobiles/mementry_04_gtbuge.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147996/portifolio/mobiles/mementry_03_gmy0if.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147996/portifolio/mobiles/mementry_02_w2wjgv.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147995/portifolio/mobiles/mementry_01_xiji43.png",
    ],
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
    headerImages: [
      "https://res.cloudinary.com/faustoalves/image/upload/v1770148011/portifolio/mobiles/mymc_12_qgstrs.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770148011/portifolio/mobiles/mymc_11_edv3ob.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770148011/portifolio/mobiles/mymc_10_pviq7z.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770148007/portifolio/mobiles/mymc_09_rwhp4a.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770148006/portifolio/mobiles/mymc_08_zo9b8g.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770148006/portifolio/mobiles/mymc_07_tszpmy.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770148006/portifolio/mobiles/mymc_05_qhdiii.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770148006/portifolio/mobiles/mymc_06_l1bqvu.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770148006/portifolio/mobiles/mymc_04_hrhiok.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770148003/portifolio/mobiles/mymc_03_bmjvaw.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770148002/portifolio/mobiles/mymc_01_tf9pnk.png",
    ],
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
    headerImages: [
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147982/portifolio/mobiles/crescimentum_12_cjxo15.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147982/portifolio/mobiles/crescimentum_11_gihwuv.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147982/portifolio/mobiles/crescimentum_09_d3o5ue.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147981/portifolio/mobiles/crescimentum_10_jsglou.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147981/portifolio/mobiles/crescimentum_08_ngypab.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147981/portifolio/mobiles/crescimentum_07_st3mct.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147980/portifolio/mobiles/crescimentum_06_qo6iqy.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147979/portifolio/mobiles/crescimentum_04_ql2fnl.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147979/portifolio/mobiles/crescimentum_05_nie82h.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147979/portifolio/mobiles/crescimentum_02_ea8yj9.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147979/portifolio/mobiles/crescimentum_01_vjfcd5.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147979/portifolio/mobiles/crescimentum_03_ytfchu.png",
    ],
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
    headerImages: [
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147987/portifolio/mobiles/hm_12_fslz79.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147986/portifolio/mobiles/hm_10_orluun.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147986/portifolio/mobiles/hm_11_gqjvid.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147986/portifolio/mobiles/hm_08_ievxvx.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147985/portifolio/mobiles/hm_06_dhjgvk.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147986/portifolio/mobiles/hm_09_j4jxbi.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147986/portifolio/mobiles/hm_09_j4jxbi.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147985/portifolio/mobiles/hm_07_bfvge5.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147984/portifolio/mobiles/hm_05_pwvkko.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147984/portifolio/mobiles/hm_04_z7gwrm.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147984/portifolio/mobiles/hm_04_z7gwrm.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147984/portifolio/mobiles/hm_03_j2ccg9.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147984/portifolio/mobiles/hm_02_ap2h2n.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147983/portifolio/mobiles/hm_01_f1k8wu.png",
    ],
  },
];
