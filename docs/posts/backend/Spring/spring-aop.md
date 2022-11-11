---
title: Spring-AOP
---

## Spring AOP

### 简介

在软件业，AOP为Aspect Oriented Programming的缩写，意为：[面向切面编程](https://baike.baidu.com/item/面向切面编程/6016335?fromModule=lemma_inlink)，通过[预编译](https://baike.baidu.com/item/预编译/3191547?fromModule=lemma_inlink)方式和运行期间动态代理实现程序功能的统一维护的一种技术。AOP是[OOP](https://baike.baidu.com/item/OOP?fromModule=lemma_inlink)的延续，是软件开发中的一个热点，也是Spring框架中的一个重要内容，是[函数式编程](https://baike.baidu.com/item/函数式编程/4035031?fromModule=lemma_inlink)的一种衍生范型。利用AOP可以对业务逻辑的各个部分进行隔离，从而使得业务逻辑各部分之间的[耦合度](https://baike.baidu.com/item/耦合度/2603938?fromModule=lemma_inlink)降低，提高程序的可重用性，同时提高了开发的效率。

给具体的方法配置方法前置、环绕、后置等等通知，在不改变原方法的情况下。降低了代码的耦合度，例如为方法添加日志功能时，不需要在所有的方法中添加，只需要添加日志方法后再所有方法的配置文件中添加。修改日志方法时，只需要改一次就行。

## 相关术语

- **切面(Aspect)**
- **连接点(Joinpoint)**
- **切入点(Pointcut)**
- **通知/增强处理(Advice)**
- **目标对象(Target)**
- **织入(Weaving)**
- **代理(Proxy)**
- **引介(Introduction)**



所以先讲一下如何实现的：

两种实现方式 **动态JDK** 和 **CGLib动态代理**

### JDK动态代理

基于接口

```java
package com.taytay.demo;

public interface UserDao {
    public void say();
    public void addmit();
}
```

```java
package com.taytay.demo;

public class UserDaoImpl implements UserDao {
    public void say(){
        System.out.println("Say my name!");
    }
    public void addmit(){
        System.out.println("I am the danger!");
    }
}
```

```java
package com.taytay.demo;

public class MyAspect {
    public void name(){
        System.out.println("Heisenberg");
    }
    public void worry(){
        System.out.println("I am worry about you");
    }
}
```

```java
package com.taytay.demo;

import java.lang.reflect.InvocationHandler;
import java.lang.reflect.Method;
import java.lang.reflect.Proxy;

public class MyProxy implements InvocationHandler {
    private UserDao userDao;
    public Object createProxy(UserDao userDao){
        this.userDao = userDao;
        ClassLoader classLoader = MyProxy.class.getClassLoader();
        Class[] classes = userDao.getClass().getInterfaces();
        return Proxy.newProxyInstance(classLoader,classes,this);
    }
    @Override
    public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
        MyAspect myAspect = new MyAspect();
        myAspect.name();
        Object obj = method.invoke(userDao,args);
        myAspect.worry();
        return obj;
    }
}
```

```java
package com.taytay.demo;

public class Test {
    public static void main(String[] args) {
        MyProxy myProxy = new MyProxy();
        UserDao userDao = new UserDaoImpl();
        UserDao userDao1 = (UserDao) myProxy.createProxy(userDao);
        userDao1.say();
        userDao1.addmit();
    }
}
```

### CGLib动态代理

基于父类

```java
package com.taytay.demo2;

public class UserDao {
    public void say(){
        System.out.println("new album midnights is coming!");
    }
    public void listen(){
        System.out.println("I want to listen music!");
    }
}
```

```java
package com.taytay.demo2;

public class MyAspect {
    public void name(){
        System.out.println("Heisenberg");
    }
    public void worry(){
        System.out.println("I am worry about you");
    }
}
```

```java
package com.taytay.demo2;

import org.springframework.cglib.proxy.Enhancer;
import org.springframework.cglib.proxy.MethodInterceptor;
import org.springframework.cglib.proxy.MethodProxy;;
import java.lang.reflect.Method;

public class CglibProxy implements MethodInterceptor {

    public Object creatProxy(Object target){
        Enhancer enhancer = new Enhancer();
        enhancer.setSuperclass(target.getClass());
        enhancer.setCallback(this);
        return enhancer.create();
    }
    public Object intercept(Object proxy, Method method, Object[] args, MethodProxy methodProxy) throws Throwable{
        MyAspect myAspect = new MyAspect();
        myAspect.name();
        Object obj = methodProxy.invokeSuper(proxy,args);
        myAspect.worry();
        return obj;
    }
}
```

```java
package com.taytay.demo2;

public class Test {
    public static void main(String[] args) {
        CglibProxy cglibProxy = new CglibProxy();
        UserDao userDao = new UserDao();
        UserDao userDao1 = (UserDao) cglibProxy.creatProxy(userDao);
        userDao1.say();
        userDao1.listen();
    }

}
```

### 基于XML的AOP实现

[Spring AOP实例之XML配置](https://blog.csdn.net/xiaoxian8023/article/details/17258933)

::: tip 帮助

Spring AOP中的代理对象由IoC容器自动生成，所以无需关注代理对象生成，只需要选择连接点、创建切面、定义切点并在XML文件添加配置信息。

:::

Spring提供了一系列配置Spring AOP的XML元素。

| 元素                    | 描述                                         |
| ----------------------- | -------------------------------------------- |
| `<aop:config>`          | SpringAOP配置的根元素。                      |
| `<aop:aspect>`          | 配置切面。                                   |
| `<aop:advisor>`         | 配置通知器。                                 |
| `<aop:pointcut>`        | 配置切入点。                                 |
| `<aop:before>`          | 配置前置通知，在目标方法执行前实施增强。     |
| `<aop:after>`           | 配置后置通知，在目标方法执行后实施增强。     |
| `<aop:around>`          | 配置环绕通知，在目标方法执行前后实施增强。   |
| `<aop:after-returning>` | 配置返回通知，在目标方法成功执行后调用通知。 |
| `<aop:after-throwing>`  | 配置异常通知，在方法抛出异常后实施增强。     |

#### 配置切面

`<aop:aspect>`:配置切面使用的元素，将已定义好的Spring Bean转换为切面Bean。因此在使用前需要先在配置文件中定义一个普通的Spring Bean。定义完成后可以通过ref属性引用该Bean。

- id
	用于定义该切面的唯一标识
- ref
	用于引用普通的Spring Bean

#### 配置切入点

`<aop:pointcut>`:配置切入点使用的元素。当该元素为`<aop:aspect>`的子元素定义时，表示该切入点只对当前切面有效；当该元素为`<aop:config>`的子元素定义时，表示该切入点为全局切入点，可以被多个切面共享。

- id
	用于定义该切面的唯一标识
- expression
	用于指定切入点关联的切入点表达式

Spring AOP的切入点表达式基本格式为：

```java
execution(modifiers-pattern? ret-type-pattern declaring-type-pattern? 
  name-pattern(param-pattern) throws-pattern?)
```

[Spring AOP 中切入点 Pointcut中Expression表达式解析及配置](https://cloud.tencent.com/developer/article/1455539)

#### 配置通知

`<aop:aspect>`:配置使用的通知。常用的有五种通知，即下表。

| `<aop:before>`          | 配置前置通知，在目标方法执行前实施增强。     |
| ----------------------- | -------------------------------------------- |
| `<aop:after>`           | 配置后置通知，在目标方法执行后实施增强。     |
| `<aop:around>`          | 配置环绕通知，在目标方法执行前后实施增强。   |
| `<aop:after-returning>` | 配置返回通知，在目标方法成功执行后调用通知。 |
| `<aop:after-throwing>`  | 配置异常通知，在方法抛出异常后实施增强。     |

该元素的常用属性如下:

|      属性      | 描述                                                         |
| :------------: | :----------------------------------------------------------- |
|   `pointcut`   | 用于指定一个切入点表达式。                                   |
| `pointcut-ref` | 用于指定一个已存在的切入点名称。                             |
|    `method`    | 该属性指定一个方法名，该方法用于增强处理。                   |
|   `throwing`   | 只对`<after-throwing>`有效，用于指定一个形参名，异常通知可以通过该形参访问目标方法抛出的异常。 |
|  `returning`   | 只对`<after-returning>`有效，用于指定一个形参名，返回通知可以通过该形参访问目标方法返回的值。 |

使用举例

导个包先

```xml
<dependency>
    <groupId>org.aspectj</groupId>
    <artifactId>aspectjrt</artifactId>
    <version>1.9.1</version>
</dependency>
<dependency>
    <groupId>org.aspectj</groupId>
    <artifactId>aspectjweaver</artifactId>
    <version>1.9.6</version>
</dependency>
```

回来再搞！

回来啦

```java
package com.taytay.demo3;

public interface UserDao {
    public void insert();
    public void delete();
    public void update();
    public void select();
}
```

```java
package com.taytay.demo3.impl;

import com.taytay.demo3.UserDao;

public class UserDaoImpl implements UserDao {

    @Override
    public void insert() {
        System.out.println("添加信息");
    }

    @Override
    public void delete() {
        System.out.println("删除信息");
    }

    @Override
    public void update() {
        System.out.println("更新信息");
    }

    @Override
    public void select() {
        System.out.println("查询信息");
    }
}

```

```java
package com.taytay.demo3;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;

public class XmlAdvice {
    public void before(JoinPoint joinPoint){
        System.out.println("前置信息");
        System.out.println("目标类是：" + joinPoint.getTarget());
        System.out.println("被增强的方法是：" + joinPoint.getSignature().getName());
    }
    public void afterReturning(JoinPoint joinPoint){
        System.out.println("这是返回通知（在不产生异常时调用）");
        System.out.println("被织入增强处理的目标方法为" + joinPoint.getSignature().getName());
    }
    public Object around(ProceedingJoinPoint joinPoint) throws Throwable{
        System.out.println("这是环绕通知之前的部分");
        Object object = joinPoint.proceed();
        System.out.println("这是环绕通知之后的部分");
        return object;
    }
    public void afterException(){
        System.out.println("这是异常后的通知！");
    }
    public void after(){
        System.out.println("这是后置通知！");
    }
}
```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:aop="http://www.springframework.org/schema/aop"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
       http://www.springframework.org/schema/beans/spring-beans.xsd
        http://www.springframework.org/schema/aop
        http://www.springframework.org/schema/aop/spring-aop.xsd">
    <!-- 注册Bean-->
        <bean name="userDao" class="com.taytay.demo3.impl.UserDaoImpl"/>
        <bean name="xmlAdvice" class="com.taytay.demo3.XmlAdvice"/>
<!--配置Spring AOP -->
    	<aop:config>
            <!-- 指定切入点-->
                <aop:pointcut id="pointcut" expression="execution(* com.taytay.demo3.impl.UserDaoImpl.*(..))"/>
             <!-- 指定切面-->
                <aop:aspect ref="xmlAdvice">
                        <aop:before method="before" pointcut-ref="pointcut"/>
                        <aop:after-returning method="afterReturning" pointcut-ref="pointcut"/>
                        <aop:around method="around" pointcut-ref="pointcut"/>
                        <aop:after-throwing method="afterException" pointcut-ref="pointcut"/>
                        <aop:after method="after" pointcut-ref="pointcut"/>
                </aop:aspect>
        </aop:config>
</beans>
```

```java
package com.taytay.demo3;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Test {
    public static void main(String[] args) {
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
        UserDao userDao = context.getBean("userDao",UserDao.class);
        userDao.insert();
        System.out.println();
        userDao.delete();
        System.out.println();
        userDao.update();
        System.out.println();
        userDao.select();
    }
}
//前置信息
//目标类是：com.taytay.demo3.impl.UserDaoImpl@24aed80c
//被增强的方法是：insert
//这是环绕通知之前的部分
//添加信息
//这是后置通知！
//这是环绕通知之后的部分
//这是返回通知（在不产生异常时调用）
//被织入增强处理的目标方法为insert
```

### 基于注解的AOP实现

使用XML配置AOP时，需要在Spring的配置文件中使用大量的代码信息，不利于阅读与维护，所以Spring AOP允许使用基于注解的方式实现AOP，这样可以简化XML配置文中中的代码，Spring AOP提供的注解主要有以下：

|     注解名称      |     描述     |
| :---------------: | :----------: |
|     `@Aspect`     |   配置切面   |
|    `@Pointcut`    |  配置切入点  |
|     `@Before`     | 配置前置通知 |
|     `@After`      | 配置后置通知 |
|     `@Around`     | 配置环绕通知 |
| `@AfterReturning` | 配置返回通知 |
| `@AfterThrowing`  | 配置异常通知 |

按照惯例，先来个例子：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:aop="http://www.springframework.org/schema/aop"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
       http://www.springframework.org/schema/beans/spring-beans.xsd
        http://www.springframework.org/schema/aop
        http://www.springframework.org/schema/aop/spring-aop.xsd">
    <bean name="userDao" class="com.taytay.demo3.impl.UserDaoImpl"/>
    <bean name="AnnoAdvice" class="com.taytay.demo4.AnnoAdvice"/>
    <aop:aspectj-autoproxy/>
</beans>
```

```java

package com.taytay.demo4;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.*;

@Aspect
public class AnnoAdvice {
    @Pointcut("execution(* com.taytay.demo3.impl.UserDaoImpl.*(..))")
    public void pointcut(){
    }
    @Before("pointcut()")
    public void before(JoinPoint joinPoint){
        System.out.println("前置信息");
        System.out.println("目标类是：" + joinPoint.getTarget());
        System.out.println("被增强的方法是：" + joinPoint.getSignature().getName());
    }
    @After("pointcut()")
    public void after(){
        System.out.println("这是后置通知！");
    }
    @AfterReturning("pointcut()")
    public void afterReturning(JoinPoint joinPoint){
        System.out.println("这是返回通知（在不产生异常时调用）");
        System.out.println("被织入增强处理的目标方法为" + joinPoint.getSignature().getName());
    }
    @Around("pointcut()")
    public Object around(ProceedingJoinPoint joinPoint) throws Throwable{
        System.out.println("这是环绕通知之前的部分");
        Object object = joinPoint.proceed();
        System.out.println("这是环绕通知之后的部分");
        return object;
    }
    @AfterThrowing("pointcut()")
    public void afterException(){
        System.out.println("这是异常后的通知！");
    }
}
```

```java
package com.taytay.demo3.impl;

import com.taytay.demo3.UserDao;

public class UserDaoImpl implements UserDao {

    @Override
    public void insert() {
        System.out.println("添加信息");
    }

    @Override
    public void delete() {
        System.out.println("删除信息");
    }

    @Override
    public void update() {
        System.out.println("更新信息");
    }

    @Override
    public void select() {
        System.out.println("查询信息");
    }
}
```

```java
package com.taytay.demo4;

import com.taytay.demo3.UserDao;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Test {
    public static void main(String[] args) {
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext-Anno.xml");
        UserDao userDao = context.getBean("userDao",UserDao.class);
        userDao.select();
        System.out.println();
        userDao.delete();
        System.out.println();
        userDao.update();
        userDao.insert();
    }
}
//这是环绕通知之前的部分
//前置信息
//目标类是：com.taytay.demo3.impl.UserDaoImpl@670002
//被增强的方法是：select
//查询信息
//这是环绕通知之后的部分
//这是后置通知！
//这是返回通知（在不产生异常时调用）
//被织入增强处理的目标方法为select

```

看代码量感觉比XML配置少多了。













