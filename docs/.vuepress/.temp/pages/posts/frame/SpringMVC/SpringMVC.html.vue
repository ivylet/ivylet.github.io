<template><div><h1 id="springmvc" tabindex="-1"><a class="header-anchor" href="#springmvc" aria-hidden="true">#</a> SpringMVC</h1>
<p>SpringMVC与Servlet</p>
<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2>
<h2 id="入门程序" tabindex="-1"><a class="header-anchor" href="#入门程序" aria-hidden="true">#</a> 入门程序</h2>
<p>快速开始</p>
<h2 id="基本类与配置" tabindex="-1"><a class="header-anchor" href="#基本类与配置" aria-hidden="true">#</a> 基本类与配置</h2>
<p>请求与响应</p>
<p>POST请求中文乱码</p>
<p>结构：</p>
<ul>
<li>com.taytay
<ul>
<li>config</li>
<li>controller</li>
<li>service</li>
<li>dao</li>
</ul>
</li>
</ul>
<h3 id="bean的加载机制" tabindex="-1"><a class="header-anchor" href="#bean的加载机制" aria-hidden="true">#</a> <code v-pre>Bean</code>的加载机制</h3>
<p>一般而言，</p>
<ul>
<li>SpringMVC相关<code v-pre>Bean</code>（表现层Bean）</li>
<li>Spirng控制的<code v-pre>Bean</code>
<ul>
<li>业务<code v-pre>Bean</code>（Service）</li>
<li>功能<code v-pre>Bean</code>（DataSource等）</li>
</ul>
</li>
</ul>
<p>扫描<code v-pre>Bean</code>时，避免Spring扫描到SpringMVC的<code v-pre>Bean</code>，有两种方法。</p>
<ul>
<li>
<p>直接扫描所需要的包名如  <code v-pre>@ComponentScan({&quot;com.taytay.service&quot;,&quot;com.taytay.dao&quot;})</code></p>
</li>
<li>
<p>全部扫描，但是指定排除项目</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@ComponentScan</span><span class="token punctuation">(</span>value<span class="token operator">=</span><span class="token string">"com.taytay"</span><span class="token punctuation">,</span>
               excludeFilters <span class="token operator">=</span> <span class="token annotation punctuation">@ComponentScan.Filter</span><span class="token punctuation">(</span>
              		type <span class="token operator">=</span> <span class="token class-name">FilterType</span><span class="token punctuation">.</span><span class="token constant">ANNOTATION</span><span class="token punctuation">,</span>
                   	 classes <span class="token operator">=</span> <span class="token class-name">Controller</span><span class="token punctuation">.</span><span class="token keyword">class</span>
               <span class="token punctuation">)</span>
              <span class="token punctuation">)</span>
		<span class="token comment">//按照注解排除结果</span>
		<span class="token comment">//扫描全部内容，但是排除以@Controller为注解的类</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>不区分Spring与SpringMVC</p>
<p><a href="https://blog.csdn.net/dreamweaver_zhou/article/details/77511745" target="_blank" rel="noopener noreferrer">注解和XML的区别,和优缺点<ExternalLinkIcon/></a></p>
</li>
</ul>
<p><code v-pre>Bean</code></p>
</div></template>


