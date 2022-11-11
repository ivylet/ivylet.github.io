---
title:ESlint 代码检查工具
---



```js
/* eslint-env node */
module.exports = {
    root: true,
    'extends': [
        'plugin:vue/vue3-essential',
        'eslint:recommended'
    ],
    parserOptions: {
        ecmaVersion: 'latest'
    },
    rules: {
        "no-unused-vars":"error"
    }

}
```

