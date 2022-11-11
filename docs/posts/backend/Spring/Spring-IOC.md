---
title: Spring-IOC容器
---

## Spring容器

使用者之前使用B对象的时候都需要自己去创建和组装，而现在这些创建和组装都交给spring容器去给 完成了，使用者只需要去spring容器中查找需要使用的对象就可以了；这个过程中B对象的创建和组装 过程被反转了，之前是使用者自己主动去控制的，现在交给spring容器去创建和组装了，对象的构建过 程被反转了，所以叫做控制反转；IOC是是面相对象编程中的一种设计原则，主要是为了降低系统代码 的耦合度，让系统利于维护和扩展。



## Bean的管理

```xml
<bean id=" " class = "" scope=" " init-method=" " destroy-method=" "><\bean>
```

### `Bean`标签基本配置

- `id` Bean实例在`Spring`容器中的唯一标识  
- `class` Bean的全限定名称

### `Bean`标签的范围配置

- `scope`:指对象的作用范围,取值如下:
	- `singleton` 默认值,单例的
	- `prototype` 多例的



`singleton` 默认值,单例的
`Bean`的实例化个数: 1
`Bean`的实例化时机: 当`Spring`核心文件被加载时,实例化配置的`Bean`实例
`Bean`的生命周期: 

1. 对象创建: 当应用加载,创建容器时,对象就被创建了.(应用初始化时创建)
2. 对象运行: 只要容器在,对象一直活着.
3. 对象销毁:当应用卸载,销毁容器时,对象就被销毁了.(与容器共存亡,容器创建,`Bean`创建,容器销毁,`Bean`销毁)



`prototype` 多例的
`Bean`的实例化个数: 多个
`Bean`的实例化时机: 当调用`getBean()`方法时实例化`Bean`
`Bean`的生命周期: 

1. 对象创建:当使用对象时,创建新的对象实例.(使用时创建)
2. 对象运行:只要对象在使用中,就一直活着.
3. 对象销毁:当对象长时间不用时,被`Java`的垃圾回收机制回收了.



### `Bean`生命周期配置

`init-method`:指定类中的初始化方法名称
`destroy-method`:指定类中销毁方法名称

### `Bean`实例化三种方式

- 无参*构造*方法实例化
- 工厂*静态*方法实例化
- 工厂*实例*方法实例化

无参构造方法实例化

工厂*静态*方法实例化

```xml
//XML文件配置
<bean id = "noCanCreate" class="com.taytay.factory.StaticFactory" factory-method="getUserDao"> </bean>
```

StaticFactory.java配置

```java
public class StaticFactory {  
    public static UserDao getUserDao(){  
        return new UserDaoImpl();  
    }  
}
```


工厂*实例*方法实例化
//XML文件配置

```xml
<bean id="factory" class="com.taytay.factory.DynamicFactory"> </bean>  
<bean id="userDao" factory-bean="factory" factory-method="getUserDao"> </bean>
```

DynamicFactory.java配置

```java
public class DynamicFactory {  
    public UserDao getUserDao(){  
        return new UserDaoImpl();  
    }  
}
```

### `Bean`依赖注入

举例,因为`UserService`和`UserDao`都在`Spring`容器中,需要使用`UserService`类和`UserDao`的方法,可以在容器中将`UserDao`注入`UserService`,然后再获取`UserService`类进行使用.

不提供依赖注入时,是将`UserService`和`UserDao`在程序代码中进行组装,能否直接在`Spring`容器中就组装呢?因为实际操作的只有`UserService`.

提供依赖注入后,只需要获取`UserService`实例,再通过这个实例调用`UserDao`的方法.

依赖注入(`Dependency Injection`): 是`Spring`框架核心`IOC`的具体实现
降低耦合度,但并不是不需要耦合.主要是降低它们之间的依赖程度.

所以要怎么在容器中组装呢?

#### 基于XML的装配

- 构造方法
- `set`方法

构造方法

```java
public class UserServiceImpl implements UserService{
	private UserDao userDao;
	public void save(){  
	    userDao.save();  
	    System.out.println("save running");  
	}  
	public UserServiceImpl(UserDao userDao){  
	    this.userDao = userDao;  
	}  
	public UserServiceImpl(){  
	}
}	
```

```xml
<bean id = "userDao" class = "com.dao.UserDaoImpl"> </bean>
<bean id="userService" class="com.service.impl.UserServiceImpl">   
    <constructor-arg name="userDao" ref="userDao"></constructor-arg>  
</bean>
```

`set`方法

```java
public class UserServiceImpl implements UserService{
	private UserDao userDao;
    
	public void setUserDao(UserDao userDao){
		this.userDao = userDao;
	}
    
	public void save(){
		userDao.save();//使用userDao的save方法;
	}
}
```

```xml
<bean id = "userDao" class = "com.dao.UserDaoImpl"> </bean>
<bean id = "userService" class = "com.service.UserServiceImpl">
	<property name = "userDao" ref = "userDao"> </property>
<\bean>
```

::: tip

p命名空间注入
本质也是set注入,不过比直接set注入更方便.主要用于注入过多的时候.

首先引入p命名空间

```xml
<xmlns:p="http://www.springframework.org/schema/p">
```

也要修改注入方式

```xml
<bean id = "UserService" class = "com.service.UserService" p:userDao-ref = "userDao"/>
```

:::



##### `Bean`的依赖注入的数据类型

前边都是注入引用的`Bean`,除了对象的引用可以注入,普通数据类型,集合等都可以在容器中进行注入.为什么要设定这种呢?因为有时候只需要对象的其中几个变量,无需全部注入.

注入数据的三种数据类型:

- 普通数据类型
- 引用数据类型
- 集合数据类型

```java
public class UserServiceImpl{
    //普通数据类型
    private String name;
    private int age;
    //引用数据类型
    private UserDao userDao;
    //集合数据类型
    private List<String> list;
    //集合引用数据类型
    private List<User> userList;
    private Map<String,User> userMap;
    
}
```

配置文件

```xml
<bean id="userDao" class="com.taytay.dao.impl.UserDaoImpl"></bean>
<bean id="user1" class="com.taytay.pojo.User">
    <property name="name" value="zhangsan"></property>
    <property name="age" value="18"></property>
</bean>
<bean id="user2" class="com.taytay.pojoUser">
    <property name="name" value="lisi"></property>
    <property name="age" value="20"></property>
</bean>

<bean id="userService" class="com.taytay.Service.impl.UserServiceImpl">
    <!-- 普通类型数据-->
	<property name="username" value="张三"/>
	<property name="age" value="18"/>
    <!-- 引用类型数据-->
	<property name="userDao" ref="userDao"/>
    <!-- 集合类型数据-->
     <property name="list">
            <list>
                <value>aaa</value>
                <value>bbb</value>
                <value>ccc</value>
            </list>
            <!-- 另一种方法，需要添加第三方约束 -->
            <!-- xmlns:util="http://www.springframework.org/schema/util" -->
            <!-- http://www.springframework.org/schema/util -->
            <!-- http://www.springframework.org/schema/util/spring-util.xsd -->
            <!--<util:list list-class="java.util.ArrayList">
                <value>aaa</value>
                <value>bbb</value>
                <value>ccc</value>
            </util:list>-->
     </property>
     <property name="set">
            <list>
                <value>ddd</value>
                <value>eee</value>
                <value>fff</value>
            </list>
     </property>
    
     <property name="userMap">
            <map>
                <entry key="k_user1" value-ref="user1"></entry>
                <entry key="k_user2" value-ref="user2"></entry>
            </map>
     </property>
     <property name="userList">
            <list>
                <ref bean="user1"></ref>
                <ref bean="user2"></ref>
            </list>
     </property>
        <property name="userMap">
            <map>
                <entry key="k_user1" value-ref="user1"></entry>
                <entry key="k_user2" value-ref="user2"></entry>
            </map>
        </property>
        <property name="properties">
            <props>
                <prop key="properties_name">wangwu</prop>
                <prop key="properties_age">25</prop>
            </props>
        </property>
</bean> 
```

#### 基于注解的装配

实际开发中，如果Bean的数量过多，会导致XML文件臃肿，所以Spring提供了注解，通过注解方式也可以实现Bean的装配。以下是常用的注解：

| 注解             | 说明                                               |
| ---------------- | -------------------------------------------------- |
| `@Component`     | 用于实例化`Bean`                                   |
| `@Controller`    | 实例化`Bean`，但是标记为Controller层               |
| `@Service`       | 实例化`Bean`，但是标记为Service层                  |
| `@Repository`    | 实例化`Bean`，但是标记为DAO层                      |
| `@Autowired`     | 指定要自动装配的对象                               |
| `@Qualifier`     | 指定要自动装配的对象名称，通常与@Autowired联合使用 |
| `@Resource`      | 指定要注入的对象                                   |
| `@Value`         | 指定要注入的值                                     |
| `@Scope`         | 标注`Bean`的作用范围                               |
| `@PostConstruct` | `Bean`初始化使用的方法                             |
| `@PreDestroy`    | `Bean`销毁后使用的方法                             |

来个案例：

```java
package com.taytay.pojo;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component("User")
@Scope("singleton")
public class User {
    @Value("1")
    private int uid;
    @Value("张三")
    private String uname;
    @Value("技术部")
    private String apartment;

    public User() {
    }

    public int getUid() {
        return uid;
    }

    public void setUid(int uid) {
        this.uid = uid;
    }

    public String getUname() {
        return uname;
    }

    public void setUname(String uname) {
        this.uname = uname;
    }
}
```



#### 自动装配









## Spring配置文件引入

实际开发中,`Spring`的配置内容非常多,这就导致`Spring`的配置文件非常的臃肿,所以可以通过拆解的方式将不同模块的内容分到不同的配置文件中,这种用法为:

```XML
<import resource="applicationContext-xxx.xml"/>
```

## Spring的重点配置

```XML
<bean>
	id 属性:容器中Bean的唯一标识
	class 属性:要实例化的Bean的全限定名
	scope 属性:作用范围,是单例还是多例
	<property>
		name 属性:属性名称
		value 属性:注入的普通属性值
		ref 属性:注入的对象引用值
		<list>标签
		<map>标签
		<properties>标签
		<constructor-arg>标签 构造方法注入
<import> 导入其他的配置文件
```

## Spring相关API


#### ApplicationContextd的继承体系

接口类型,代表应用上下文,可以通过其实例获得`Spring`容器中的`Bean`对象.


`ClassPathApplicationContext`
从类的根路径下加载配置文件

`FileSystemXmlApplicationContext`
文件系统地址,从文件磁盘地址获取配置文件

`AnnotationConfigApplicationContext`
使用注解配置容器对象时,需要此类来创建`Spring`容器,用其读取注解

#### `getBean`方法

```Java
public Object getBean(String name) throws BeansException{
	assertBeanFactoryActive();
	return getBeanFactory.getBean(name);
}
public <T> T getBean(Class<T> requiredType) throws BeanException{
	assertBeanFactoryActive();
	return getBeanFactory.getBean(requiredType);
}
```

```java
ApplicationContext app = new ClasspathXmlContext("xml文件")
app.getBean(id)
```

##