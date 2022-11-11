<template><div><h2 id="什么是反射" tabindex="-1"><a class="header-anchor" href="#什么是反射" aria-hidden="true">#</a> 什么是反射</h2>
<div class="custom-container tip">
<p class="custom-container-title">提示</p>
<p>动态语言</p>
<p>运行时可以改变自身结构。</p>
<p>静态语言</p>
<p>运行时结构不可变。</p>
</div>
<p>让Java变成动态语言</p>
<p>Reflection（反射）是Java语言被视为动态语言的关键，反射机制允许程序在执行期间借助于Reflection API获取类的任何内部信息，并且能够操作任意对象的内部属性及方法。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">Class</span> c <span class="token operator">=</span> <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">"java.lang.String"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>加载完类后，在堆内存的方法区产生了一个Class类型的对象（一个类只有一个Class对象），这个对象包含了完整的类的结构信息，我们可以通过这个对象看到类的结构。</p>
<p>正常创建对象方式：引入需要的&quot;包类&quot;名称 -&gt; 通过new实例化 -&gt; 获取实例化对象</p>
<p>反射方式：   实例化对象 -&gt; getClass()方法 -&gt; 得到完整的&quot;包类&quot;名称</p>
<h3 id="反射的优点与缺点" tabindex="-1"><a class="header-anchor" href="#反射的优点与缺点" aria-hidden="true">#</a> 反射的优点与缺点</h3>
<h4 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h4>
<p>可以实现动态创建对象和编译，体现出灵活性。</p>
<h4 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点</h4>
<p>对性能有影响，使用反射属于解释操作，反射操作慢于直接执行相同操作</p>
<h3 id="反射主要api" tabindex="-1"><a class="header-anchor" href="#反射主要api" aria-hidden="true">#</a> 反射主要API</h3>
<ul>
<li>java.lang.Class;代表一个类</li>
<li>java.lang.reflect.Method;代表类的方法</li>
<li>java.lang.reflect.Field;代表类的成员变量</li>
<li>java.lang.reflect.Constructor;代表类的构造器</li>
<li>.....</li>
</ul>
<p>一个类在内存中只有一个对象对象</p>
<p>类在被加载后，类的所有东西都会被封装到Class对象中</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>    <span class="token class-name">Student</span> student <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StudentImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Class</span> c1 <span class="token operator">=</span> student<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Class</span> c2 <span class="token operator">=</span> student<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Class</span> c3 <span class="token operator">=</span> student<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c1<span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c2<span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c3<span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 2125039532</span>
	<span class="token comment">// 2125039532</span>
	<span class="token comment">// 2125039532</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Object类有getClass()方法，返回值的类型为一个Class类。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token class-name">Class</span> <span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


