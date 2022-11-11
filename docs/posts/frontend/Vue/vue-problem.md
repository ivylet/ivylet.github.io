---
title: 问题汇总
---

### Vite启动后提示“Network: use --host to expose“，且无法通过网络IP访问服务

解决方法：

```js
import vue from '@vitejs/plugin-vue'

/**
 * https://vitejs.dev/config/
 * @type {import('vite').UserConfig}
 */
export default {
  plugins: [vue()],
  server: {				// ← ← ← ← ← ←
    host: '0.0.0.0'	// ← 新增内容 ←
  }						// ← ← ← ← ← ←
}

```

