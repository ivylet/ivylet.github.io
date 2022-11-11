export const categoryMap = {"category":{"/":{"path":"/category/","map":{"学习":{"path":"/category/%E5%AD%A6%E4%B9%A0/","keys":["v-3ad94bfa"]},"生活":{"path":"/category/%E7%94%9F%E6%B4%BB/","keys":["v-3ad94bfa"]},"Java":{"path":"/category/java/","keys":["v-3eb7530b"]}}}},"tag":{"/":{"path":"/tag/","map":{"Spring":{"path":"/tag/spring/","keys":["v-3ad94bfa"]}}}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogCategory) {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  })
}
