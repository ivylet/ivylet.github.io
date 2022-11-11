<template><div><h1 id="mybatis" tabindex="-1"><a class="header-anchor" href="#mybatis" aria-hidden="true">#</a> MyBatis</h1>
<div class="custom-container tip">
<p class="custom-container-title">提示</p>
<p>什么是持久层？</p>
</div>
<p>MyBatis是为了解决JDBC无法运用与大型，所以来先介绍一下JDBC。</p>
<h2 id="jdbc" tabindex="-1"><a class="header-anchor" href="#jdbc" aria-hidden="true">#</a> JDBC</h2>
<p><code v-pre>Java Database Connectivity</code> Java数据库连接。是一套用于执行SQL语句的Java API。应用程序根据这套API来操控数据库，以下是<code v-pre>JDBC</code>常用的接口</p>
<ul>
<li>
<p><code v-pre>Driver</code></p>
</li>
<li>
<p><code v-pre>DriverManager</code></p>
</li>
<li>
<p><code v-pre>Connection</code></p>
</li>
<li>
<p><code v-pre>Statement</code></p>
</li>
<li>
<p><code v-pre>PreparedStatement</code></p>
</li>
<li>
<p><code v-pre>ResultSet</code></p>
</li>
</ul>
<h2 id="mybatis概述" tabindex="-1"><a class="header-anchor" href="#mybatis概述" aria-hidden="true">#</a> MyBatis概述</h2>
<p>MyBatis框架支持普通SQL查询、存储及高级映射的持久层框架，几乎消除了JDBC的冗余代码，可以使Java开发人员使用面向对象的编程思想来操作数据库。</p>
<p>MyBatis是一个<code v-pre>ORM</code>框架</p>
<blockquote>
<p>什么是ORM？</p>
</blockquote>
<blockquote>
<p>对象关系映射(Object Relational Mapping)是一种为了解决面向对象和关系型数据库存在的互不匹配的现象的技术。</p>
</blockquote>
<h2 id="mybatis简单入门程序" tabindex="-1"><a class="header-anchor" href="#mybatis简单入门程序" aria-hidden="true">#</a> MyBatis简单入门程序</h2>
<p>不知道MyBatis是什么，或者不懂的，可以先从一个简单的入门程序来了解MyBatis。</p>
<h2 id="mybatis的基本配置" tabindex="-1"><a class="header-anchor" href="#mybatis的基本配置" aria-hidden="true">#</a> MyBatis的基本配置</h2>
<h3 id="基本对象" tabindex="-1"><a class="header-anchor" href="#基本对象" aria-hidden="true">#</a> 基本对象</h3>
<ul>
<li><code v-pre>SqlSessionFactoryBuilder()</code></li>
<li><code v-pre>SqlSessionFactory()</code></li>
<li><code v-pre>SqlSession()</code></li>
</ul>
<p><code v-pre>SqlSessionFactoryBuilder()</code> 创建 <code v-pre>SqlSessionFactory()</code>，<code v-pre>SqlSessionFactory()</code> 创建 <code v-pre>SqlSession()</code></p>
<h3 id="基本配置文件" tabindex="-1"><a class="header-anchor" href="#基本配置文件" aria-hidden="true">#</a> 基本配置文件</h3>
<ul>
<li><code v-pre>&lt;properties&gt;</code></li>
<li><code v-pre>&lt;setting&gt;</code></li>
<li><code v-pre>&lt;typeAliases&gt;</code></li>
<li><code v-pre>&lt;environments&gt;</code></li>
<li><code v-pre>&lt;mappers</code></li>
</ul>
<h3 id="映射文件" tabindex="-1"><a class="header-anchor" href="#映射文件" aria-hidden="true">#</a> 映射文件</h3>
<ul>
<li><code v-pre>&lt;select&gt;</code></li>
<li><code v-pre>&lt;insert&gt;</code></li>
<li><code v-pre>&lt;update&gt;</code></li>
<li><code v-pre>&lt;delete&gt;</code></li>
<li><code v-pre>&lt;sql&gt;</code></li>
<li><code v-pre>&lt;resultMap&gt;</code></li>
</ul>
<h2 id="dynamical-sql" tabindex="-1"><a class="header-anchor" href="#dynamical-sql" aria-hidden="true">#</a> Dynamical SQL</h2>
<h2 id="关联映射和缓存" tabindex="-1"><a class="header-anchor" href="#关联映射和缓存" aria-hidden="true">#</a> 关联映射和缓存</h2>
<h2 id="注解开发" tabindex="-1"><a class="header-anchor" href="#注解开发" aria-hidden="true">#</a> 注解开发</h2>
</div></template>


