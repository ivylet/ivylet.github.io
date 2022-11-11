import { defineClientConfig } from "@vuepress/client";
    import { defineAsyncComponent } from "vue";
import Presentation from "E:/www/vuepress-blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/Presentation";
import "E:/www/vuepress-blog/node_modules/vuepress-plugin-md-enhance/lib/client/styles/container/index.scss";


export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("Presentation", Presentation);
    
  }
});