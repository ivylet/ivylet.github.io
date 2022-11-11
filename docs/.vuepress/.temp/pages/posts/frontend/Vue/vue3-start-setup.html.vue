<template><div><h2 id="创建一个-vue-应用" tabindex="-1"><a class="header-anchor" href="#创建一个-vue-应用" aria-hidden="true">#</a> 创建一个 Vue 应用</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token operator">></span> <span class="token function">npm</span> init vue@latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这一指令将会安装并执行 <a href="https://github.com/vuejs/create-vue" target="_blank" rel="noopener noreferrer">create-vue<ExternalLinkIcon/></a>，它是 Vue 官方的项目脚手架工具。你将会看到一些诸如 TypeScript 和测试支持之类的可选功能提示：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>✔ Project name: … <span class="token operator">&lt;</span>your-project-name<span class="token operator">></span>
✔ Add TypeScript? … No / Yes
✔ Add JSX Support? … No / Yes
✔ Add Vue Router <span class="token keyword">for</span> Single Page Application development? … No / Yes
✔ Add Pinia <span class="token keyword">for</span> state management? … No / Yes
✔ Add Vitest <span class="token keyword">for</span> Unit testing? … No / Yes
✔ Add Cypress <span class="token keyword">for</span> both Unit and End-to-End testing? … No / Yes
✔ Add ESLint <span class="token keyword">for</span> code quality? … No / Yes
✔ Add Prettier <span class="token keyword">for</span> code formatting? … No / Yes

Scaffolding project <span class="token keyword">in</span> ./<span class="token operator">&lt;</span>your-project-name<span class="token operator">></span><span class="token punctuation">..</span>.
Done.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果不确定是否要开启某个功能，你可以直接按下回车键选择 <code v-pre>No</code>。在项目被创建后，通过以下步骤安装依赖并启动开发服务器：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token operator">></span> <span class="token builtin class-name">cd</span> <span class="token operator">&lt;</span>your-project-name<span class="token operator">></span>
<span class="token operator">></span> <span class="token function">npm</span> <span class="token function">install</span>
<span class="token operator">></span> <span class="token function">npm</span> run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你现在应该已经运行起来了你的第一个 Vue 项目！请注意，生成的项目中的示例组件是使用<a href="https://cn.vuejs.org/guide/introduction.html#composition-api" target="_blank" rel="noopener noreferrer">组合式 API<ExternalLinkIcon/></a> 和 <code v-pre>&lt;script setup&gt;</code> 编写的，而非<a href="https://cn.vuejs.org/guide/introduction.html#options-api" target="_blank" rel="noopener noreferrer">选项式 API<ExternalLinkIcon/></a>。下面是一些补充提示：</p>
<ul>
<li>推荐的 IDE 配置是 <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">Visual Studio Code<ExternalLinkIcon/></a> + <a href="https://marketplace.visualstudio.com/items?itemName=Vue.volar" target="_blank" rel="noopener noreferrer">Volar 扩展<ExternalLinkIcon/></a>。如果使用其他编辑器，参考 <a href="https://cn.vuejs.org/guide/scaling-up/tooling.html#ide-support" target="_blank" rel="noopener noreferrer">IDE 支持章节<ExternalLinkIcon/></a>。</li>
<li>更多工具细节，包括与后端框架的整合，我们会在<a href="https://cn.vuejs.org/guide/scaling-up/tooling.html" target="_blank" rel="noopener noreferrer">工具链指南<ExternalLinkIcon/></a>进行讨论。</li>
<li>要了解构建工具 Vite 更多背后的细节，请查看 <a href="https://cn.vitejs.dev/" target="_blank" rel="noopener noreferrer">Vite 文档<ExternalLinkIcon/></a>。</li>
<li>如果你选择使用 TypeScript，请阅读 <a href="https://cn.vuejs.org/guide/typescript/overview.html" target="_blank" rel="noopener noreferrer">TypeScript 使用指南<ExternalLinkIcon/></a>。</li>
</ul>
<p>当你准备将应用发布到生产环境时，请运行：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token operator">></span> <span class="token function">npm</span> run build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此命令会在 <code v-pre>./dist</code> 文件夹中为你的应用创建一个生产环境的构建版本。关于将应用上线生产环境的更多内容，请阅读<a href="https://cn.vuejs.org/guide/best-practices/production-deployment.html" target="_blank" rel="noopener noreferrer">生产环境部署指南<ExternalLinkIcon/></a>。</p>
<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2>
<ul>
<li>通过<code v-pre>&lt;script&gt;</code>引用</li>
<li>通过CDN使用Vue
<code v-pre>&lt;script src=&quot;https://unpkg.com/vue@3/dist/vue.global.js&quot;&gt;&lt;/script&gt;</code></li>
</ul>
<h2 id="模板语法" tabindex="-1"><a class="header-anchor" href="#模板语法" aria-hidden="true">#</a> 模板语法</h2>
<p>Vue 使用一种基于 HTML 的模板语法，使我们能够声明式地将其组件实例的数据绑定到呈现的 DOM 上。所有的 Vue 模板都是语法层面合法的 HTML，可以被符合规范的浏览器和 HTML 解析器解析。</p>
<p>在底层机制中，Vue 会将模板编译成高度优化的 JavaScript 代码。结合响应式系统，当应用状态变更时，Vue 能够智能地推导出需要重新渲染的组件的最少数量，并应用最少的 DOM 操作。</p>
<p>如果你对虚拟 DOM 的概念比较熟悉，并且偏好直接使用 JavaScript，你也可以结合可选的 JSX 支持<a href="https://cn.vuejs.org/guide/extras/render-function.html" target="_blank" rel="noopener noreferrer">直接手写渲染函数<ExternalLinkIcon/></a>而不采用模板。但请注意，这将不会享受到和模板同等级别的编译时优化。</p>
<h3 id="文本插值" tabindex="-1"><a class="header-anchor" href="#文本插值" aria-hidden="true">#</a> 文本插值</h3>
<p>最基本的数据绑定形式是文本插值，它使用的是“Mustache”语法 (即双大括号)：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>Message: {{ msg }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>双大括号标签会被替换为相应组件实例中 <code v-pre>msg</code> 属性的值。同时每次 <code v-pre>msg</code> 属性更改时它也会同步更新。</p>
<h3 id="原始-html" tabindex="-1"><a class="header-anchor" href="#原始-html" aria-hidden="true">#</a> 原始 HTML</h3>
<p>双大括号会将数据解释为纯文本，而不是 HTML。若想插入 HTML，你需要使用 <a href="https://cn.vuejs.org/api/built-in-directives.html#v-html" target="_blank" rel="noopener noreferrer"><code v-pre>v-html</code> 指令<ExternalLinkIcon/></a>：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Using text interpolation: {{ rawHtml }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Using v-html directive: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">v-html</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>rawHtml<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这里我们遇到了一个新的概念。这里看到的 <code v-pre>v-html</code> attribute 被称为一个<strong>指令</strong>。指令由 <code v-pre>v-</code> 作为前缀，表明它们是一些由 Vue 提供的特殊 ‎属性‎，你可能已经猜到了，它们将为渲染的 DOM 应用特殊的响应式行为。这里我们做的事情简单来说就是：在当前组件实例上，将此元素的 innerHTML 与 <code v-pre>rawHtml</code> 属性保持同步。</p>
<p><code v-pre>span</code> 的内容将会被替换为 <code v-pre>rawHtml</code> 属性的值，插值为纯 HTML——数据绑定将会被忽略。注意，你不能使用 <code v-pre>v-html</code> 来拼接组合模板，因为 Vue 不是一个基于字符串的模板引擎。在使用 Vue 时，应当使用组件作为 UI 重用和组合的基本单元。</p>
<div class="custom-container warning">
<p class="custom-container-title">警告</p>
<p>在网站上动态渲染任意 HTML 是非常危险的，因为这非常容易造成 <a href="https://en.wikipedia.org/wiki/Cross-site_scripting" target="_blank" rel="noopener noreferrer">XSS 漏洞<ExternalLinkIcon/></a>。请仅在内容安全可信时再使用 <code v-pre>v-html</code>，并且<strong>永远不要</strong>使用用户提供的 HTML 内容。</p>
</div>
<h3 id="attribute-绑定" tabindex="-1"><a class="header-anchor" href="#attribute-绑定" aria-hidden="true">#</a> Attribute 绑定</h3>
<p>双大括号不能在 HTML attributes 中使用。想要响应式地绑定一个 attribute，应该使用 <a href="https://cn.vuejs.org/api/built-in-directives.html#v-bind" target="_blank" rel="noopener noreferrer"><code v-pre>v-bind</code> 指令<ExternalLinkIcon/></a>：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dynamicId<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>v-bind</code> 指令指示 Vue 将元素的 <code v-pre>id</code> attribute 与组件的 <code v-pre>dynamicId</code> 属性保持一致。如果绑定的值是 <code v-pre>null</code> 或者 <code v-pre>undefined</code>，那么该 attribute 将会从渲染的元素上移除。</p>
<h4 id="简写" tabindex="-1"><a class="header-anchor" href="#简写" aria-hidden="true">#</a> 简写</h4>
<p>因为 <code v-pre>v-bind</code> 非常常用，我们提供了特定的简写语法：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">:id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dynamicId<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>开头为 <code v-pre>:</code> 的 attribute 可能和一般的 HTML attribute 看起来不太一样，但它的确是合法的 attribute 名称字符，并且所有支持 Vue 的浏览器都能正确解析它。此外，他们不会出现在最终渲染的 DOM 中。简写语法是可选的，但相信在你了解了它更多的用处后，你应该会更喜欢它。</p>
<blockquote>
<p>接下来的指引中，我们都将在示例中使用简写语法，因为这是在实际开发中更常见的用法。</p>
</blockquote>
<h4 id="布尔型-attribute" tabindex="-1"><a class="header-anchor" href="#布尔型-attribute" aria-hidden="true">#</a> 布尔型 Attribute</h4>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Attributes#%E5%B8%83%E5%B0%94%E5%80%BC%E5%B1%9E%E6%80%A7" target="_blank" rel="noopener noreferrer">布尔型 attribute<ExternalLinkIcon/></a> 依据 true / false 值来决定 attribute 是否应该存在于该元素上。<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled" target="_blank" rel="noopener noreferrer"><code v-pre>disabled</code><ExternalLinkIcon/></a> 就是最常见的例子之一。</p>
<p><code v-pre>v-bind</code> 在这种场景下的行为略有不同：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">:disabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isButtonDisabled<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当 <code v-pre>isButtonDisabled</code> 为<a href="https://developer.mozilla.org/en-US/docs/Glossary/Truthy" target="_blank" rel="noopener noreferrer">真值<ExternalLinkIcon/></a>或一个空字符串 (即 <code v-pre>&lt;button disabled=&quot;&quot;&gt;</code>) 时，元素会包含这个 <code v-pre>disabled</code> attribute。而当其为其他<a href="https://developer.mozilla.org/en-US/docs/Glossary/Falsy" target="_blank" rel="noopener noreferrer">假值<ExternalLinkIcon/></a>时 attribute 将被忽略。</p>
<h4 id="动态绑定多个值" tabindex="-1"><a class="header-anchor" href="#动态绑定多个值" aria-hidden="true">#</a> 动态绑定多个值</h4>
<p>如果你有像这样的一个包含多个 attribute 的 JavaScript 对象：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> objectOfAttrs <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'container'</span><span class="token punctuation">,</span>
  <span class="token keyword">class</span><span class="token operator">:</span> <span class="token string">'wrapper'</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过不带参数的 <code v-pre>v-bind</code>，你可以将它们绑定到单个元素上：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-bind</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>objectOfAttrs<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="使用javascript表达式" tabindex="-1"><a class="header-anchor" href="#使用javascript表达式" aria-hidden="true">#</a> 使用JavaScript表达式</h3>
<p>至此，我们仅在模板中绑定了一些简单的属性名。但是 Vue 实际上在所有的数据绑定中都支持完整的 JavaScript 表达式：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>{{ number + 1 }}

{{ ok ? 'YES' : 'NO' }}

{{ message.split('').reverse().join('') }}

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">:id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>`list-${id}`<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这些表达式都会被作为 JavaScript ，以组件为作用域解析执行。</p>
<p>在 Vue 模板内，JavaScript 表达式可以被使用在如下场景上：</p>
<ul>
<li>在文本插值中 (双大括号)</li>
<li>在任何 Vue 指令 (以 <code v-pre>v-</code> 开头的特殊 attribute) attribute 的值中</li>
</ul>
<h4 id="仅支持表达式" tabindex="-1"><a class="header-anchor" href="#仅支持表达式" aria-hidden="true">#</a> 仅支持表达式</h4>
<p>每个绑定仅支持<strong>单一表达式</strong>，也就是一段能够被求值的 JavaScript 代码。一个简单的判断方法是是否可以合法地写在 <code v-pre>return</code> 后面。</p>
<p>因此，下面的例子都是<strong>无效</strong>的：</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token comment">&lt;!-- 这是一个语句，而非表达式 --></span>
{{ var a = 1 }}

<span class="token comment">&lt;!-- 条件控制也不支持，请使用三元表达式 --></span>
{{ if (ok) { return message } }}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="调用函数" tabindex="-1"><a class="header-anchor" href="#调用函数" aria-hidden="true">#</a> 调用函数</h4>
<p>可以在绑定的表达式中使用一个组件暴露的方法：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">:title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>toTitleDate(date)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  {{ formatDate(date) }}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip">
<p class="custom-container-title">提示</p>
<p>绑定在表达式中的方法在组件每次更新时都会被重新调用，因此<strong>不</strong>应该产生任何副作用，比如改变数据或触发异步操作。</p>
</div>
<h4 id="受限的全局访问" tabindex="-1"><a class="header-anchor" href="#受限的全局访问" aria-hidden="true">#</a> 受限的全局访问</h4>
<p>模板中的表达式将被沙盒化，仅能够访问到<a href="https://github.com/vuejs/core/blob/main/packages/shared/src/globalsWhitelist.ts#L3" target="_blank" rel="noopener noreferrer">有限的全局对象列表<ExternalLinkIcon/></a>。该列表中会暴露常用的内置全局对象，比如 <code v-pre>Math</code> 和 <code v-pre>Date</code>。</p>
<p>没有显式包含在列表中的全局对象将不能在模板内表达式中访问，例如用户附加在 <code v-pre>window</code> 上的属性。然而，你也可以自行在 <a href="https://cn.vuejs.org/api/application.html#app-config-globalproperties" target="_blank" rel="noopener noreferrer"><code v-pre>app.config.globalProperties</code><ExternalLinkIcon/></a> 上显式地添加它们，供所有的 Vue 表达式使用。</p>
<h2 id="指令语法" tabindex="-1"><a class="header-anchor" href="#指令语法" aria-hidden="true">#</a> 指令语法</h2>
<p>指令是带有 <code v-pre>v-</code> 前缀的特殊 attribute。Vue 提供了许多<a href="https://cn.vuejs.org/api/built-in-directives.html" target="_blank" rel="noopener noreferrer">内置指令<ExternalLinkIcon/></a>，包括上面我们所介绍的 <code v-pre>v-bind</code> 和 <code v-pre>v-html</code>。</p>
<p>指令 attribute 的期望值为一个 JavaScript 表达式 (除了少数几个例外，即之后要讨论到的 <code v-pre>v-for</code>、<code v-pre>v-on</code> 和 <code v-pre>v-slot</code>)。一个指令的任务是在其表达式的值变化时响应式地更新 DOM。以 <a href="https://cn.vuejs.org/api/built-in-directives.html#v-if" target="_blank" rel="noopener noreferrer"><code v-pre>v-if</code><ExternalLinkIcon/></a> 为例：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>seen<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Now you see me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这里，<code v-pre>v-if</code> 指令会基于表达式 <code v-pre>seen</code> 的值的真假来移除/插入该 <code v-pre>&lt;p&gt;</code> 元素。</p>
<h3 id="参数-arguments" tabindex="-1"><a class="header-anchor" href="#参数-arguments" aria-hidden="true">#</a> 参数 Arguments</h3>
<p>某些指令会需要一个“参数”，在指令名后通过一个冒号隔开做标识。例如用 <code v-pre>v-bind</code> 指令来响应式地更新一个 HTML attribute：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>url<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> ... <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!-- 简写 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">:href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>url<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> ... <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里 <code v-pre>href</code> 就是一个参数，它告诉 <code v-pre>v-bind</code> 指令将表达式 <code v-pre>url</code> 的值绑定到元素的 <code v-pre>href</code> attribute 上。在简写中，参数前的一切 (例如 <code v-pre>v-bind:</code>) 都会被缩略为一个 <code v-pre>:</code> 字符。</p>
<p>另一个例子是 <code v-pre>v-on</code> 指令，它将监听 DOM 事件：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name"><span class="token namespace">v-on:</span>click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>doSomething<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> ... <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!-- 简写 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>doSomething<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> ... <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里的参数是要监听的事件名称：<code v-pre>click</code>。<code v-pre>v-on</code> 有一个相应的缩写，即 <code v-pre>@</code> 字符。我们之后也会讨论关于事件处理的更多细节。</p>
<h3 id="动态参数" tabindex="-1"><a class="header-anchor" href="#动态参数" aria-hidden="true">#</a> 动态参数</h3>
<p>同样在指令参数上也可以使用一个 JavaScript 表达式，需要包含在一对方括号内：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!--
注意，参数表达式有一些约束，
参见下面“动态参数值的限制”与“动态参数语法的限制”章节的解释
--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>[attributeName]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>url<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> ... <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- 简写 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">:[attributeName]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>url<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> ... <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里的 <code v-pre>attributeName</code> 会作为一个 JavaScript 表达式被动态执行，计算得到的值会被用作最终的参数。举例来说，如果你的组件实例有一个数据属性 <code v-pre>attributeName</code>，其值为 <code v-pre>&quot;href&quot;</code>，那么这个绑定就等价于 <code v-pre>v-bind:href</code>。</p>
<p>相似地，你还可以将一个函数绑定到动态的事件名称上：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name"><span class="token namespace">v-on:</span>[eventName]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>doSomething<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> ... <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- 简写 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">@[eventName]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>doSomething<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在此示例中，当 <code v-pre>eventName</code> 的值是 <code v-pre>&quot;focus&quot;</code> 时，<code v-pre>v-on:[eventName]</code> 就等价于 <code v-pre>v-on:focus</code>。</p>
<h4 id="动态参数值的限制" tabindex="-1"><a class="header-anchor" href="#动态参数值的限制" aria-hidden="true">#</a> 动态参数值的限制</h4>
<p>动态参数中表达式的值应当是一个字符串，或者是 <code v-pre>null</code>。特殊值 <code v-pre>null</code> 意为显式移除该绑定。其他非字符串的值会触发警告。</p>
<h4 id="动态参数语法的限制" tabindex="-1"><a class="header-anchor" href="#动态参数语法的限制" aria-hidden="true">#</a> 动态参数语法的限制</h4>
<p>动态参数表达式因为某些字符的缘故有一些语法限制，比如空格和引号，在 HTML attribute 名称中都是不合法的。例如下面的示例：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- 这会触发一个编译器警告 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">:['foo'</span> <span class="token attr-name">+</span> <span class="token attr-name">bar]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>value<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> ... <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你需要传入一个复杂的动态参数，我们推荐使用<a href="https://cn.vuejs.org/guide/essentials/computed.html" target="_blank" rel="noopener noreferrer">计算属性<ExternalLinkIcon/></a>替换复杂的表达式，也是 Vue 最基础的概念之一，我们很快就会讲到。</p>
<p>当使用 DOM 内嵌模板 (直接写在 HTML 文件里的模板) 时，我们需要避免在名称中使用大写字母，因为浏览器会强制将其转换为小写：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">:[someAttr]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>value<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> ... <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面的例子将会在 DOM 内嵌模板中被转换为 <code v-pre>:[someattr]</code>。如果你的组件拥有 “someAttr” 属性而非 “someattr”，这段代码将不会工作。单文件组件内的模板<strong>不</strong>受此限制。</p>
<h3 id="修饰符-modifiers" tabindex="-1"><a class="header-anchor" href="#修饰符-modifiers" aria-hidden="true">#</a> 修饰符 Modifiers</h3>
<p>修饰符是以点开头的特殊后缀，表明指令需要以一些特殊的方式被绑定。例如 <code v-pre>.prevent</code> 修饰符会告知 <code v-pre>v-on</code> 指令对触发的事件调用 <code v-pre>event.preventDefault()</code>：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">@submit.prevent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onSubmit<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>之后在讲到 <a href="https://cn.vuejs.org/guide/essentials/event-handling.html#event-modifiers" target="_blank" rel="noopener noreferrer"><code v-pre>v-on</code><ExternalLinkIcon/></a> 和 <a href="https://cn.vuejs.org/guide/essentials/forms.html#modifiers" target="_blank" rel="noopener noreferrer"><code v-pre>v-model</code><ExternalLinkIcon/></a> 的功能时，你将会看到其他修饰符的例子。</p>
<p>最后，在这里你可以直观地看到完整的指令语法：</p>
<p><img src="@source/posts/frontend/Vue/.vuepress/public/imgs/image-20221023203420016.png" alt="指令语法图"></p>
<h2 id="响应式基础" tabindex="-1"><a class="header-anchor" href="#响应式基础" aria-hidden="true">#</a> 响应式基础</h2>
<p>使用<code v-pre>reactive()</code>函数创建一个响应式对象或数组：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>要在组件模板中使用响应式状态，需要在 <code v-pre>setup()</code> 函数中定义并返回。</p>
<p>响应式函数经常用做事件监听器</p>
<p>举例：</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>increment<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    {{ state.count }}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token comment">// `setup` 是一个专门用于组合式 API 的特殊钩子函数</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">function</span> <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>count<span class="token operator">++</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 不要忘记同时暴露 increment 函数</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">,</span>
      increment
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="script-setup" tabindex="-1"><a class="header-anchor" href="#script-setup" aria-hidden="true">#</a> &lt;script setup&gt;</h3>
<p>在 <code v-pre>setup()</code> 函数中手动暴露大量的状态和方法非常麻烦，需要我们手动将所有的变量进行<code v-pre>retrun</code>出来。但是，我们可以通过使用<a href="https://blog.csdn.net/yaocong1993/article/details/84454747" target="_blank" rel="noopener noreferrer">构建工具<ExternalLinkIcon/></a>来简化该操作。当使用单文件组件（SFC）时，我们可以使用 <code v-pre>&lt;script setup&gt;</code> 来大幅度地简化代码。</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  state<span class="token punctuation">.</span>count<span class="token operator">++</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>increment<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    {{ state.count }}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


