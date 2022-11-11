<template><div><h1 id="vue2-x" tabindex="-1"><a class="header-anchor" href="#vue2-x" aria-hidden="true">#</a> Vue2.x</h1>
<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2>
<ul>
<li>通过<code v-pre>&lt;scripte&gt;</code>引用</li>
</ul>
<p>版本:</p>
<ul>
<li>生产版本
不含警告信息(vue.min.js)</li>
<li>开发版本
含有警告信息(vue.js)</li>
</ul>
<p>标签体与标签</p>
<h2 id="模板语法" tabindex="-1"><a class="header-anchor" href="#模板语法" aria-hidden="true">#</a> 模板语法</h2>
<p>Vue.js 使用了基于 HTML 的模板语法，允许开发者声明式地将 DOM 绑定至底层 Vue 实例的数据。所有 Vue.js 的模板都是合法的 HTML，所以能被遵循规范的浏览器和 HTML 解析器解析。</p>
<p>在底层的实现上，Vue 将模板编译成虚拟 DOM 渲染函数。结合响应系统，Vue 能够智能地计算出最少需要重新渲染多少组件，并把 DOM 操作次数减到最少。</p>
<p>如果你熟悉虚拟 DOM 并且偏爱 JavaScript 的原始力量，你也可以不用模板，<a href="https://v2.cn.vuejs.org/v2/guide/render-function.html" target="_blank" rel="noopener noreferrer">直接写渲染 (render) 函数<ExternalLinkIcon/></a>，使用可选的 JSX 语法。</p>
<h3 id="插值语法" tabindex="-1"><a class="header-anchor" href="#插值语法" aria-hidden="true">#</a> 插值语法</h3>
<h4 id="文本" tabindex="-1"><a class="header-anchor" href="#文本" aria-hidden="true">#</a> 文本</h4>
<p>数据绑定最常见的形式是使用<code v-pre>Mustache</code>语法的文本插值:</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>Message: {{ msg }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Mustache 标签将会被替代为对应数据对象上 <code v-pre>msg</code> property 的值。无论何时，绑定的数据对象上 <code v-pre>msg</code> property 发生了改变，插值处的内容都会更新。</p>
<p>通过使用 <a href="https://v2.cn.vuejs.org/v2/api/#v-once" target="_blank" rel="noopener noreferrer">v-once 指令<ExternalLinkIcon/></a>，你也能执行一次性地插值，当数据改变时，插值处的内容不会更新。但请留心这会影响到该节点上的其它数据绑定：即一次赋值，不再改变。</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">v-once</span><span class="token punctuation">></span></span>这个命令不会被改变: {{ msg }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="原始html" tabindex="-1"><a class="header-anchor" href="#原始html" aria-hidden="true">#</a> 原始HTML</h4>
<p>双大括号会将数据解释为普通文本，而非 HTML 代码。为了输出真正的 HTML，你需要使用 <a href="https://v2.cn.vuejs.org/v2/api/#v-html" target="_blank" rel="noopener noreferrer"><code v-pre>v-html</code> 指令<ExternalLinkIcon/></a>：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Using mustaches: {{ rawHtml }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Using v-html directive: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">v-html</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>rawHtml<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Using mustaches: &lt;span style=&quot;color: red&quot;&gt;This should be red.&lt;/span&gt;</p>
<p>Using v-html directive: <span style="color: red">This should be red.</span></p>
<p>这个 <code v-pre>span</code> 的内容将会被替换成为 property 值 <code v-pre>rawHtml</code>，直接作为 HTML——会忽略解析 property 值中的数据绑定。注意，你不能使用 <code v-pre>v-html</code> 来复合局部模板，因为 Vue 不是基于字符串的模板引擎。反之，对于用户界面 (UI)，组件更适合作为可重用和可组合的基本单位。</p>
<div class="custom-container warning">
<p class="custom-container-title">注意</p>
<p>你的站点上动态渲染的任意 HTML 可能会非常危险，因为它很容易导致 <a href="https://en.wikipedia.org/wiki/Cross-site_scripting" target="_blank" rel="noopener noreferrer">XSS 攻击<ExternalLinkIcon/></a>。请只对可信内容使用 HTML 插值，<strong>绝不要</strong>对用户提供的内容使用插值。</p>
</div>
<h4 id="attribute-html-属性" tabindex="-1"><a class="header-anchor" href="#attribute-html-属性" aria-hidden="true">#</a> Attribute(HTML 属性)</h4>
<p>Mustache 语法不能作用在 HTML attribute 上，遇到这种情况应该使用 <a href="https://v2.cn.vuejs.org/v2/api/#v-bind" target="_blank" rel="noopener noreferrer"><code v-pre>v-bind</code> 指令<ExternalLinkIcon/></a>：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dynamicId<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>对于布尔 attribute (它们只要存在就意味着值为 <code v-pre>true</code>)，<code v-pre>v-bind</code> 工作起来略有不同，在这个例子中：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>disabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isButtonDisabled<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果 <code v-pre>isButtonDisabled</code> 的值是 <code v-pre>null</code>、<code v-pre>undefined</code> 或 <code v-pre>false</code>，则 <code v-pre>disabled</code> attribute 甚至不会被包含在渲染出来的 <code v-pre>&lt;button&gt;</code> 元素中。</p>
<h4 id="使用-javascript-表达式" tabindex="-1"><a class="header-anchor" href="#使用-javascript-表达式" aria-hidden="true">#</a> <a href="https://v2.cn.vuejs.org/v2/guide/syntax.html#%E4%BD%BF%E7%94%A8-JavaScript-%E8%A1%A8%E8%BE%BE%E5%BC%8F" target="_blank" rel="noopener noreferrer">使用 JavaScript 表达式<ExternalLinkIcon/></a></h4>
<p>迄今为止，在我们的模板中，我们一直都只绑定简单的 property 键值。但实际上，对于所有的数据绑定，Vue.js 都提供了完全的 JavaScript 表达式支持。</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>{{ number + 1 }}

{{ ok ? 'YES' : 'NO' }}

{{ message.split('').reverse().join('') }}

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">'</span>list-' + id<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这些表达式会在所属 Vue 实例的数据作用域下作为 JavaScript 被解析。有个限制就是，每个绑定都只能包含<strong>单个表达式</strong>，所以下面的例子都<strong>不会</strong>生效。</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- 这是语句，不是表达式 --></span>
{{ var a = 1 }}

<span class="token comment">&lt;!-- 流控制也不会生效，请使用三元表达式 --></span>
{{ if (ok) { return message } }}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>模板表达式都被放在沙盒中，只能访问<a href="https://github.com/vuejs/vue/blob/v2.6.10/src/core/instance/proxy.js#L9" target="_blank" rel="noopener noreferrer">全局变量的一个白名单<ExternalLinkIcon/></a>，如 <code v-pre>Math</code> 和 <code v-pre>Date</code> 。你不应该在模板表达式中试图访问用户定义的全局变量。</p>
<h3 id="指令语法" tabindex="-1"><a class="header-anchor" href="#指令语法" aria-hidden="true">#</a> 指令语法</h3>
<p>指令 (Directives) 是带有 <code v-pre>v-</code> 前缀的特殊 attribute。指令 attribute 的值预期是<strong>单个 JavaScript 表达式</strong> (<code v-pre>v-for</code> 是例外情况，稍后我们再讨论)。指令的职责是，当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM。回顾我们在介绍中看到的例子：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>seen<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>现在你看到我了<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这里，<code v-pre>v-if</code> 指令将根据表达式 <code v-pre>seen</code> 的值的真假来插入/移除 <code v-pre>&lt;p&gt;</code> 元素。</p>
<h4 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> <a href="https://v2.cn.vuejs.org/v2/guide/syntax.html#%E5%8F%82%E6%95%B0" target="_blank" rel="noopener noreferrer">参数<ExternalLinkIcon/></a></h4>
<p>一些指令能够接收一个“参数”，在指令名称之后以冒号表示。例如，<code v-pre>v-bind</code> 指令可以用于响应式地更新 HTML attribute：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>url<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在这里 <code v-pre>href</code> 是参数，告知 <code v-pre>v-bind</code> 指令将该元素的 <code v-pre>href</code> attribute 与表达式 <code v-pre>url</code> 的值绑定。</p>
<p>另一个例子是 <code v-pre>v-on</code> 指令，它用于监听 DOM 事件：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name"><span class="token namespace">v-on:</span>click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>doSomething<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在这里参数是监听的事件名。我们也会更详细地讨论事件处理。</p>
<h4 id="动态参数" tabindex="-1"><a class="header-anchor" href="#动态参数" aria-hidden="true">#</a> <a href="https://v2.cn.vuejs.org/v2/guide/syntax.html#%E5%8A%A8%E6%80%81%E5%8F%82%E6%95%B0" target="_blank" rel="noopener noreferrer">动态参数<ExternalLinkIcon/></a></h4>
<blockquote>
<p>2.6.0 新增</p>
</blockquote>
<p>从 2.6.0 开始，可以用方括号括起来的 JavaScript 表达式作为一个指令的参数：</p>
<div class="language-HTML ext-HTML line-numbers-mode"><pre v-pre class="language-HTML"><code>&lt;!--
注意，参数表达式的写法存在一些约束，如之后的“对动态参数表达式的约束”章节所述。
--&gt;
&lt;a v-bind:[attributeName]=&quot;url&quot;&gt; ... &lt;/a&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里的 <code v-pre>attributeName</code> 会被作为一个 JavaScript 表达式进行动态求值，求得的值将会作为最终的参数来使用。例如，如果你的 Vue 实例有一个 <code v-pre>data</code> property <code v-pre>attributeName</code>，其值为 <code v-pre>&quot;href&quot;</code>，那么这个绑定将等价于 <code v-pre>v-bind:href</code>。</p>
<p>同样地，你可以使用动态参数为一个动态的事件名绑定处理函数：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name"><span class="token namespace">v-on:</span>[eventName]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>doSomething<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> ... <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在这个示例中，当 <code v-pre>eventName</code> 的值为 <code v-pre>&quot;focus&quot;</code> 时，<code v-pre>v-on:[eventName]</code> 将等价于 <code v-pre>v-on:focus</code>。</p>
<h5 id="对动态参数的值的约束" tabindex="-1"><a class="header-anchor" href="#对动态参数的值的约束" aria-hidden="true">#</a> 对动态参数的值的约束</h5>
<p>动态参数预期会求出一个字符串，异常情况下值为 <code v-pre>null</code>。这个特殊的 <code v-pre>null</code> 值可以被显性地用于移除绑定。任何其它非字符串类型的值都将会触发一个警告。</p>
<h5 id="对动态参数表达式的约束" tabindex="-1"><a class="header-anchor" href="#对动态参数表达式的约束" aria-hidden="true">#</a> 对动态参数表达式的约束</h5>
<p>动态参数表达式有一些语法约束，因为某些字符，如空格和引号，放在 HTML attribute 名里是无效的。例如：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;!-- 这会触发一个编译警告 -->
&lt;a v-bind:['foo' + bar]="value"> ... &lt;/a>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>变通的办法是使用没有空格或引号的表达式，或用计算属性替代这种复杂表达式。</p>
<p>在 DOM 中使用模板时 (直接在一个 HTML 文件里撰写模板)，还需要避免使用大写字符来命名键名，因为浏览器会把 attribute 名全部强制转为小写：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;!--
在 DOM 中使用模板时这段代码会被转换为 `v-bind:[someattr]`。
除非在实例中有一个名为“someattr”的 property，否则代码不会工作。
-->
&lt;a v-bind:[someAttr]="value"> ... &lt;/a>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="修饰符" tabindex="-1"><a class="header-anchor" href="#修饰符" aria-hidden="true">#</a> <a href="https://v2.cn.vuejs.org/v2/guide/syntax.html#%E4%BF%AE%E9%A5%B0%E7%AC%A6" target="_blank" rel="noopener noreferrer">修饰符<ExternalLinkIcon/></a></h4>
<p>修饰符 (modifier) 是以半角句号 <code v-pre>.</code> 指明的特殊后缀，用于指出一个指令应该以特殊方式绑定。例如，<code v-pre>.prevent</code> 修饰符告诉 <code v-pre>v-on</code> 指令对于触发的事件调用 <code v-pre>event.preventDefault()</code>：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;form v-on:submit.prevent="onSubmit">...&lt;/form>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在接下来对 <a href="https://v2.cn.vuejs.org/v2/guide/events.html#%E4%BA%8B%E4%BB%B6%E4%BF%AE%E9%A5%B0%E7%AC%A6" target="_blank" rel="noopener noreferrer"><code v-pre>v-on</code><ExternalLinkIcon/></a> 和 <a href="https://v2.cn.vuejs.org/v2/guide/forms.html#%E4%BF%AE%E9%A5%B0%E7%AC%A6" target="_blank" rel="noopener noreferrer"><code v-pre>v-for</code><ExternalLinkIcon/></a> 等功能的探索中，你会看到修饰符的其它例子。</p>
<h3 id="简写" tabindex="-1"><a class="header-anchor" href="#简写" aria-hidden="true">#</a> 简写</h3>
<p><code v-pre>v-</code> 前缀作为一种视觉提示，用来识别模板中 Vue 特定的 attribute。当你在使用 Vue.js 为现有标签添加动态行为 (dynamic behavior) 时，<code v-pre>v-</code> 前缀很有帮助，然而，对于一些频繁用到的指令来说，就会感到使用繁琐。同时，在构建由 Vue 管理所有模板的<a href="https://en.wikipedia.org/wiki/Single-page_application" target="_blank" rel="noopener noreferrer">单页面应用程序 (SPA - single page application)<ExternalLinkIcon/></a> 时，<code v-pre>v-</code> 前缀也变得没那么重要了。因此，Vue 为 <code v-pre>v-bind</code> 和 <code v-pre>v-on</code> 这两个最常用的指令，提供了特定简写：</p>
<h4 id="v-bind-缩写" tabindex="-1"><a class="header-anchor" href="#v-bind-缩写" aria-hidden="true">#</a> <a href="https://v2.cn.vuejs.org/v2/guide/syntax.html#v-bind-%E7%BC%A9%E5%86%99" target="_blank" rel="noopener noreferrer"><code v-pre>v-bind</code> 缩写<ExternalLinkIcon/></a></h4>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- 完整语法 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>url<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- 缩写 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">:href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>url<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- 动态参数的缩写 (2.6.0+) --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">:[key]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>url<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> ... <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="v-on-缩写" tabindex="-1"><a class="header-anchor" href="#v-on-缩写" aria-hidden="true">#</a> <a href="https://v2.cn.vuejs.org/v2/guide/syntax.html#v-on-%E7%BC%A9%E5%86%99" target="_blank" rel="noopener noreferrer"><code v-pre>v-on</code> 缩写<ExternalLinkIcon/></a></h4>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- 完整语法 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name"><span class="token namespace">v-on:</span>click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>doSomething<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- 缩写 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>doSomething<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- 动态参数的缩写 (2.6.0+) --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">@[event]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>doSomething<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> ... <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>它们看起来可能与普通的 HTML 略有不同，但 <code v-pre>:</code> 与 <code v-pre>@</code> 对于 attribute 名来说都是合法字符，在所有支持 Vue 的浏览器都能被正确地解析。而且，它们不会出现在最终渲染的标记中。缩写语法是完全可选的，但随着你更深入地了解它们的作用，你会庆幸拥有它们。</p>
<h2 id="计算属性和侦听器" tabindex="-1"><a class="header-anchor" href="#计算属性和侦听器" aria-hidden="true">#</a> 计算属性和侦听器</h2>
<h3 id="计算属性" tabindex="-1"><a class="header-anchor" href="#计算属性" aria-hidden="true">#</a> <a href="https://v2.cn.vuejs.org/v2/guide/computed.html#%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7" target="_blank" rel="noopener noreferrer">计算属性<ExternalLinkIcon/></a></h3>
<p>模板内的表达式非常便利，但是设计它们的初衷是用于简单运算的。在模板中放入太多的逻辑会让模板过重且难以维护。例如：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>example<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  {{ message.split('').reverse().join('') }}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个地方，模板不再是简单的声明式逻辑。你必须看一段时间才能意识到，这里是想要显示变量 <code v-pre>message</code> 的翻转字符串。当你想要在模板中的多处包含此翻转字符串时，就会更加难以处理。</p>
<p>所以，对于任何复杂逻辑，你都应当使用<strong>计算属性</strong>。</p>
<h3 id="基础例子" tabindex="-1"><a class="header-anchor" href="#基础例子" aria-hidden="true">#</a> <a href="https://v2.cn.vuejs.org/v2/guide/computed.html#%E5%9F%BA%E7%A1%80%E4%BE%8B%E5%AD%90" target="_blank" rel="noopener noreferrer">基础例子<ExternalLinkIcon/></a></h3>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>example<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Original message: "{{ message }}"<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Computed reversed message: "{{ reversedMessage }}"<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
var vm = new Vue({
  el: '#example',
  data: {
    message: 'Hello'
  },
  computed: {
    // 计算属性的 getter
    reversedMessage: function () {
      // `this` 指向 vm 实例
      return this.message.split('').reverse().join('')
    }
  }
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果：</p>
<p>Original message: &quot;Hello&quot;</p>
<p>Computed reversed message: &quot;olleH&quot;</p>
<p>这里我们声明了一个计算属性 <code v-pre>reversedMessage</code>。我们提供的函数将用作 property <code v-pre>vm.reversedMessage</code> 的 getter 函数：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>reversedMessage<span class="token punctuation">)</span> <span class="token comment">// => 'olleH'</span>
vm<span class="token punctuation">.</span>message <span class="token operator">=</span> <span class="token string">'Goodbye'</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>reversedMessage<span class="token punctuation">)</span> <span class="token comment">// => 'eybdooG'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以打开浏览器的控制台，自行修改例子中的 vm。<code v-pre>vm.reversedMessage</code> 的值始终取决于 <code v-pre>vm.message</code> 的值。</p>
<p>你可以像绑定普通 property 一样在模板中绑定计算属性。Vue 知道 <code v-pre>vm.reversedMessage</code> 依赖于 <code v-pre>vm.message</code>，因此当 <code v-pre>vm.message</code> 发生改变时，所有依赖 <code v-pre>vm.reversedMessage</code> 的绑定也会更新。而且最妙的是我们已经以声明的方式创建了这种依赖关系：计算属性的 getter 函数是没有副作用 (side effect) 的，这使它更易于测试和理解。</p>
<h3 id="计算属性缓存-vs-方法" tabindex="-1"><a class="header-anchor" href="#计算属性缓存-vs-方法" aria-hidden="true">#</a> <a href="https://v2.cn.vuejs.org/v2/guide/computed.html#%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7%E7%BC%93%E5%AD%98-vs-%E6%96%B9%E6%B3%95" target="_blank" rel="noopener noreferrer">计算属性缓存 vs 方法<ExternalLinkIcon/></a></h3>
<p>你可能已经注意到我们可以通过在表达式中调用方法来达到同样的效果：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>p<span class="token operator">></span>Reversed message<span class="token operator">:</span> <span class="token string">"{{ reversedMessage() }}"</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
<span class="token comment">// 在组件中</span>
<span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">reversedMessage</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>message<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以将同一函数定义为一个方法而不是一个计算属性。两种方式的最终结果确实是完全相同的。然而，不同的是<strong>计算属性是基于它们的响应式依赖进行缓存的</strong>。只在相关响应式依赖发生改变时它们才会重新求值。这就意味着只要 <code v-pre>message</code> 还没有发生改变，多次访问 <code v-pre>reversedMessage</code> 计算属性会立即返回之前的计算结果，而不必再次执行函数。</p>
<p>这也同样意味着下面的计算属性将不再更新，因为 <code v-pre>Date.now()</code> 不是响应式依赖：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>computed: {
  now: function () {
    return Date.now()
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>相比之下，每当触发重新渲染时，调用方法将<strong>总会</strong>再次执行函数。</p>
<p>我们为什么需要缓存？假设我们有一个性能开销比较大的计算属性 <strong>A</strong>，它需要遍历一个巨大的数组并做大量的计算。然后我们可能有其他的计算属性依赖于 <strong>A</strong>。如果没有缓存，我们将不可避免的多次执行 <strong>A</strong> 的 getter！如果你不希望有缓存，请用方法来替代。</p>
<h3 id="计算属性-vs-侦听属性" tabindex="-1"><a class="header-anchor" href="#计算属性-vs-侦听属性" aria-hidden="true">#</a> <a href="https://v2.cn.vuejs.org/v2/guide/computed.html#%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7-vs-%E4%BE%A6%E5%90%AC%E5%B1%9E%E6%80%A7" target="_blank" rel="noopener noreferrer">计算属性 vs 侦听属性<ExternalLinkIcon/></a></h3>
<p>Vue 提供了一种更通用的方式来观察和响应 Vue 实例上的数据变动：<strong>侦听属性</strong>。当你有一些数据需要随着其它数据变动而变动时，你很容易滥用 <code v-pre>watch</code>——特别是如果你之前使用过 AngularJS。然而，通常更好的做法是使用计算属性而不是命令式的 <code v-pre>watch</code> 回调。细想一下这个例子：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;div id="demo">{{ fullName }}&lt;/div>
var vm = new Vue({
  el: '#demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar',
    fullName: 'Foo Bar'
  },
  watch: {
    firstName: function (val) {
      this.fullName = val + ' ' + this.lastName
    },
    lastName: function (val) {
      this.fullName = this.firstName + ' ' + val
    }
  }
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码是命令式且重复的。将它与计算属性的版本进行比较：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>var vm = new Vue({
  el: '#demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar'
  },
  computed: {
    fullName: function () {
      return this.firstName + ' ' + this.lastName
    }
  }
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>好得多了，不是吗？</p>
<h3 id="计算属性的-setter" tabindex="-1"><a class="header-anchor" href="#计算属性的-setter" aria-hidden="true">#</a> <a href="https://v2.cn.vuejs.org/v2/guide/computed.html#%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7%E7%9A%84-setter" target="_blank" rel="noopener noreferrer">计算属性的 setter<ExternalLinkIcon/></a></h3>
<p>计算属性默认只有 getter，不过在需要时你也可以提供一个 setter：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>// ...
computed: {
  fullName: {
    // getter
    get: function () {
      return this.firstName + ' ' + this.lastName
    },
    // setter
    set: function (newValue) {
      var names = newValue.split(' ')
      this.firstName = names[0]
      this.lastName = names[names.length - 1]
    }
  }
}
// ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在再运行 <code v-pre>vm.fullName = 'John Doe'</code> 时，setter 会被调用，<code v-pre>vm.firstName</code> 和 <code v-pre>vm.lastName</code> 也会相应地被更新。</p>
<h2 id="侦听器" tabindex="-1"><a class="header-anchor" href="#侦听器" aria-hidden="true">#</a> <a href="https://v2.cn.vuejs.org/v2/guide/computed.html#%E4%BE%A6%E5%90%AC%E5%99%A8" target="_blank" rel="noopener noreferrer">侦听器<ExternalLinkIcon/></a></h2>
<p>虽然计算属性在大多数情况下更合适，但有时也需要一个自定义的侦听器。这就是为什么 Vue 通过 <code v-pre>watch</code> 选项提供了一个更通用的方法，来响应数据的变化。当需要在数据变化时执行异步或开销较大的操作时，这个方式是最有用的。</p>
<p>例如：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;div id="watch-example">
  &lt;p>
    Ask a yes/no question:
    &lt;input v-model="question">
  &lt;/p>
  &lt;p>{{ answer }}&lt;/p>
&lt;/div>
&lt;!-- 因为 AJAX 库和通用工具的生态已经相当丰富，Vue 核心代码没有重复 -->
&lt;!-- 提供这些功能以保持精简。这也可以让你自由选择自己更熟悉的工具。 -->
&lt;script src="https://cdn.jsdelivr.net/npm/axios@0.12.0/dist/axios.min.js">&lt;/script>
&lt;script src="https://cdn.jsdelivr.net/npm/lodash@4.13.1/lodash.min.js">&lt;/script>
&lt;script>
var watchExampleVM = new Vue({
  el: '#watch-example',
  data: {
    question: '',
    answer: 'I cannot give you an answer until you ask a question!'
  },
  watch: {
    // 如果 `question` 发生改变，这个函数就会运行
    question: function (newQuestion, oldQuestion) {
      this.answer = 'Waiting for you to stop typing...'
      this.debouncedGetAnswer()
    }
  },
  created: function () {
    // `_.debounce` 是一个通过 Lodash 限制操作频率的函数。
    // 在这个例子中，我们希望限制访问 yesno.wtf/api 的频率
    // AJAX 请求直到用户输入完毕才会发出。想要了解更多关于
    // `_.debounce` 函数 (及其近亲 `_.throttle`) 的知识，
    // 请参考：https://lodash.com/docs#debounce
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
  },
  methods: {
    getAnswer: function () {
      if (this.question.indexOf('?') === -1) {
        this.answer = 'Questions usually contain a question mark. ;-)'
        return
      }
      this.answer = 'Thinking...'
      var vm = this
      axios.get('https://yesno.wtf/api')
        .then(function (response) {
          vm.answer = _.capitalize(response.data.answer)
        })
        .catch(function (error) {
          vm.answer = 'Error! Could not reach the API. ' + error
        })
    }
  }
})
&lt;/script>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果：</p>
<p>Ask a yes/no question:</p>
<p>I cannot give you an answer until you ask a question!</p>
<p>在这个示例中，使用 <code v-pre>watch</code> 选项允许我们执行异步操作 (访问一个 API)，限制我们执行该操作的频率，并在我们得到最终结果前，设置中间状态。这些都是计算属性无法做到的。</p>
<p>除了 <code v-pre>watch</code> 选项之外，您还可以使用命令式的 <a href="https://v2.cn.vuejs.org/v2/api/#vm-watch" target="_blank" rel="noopener noreferrer">vm.$watch API<ExternalLinkIcon/></a>。</p>
<h2 id="数据绑定" tabindex="-1"><a class="header-anchor" href="#数据绑定" aria-hidden="true">#</a> 数据绑定</h2>
<h3 id="绑定方式" tabindex="-1"><a class="header-anchor" href="#绑定方式" aria-hidden="true">#</a> 绑定方式</h3>
<ul>
<li>
<p>单向绑定
<code v-pre>v-bind</code>
数据只能从<code v-pre>data</code>流向页面</p>
</li>
<li>
<p>双向绑定
<code v-pre>v-model</code>
数据不仅能从<code v-pre>data</code>流向页面，也能从页面流向<code v-pre>data</code>。
只能用于输入类标签，即<input>等表单类标签。<code v-pre>v-model:value=&quot;&quot; </code>可以简写为<code v-pre>v-model=&quot;&quot;</code>主要原因为使用<code v-pre>v-model</code>时默认使用<code v-pre>value</code>与之绑定。</p>
</li>
</ul>
<p>标准写法：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">v-bind:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">v-model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>简写:</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化" aria-hidden="true">#</a> 初始化</h2>
<p>el的两种写法：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">el</span><span class="token operator">:</span><span class="token string">"#app"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token comment">//创建实例时挂载</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
x<span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span><span class="token comment">//运行该语句后才挂载</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>data的两种写法：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">el</span><span class="token operator">:</span><span class="token string">"#app"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'taytay'</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token comment">//对象式</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">el</span><span class="token operator">:</span><span class="token string">"#app"</span><span class="token punctuation">,</span>
    <span class="token function-variable function">data</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//data(){</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">"taytay"</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token comment">//函数式</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip">
<p class="custom-container-title">什么是箭头函数</p>
<p>由Vue管理的函数一定不要写箭头函数</p>
</div>
<h2 id="mvvm模型" tabindex="-1"><a class="header-anchor" href="#mvvm模型" aria-hidden="true">#</a> MVVM模型</h2>
<ul>
<li>
<p>M</p>
<p>模型 (Plain JavaScript Objects)
对应中data的数据</p>
</li>
<li>
<p>V</p>
<p>视图 (DOM)
模板(template)</p>
</li>
<li>
<p>VM</p>
<p>视图模型 (Vue)
Vue实例对象</p>
</li>
</ul>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>X-UA-Compatible<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>IE=edge<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
    
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/javascript<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./js/vue.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Hello Vue! :) {{name}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span> <span class="token comment">&lt;!-- 视图 --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/javascript<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
        Vue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>productiontip <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
     <span class="token keyword">const</span> v <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token comment">// 视图模型</span>
            <span class="token literal-property property">el</span><span class="token operator">:</span><span class="token string">"#app"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token comment">// 模型</span>
                <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'Nemo Nobody'</span>
           <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        
    
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据代理" tabindex="-1"><a class="header-anchor" href="#数据代理" aria-hidden="true">#</a> 数据代理</h2>
<p>关于<code v-pre>Object.defineProperty()</code>方法使用</p>
<p><code v-pre>Object.defineProperty(obj, prop, descriptor)</code></p>
<h3 id="参数-1" tabindex="-1"><a class="header-anchor" href="#参数-1" aria-hidden="true">#</a> <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#%E5%8F%82%E6%95%B0" target="_blank" rel="noopener noreferrer">参数<ExternalLinkIcon/></a></h3>
<ul>
<li>
<p><code v-pre>obj</code></p>
<p>要定义属性的对象。</p>
</li>
<li>
<p><code v-pre>prop</code></p>
<p>要定义或修改的属性的名称或 <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol" target="_blank" rel="noopener noreferrer"><code v-pre>Symbol</code><ExternalLinkIcon/></a> 。</p>
</li>
<li>
<p><code v-pre>descriptor</code></p>
<p>要定义或修改的属性描述符。</p>
</li>
</ul>
<h3 id="返回值" tabindex="-1"><a class="header-anchor" href="#返回值" aria-hidden="true">#</a> <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#%E8%BF%94%E5%9B%9E%E5%80%BC" target="_blank" rel="noopener noreferrer">返回值<ExternalLinkIcon/></a></h3>
<p>被传递给函数的对象。</p>
<h3 id="描述" tabindex="-1"><a class="header-anchor" href="#描述" aria-hidden="true">#</a> <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#%E6%8F%8F%E8%BF%B0" target="_blank" rel="noopener noreferrer">描述<ExternalLinkIcon/></a></h3>
<p>该方法允许精确地添加或修改对象的属性。通过赋值操作添加的普通属性是可枚举的，在枚举对象属性时会被枚举到（<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in" target="_blank" rel="noopener noreferrer"><code v-pre>for...in</code><ExternalLinkIcon/></a> 或 <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/keys" target="_blank" rel="noopener noreferrer"><code v-pre>Object.keys</code><ExternalLinkIcon/></a>方法），可以改变这些属性的值，也可以<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/delete" target="_blank" rel="noopener noreferrer"><code v-pre>删除</code><ExternalLinkIcon/></a>这些属性。这个方法允许修改默认的额外选项（或配置）。默认情况下，使用 <code v-pre>Object.defineProperty()</code> 添加的属性值是不可修改（immutable）的。</p>
<p>对象里目前存在的属性描述符有两种主要形式：<em>数据描述符</em>和<em>存取描述符</em>。<em>数据描述符</em>是一个具有值的属性，该值可以是可写的，也可以是不可写的。<em>存取描述符</em>是由 getter 函数和 setter 函数所描述的属性。一个描述符只能是这两者其中之一；不能同时是两者。</p>
<p>这两种描述符都是对象。它们共享以下可选键值（默认值是指在使用 <code v-pre>Object.defineProperty()</code> 定义属性时的默认值）：</p>
<ul>
<li>
<p><code v-pre>configurable</code></p>
<p>当且仅当该属性的 <code v-pre>configurable</code> 键值为 <code v-pre>true</code> 时，该属性的描述符才能够被改变，同时该属性也能从对应的对象上被删除。 <strong>默认为</strong> <strong><code v-pre>false</code></strong>。</p>
</li>
<li>
<p><code v-pre>enumerable</code></p>
<p>当且仅当该属性的 <code v-pre>enumerable</code> 键值为 <code v-pre>true</code> 时，该属性才会出现在对象的枚举属性中。 <strong>默认为 <code v-pre>false</code></strong>。</p>
</li>
</ul>
<p>数据描述符还具有以下可选键值：</p>
<ul>
<li>
<p><code v-pre>value</code></p>
<p>该属性对应的值。可以是任何有效的 JavaScript 值（数值，对象，函数等）。 <strong>默认为 <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined" target="_blank" rel="noopener noreferrer"><code v-pre>undefined</code><ExternalLinkIcon/></a></strong>。</p>
</li>
<li>
<p><code v-pre>writable</code></p>
<p>当且仅当该属性的 <code v-pre>writable</code> 键值为 <code v-pre>true</code> 时，属性的值，也就是上面的 <code v-pre>value</code>，才能被<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#assignment_operators" target="_blank" rel="noopener noreferrer"><code v-pre>赋值运算符</code> (en-US)<ExternalLinkIcon/></a>改变。 <strong>默认为 <code v-pre>false</code>。</strong></p>
</li>
</ul>
<p>存取描述符还具有以下可选键值：</p>
<ul>
<li>
<p><code v-pre>get</code></p>
<p>属性的 getter 函数，如果没有 getter，则为 <code v-pre>undefined</code>。当访问该属性时，会调用此函数。执行时不传入任何参数，但是会传入 <code v-pre>this</code> 对象（由于继承关系，这里的<code v-pre>this</code>并不一定是定义该属性的对象）。该函数的返回值会被用作属性的值。 <strong>默认为 <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined" target="_blank" rel="noopener noreferrer"><code v-pre>undefined</code><ExternalLinkIcon/></a></strong>。读取数值时运行的语句。</p>
</li>
<li>
<p><code v-pre>set</code></p>
<p>属性的 setter 函数，如果没有 setter，则为 <code v-pre>undefined</code>。当属性值被修改时，会调用此函数。该方法接受一个参数（也就是被赋予的新值），会传入赋值时的 <code v-pre>this</code> 对象。 <strong>默认为 <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined" target="_blank" rel="noopener noreferrer"><code v-pre>undefined</code><ExternalLinkIcon/></a></strong>。赋值时运行的语句。</p>
</li>
</ul>
<h4 id="描述符默认值汇总" tabindex="-1"><a class="header-anchor" href="#描述符默认值汇总" aria-hidden="true">#</a> 描述符默认值汇总</h4>
<ul>
<li>拥有布尔值的键 <code v-pre>configurable</code>、<code v-pre>enumerable</code> 和 <code v-pre>writable</code> 的默认值都是 <code v-pre>false</code>。</li>
<li>属性值和函数的键 <code v-pre>value</code>、<code v-pre>get</code> 和 <code v-pre>set</code> 字段的默认值为 <code v-pre>undefined</code>。</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 使用 __proto__</span>
<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> descriptor <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 没有继承的属性</span>
<span class="token comment">// 默认没有 enumerable，没有 configurable，没有 writable</span>
descriptor<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">'static'</span><span class="token punctuation">;</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">'key'</span><span class="token punctuation">,</span> descriptor<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 显式</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">"key"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token literal-property property">writable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"static"</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 循环使用同一对象</span>
<span class="token keyword">function</span> <span class="token function">withValue</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> d <span class="token operator">=</span> withValue<span class="token punctuation">.</span>d <span class="token operator">||</span> <span class="token punctuation">(</span>
    withValue<span class="token punctuation">.</span>d <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">writable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  d<span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
  <span class="token keyword">return</span> d<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// ... 并且 ...</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">"key"</span><span class="token punctuation">,</span> <span class="token function">withValue</span><span class="token punctuation">(</span><span class="token string">"static"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 如果 freeze 可用，防止后续代码添加或删除对象原型的属性</span>
<span class="token comment">// （value, get, set, enumerable, writable, configurable）</span>
<span class="token punctuation">(</span>Object<span class="token punctuation">.</span>freeze<span class="token operator">||</span>Object<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据代理-1" tabindex="-1"><a class="header-anchor" href="#数据代理-1" aria-hidden="true">#</a> 数据代理</h2>
<h3 id="一般的的数据代理" tabindex="-1"><a class="header-anchor" href="#一般的的数据代理" aria-hidden="true">#</a> 一般的的数据代理</h3>
<p>通过一个对象代理对另一个对象中属性的操作</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">x</span><span class="token operator">:</span><span class="token number">100</span><span class="token punctuation">}</span>
<span class="token keyword">let</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">y</span><span class="token operator">:</span><span class="token number">200</span><span class="token punctuation">}</span>

Object<span class="token punctuation">.</span><span class="token function">defineproperty</span><span class="token punctuation">(</span>obj2<span class="token punctuation">,</span><span class="token string">"x"</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
    <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token punctuation">{</span>
    	<span class="token keyword">return</span> obj1<span class="token punctuation">.</span>x
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
     <span class="token function">set</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token operator">:</span><span class="token punctuation">{</span>
    	obj1<span class="token punctuation">.</span>x <span class="token operator">=</span> value
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vue的数据代理" tabindex="-1"><a class="header-anchor" href="#vue的数据代理" aria-hidden="true">#</a> Vue的数据代理</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token literal-property property">el</span><span class="token operator">:</span><span class="token string">"#app"</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>
    	<span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">"taytay"</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>data中的name在vue实例创建时，有对应的<code v-pre>getter</code>，<code v-pre>setter</code></p>
<p>创建Vue实例时，如果没有数据代理</p>
<p><img src="@source/posts/language/frondend/.vuepress/public/imgs/image-20221016153052815.png" alt="image-20221016153052815"></p>
<p>方便操作数据，如果没有的话就要使用<code v-pre>x._data.xxx</code></p>
</div></template>


