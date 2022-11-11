import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("Book", defineAsyncComponent(() => import("E:/www/vuepress-blog/docs/.vuepress/components/Book.vue"))),
      app.component("Books", defineAsyncComponent(() => import("E:/www/vuepress-blog/docs/.vuepress/components/Books.vue"))),
      app.component("features", defineAsyncComponent(() => import("E:/www/vuepress-blog/docs/.vuepress/components/features.vue")))
  },
}
