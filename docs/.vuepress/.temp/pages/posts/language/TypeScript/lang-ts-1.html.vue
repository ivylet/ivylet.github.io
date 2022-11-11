<template><div><h2 id="typescript的数据类型" tabindex="-1"><a class="header-anchor" href="#typescript的数据类型" aria-hidden="true">#</a> TypeScript的数据类型</h2>
<ul>
<li>number</li>
<li>boolean</li>
<li>string</li>
<li>void</li>
<li>null</li>
<li>undefined</li>
<li>any</li>
</ul>
<h4 id="类型推论" tabindex="-1"><a class="header-anchor" href="#类型推论" aria-hidden="true">#</a> 类型推论</h4>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> tom<span class="token punctuation">;</span><span class="token comment">//定义时未指定类型且未赋值，则指定为any类型。</span>
tom <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
tom <span class="token operator">=</span> <span class="token string">"str"</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>tom<span class="token punctuation">)</span>

<span class="token keyword">let</span> jack <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">//定义时即赋值，进行类型推论，推测其为number类型，则再赋值时不能为其他类型。</span>
jack <span class="token operator">=</span> <span class="token string">"mouse"</span><span class="token punctuation">;</span> <span class="token comment">//该句报错</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>jack<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="联合类型" tabindex="-1"><a class="header-anchor" href="#联合类型" aria-hidden="true">#</a> 联合类型</h4>
<p>在定义时，表示变量的数值类型可以是其中的一种。而访问其方法时，在未确定是哪一种类型时，即赋值前，调用类型的非共用方法时，会报错。</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> strnum<span class="token operator">:</span> <span class="token builtin">string</span><span class="token operator">|</span><span class="token builtin">number</span><span class="token punctuation">;</span>
strnum <span class="token operator">=</span> <span class="token string">"str"</span><span class="token punctuation">;</span>
strnum <span class="token operator">=</span> <span class="token number">114</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>strnum<span class="token punctuation">)</span>

<span class="token keyword">let</span> strnum<span class="token operator">:</span> <span class="token builtin">string</span><span class="token operator">|</span><span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">num</span><span class="token punctuation">(</span>strnum<span class="token operator">:</span><span class="token builtin">string</span><span class="token operator">|</span><span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> strnum<span class="token punctuation">.</span>length<span class="token punctuation">;</span><span class="token comment">//报错。因为number类型没有length方法。</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> strnum<span class="token operator">:</span> <span class="token builtin">string</span><span class="token operator">|</span><span class="token builtin">number</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">num</span><span class="token punctuation">(</span>strnum<span class="token operator">:</span><span class="token builtin">string</span><span class="token operator">|</span><span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">{</span>
    strnum <span class="token operator">=</span> <span class="token string">"str"</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> strnum<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="对象的类型-接口" tabindex="-1"><a class="header-anchor" href="#对象的类型-接口" aria-hidden="true">#</a> 对象的类型--接口</h3>
<p>接口是对对象的约束。对象只能使用接口所约定的属性与其对应的类型，不可以多也不可以少（接口使用可选属性除外）。</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">person</span><span class="token punctuation">{</span>
    label<span class="token operator">:</span><span class="token builtin">string</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> cla<span class="token operator">:</span>person <span class="token operator">=</span> <span class="token punctuation">{</span>
    name <span class="token operator">:</span> <span class="token string">"Jackey"</span><span class="token punctuation">,</span><span class="token comment">//报错，因为多出的属性是不支持的。</span>
    label <span class="token operator">:</span> <span class="token string">"str"</span>
<span class="token punctuation">}</span>


<span class="token keyword">interface</span> <span class="token class-name">person</span><span class="token punctuation">{</span>
    name <span class="token operator">:</span><span class="token builtin">string</span>
    label<span class="token operator">?</span><span class="token operator">:</span><span class="token builtin">string</span><span class="token comment">//可选属性，对象可以使用或不使用。</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> cla<span class="token operator">:</span>person <span class="token operator">=</span> <span class="token punctuation">{</span>
    name <span class="token operator">:</span> <span class="token string">"Jackey"</span><span class="token punctuation">,</span>   
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用<code v-pre>[propName:string]:any</code>可以定义类可以定额外的<code v-pre>any</code>类型的属性变量，只可以定义与之对应的类型。</p>
<p><code v-pre>[prop: string]: number</code> 的意思是，类型的对象可以有任意属性签名，<code v-pre>string</code> 指的是对象的键都是字符串类型的，<code v-pre>number</code> 则是指定了属性值的类型。<code v-pre>prop</code> 类似于函数的形参，是可以取其他名字的。</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">person</span><span class="token punctuation">{</span>
    name <span class="token operator">:</span><span class="token builtin">string</span>
    label<span class="token operator">?</span><span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>propName<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span><span class="token builtin">any</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> cla<span class="token operator">:</span>person <span class="token operator">=</span> <span class="token punctuation">{</span>
    name <span class="token operator">:</span> <span class="token string">"Jackey"</span><span class="token punctuation">,</span>
    <span class="token keyword">class</span> <span class="token operator">:</span> <span class="token string">"Class One"</span><span class="token punctuation">,</span>
    grade <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="只读属性" tabindex="-1"><a class="header-anchor" href="#只读属性" aria-hidden="true">#</a> 只读属性</h3>
<p>当希望某些属性只能在创建时赋值时，我们可以使用<code v-pre>readonly</code>定义属性。注意只能是创建时才可以赋值，创建时未赋值，后续赋值也是不可行的。</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">person</span><span class="token punctuation">{</span>
    <span class="token keyword">readonly</span> uid<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">;</span>
    name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">;</span>
    age<span class="token operator">?</span><span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">;</span>
    <span class="token punctuation">[</span>propName<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span><span class="token builtin">any</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> tom<span class="token operator">:</span>person <span class="token operator">=</span> <span class="token punctuation">{</span>
    uid<span class="token operator">:</span><span class="token number">11</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span><span class="token string">"Genshin"</span><span class="token punctuation">,</span>
    age<span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">,</span>
    hobby<span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">"sing"</span><span class="token punctuation">,</span><span class="token string">"dance"</span><span class="token punctuation">,</span><span class="token string">"rap"</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
tom<span class="token punctuation">.</span>uid <span class="token operator">=</span> <span class="token number">12</span><span class="token comment">//报错。因为uid为只读属性。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> 数组</h2>
<p>多种定义数组的方法</p>
<p>基本定义</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> nums<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">78</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> str<span class="token operator">:</span><span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">>=</span><span class="token punctuation">[</span><span class="token string">"A"</span><span class="token punctuation">,</span><span class="token string">"BC"</span><span class="token punctuation">,</span><span class="token string">"IG"</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> numbers<span class="token operator">:</span><span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">></span> <span class="token operator">=</span> nums
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>numbers<span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>nums <span class="token operator">===</span> numbers<span class="token punctuation">)</span><span class="token comment">//true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用接口定义</p>
<p>使用<code v-pre>[index:number]:any</code>可以定义类可以定额外的<code v-pre>any</code>类型的数组，只可以定义与之对应的类型。</p>
<p><code v-pre>[index:number]: number</code> 的意思是，类型的对象可以有任意属性签名，<code v-pre>number</code> 数组索引都是数字类型，<code v-pre>number</code> 则是指定了数组值的类型。<code v-pre>index</code> 类似于函数的形参，是可以取其他名字的。</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">NumberArray</span><span class="token punctuation">{</span>
    <span class="token punctuation">[</span>index<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">]</span><span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> nums<span class="token operator">:</span>NumberArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">78</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://segmentfault.com/q/1010000022725100/a-1020000022740938" target="_blank" rel="noopener noreferrer">如何理解typescript的类型是否另一个类型的子集？ - SegmentFault 思否<ExternalLinkIcon/></a></p>
</div></template>


