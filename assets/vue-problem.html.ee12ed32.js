import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as a,f as e}from"./app.16aa4dd9.js";const t={},p=e(`<h3 id="vite启动后提示-network-use-host-to-expose-且无法通过网络ip访问服务" tabindex="-1"><a class="header-anchor" href="#vite启动后提示-network-use-host-to-expose-且无法通过网络ip访问服务" aria-hidden="true">#</a> Vite启动后提示“Network: use --host to expose“，且无法通过网络IP访问服务</h3><p>解决方法：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">&#39;@vitejs/plugin-vue&#39;</span>

<span class="token doc-comment comment">/**
 * https://vitejs.dev/config/
 * <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;vite&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>UserConfig<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">server</span><span class="token operator">:</span> <span class="token punctuation">{</span>				<span class="token comment">// ← ← ← ← ← ←</span>
    <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&#39;0.0.0.0&#39;</span>	<span class="token comment">// ← 新增内容 ←</span>
  <span class="token punctuation">}</span>						<span class="token comment">// ← ← ← ← ← ←</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[p];function c(i,l){return n(),a("div",null,o)}const d=s(t,[["render",c],["__file","vue-problem.html.vue"]]);export{d as default};
