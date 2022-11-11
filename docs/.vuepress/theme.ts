import { hopeTheme } from "vuepress-theme-hope";
import sidebar from "./sidebar";
import navbar from "./navbar";

export default hopeTheme({
  hostname: "https://saytaytay.github.io",
  // fullscreen:true,
  author: {
    name: "saytaytay",
    url: "https://saytaytay.github.io",
  },

  iconAssets: "iconfont",

  repo: "saytaytay/saytaytay.github.io",

  // navbarAutoHide: "always",

  
  // navbarLayout:{
  //   left:["Brand"],
  //   center:["Links","Repo","Outlook"],
  //   right:["Search"],
  // },
  docsDir: "docs",

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  blog: {
    medias: {
      Email: "http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=ADEyMDkwNzM3NDdAcXEuY29t",
      Gitee: "https://gitee.com/saytaytay",
      GitHub: "https://github.com/saytaytay",
      QQ: "http://wpa.qq.com/msgrd?v=3&uin=1209073747&site=qq&menu=yes",
      Zhihu: "https://www.zhihu.com/people/knight-40-78",
    },
  },
      // navbar
      navbar: navbar,

      // sidebar
      sidebar: sidebar,
      // SiderBarConfig,

      footer: "漫长一日",

      displayFooter: true,

  plugins: {
    blog: {
      autoExcerpt: true,
      
    },
    mdEnhance: {
      enableAll: false,
      container:true,
      align:true,

      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
    // mdEnhance: {
    //   align: true,
    //   attrs: true,
    //   chart: true,
    //   codetabs: true,
    //   container: true,
    //   demo: true,
    //   echarts: true,
    //   // flowchart: true,
    //   // gfm: true,
    //   imageSize: true,
    //   include: true,
    //   lazyLoad: true,
    //   mark: true,
    //   mermaid: true,
    //   // playground: {
    //   //   presets: ["ts", "vue"],
    //   // },
    //   presentation: {
    //     plugins: ["highlight", "math", "search", "notes", "zoom"],
    //   },
    //   stylize: [
    //     {
    //       matcher: "Recommanded",
    //       replacer: ({ tag }) => {
    //         if (tag === "em")
    //           return {
    //             tag: "Badge",
    //             attrs: { type: "tip" },
    //             content: "Recommanded",
    //           };
    //       },
    //     },
    //   ],
    //   sub: true,
    //   sup: true,
    //   tabs: true,
    //   tex: false,
    //   vpre: true,
    //   // vuePlayground: true,
    // },
  },
});
