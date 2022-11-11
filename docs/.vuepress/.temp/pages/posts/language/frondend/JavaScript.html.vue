<template><div><p>什么是export 与 export default</p>
<p>模块功能主要由两个命令构成：<code v-pre>export</code>和<code v-pre>import</code>。export命令用于规定模块的对外接口，import命令用于输入其他模块提供的功能。</p>
<p>一个模块就是一个独立的文件。该文件内部的所有变量，外部无法获取。如果你希望外部能够读取模块内部的某个变量，就必须使用export关键字输出该变量。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//a.js</span>
 <span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">"export的内容"</span><span class="token punctuation">;</span>
 <span class="token keyword">var</span> year <span class="token operator">=</span><span class="token number">2019</span><span class="token punctuation">;</span>
 <span class="token keyword">function</span> <span class="token function">message</span><span class="token punctuation">(</span><span class="token parameter">sth</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> sth<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span>str<span class="token punctuation">,</span>year<span class="token punctuation">,</span>message<span class="token punctuation">}</span>
<span class="token comment">//或</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span>
    str <span class="token keyword">as</span> newname1<span class="token punctuation">,</span>
    year <span class="token keyword">as</span> newname2<span class="token punctuation">,</span>
    message <span class="token keyword">as</span> newname3
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用export命令定义了模块的对外接口以后，其他 JS 文件就可以通过import命令加载这个模块。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//b.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> str<span class="token punctuation">,</span>year<span class="token punctuation">,</span> message <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./a'</span><span class="token punctuation">;</span>
 <span class="token comment">//也可以分开写两次，导入的时候带花括号，将每个变量函数名写清楚</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码的import命令，用于加载a.js文件,引入后便可以在b.js文件中使用a.js文件中的变量、函数或类等。import命令接受一对大括号，里面指定要从其他模块导入的变量名。大括号里面的变量名，必须与被导入模块（a.js）对外接口的名称相同。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//a.js</span>
<span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">"export default的内容"</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> str
在另一个文件中的导入方式：
<span class="token comment">//b.js </span>
<span class="token keyword">import</span> StrFile <span class="token keyword">from</span> <span class="token string">'a'</span><span class="token punctuation">;</span> <span class="token comment">//这个可以随意起名字</span>
<span class="token comment">//导入的时候没有花括号</span>
<span class="token comment">//本质上，a.js文件的export default输出一个叫做default的变量，然后系统允许你引入的时候为它取任意名字。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(1) 输出单个值，使用export default</p>
<p>(2) 输出多个值，使用export</p>
<p>(3) export default与普通的export不要同时使用</p>
</div></template>


