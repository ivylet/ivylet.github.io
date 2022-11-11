---
title: java-反射机制
date: 2022-09-26
order: 10
---

## 什么是反射

::: tip

动态语言

运行时可以改变自身结构。

静态语言

运行时结构不可变。

:::

让Java变成动态语言

 Reflection（反射）是Java语言被视为动态语言的关键，反射机制允许程序在执行期间借助于Reflection API获取类的任何内部信息，并且能够操作任意对象的内部属性及方法。

```java
Class c = Class.forName("java.lang.String");
```

加载完类后，在堆内存的方法区产生了一个Class类型的对象（一个类只有一个Class对象），这个对象包含了完整的类的结构信息，我们可以通过这个对象看到类的结构。

正常创建对象方式：引入需要的"包类"名称 -> 通过new实例化 -> 获取实例化对象

反射方式：   实例化对象 -> getClass()方法 -> 得到完整的"包类"名称

### 反射的优点与缺点

#### 优点

可以实现动态创建对象和编译，体现出灵活性。

#### 缺点

对性能有影响，使用反射属于解释操作，反射操作慢于直接执行相同操作

### 反射主要API

- java.lang.Class;代表一个类
- java.lang.reflect.Method;代表类的方法
- java.lang.reflect.Field;代表类的成员变量
- java.lang.reflect.Constructor;代表类的构造器
- .....



一个类在内存中只有一个Class对象

类在被加载后，类的所有东西都会被封装到Class对象中

```java
    Student student = new StudentImpl();
    Class c1 = student.getClass();
    Class c2 = student.getClass();
    Class c3 = student.getClass();
    System.out.println(c1.hashCode());
    System.out.println(c2.hashCode());
    System.out.println(c3.hashCode());

	// 2125039532
	// 2125039532
	// 2125039532
```

Object类有getClass()方法，返回值的类型为一个Class类。

```java
public final Class getClass();
```

## Class类

- 对象本身是一个类
- Class类只能由系统建立
- 一个加载的类在JVM中只会有一个Class实例
- 一个Class对象对应的是一个加载到JVM中的一个.class文件
- 每个类的实例都会记得自己是由哪个Class实例所生成的
- 通过Class可以完整地得到一个类中的所有被加载的结构
- Class类是Reflection的根源,想要动态加载类，就必须先获得相应的Class对象。

常用方法

- `static ClassforName(String name)`

获取Class类实例

```java
public class Test{
    Person person = new Person();//创建实例person
    Class clazz1 = Person.class;//通过类来创建，此方法安全可靠，程序性能高。
    Class clazz2 = person.getClass();//通过类的实例创建，调用getClass()获取class对象
    Class clazz3 = Class.forName("demo.Person");//通过类的全限定名，使用forName()方法获取，可能抛出ClassNotFoundException异常
    Class clazz4 = Integer.TYPE;//内置类型的包装类都有一个TYPE属性可以直接获得
    Class clazz5 = clazz1.getSuperclass();//获得class对象父类对象
    
}
class Person{}//定义类
```

不同类有对应的class对象

```java
public class Test{
    public static void main(String[] args){
Person person = new Person();
        Person student = new Student();
        System.out.println(person.getClass().hashCode());
        System.out.println(Person.class.hashCode());
        System.out.println(student.getClass().hashCode());
        System.out.println(Student1.class.hashCode());
}
}
class Person{

}
class Student1 extends Person{

}

```

```
1265094477
1265094477
2125039532
2125039532
```

- class 类
- interface 接口
- [] 数组
- enum 枚举
- annotation 注解
- primitive type 基本数据类型
- void
- .....

```java
public class Test{
public static void main(String[] args) {
	    Class c1 = Object.class;//类
        Class c2 = Comparable.class;//接口
        Class c3 = String[].class;//一维数组
        Class c4 = int[][].class;//二维数组
        Class c5 = Override.class;//注解
        Class c6 = ElementType.class;//枚举
        Class c7 = Integer.class;
        Class c8 = Void.class;//void
        Class c9 = Class.class;//Class
        System.out.println(c1);
        System.out.println(c2);
        System.out.println(c3);
        System.out.println(c4);
        System.out.println(c5);
        System.out.println(c6);
        System.out.println(c7);
        System.out.println(c8);
        System.out.println(c9);
        int[] a = new int[10];
        int[] b = new int[100];
        System.out.println(a.getClass().hashCode());
        System.out.println(b.getClass().hashCode());
}}
//class java.lang.Object
//interface java.lang.Comparable
//class [Ljava.lang.String;
//class [[I
//interface java.lang.Override
//class java.lang.annotation.ElementType
//class java.lang.Integer
//class java.lang.Void
//class java.lang.Class
//        1265094477
//        1265094477
```

### 类的加载
