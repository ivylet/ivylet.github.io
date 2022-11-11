---
title:练习算法准备
---

## 工具

练习算法题在哪捏？当然是 [题库 - 力扣 (LeetCode) 全球极客挚爱的技术成长平台](https://leetcode.cn/problemset/all/)了

配合使用编译器插件，比如在VSCode上使用插件[Leetcode力扣 VS Code插件——面向新手\_lkl001001001的博客-CSDN博客\_力扣插件](https://blog.csdn.net/qq_45436706/article/details/106957473)，如果有出现登录不成功的情况，请留意插件设置中是否设置为`leetcode-cn`。

## 语言

算法肯定要选择其中一门语言进行实现，虽然说语言不重要，但是其实还是很重要的。我因为之前学的一直是C语言，后来学了Java，Python，不过我还是觉得使用C语言写比较好。然而全部使用C语言又太"累"了，很多简单的算法都需要自己手写，所以我决定浅学一下C++，仅仅用于解算法题。当然肯定会有人说，你要是想使用封装的函数，你还不如直接去使用Java呢，但我就是不想。:）

### 从C转C++

[超详细C转C++简单教程(算法竞赛所需)\_青霞先生的博客-CSDN博客\_c语言转c++](https://blog.csdn.net/wfuzhuandaaliu/article/details/122518316)



基本格式

```c++
#include<iostream>
using namespace std;
int main()
{
    return 0;
}
```



#### STL库

动态数组vector，队列queue，集合set，键值对map，堆stack，队列queue

常用函数sort();



#### sort()排序函数

```c++
//普通数组的sort函数应用
#include <iostream>
#include <bits/stdc++.h>
using namespace std;

bool cmp(int x,int y)//使用cmp函数定义排序方式
{
    return x>y;
}
int main()
{
	int a[10];
    
	for(int i=0;i<=9;i++)
	{
		a[i]=10-i;
	} 
	sort(a,a+10,cmp);//排序
	for(int i=0;i<=9;i++)
		{
			cout<<a[i]<<" ";
		}
	return 0;
}
```



#### for循环增强

```c++
#include<bits/stdc++.h>
using namespace std;
int main()
{
    int a[10]={0};
    for(int i:a)
    {
        cout<<i<<" ";
    }
    cout<<endl;
    for(int i:a)
    {
        i++;
        cout<<i<<" ";
    }
    cout<<endl;
    for(int i:a)
    {
        cout<<i<<" ";
    }
    cout<<endl;
    for(int &i:a)
    {
        i = i + 2;
        cout<<i<<" ";
    }
    cout<<endl;
    for(int i:a)
    {
        cout<<i<<" ";
    }
    cout<<endl;
}

//0 0 0 0 0 0 0 0 0 0 
//1 1 1 1 1 1 1 1 1 1
//0 0 0 0 0 0 0 0 0 0
//2 2 2 2 2 2 2 2 2 2
//2 2 2 2 2 2 2 2 2 2
```

## set
