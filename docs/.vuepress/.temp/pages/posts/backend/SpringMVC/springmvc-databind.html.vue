<template><div><p><a href="https://zhuanlan.zhihu.com/p/333347987" target="_blank" rel="noopener noreferrer">史上最全前端框架库汇总 - 知乎<ExternalLinkIcon/></a></p>
<p>1、同步请求和异步请求的区别
同步请求：客户端向服务器发送请求--&gt;等待服务器响应--&gt;处理完毕返回，客户端浏览器没有做别的事情。
同步连接请求数据时，当数据还未请求成功之前，用户界面做任何操作都是无效的，都是不会响应的。只有当请求数据完毕之后，才会响应用户交互，所以通常会卡死主线程。</p>
<p>异步请求：通过事件触发请求--&gt;服务器处理请求--&gt;处理完毕返回，但是客户端浏览器可以接着做别的事情
当异步请求时，会有单独的子线程去请求数据，而主线程依然响应处理用户交互，所以此时用户交互得到处理，用户流畅操作，用户体验比较好，所以开发过程中最多的还是异步链接</p>
<p>同步——如果使用者在服务运行的过程中阻塞时崩溃了，当它重新启动时，将无法重新连接到正在进行的调用，所以响应丢失了。使用者必须重复调用过程，并且期望这次不会崩溃。
异步——如果使用者在发送了请求之后等待响应时崩溃了，当它重新启动时，可以继续等待响应，所以响应不会丢失。
2、GET请求和POST请求的区别
GET请求，请求直接跟在URL后，以问号开始。因为服务器以及参数都会出现在请求接口中，也就是请求参数也是接口的一部分，而POST请求在接口中只有服务器地址，而参数会作为请求提交给服务器。
因为GET请求会出现在请求接口中，所以信息容易被捕获，安全性低，POST请求参数封装在请求体中，作为二进制流进行传输，不易被捕获，安全性高。
GET在请求时，接口的字节数有限制，支持小数据的提交，而POST请求从理论上来讲没有限制性，虽然理论上对于GET请求与POST请求都可以提交请求，但是GET多用于从服务器请求数据，而POST多用于向服务器提交数据。</p>
<h2 id="浏览器请求" tabindex="-1"><a class="header-anchor" href="#浏览器请求" aria-hidden="true">#</a> 浏览器请求</h2>
<p>GET</p>
<p>POST</p>
<p>PUT</p>
<p>DELETE</p>
<h2 id="文本数据数据传参" tabindex="-1"><a class="header-anchor" href="#文本数据数据传参" aria-hidden="true">#</a> 文本数据数据传参</h2>
<ul>
<li>
<h4 id="普通参数" tabindex="-1"><a class="header-anchor" href="#普通参数" aria-hidden="true">#</a> 普通参数</h4>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/parm"</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@ResponseBody</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">save</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestParam</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">)</span><span class="token class-name">String</span> username<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"名字是 = >"</span> <span class="token operator">+</span> username<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"年龄是 = >"</span> <span class="token operator">+</span> age<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"saving ...."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token string">"{'module':'Parm save'}"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>@RequestParam(&quot;name&quot;) String username</code>代表接受的name属性传递给username。如果属性名一样则无需添加，自动传递。</p>
</li>
<li>
<h4 id="中文处理" tabindex="-1"><a class="header-anchor" href="#中文处理" aria-hidden="true">#</a> 中文处理</h4>
<p>添加过滤器</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//在ServletContainersInitConfig中设置</span>
<span class="token comment">//乱码过滤</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token class-name">Filter</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">getServletFilters</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">CharacterEncodingFilter</span> filter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CharacterEncodingFilter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        filter<span class="token punctuation">.</span><span class="token function">setEncoding</span><span class="token punctuation">(</span><span class="token string">"UTF-8"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Filter</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span>filter<span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<h4 id="数组参数" tabindex="-1"><a class="header-anchor" href="#数组参数" aria-hidden="true">#</a> 数组参数</h4>
</li>
<li>
<h4 id="集合参数" tabindex="-1"><a class="header-anchor" href="#集合参数" aria-hidden="true">#</a> 集合参数</h4>
</li>
<li>
<h4 id="对象参数" tabindex="-1"><a class="header-anchor" href="#对象参数" aria-hidden="true">#</a> 对象参数</h4>
</li>
<li></li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/pojoParm"</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@ResponseBody</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">pojoParam</span><span class="token punctuation">(</span><span class="token class-name">User</span> user<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"pojo参数传递 user =>"</span> <span class="token operator">+</span> user<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token string">"{'module':'pojo param'}"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/listParamforJSON"</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@ResponseBody</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">listParamforJSON</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestBody</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> list<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"pojo参数传递 user =>"</span> <span class="token operator">+</span> list<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token string">"{'module':'list param'}"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/listPojoParamforJSON"</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@ResponseBody</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">listPojoParamforJSON</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">></span></span> list<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"pojo参数传递 user =>"</span> <span class="token operator">+</span> list<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token string">"{'module':'listPojoParam'}"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="json格式数据传参" tabindex="-1"><a class="header-anchor" href="#json格式数据传参" aria-hidden="true">#</a> JSON格式数据传参</h2>
<p>将类对象自动转换为JSON数据</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.fasterxml.jackson.core<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>jackson-databind<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>2.9.10.8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Controller</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/user"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserController</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/parM"</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@ResponseBody</span>
    <span class="token keyword">public</span> <span class="token class-name">User</span> <span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">User</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        user<span class="token punctuation">.</span><span class="token function">setRepo</span><span class="token punctuation">(</span><span class="token string">"dsad"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        user<span class="token punctuation">.</span><span class="token function">setShop</span><span class="token punctuation">(</span><span class="token string">"dsad"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> user<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="类型转换器" tabindex="-1"><a class="header-anchor" href="#类型转换器" aria-hidden="true">#</a> 类型转换器</h2>
</div></template>


