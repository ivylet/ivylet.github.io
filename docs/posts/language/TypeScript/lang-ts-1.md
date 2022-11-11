---
title:TypeScript的基本数据类型
---

## TypeScript的数据类型



- number
- boolean
- string
- void
- null
- undefined
- any

#### 类型推论

```typescript
let tom;//定义时未指定类型且未赋值，则指定为any类型。
tom = 1;
tom = "str";
console.log(tom)

let jack = 1;//定义时即赋值，进行类型推论，推测其为number类型，则再赋值时不能为其他类型。
jack = "mouse"; //该句报错
console.log(jack)
```

#### 联合类型

在定义时，表示变量的数值类型可以是其中的一种。而访问其方法时，在未确定是哪一种类型时，即赋值前，调用类型的非共用方法时，会报错。

```typescript
let strnum: string|number;
strnum = "str";
strnum = 114;
console.log(strnum)

let strnum: string|number;
function num(strnum:string|number):number{
    return strnum.length;//报错。因为number类型没有length方法。
}

let strnum: string|number;

function num(strnum:string|number):number{
    strnum = "str";
    return strnum.length;
}
```



### 对象的类型--接口

接口是对对象的约束。对象只能使用接口所约定的属性与其对应的类型，不可以多也不可以少（接口使用可选属性除外）。

```typescript
interface person{
    label:string
}
let cla:person = {
    name : "Jackey",//报错，因为多出的属性是不支持的。
    label : "str"
}


interface person{
    name :string
    label?:string//可选属性，对象可以使用或不使用。
}
let cla:person = {
    name : "Jackey",   
}
```

使用`[propName:string]:any`可以定义类可以定额外的`any`类型的属性变量，只可以定义与之对应的类型。

`[prop: string]: number` 的意思是，类型的对象可以有任意属性签名，`string` 指的是对象的键都是字符串类型的，`number` 则是指定了属性值的类型。`prop` 类似于函数的形参，是可以取其他名字的。

```typescript
interface person{
    name :string
    label?:string,
    [propName:string]:any,
}

let cla:person = {
    name : "Jackey",
    class : "Class One",
    grade : 1,
}
```

### 只读属性

当希望某些属性只能在创建时赋值时，我们可以使用`readonly`定义属性。注意只能是创建时才可以赋值，创建时未赋值，后续赋值也是不可行的。

```typescript
interface person{
    readonly uid:number;
    name:string;
    age?:number;
    [propName:string]:any;
};
let tom:person = {
    uid:11,
    name:"Genshin",
    age:2,
    hobby:["sing","dance","rap"]
};
tom.uid = 12//报错。因为uid为只读属性。
```

## 数组

多种定义数组的方法

基本定义

```typescript
let nums:number[] = [1,2,3,4,5,6,78]
let str:Array<string>=["A","BC","IG"]
let numbers:Array<number> = nums
console.log(str)
console.log(nums)
console.log(numbers)
console.log(nums === numbers)//true
```

使用接口定义

使用`[index:number]:any`可以定义类可以定额外的`any`类型的数组，只可以定义与之对应的类型。

`[index:number]: number` 的意思是，类型的对象可以有任意属性签名，`number` 数组索引都是数字类型，`number` 则是指定了数组值的类型。`index` 类似于函数的形参，是可以取其他名字的。

```typescript
interface NumberArray{
    [index:number]:number;
}

let nums:NumberArray = [1,2,3,4,5,6,78]
```

[如何理解typescript的类型是否另一个类型的子集？ - SegmentFault 思否](https://segmentfault.com/q/1010000022725100/a-1020000022740938)