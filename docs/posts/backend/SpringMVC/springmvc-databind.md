---
title:SpringMVC数据绑定
---

[史上最全前端框架库汇总 - 知乎](https://zhuanlan.zhihu.com/p/333347987)

1、同步请求和异步请求的区别
同步请求：客户端向服务器发送请求-->等待服务器响应-->处理完毕返回，客户端浏览器没有做别的事情。
同步连接请求数据时，当数据还未请求成功之前，用户界面做任何操作都是无效的，都是不会响应的。只有当请求数据完毕之后，才会响应用户交互，所以通常会卡死主线程。

异步请求：通过事件触发请求-->服务器处理请求-->处理完毕返回，但是客户端浏览器可以接着做别的事情
当异步请求时，会有单独的子线程去请求数据，而主线程依然响应处理用户交互，所以此时用户交互得到处理，用户流畅操作，用户体验比较好，所以开发过程中最多的还是异步链接

同步——如果使用者在服务运行的过程中阻塞时崩溃了，当它重新启动时，将无法重新连接到正在进行的调用，所以响应丢失了。使用者必须重复调用过程，并且期望这次不会崩溃。
异步——如果使用者在发送了请求之后等待响应时崩溃了，当它重新启动时，可以继续等待响应，所以响应不会丢失。
2、GET请求和POST请求的区别
GET请求，请求直接跟在URL后，以问号开始。因为服务器以及参数都会出现在请求接口中，也就是请求参数也是接口的一部分，而POST请求在接口中只有服务器地址，而参数会作为请求提交给服务器。
因为GET请求会出现在请求接口中，所以信息容易被捕获，安全性低，POST请求参数封装在请求体中，作为二进制流进行传输，不易被捕获，安全性高。
GET在请求时，接口的字节数有限制，支持小数据的提交，而POST请求从理论上来讲没有限制性，虽然理论上对于GET请求与POST请求都可以提交请求，但是GET多用于从服务器请求数据，而POST多用于向服务器提交数据。





## 浏览器请求

GET

POST

PUT

DELETE

## 文本数据数据传参

- #### 普通参数

	```java
	@RequestMapping("/parm")
	@ResponseBody
	public String save(@RequestParam("name")String username, int age){
	    System.out.println("名字是 = >" + username);
	    System.out.println("年龄是 = >" + age);
	    System.out.println("saving ....");
	    return "{'module':'Parm save'}";
	}
	```

	`@RequestParam("name") String username`代表接受的name属性传递给username。如果属性名一样则无需添加，自动传递。

- #### 中文处理

	添加过滤器

	```java
	//在ServletContainersInitConfig中设置
	//乱码过滤
	    @Override
	    protected Filter[] getServletFilters() {
	        CharacterEncodingFilter filter = new CharacterEncodingFilter();
	        filter.setEncoding("UTF-8");
	        return new Filter[]{filter};
	    }
	```

	

- #### 数组参数

- #### 集合参数

- #### 对象参数

- 

```java
@RequestMapping("/pojoParm")
@ResponseBody
public String pojoParam(User user){
    System.out.println("pojo参数传递 user =>" + user);
    return "{'module':'pojo param'}";
}

@RequestMapping("/listParamforJSON")
@ResponseBody
public String listParamforJSON(@RequestBody List<String> list){
    System.out.println("pojo参数传递 user =>" + list);
    return "{'module':'list param'}";
}

@RequestMapping("/listPojoParamforJSON")
@ResponseBody
public String listPojoParamforJSON(List<User> list){
    System.out.println("pojo参数传递 user =>" + list);
    return "{'module':'listPojoParam'}";
}
```

## JSON格式数据传参

将类对象自动转换为JSON数据

```xml
<dependency>
    <groupId>com.fasterxml.jackson.core</groupId>
    <artifactId>jackson-databind</artifactId>
    <version>2.9.10.8</version>
</dependency>
```



```java
@Controller
@RequestMapping("/user")
public class UserController{
    @RequestMapping("/parM")
    @ResponseBody
    public User save(){
        User user = new User();
        user.setRepo("dsad");
        user.setShop("dsad");
        return user;
    }
}
```

## 类型转换器