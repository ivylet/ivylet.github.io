---
title: SringMVC
date: 2022-09-29
---

# SpringMVC

SpringMVC与Servlet



## 概述

## 入门程序

快速开始





## 基本类与配置



请求与响应

POST请求中文乱码



结构：

- com.taytay
	- config
	- controller
	- service
	- dao



### `Bean`的加载机制

一般而言，

- SpringMVC相关`Bean`（表现层Bean）
- Spirng控制的`Bean`
	- 业务`Bean`（Service）
	- 功能`Bean`（DataSource等）



扫描`Bean`时，避免Spring扫描到SpringMVC的`Bean`，有两种方法。

- 直接扫描所需要的包名如  `@ComponentScan({"com.taytay.service","com.taytay.dao"})`

- 全部扫描，但是指定排除项目
	```java
	@ComponentScan(value="com.taytay",
	               excludeFilters = @ComponentScan.Filter(
	              		type = FilterType.ANNOTATION,
	                   	 classes = Controller.class
	               )
	              )
			//按照注解排除结果
			//扫描全部内容，但是排除以@Controller为注解的类
	```

- 不区分Spring与SpringMVC的`Bean`

	[注解和XML的区别,和优缺点](https://blog.csdn.net/dreamweaver_zhou/article/details/77511745)









`Bean`