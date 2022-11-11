---
icon: edit
date: 2022-09-13
tag:
	- Spring
category:
  - 学习
  - 生活
star: true
sidebarDepth: 2
---


这是摘要
<!-- more -->

# Spring

## 初识Spring

### 什么是Spring?

分层的Java EE应用full-stack轻量级开源框架,以IOC和AOP为内核

IOC (Inverse Of Control:反转控制)
AOP (Aspect Oriented Programming:面向切面编程)

提供了展现层 SpringMVC和持久层 Spring JDBCTemplate 以及业务层事务管理等,整合了许多著名第三方框架.

### 发展历程
EJB1.0
EJB1.0
EJB1.0
EJB1.0
EJB1.0
EJB1.0

### 优势是什么?
- 方便解耦，简化开发
通过Spring提供的IoC容器，我们可以将对象之间的依赖关系交由Spring进行控制，避免硬编码所
造成的过度程序耦合。有了Spring，用户不必再为单实例模式类、属性文件解析等这些很底层的需
求编写代码，可以更专注于上层的应用。

- AOP编程的支持
通过Spring提供的AOP功能，方便进行面向切面的编程，许多不容易用传统OOP实现的功能可以通过
AOP轻松应付。

- 声明事物的支持
在Spring中，我们可以从单调烦闷的事务管理代码中解脱出来，通过声明式方式灵活地进行事务的
管理，提高开发效率和质量。

- 方便程序的测试
可以用非容器依赖的编程方式进行几乎所有的测试工作，在Spring里，测试不再是昂贵的操作，
而是随手可做的事情。例如：Spring对Junit4支持，可以通过注解方便的测试Spring程序。

- 方便集成各种优秀框架
Spring不排斥各种优秀的开源框架，相反，Spring可以降低各种框架的使用难度，Spring提供了
对各种优秀框架（如Struts,Hibernate、Hessian、Quartz）等的直接支持。

- 降低Java EE API的使用难度
Spring对很多难用的Java EE API（如JDBC，JavaMail，远程调用等）提供了一个薄薄的封装层，
通过Spring的简易封装，这些Java EE API的使用难度大为降低。

- Java 源码是经典学习范例
Spring的源码设计精妙、结构清晰、匠心独用，处处体现着大师对Java设计模式灵活运用以及对
Java技术的高深造诣。Spring框架源码无疑是Java技术的最佳实践范例。如果想在短时间内迅速
提高自己的Java技术水平和应用开发水平，学习和研究Spring源码将会使你收到意想不到的效果。

### 体系结构
::: center
![construction](/imgs/construction.jpg)
:::
### Spring快速入门
### 开发步骤
创建对象时,通过`getbean(id)`方法获取所需的对象,
`getbean(id)`通过读取`XML`文件以及id来获得对象的全名,返回对应对象来完成对象创建.`XML`配置文件中的内容指向目的对象类.

解耦就是改变类时无序更改全部代码,只需更改`XML`中配置文件指向内容即可.

1. 导入Spring开发基本包坐标
2. 编写Dao接口和实现类
3. 创建Spring核心配置文件
4. 在Spring配置文件中配置`UserDaompl`
5. 使用Spring的API获得Bean实例

简化后就是:

1. 导入坐标
2. 创建Bean
3. 创建`applicationContext.xml`
4. 在配置文件中进行配置
5. 创建`ApplicationContext`对象`geiBean`









###

