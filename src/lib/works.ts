export type WorkProps = {
  title: string;
  client: "mymc" | "benu" | "kloster" | "crescimentum" | "hm" | "mementry";
  srcImage: string;
  description: string;
  srcLogo: string;
  srcHeader: string;
  slug: string;
  content: WorkContentProps[];
  headerImages: string[];
};

export type WorkContentProps = {
  title: string;
  description: string;
  images?: string[];
  stack: StackItem[];
};

export type StackItem =
  | "next"
  | "tailwind"
  | "typescript"
  | "react"
  | "react-native"
  | "node"
  | "figma"
  | "photoshop"
  | "strapi"
  | "cypress"
  | "vite"
  | "selenium"
  | "playwright"
  | "styled"
  | "selenium"
  | "zustand"
  | "recoil"
  | "redux";

export const workList: WorkProps[] = [
  {
    client: "benu",
    title: "Benu Bestattung und Vorsorge",
    description:
      "<p><strong> Benu</strong> is a funeral company founded in <strong> 2017</strong> in <strong> Vienna</strong>, created to bring <strong> transparency</strong>, <strong> simplicity</strong> and <strong> digital tools</strong> to a traditionally conservative sector. It offers <strong> modern funeral services</strong> with a focus on <strong> clear information</strong>, <strong> online planning</strong> and options that respect different lifestyles. Today, it operates in <strong> Austria and Germany</strong>, with several <strong> physical branches</strong> and a <strong> specialized team</strong>.</p>",
    srcImage:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769210040/portifolio/work/benu_fcgham.jpg",
    srcLogo:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769210033/portifolio/work/logo_benu_e9avwd.png",
    srcHeader:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769968021/portifolio/work/benu-screens_ywwfrx.png",
    slug: "benu",
    headerImages: [
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147978/portifolio/mobiles/benu_12_evfxpo.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147978/portifolio/mobiles/benu_11_kdssjs.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147978/portifolio/mobiles/benu_10_o03x7s.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147978/portifolio/mobiles/benu_09_pw340g.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147977/portifolio/mobiles/benu_08_qbypdk.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147977/portifolio/mobiles/benu_07_uodxrq.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147978/portifolio/mobiles/benu_06_uiehys.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147977/portifolio/mobiles/benu_05_yreid2.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147978/portifolio/mobiles/benu_04_vganzu.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147977/portifolio/mobiles/Benu_03_cfevhb.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147977/portifolio/mobiles/benu_02_pb4re6.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147977/portifolio/mobiles/benu_01_moirbb.png",
    ],
    content: [
      {
        title: "Website",
        description: "Benu Bestattung und Vorsorge",
        images: [
          "https://res.cloudinary.com/faustoalves/image/upload/v1770230375/portifolio/work/benu/benu_site_01_tsjfqa.png",
          "https://res.cloudinary.com/faustoalves/image/upload/v1770230375/portifolio/work/benu/benu_site_02_bac1un.png",
          "https://res.cloudinary.com/faustoalves/image/upload/v1770230376/portifolio/work/benu/benu_site_03_g9lszo.png",
          "https://res.cloudinary.com/faustoalves/image/upload/v1770230378/portifolio/work/benu/benu_site_04_hvfdgq.png",
          "https://res.cloudinary.com/faustoalves/image/upload/v1770230377/portifolio/work/benu/benu_site_05_my2vmw.png",
          "https://res.cloudinary.com/faustoalves/image/upload/v1770230378/portifolio/work/benu/benu_site_06_hmkdzq.png",
          "https://res.cloudinary.com/faustoalves/image/upload/v1770230378/portifolio/work/benu/benu_site_07_hstfzv.png",
        ],
        stack: [
          "next",
          "strapi",
          "tailwind",
          "typescript",
          "node",
          "figma",
          "photoshop",
          "cypress",
          "recoil",
        ],
      },
      {
        title: "Headless CMS",
        description: "Benu Bestattung und Vorsorge",
        images: [
          "https://res.cloudinary.com/faustoalves/image/upload/v1770230379/portifolio/work/benu/benu_strapi_01_w3sosa.png",
          "https://res.cloudinary.com/faustoalves/image/upload/v1770230379/portifolio/work/benu/benu_strapi_02_iful6c.png",
          "https://res.cloudinary.com/faustoalves/image/upload/v1770230381/portifolio/work/benu/benu_strapi_03_gsn8ik.png",
          "https://res.cloudinary.com/faustoalves/image/upload/v1770230381/portifolio/work/benu/benu_strapi_04_rdnclo.png",
          "https://res.cloudinary.com/faustoalves/image/upload/v1770230382/portifolio/work/benu/benu_strapi_05_eoadyp.png",
          "https://res.cloudinary.com/faustoalves/image/upload/v1770230382/portifolio/work/benu/benu_strapi_06_alzxpl.png",
          "https://res.cloudinary.com/faustoalves/image/upload/v1770230383/portifolio/work/benu/benu_strapi_07_ny4ivv.png",
        ],
        stack: ["react", "strapi", "typescript", "node"],
      },
      {
        title: "Online Configurator",
        description: "Benu Bestattung und Vorsorge",
        images: [
          "https://res.cloudinary.com/faustoalves/image/upload/v1770230371/portifolio/work/benu/benu_old_conf_01_hzc9sk.png",
          "https://res.cloudinary.com/faustoalves/image/upload/v1770230372/portifolio/work/benu/benu_old_conf_02_tuwg1j.png",
          "https://res.cloudinary.com/faustoalves/image/upload/v1770230372/portifolio/work/benu/benu_old_conf_03_afwdav.png",
          "https://res.cloudinary.com/faustoalves/image/upload/v1770230373/portifolio/work/benu/benu_old_conf_04_dmg1yn.png",
          "https://res.cloudinary.com/faustoalves/image/upload/v1770230373/portifolio/work/benu/benu_old_conf_05_nyrzsq.png",
          "https://res.cloudinary.com/faustoalves/image/upload/v1770230374/portifolio/work/benu/benu_old_conf_06_tnziwp.png",
          "https://res.cloudinary.com/faustoalves/image/upload/v1770230374/portifolio/work/benu/benu_old_conf_07_tp0sak.png",
        ],
        stack: ["react", "typescript", "redux", "styled", "node", "selenium"],
      },
      {
        title: "Stores Configurator",
        description: "Benu Bestattung und Vorsorge",
        images: [
          "https://res.cloudinary.com/faustoalves/image/upload/v1770230368/portifolio/work/benu/benu_new_conf_01_e1ojio.png",
          "https://res.cloudinary.com/faustoalves/image/upload/v1770230368/portifolio/work/benu/benu_new_conf_03_zh9efd.png",
          "https://res.cloudinary.com/faustoalves/image/upload/v1770230369/portifolio/work/benu/benu_new_conf_02_x2pzxc.png",
          "https://res.cloudinary.com/faustoalves/image/upload/v1770230370/portifolio/work/benu/benu_new_conf_04_wsxohf.png",
          "https://res.cloudinary.com/faustoalves/image/upload/v1770230370/portifolio/work/benu/benu_new_conf_05_mepwpj.png",
          "https://res.cloudinary.com/faustoalves/image/upload/v1770230370/portifolio/work/benu/benu_new_conf_06_le3wpr.png",
          "https://res.cloudinary.com/faustoalves/image/upload/v1770230371/portifolio/work/benu/benu_new_conf_07_uxz1at.png",
        ],
        stack: ["vite", "react", "typescript", "figma", "playwright"],
      },
      {
        title: "Documentation",
        description: "Benu Bestattung und Vorsorge",
        images: [
          "https://res.cloudinary.com/faustoalves/image/upload/v1770230367/portifolio/work/benu/benu_docs_01_cr5vbz.png",
          "https://res.cloudinary.com/faustoalves/image/upload/v1770230367/portifolio/work/benu/benu_docs_02_rbuann.png",
          "https://res.cloudinary.com/faustoalves/image/upload/v1770230367/portifolio/work/benu/benu_docs_03_p6dkpm.png",
          "https://res.cloudinary.com/faustoalves/image/upload/v1770230367/portifolio/work/benu/benu_docs_04_c0kigk.png",
          "https://res.cloudinary.com/faustoalves/image/upload/v1770230369/portifolio/work/benu/benu_docs_05_ek10ep.png",
          "https://res.cloudinary.com/faustoalves/image/upload/v1770230368/portifolio/work/benu/benu_docs_06_lzetzt.png",
          "https://res.cloudinary.com/faustoalves/image/upload/v1770230368/portifolio/work/benu/benu_docs_07_ulmvuo.png",
        ],
        stack: ["figma", "photoshop", "node"],
      },
    ],
  },
  {
    client: "kloster",
    title: "Klosterwald",
    description:
      "<p><strong> Klosterwald</strong> is a <strong> forest cemetery</strong> concept that offers <strong> burials in natural areas</strong>, under <strong> trees personally chosen</strong> by the deceased or their family. Instead of headstones and ordered flowers, the <strong> forest itself marks the seasons</strong> with its colors, plants and textures, creating a place of farewell that feels more <strong> intimate</strong>, <strong> organic</strong> and <strong> connected to nature</strong>. The brand works in <strong> partnership with Austrian funeral homes</strong> to offer this alternative for a final resting place.</p>",
    srcImage:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769210046/portifolio/work/kloster_z4zv8u.jpg",
    srcLogo:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769210034/portifolio/work/logo_kloster_kucmap.png",
    srcHeader:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769968022/portifolio/work/klosterwald--screens_ccb3wh.png",
    slug: "klosterwald",
    content: [
      {
        title: "Website",
        description: "Klosterwald",
        images: [
          "https://res.cloudinary.com/faustoalves/image/upload/v1770230451/portifolio/work/klosterwald/klosterwald_site_04_daquei.png",
          "https://res.cloudinary.com/faustoalves/image/upload/v1770230450/portifolio/work/klosterwald/klosterwald_site_01_q9295i.png",
          "https://res.cloudinary.com/faustoalves/image/upload/v1770230449/portifolio/work/klosterwald/klosterwald_site_05_gypv6u.png",
          "https://res.cloudinary.com/faustoalves/image/upload/v1770230449/portifolio/work/klosterwald/klosterwald_site_07_tjzty6.png",
          "https://res.cloudinary.com/faustoalves/image/upload/v1770230446/portifolio/work/klosterwald/klosterwald_site_06_lryjdv.png",
          "https://res.cloudinary.com/faustoalves/image/upload/v1770230445/portifolio/work/klosterwald/klosterwald_site_03_oodjqq.png",
          "https://res.cloudinary.com/faustoalves/image/upload/v1770230444/portifolio/work/klosterwald/klosterwald_site_02_koigml.png",
        ],
        stack: [
          "next",
          "strapi",
          "tailwind",
          "typescript",
          "node",
          "figma",
          "photoshop",
          "strapi",
          "cypress",
        ],
      },
      {
        title: "Headless CMS",
        description: "Klosterwald - Strapi",
        images: [
          "https://res.cloudinary.com/faustoalves/image/upload/v1770230448/portifolio/work/klosterwald/klosterwald_strapi_01_gnxukw.png",
          "https://res.cloudinary.com/faustoalves/image/upload/v1770230447/portifolio/work/klosterwald/klosterwald_strapi_02_nlutdn.png",
          "https://res.cloudinary.com/faustoalves/image/upload/v1770230445/portifolio/work/klosterwald/klosterwald_strapi_03_py6xtj.png",
          "https://res.cloudinary.com/faustoalves/image/upload/v1770230447/portifolio/work/klosterwald/klosterwald_strapi_04_zsmlky.png",
          "https://res.cloudinary.com/faustoalves/image/upload/v1770230452/portifolio/work/klosterwald/klosterwald_strapi_05_yqvlga.png",
          "https://res.cloudinary.com/faustoalves/image/upload/v1770230452/portifolio/work/klosterwald/klosterwald_strapi_06_ld64sl.png",
          "https://res.cloudinary.com/faustoalves/image/upload/v1770230453/portifolio/work/klosterwald/klosterwald_strapi_07_jpnqtn.png",
        ],
        stack: ["react", "strapi", "typescript", "node"],
      },
    ],
    headerImages: [
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147995/portifolio/mobiles/klosterwald_12_j4wcxh.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147993/portifolio/mobiles/klosterwald_11_crjqoa.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147994/portifolio/mobiles/klosterwald_10_ep1y7b.png",
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
    description:
      "<p><strong> Mementry</strong> is a platform designed to <strong> organize</strong> and <strong>share important information</strong> with <strong> security</strong>, <strong> privacy</strong> and <strong> clear intent</strong>. While still alive, a person defines <strong> what will be shared</strong> and <strong> with whom</strong> after they pass away. It also works as a <strong> central hub for personal data</strong>, <strong>documents and key records</strong>, helping families in sensitive moments and preventing important information from being lost.</p>",
    srcImage:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769210039/portifolio/work/mementry_vfewxt.jpg",
    srcLogo:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769210035/portifolio/work/logo_mementry_leeo0k.png",
    srcHeader:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769968021/portifolio/work/mementry-screens_jz8s4x.png",
    slug: "mementry",
    content: [
      {
        title: "Web App",
        description: "Mementry",
        images: [
          "https://res.cloudinary.com/faustoalves/image/upload/v1770230379/portifolio/work/benu/benu_strapi_01_w3sosa.png",
          "https://res.cloudinary.com/faustoalves/image/upload/v1770230379/portifolio/work/benu/benu_strapi_02_iful6c.png",
          "https://res.cloudinary.com/faustoalves/image/upload/v1770230381/portifolio/work/benu/benu_strapi_03_gsn8ik.png",
          "https://res.cloudinary.com/faustoalves/image/upload/v1770230381/portifolio/work/benu/benu_strapi_04_rdnclo.png",
          "https://res.cloudinary.com/faustoalves/image/upload/v1770230382/portifolio/work/benu/benu_strapi_05_eoadyp.png",
          "https://res.cloudinary.com/faustoalves/image/upload/v1770230382/portifolio/work/benu/benu_strapi_06_alzxpl.png",
          "https://res.cloudinary.com/faustoalves/image/upload/v1770230383/portifolio/work/benu/benu_strapi_07_ny4ivv.png",
        ],
        stack: [
          "react",
          "redux",
          "typescript",
          "node",
          "styled",
          "figma",
          "photoshop",
        ],
      },
    ],
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
    description:
      "<p><strong> MyMc</strong> is an internal platform created for <strong> Arcos Dourados (McDonald's Brazil)</strong>, designed to <strong> connect employees</strong> from different restaurants in a more <strong> casual</strong> and <strong> familiar</strong> digital environment. Inspired by <strong> social networks</strong>, it makes <strong> communication</strong> easier, centralizes <strong> day-to-day information</strong> and strengthens the <strong> sense of community</strong> among teams, especially younger staff. This project was developed in partnership with <strong> ED Interactive</strong>, who works directly with the client.</p>",
    srcImage:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769210038/portifolio/work/mymc_majjqt.jpg",
    srcLogo:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769210032/portifolio/work/LogoMyMc_leyras.png",
    srcHeader:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769968020/portifolio/work/mymc-screens_yxitf9.png",
    slug: "mymc",
    content: [
      {
        title: "WebApp",
        description: "MyMc",
        images: [
          "https://res.cloudinary.com/faustoalves/image/upload/v1770230489/portifolio/work/mymc/mymc_01_y06mh9.png",
          "https://res.cloudinary.com/faustoalves/image/upload/v1770230488/portifolio/work/mymc/mymc_02_lwyw8u.png",
          "https://res.cloudinary.com/faustoalves/image/upload/v1770230491/portifolio/work/mymc/mymc_03_qkqd9b.png",
          "https://res.cloudinary.com/faustoalves/image/upload/v1770230492/portifolio/work/mymc/mymc_04_ba4igf.png",
          "https://res.cloudinary.com/faustoalves/image/upload/v1770230490/portifolio/work/mymc/mymc_05_etnz6h.png",
          "https://res.cloudinary.com/faustoalves/image/upload/v1770230490/portifolio/work/mymc/mymc_06_eawmvt.png",
          "https://res.cloudinary.com/faustoalves/image/upload/v1770230493/portifolio/work/mymc/mymc_07_y2sndo.png",
        ],
        stack: ["react", "redux", "node", "styled", "figma", "photoshop"],
      },
    ],
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
      "https://res.cloudinary.com/faustoalves/image/upload/v1770148002/portifolio/mobiles/mymc_02_q2i8pe.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770148002/portifolio/mobiles/mymc_01_tf9pnk.png",
    ],
  },
  {
    client: "crescimentum",
    title: "Crescimentum",
    description:
      "<p><strong> Crescimentum</strong>, part of the <strong> Cegos Group</strong>, works with <strong> people development and leadership</strong>, going beyond <strong> traditional training</strong>. Its focus is on fostering <strong> awareness</strong>, driving <strong> intentional change</strong> and building solutions <strong> together with people</strong> and <strong> organizations</strong>. The company offers <strong> programs, journeys and</strong> <strong> development experiences</strong> that support leaders and teams at different levels. This project was developed in partnership with <strong>Hagens</strong>, who works directly with the client.</p>",
    srcImage:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769210037/portifolio/work/crescimentum_dqrh15.jpg",
    srcLogo:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769210032/portifolio/work/logo_crescimentum_eh72v0.png",
    srcHeader:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769968021/portifolio/work/crescimentum-screens_rtt3md.png",
    slug: "crescimentum",
    content: [
      {
        title: "Website",
        description: "Crescimentum",
        images: [
          "https://res.cloudinary.com/faustoalves/image/upload/v1770230418/portifolio/work/crescimentum/crescimentum_01_dc1rfh.png",
          "https://res.cloudinary.com/faustoalves/image/upload/v1770230418/portifolio/work/crescimentum/crescimentum_02_hyvy9c.png",
          "https://res.cloudinary.com/faustoalves/image/upload/v1770230416/portifolio/work/crescimentum/crescimentum_03_vdszt2.png",
          "https://res.cloudinary.com/faustoalves/image/upload/v1770230418/portifolio/work/crescimentum/crescimentum_04_gumtpx.png",
          "https://res.cloudinary.com/faustoalves/image/upload/v1770230416/portifolio/work/crescimentum/crescimentum_05_hhsyrh.png",
          "https://res.cloudinary.com/faustoalves/image/upload/v1770230417/portifolio/work/crescimentum/crescimentum_06_vsjggl.png",
          "https://res.cloudinary.com/faustoalves/image/upload/v1770230419/portifolio/work/crescimentum/crescimentum_07_lo0tl1.png",
        ],
        stack: ["figma", "photoshop"],
      },
    ],
    headerImages: [
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147982/portifolio/mobiles/crescimentum_12_cjxo15.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147982/portifolio/mobiles/crescimentum_11_gihwuv.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147981/portifolio/mobiles/crescimentum_10_jsglou.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147982/portifolio/mobiles/crescimentum_09_d3o5ue.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147981/portifolio/mobiles/crescimentum_08_ngypab.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147981/portifolio/mobiles/crescimentum_07_st3mct.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147980/portifolio/mobiles/crescimentum_06_qo6iqy.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147979/portifolio/mobiles/crescimentum_05_nie82h.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147979/portifolio/mobiles/crescimentum_04_ql2fnl.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147979/portifolio/mobiles/crescimentum_03_ytfchu.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147979/portifolio/mobiles/crescimentum_02_ea8yj9.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147979/portifolio/mobiles/crescimentum_01_vjfcd5.png",
    ],
  },
  {
    client: "hm",
    title: "HM",
    description:
      "<p><strong> HM Engenharia</strong> is a construction company with <strong> almost five decades of experience</strong>, focused on making the <strong> first home</strong> a reality for thousands of families. Its projects are designed to bring together <strong> affordability</strong>, <strong> functionality</strong> and <strong> quality of life</strong>, marking important milestones in clients' lives. Over the years, it has built a <strong> solid reputation</strong> in the <strong> affordable and mid-range housing</strong> segment.This project was developed in partnership with <strong>Hagens</strong>, who works directly with the client.</p>",
    srcImage:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769210036/portifolio/work/eme_y05ozg.jpg",
    srcLogo:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769210032/portifolio/work/logo_hm_mdsucd.png",
    srcHeader:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769968021/portifolio/work/hm-screens_css533.png",
    slug: "hm",
    content: [
      {
        title: "Website",
        description: "HM",
        images: [
          "https://res.cloudinary.com/faustoalves/image/upload/v1770230432/portifolio/work/hm/hm_01_udeaq8.png",
          "https://res.cloudinary.com/faustoalves/image/upload/v1770230429/portifolio/work/hm/hm_02_xgbwmp.png",
          "https://res.cloudinary.com/faustoalves/image/upload/v1770230430/portifolio/work/hm/hm_03_skf38s.png",
          "https://res.cloudinary.com/faustoalves/image/upload/v1770230430/portifolio/work/hm/hm_04_xjxjpo.png",
          "https://res.cloudinary.com/faustoalves/image/upload/v1770230431/portifolio/work/hm/hm_05_ldp7ix.png",
          "https://res.cloudinary.com/faustoalves/image/upload/v1770230432/portifolio/work/hm/hm_06_xeylsf.png",
          "https://res.cloudinary.com/faustoalves/image/upload/v1770230433/portifolio/work/hm/hm_07_vmdpfc.png",
        ],
        stack: ["next", "strapi", "tailwind", "typescript", "node", "strapi"],
      },
      {
        title: "Headless CMS",
        description: "HM",
        images: [
          "https://res.cloudinary.com/faustoalves/image/upload/v1770230448/portifolio/work/klosterwald/klosterwald_strapi_01_gnxukw.png",
          "https://res.cloudinary.com/faustoalves/image/upload/v1770230447/portifolio/work/klosterwald/klosterwald_strapi_02_nlutdn.png",
          "https://res.cloudinary.com/faustoalves/image/upload/v1770230445/portifolio/work/klosterwald/klosterwald_strapi_03_py6xtj.png",
          "https://res.cloudinary.com/faustoalves/image/upload/v1770230447/portifolio/work/klosterwald/klosterwald_strapi_04_zsmlky.png",
          "https://res.cloudinary.com/faustoalves/image/upload/v1770230452/portifolio/work/klosterwald/klosterwald_strapi_05_yqvlga.png",
          "https://res.cloudinary.com/faustoalves/image/upload/v1770230452/portifolio/work/klosterwald/klosterwald_strapi_06_ld64sl.png",
          "https://res.cloudinary.com/faustoalves/image/upload/v1770230453/portifolio/work/klosterwald/klosterwald_strapi_07_jpnqtn.png",
        ],
        stack: ["react", "strapi", "typescript", "node"],
      },
    ],
    headerImages: [
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147987/portifolio/mobiles/hm_12_fslz79.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147986/portifolio/mobiles/hm_10_orluun.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147986/portifolio/mobiles/hm_11_gqjvid.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147986/portifolio/mobiles/hm_09_j4jxbi.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147986/portifolio/mobiles/hm_08_ievxvx.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147985/portifolio/mobiles/hm_07_bfvge5.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147985/portifolio/mobiles/hm_06_dhjgvk.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147984/portifolio/mobiles/hm_05_pwvkko.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147984/portifolio/mobiles/hm_04_z7gwrm.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147984/portifolio/mobiles/hm_03_j2ccg9.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147984/portifolio/mobiles/hm_02_ap2h2n.png",
      "https://res.cloudinary.com/faustoalves/image/upload/v1770147983/portifolio/mobiles/hm_01_f1k8wu.png",
    ],
  },
];

export interface StackListItem {
  name: StackItem;
  label: string;
}

export const stackList: StackListItem[] = [
  {
    name: "next",
    label: "Next.js",
  },
  {
    name: "tailwind",
    label: "Tailwind CSS",
  },
  {
    name: "typescript",
    label: "TypeScript",
  },
  {
    name: "react",
    label: "React",
  },
  {
    name: "react-native",
    label: "React Native",
  },
  {
    name: "node",
    label: "Node.js",
  },
  {
    name: "figma",
    label: "Figma",
  },
  {
    name: "photoshop",
    label: "Photoshop",
  },
  {
    name: "strapi",
    label: "Strapi",
  },
  {
    name: "cypress",
    label: "Cypress",
  },
  {
    name: "vite",
    label: "Vite",
  },
  {
    name: "selenium",
    label: "Selenium",
  },
  {
    name: "playwright",
    label: "Playwright",
  },
  {
    name: "styled",
    label: "Styled Components",
  },
  {
    name: "zustand",
    label: "Zustand",
  },
  {
    name: "recoil",
    label: "Recoil",
  },
  {
    name: "redux",
    label: "Redux",
  },
];
