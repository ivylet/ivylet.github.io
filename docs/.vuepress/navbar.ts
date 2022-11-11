import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "Java", icon: "java", prefix: "/posts/java/",
    children :[
      {text: "JVM", icon: "edit", link:"jvm/"},
      {text: "反射", icon: "edit", link:"base/"},
    ]
  },
  {
    text: "数据库", icon: "mysql", prefix: "/posts/db/",
    children :[
      {text: "SQL",  link:"sql/"},
      {text: "MySQL",link:"mysql/"},
      {text: "Redis",link:"redis/"},
    ]
  },
  {
    text: "语言|开发", icon: "edit", prefix: "/posts/",
    children :[
      {text: "前端", icon: "edit", link:"language/frondend"},
    ]
  },
  {
    text: "框架", icon: "frame", prefix: "/posts/",
    children :[
      {text: "Spring", icon: "edit", link:"frame/Spring"},
      {text: "MyBatis", icon: "edit", link:"frame/MyBatis"},
      {text: "SpringMVC", icon: "edit", link:"frame/SpringMVC"},
    ]
  },
  {
    text: "竞赛", icon: "edit", prefix: "/posts/",link:"contest/"
  },
  {
    text: "部署|工具", icon: "edit", prefix: "/posts/",link:"deploy/note/mark"
  },
  {
    text: "架构|工程化", icon: "edit", prefix: "/posts/",link:"arch/se/"
  },
  {
    text: "想法|日志", icon: "idea", prefix: "/posts/",link:"ideas/"
  },
  { text: "关于", icon: "creative", link: "/about/" },
  // {
  //   text: "主题文档",
  //   icon: "note",
  //   link: "https://vuepress-theme-hope.github.io/v2/zh/",
  // },
]);
