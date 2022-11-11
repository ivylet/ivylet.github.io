---
title: JavaScript基本语法
date: 2022-10-15
---





什么是export 与 export default

模块功能主要由两个命令构成：`export`和`import`。export命令用于规定模块的对外接口，import命令用于输入其他模块提供的功能。

一个模块就是一个独立的文件。该文件内部的所有变量，外部无法获取。如果你希望外部能够读取模块内部的某个变量，就必须使用export关键字输出该变量。

```js
//a.js
 var str = "export的内容";
 var year =2019;
 function message(sth) {
  return sth;
}
export {str,year,message}
//或
export {
    str as newname1,
    year as newname2,
    message as newname3
};
```

使用export命令定义了模块的对外接口以后，其他 JS 文件就可以通过import命令加载这个模块。

```js
//b.js
import { str,year, message } from './a';
 //也可以分开写两次，导入的时候带花括号，将每个变量函数名写清楚
```

上面代码的import命令，用于加载a.js文件,引入后便可以在b.js文件中使用a.js文件中的变量、函数或类等。import命令接受一对大括号，里面指定要从其他模块导入的变量名。大括号里面的变量名，必须与被导入模块（a.js）对外接口的名称相同。

```js
//a.js
const str = "export default的内容";
export default str
在另一个文件中的导入方式：
//b.js 
import StrFile from 'a'; //这个可以随意起名字
//导入的时候没有花括号
//本质上，a.js文件的export default输出一个叫做default的变量，然后系统允许你引入的时候为它取任意名字。
```

(1) 输出单个值，使用export default

(2) 输出多个值，使用export

(3) export default与普通的export不要同时使用

