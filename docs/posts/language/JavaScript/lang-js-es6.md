---
title: JavaScriptES6特性
date: 2022-10-17
---

[深入实践 ES6 Proxy & Reflect - 知乎](https://zhuanlan.zhihu.com/p/60126477)

[var声明与变量提升\_小帆帆\~的博客-CSDN博客\_var变量提升](https://blog.csdn.net/er_fan/article/details/84139372)

### 箭头函数

```javascript
//箭头函数
let arrow = (name) => {
    return 'Hello ${name}';
}
//普通函数
let normal = function(name){
    return 'Hello ${name}';
}
//只有一个参数
let arrow = name =>{
    return 'Hello ${name}';
}
//无参数
let arrow = () =>{
    console.log('happy game!');
}
//函数语句只有一行，只返回变量或简单的JS表达式。
let arrow = (a,b) => a + b;
//有多个参数
let arrow = (a,c,i,d) =>{
    return [a,c,i,d]
}
// 用小括号包裹要返回的对象
let getTempItem = id => ({ id: id, name: "Temp" });
// 调用一个函数
let fun = () => void doesNotReturn();
```

箭头函数没有自己的`prototype`(原型)，所以箭头函数本身没有自己的`this`，箭头函数的`this`指向外部对象，如`windows`对象。所以箭头函数也不能作为构造函数使用。

```js
// 箭头函数 
let a = () => {}; console.log(a.prototype); // undefined 
// 普通函数 function a() {}; 
console.log(a.prototype); // {constructor:f}
```

箭头函数不能作为构造函数使用



### 什么是IIFE

Immediately Invoked Function Expression，立即调用的函数表达式 ，创建时立刻调用。

```typescript
let a:string = "IIF";
(function(golobal:string) {
    console.log(golobal);
})(a)
//IIF
```

