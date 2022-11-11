---
title: Spring配置数据源
---





```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context.xsd">
    <!--组件扫描-->
    <context:component-scan base-package="com.taytay"/>
    <!--context:property-->
    <!--引入db.properties文件到spring容器中-->
    <context:property-placeholder location="jdbc.properties"/>
    <bean id="dataSource" class="org.springframework.jdbc.datasource.DriverManagerDataSource">
        <property name="driverClassName" value="${jdbc.driver}"/>
        <property name="url" value="${jdbc.url}"/>
        <property name="username" value="${jdbc.username}"/>
        <property name="password" value="${jdbc.password}"/>
    </bean>
    <bean id="jdbcTemplate" class="org.springframework.jdbc.core.JdbcTemplate">
        <property name="dataSource" ref="dataSource"/>
    </bean>
    <bean id="userDao" class="com.taytay.dao.impl.UserDaoImpl">
        <property name="jdbcTemplate" ref="jdbcTemplate"/>
    </bean>
</beans>
```

```properties
jdbc.driver = com.mysql.jdbc.Driver; 
jdbc.url =jdbc:mysql://localhost:3306/spring?serverTimezone=Asia/Shanghai&amp;characterEncoding=utf-8&amp;userUnicode=true&amp;;
jdbc.username =  root;
jdbc.password = root;
```





## Spring配置数据源

### 数据源(连接池)作用

提高程序性能,简化操作,

事先实例化数据源,初始化部分连接资源,

常见的数据源:`DBCP` `CP30` `Duird`




### 数据源开发步骤

