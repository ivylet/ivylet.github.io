import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as d,c as a,a as e,e as n,b as l,f as t,d as r}from"./app.ec5faa76.js";const c={},v=e("h2",{id:"工具",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#工具","aria-hidden":"true"},"#"),n(" 工具")],-1),u={href:"https://leetcode.cn/problemset/all/",target:"_blank",rel:"noopener noreferrer"},o={href:"https://blog.csdn.net/qq_45436706/article/details/106957473",target:"_blank",rel:"noopener noreferrer"},m=e("code",null,"leetcode-cn",-1),b=e("h2",{id:"语言",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#语言","aria-hidden":"true"},"#"),n(" 语言")],-1),h=e("p",null,'算法肯定要选择其中一门语言进行实现，虽然说语言不重要，但是其实还是很重要的。我因为之前学的一直是C语言，后来学了Java，Python，不过我还是觉得使用C语言写比较好。然而全部使用C语言又太"累"了，很多简单的算法都需要自己手写，所以我决定浅学一下C++，仅仅用于解算法题。当然肯定会有人说，你要是想使用封装的函数，你还不如直接去使用Java呢，但我就是不想。:）',-1),_=e("h3",{id:"从c转c",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#从c转c","aria-hidden":"true"},"#"),n(" 从C转C++")],-1),p={href:"https://blog.csdn.net/wfuzhuandaaliu/article/details/122518316",target:"_blank",rel:"noopener noreferrer"},f=t(`<p>基本格式</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include&lt;iostream&gt;
using namespace std;
int main()
{
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="stl库" tabindex="-1"><a class="header-anchor" href="#stl库" aria-hidden="true">#</a> STL库</h4><p>动态数组vector，队列queue，集合set，键值对map，堆stack，队列queue</p><p>常用函数sort();</p><h4 id="sort-排序函数" tabindex="-1"><a class="header-anchor" href="#sort-排序函数" aria-hidden="true">#</a> sort()排序函数</h4><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>//普通数组的sort函数应用
#include &lt;iostream&gt;
#include &lt;bits/stdc++.h&gt;
using namespace std;

bool cmp(int x,int y)//使用cmp函数定义排序方式
{
    return x&gt;y;
}
int main()
{
	int a[10];
    
	for(int i=0;i&lt;=9;i++)
	{
		a[i]=10-i;
	} 
	sort(a,a+10,cmp);//排序
	for(int i=0;i&lt;=9;i++)
		{
			cout&lt;&lt;a[i]&lt;&lt;&quot; &quot;;
		}
	return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="for循环增强" tabindex="-1"><a class="header-anchor" href="#for循环增强" aria-hidden="true">#</a> for循环增强</h4><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include&lt;bits/stdc++.h&gt;
using namespace std;
int main()
{
    int a[10]={0};
    for(int i:a)
    {
        cout&lt;&lt;i&lt;&lt;&quot; &quot;;
    }
    cout&lt;&lt;endl;
    for(int i:a)
    {
        i++;
        cout&lt;&lt;i&lt;&lt;&quot; &quot;;
    }
    cout&lt;&lt;endl;
    for(int i:a)
    {
        cout&lt;&lt;i&lt;&lt;&quot; &quot;;
    }
    cout&lt;&lt;endl;
    for(int &amp;i:a)
    {
        i = i + 2;
        cout&lt;&lt;i&lt;&lt;&quot; &quot;;
    }
    cout&lt;&lt;endl;
    for(int i:a)
    {
        cout&lt;&lt;i&lt;&lt;&quot; &quot;;
    }
    cout&lt;&lt;endl;
}

//0 0 0 0 0 0 0 0 0 0 
//1 1 1 1 1 1 1 1 1 1
//0 0 0 0 0 0 0 0 0 0
//2 2 2 2 2 2 2 2 2 2
//2 2 2 2 2 2 2 2 2 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="set" tabindex="-1"><a class="header-anchor" href="#set" aria-hidden="true">#</a> set</h2>`,10);function g(x,q){const i=r("ExternalLinkIcon");return d(),a("div",null,[v,e("p",null,[n("练习算法题在哪捏？当然是 "),e("a",u,[n("题库 - 力扣 (LeetCode) 全球极客挚爱的技术成长平台"),l(i)]),n("了")]),e("p",null,[n("配合使用编译器插件，比如在VSCode上使用插件"),e("a",o,[n("Leetcode力扣 VS Code插件——面向新手_lkl001001001的博客-CSDN博客_力扣插件"),l(i)]),n("，如果有出现登录不成功的情况，请留意插件设置中是否设置为"),m,n("。")]),b,h,_,e("p",null,[e("a",p,[n("超详细C转C++简单教程(算法竞赛所需)_青霞先生的博客-CSDN博客_c语言转c++"),l(i)])]),f])}const S=s(c,[["render",g],["__file","contest-algo-start.html.vue"]]);export{S as default};
