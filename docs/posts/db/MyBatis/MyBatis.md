---
date: 2022-10-01
---


# MyBatis
::: tip

什么是持久层？

:::

MyBatis是为了解决JDBC无法运用与大型，所以来先介绍一下JDBC。

## JDBC

`Java Database Connectivity` Java数据库连接。是一套用于执行SQL语句的Java API。应用程序根据这套API来操控数据库，以下是`JDBC`常用的接口

- `Driver`

- `DriverManager`
- `Connection`
- `Statement`
- `PreparedStatement`
- `ResultSet`





## MyBatis概述

MyBatis框架支持普通SQL查询、存储及高级映射的持久层框架，几乎消除了JDBC的冗余代码，可以使Java开发人员使用面向对象的编程思想来操作数据库。

MyBatis是一个`ORM`框架

> 什么是ORM？

> 对象关系映射(Object Relational Mapping)是一种为了解决面向对象和关系型数据库存在的互不匹配的现象的技术。



## MyBatis简单入门程序

不知道MyBatis是什么，或者不懂的，可以先从一个简单的入门程序来了解MyBatis。

## MyBatis的基本配置

### 基本对象

- `SqlSessionFactoryBuilder()`
- `SqlSessionFactory()`
- `SqlSession()`

`SqlSessionFactoryBuilder()` 创建 `SqlSessionFactory()`，`SqlSessionFactory()` 创建 `SqlSession()`

### 基本配置文件

- `<properties>`
- `<setting>`
- `<typeAliases>`
- `<environments>`
- `<mappers`



### 映射文件

- `<select>`
- `<insert>`
- `<update>`
- `<delete>`
- `<sql>`
- `<resultMap>`



## Dynamical SQL



## 关联映射和缓存



## 注解开发



