---
title: java-注解机制
date: 2022-10-19
---

## 注解简介

什么是注解？

从JDK5.0开始引入的概念

##### 注解与注释的区别:

- ###### 注释

属于非代码部分，主要目的是让程序方便理解这段代码的用途、方法。

- ###### 注解

1.  不是程序本身，可以对程序作出解释。（这一点跟注释没什么区别）
2. 可以被其他程序(比如:编译器等)读取。(注解信息处理流程，是注解和注释的重大区别，如果没有注解信息处理流程，则注解毫无意义)

①编写文档：通过代码里标识的注解生成文档【生成文档doc文档】
②代码分析：通过代码里标识的注解对代码进行分析【使用反射】
③编译检查：通过代码里标识的注解让编译器能够实现基本的编译检查

### 注解定义

```java
public @interface TestAnnotation{
    
}
```

### 注解的使用

```java
@TestAnnotation
public class Test{
    
}
```

## 内置注解

### @Override

主要用于修饰方法，表示该方法声明打算重写超类中的另一个方法声明，大概是意思就是重写父类方法。

### @Deprecated

一个程序单元注释”不是一个程序员应该使用，通常是因为它是危险的，因为一个更好的选择的存在。编译器警告当一个过时的程序元素的使用或重写非过时的代码。 

### @SuppressWarnings

此注释主要用于抑制编译时的警告信息，这个注释需要添加参数使用。

- @SuppressWarning("all")
- @SuppressWarning("unchecked")
- ......

### @Repeatable 

 Java 8 开始支持，标识某注解可以在同一个声明上使用多次。

### @SafeVarargs

 Java 87开始支持，忽略任何使用参数为泛型变量的方法或构造函数调用产生的警告，适用于可变参数与泛型能够更好结合的一个注解

[@SafeVarargs 使用说明](https://cloud.tencent.com/developer/article/1441907)

### @FunctionalInterface

 Java 8 开始支持，FunctionalInterface注解是指定接口必须为函数式接口，如果编写的不是函数式接口，但是加上了@FunctionInterface，那么编译器会报错。“函数式接口”是指仅仅只包含一个抽象方法的接口

## 元注解(meta-annotation)

元注解是负责注释其他注解，主要用于自定义注解

### @Target

用于描述注解的使用范围

### @Retention

表示需要在什么级别保存该注释信息，用于描述注解的生命周期（Source<Class<Runtime）

### @Documented

说明该注解将被包含在Javadoc中

### @Inherited

说明子类可以继承父类中的该注解

```java
public class daylight{
    @MyAnnotation
    public void test(){
        
    }
}

//表示定义的注解可以用在哪些地方 
@Target(value = {ElementType.METHOD,ElementType.TYPE})

//表示注释在什么时候有效，一般定义为runtime
//runtime > class > source
@Retention(value = RetentionPolicy.RUNTIME)

//将该注解写入文档
@Documented

//子类可以继承父类的注解
@Inherited
public @interface MyAnnotation{
    
}
```

### 自定义注解

```java
public class daylight{
    
    //注解可以赋值，如果无默认值，则必须赋值
    //如果注解只有一个参数且为value，则可以直接在括号内赋值，否则需要参数名=赋值。
    //注解赋值无需特定顺序
	@MyAnnotataion(name = "Nancy")
    public void saving(){
        
    }
}


@Target(value = ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@interface MyAnnotataion{
    String name() default  "";
    int age() default 0;
    String[] school() default {"Tingshua"};
    
}
```

