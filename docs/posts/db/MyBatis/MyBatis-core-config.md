---
title: MyBatis核心配置
---

pojo

```java
package com.taytay.pojo;

public class User {
    private int uid;
    private String uname;
    private String apartment;
    private String degree;
    private String salaryLevel;

    public User() {}

    public int getUid() {return uid;}

    public void setUid(int uid) {this.uid = uid;}

    public String getUname() {return uname;}

    public void setUname(String uname) {this.uname = uname;}

    public String getApartment() {return apartment;}

    public void setApartment(String apartment) {this.apartment = apartment;}

    public String getDegree() {return degree;}

    public void setDegree(String degree) {this.degree = degree;}

    public String getSalaryLevel() {return salaryLevel;}

    public void setSalaryLevel(String salaryLevel) {this.salaryLevel = salaryLevel;}
}
```

Mapper

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD mapper 3.0//EN"
        "http://mybatis.org/schema/mybatis-3-mapper.dtd">
<!--查询操作-->
<mapper namespace="com.taytay.pojo.User">
    <select id="findById" parameterType="int" resultType="com.taytay.pojo.User">
        select * from users where uid = #{id}
    </select>
<!--    增加操作-->
    <insert id="addUser" parameterType="com.taytay.pojo.User">
        insert into users(uid,uname,uage)values(#{uid},#{uname},#{uage})
    </insert>
<!--    更改操作-->
    <update id="updateUser" parameterType="com.taytay.pojo.User">
        update users set uname = #{uname},uage = #{uage} where uid = #{uid}
    </update>
<!--    删除操作-->
    <delete id="deleteUser" parameterType="Integer">
        delete from users where uid = #{uid}
    </delete>
    <sql id="userColumns">${alias}.uid,${alias}.uname,${alias}.uage</sql>
</mapper>
```

mybatis-config

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE configuration
        PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-config.dtd">

<configuration>
    <properties resource="db.properties"> </properties>
    <environments default="development">
        <environment id="development">
            <transactionManager type="JDBC"> </transactionManager>
            <dataSource type="POOLED">
                <property name="driver" value="${mysql.driver}"/>
                <property name="url" value="${mysql.url}"/>
                <property name="username" value="${mysql.username}"/>
                <property name="password" value="${mysql.password}"/>
            </dataSource>
        </environment>
    </environments>
    <mappers>
        <mapper resource="mapper/UserMapper.xml"/>
    </mappers>
</configuration>
```

db.proprerties

```properties
mysql.driver = com.mysql.cj.jdbc.Driver
mysql.url = jdbc:mysql://localhost:3306/mybatis?serverTimezone=Asia/Shanghai&characterEncoding=utf8&userUnicode=true&useSSL=false
mysql.username = root
mysql.password = root
```

test.java

```java
package com.taytay;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.junit.Test;
import com.taytay.pojo.User;
import java.io.IOException;
import java.io.Reader;

public class UserTest {
    @Test
    public void userFindByIdTest(){
        String resources = "mybatis-config.xml";
        Reader reader = null;
        try {
            reader = Resources.getResourceAsReader(resources);
        }catch (IOException e){
            e.printStackTrace();
        }
        SqlSessionFactory sqlMapper = new SqlSessionFactoryBuilder().build(reader);
        SqlSession session = sqlMapper.openSession();
        User user = session.selectOne("addUser",2);
        System.out.println(user.getUname());
        session.close();
    }
}
```

