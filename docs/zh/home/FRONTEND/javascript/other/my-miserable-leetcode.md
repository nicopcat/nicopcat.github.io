---
title: "力扣 oh Leetcode"
date: 2022-05-18T11:00:00+08:00
layout: doc
lastUpdated: true
---
# 力扣 oh Leetcode
作为一个准前端开发者，我天真地以为不用看力扣，~~你只是个切图仔~~。但感受到各方各界的暗示：你得看，你得看看。  

好吧，其实是快要机考了。  

从网上搜的机考真题来看，貌似是3道算法题，难度也许在力扣简单-中等之间。对于一个月前才知道 codewars 这个可爱网站的我来说，不啻晴天霹雳，于是我跑到力扣大概看了几道简单的题目。  

第一题很“简单”，只用一个了一个JS的方法就可以计算出来。查看他人的解题，发现大家的思路很不一样，甚至很陌生。这些新奇的思路（不用库）大概就是传说中的**算法**吧。

啊，算法，犹如哥伦布一脚踏进美洲，还以为是另一个印度呢。  

---

# 已了解/未了解：

- [X] 二分算法
- [ ] 哈希算法
- [ ] 滑动窗口
- [X] 左右双指针
- [X] 棧

---
# 左右双指针
## 判断str是否为回文字符串
- **指针解法**
```js
function judge(str) {
  let left = 0;
  let right = str.length - 1;
  if (str.length === 0) return false;
  while (left <= right) {
    if (str[left] !== str[right]) {
      return false
    } else {
      left++;
      right--;
    }
  }
  return true;
}
```

- **循环解法**
```js
function judge(str) {
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false
    }
  }
  return true
}
```



# 栈
## 有效的括号
### 题目描述与示例
给定一个只含有 `'('`，`')'`，`'{'`，`'}'`，`'['`，`']'`的字符串，判断这些括号的是**一一对应**。  
题目地址： https://leetcode.cn/problems/valid-parentheses/

### 解题思路
据观察这是一个*栈* 问题，我马上能想到的一个应用场景是 eslint 检查拼写：通过括号匹配原则，假如某个粗心的开发则只输入了一个`"<"`，忘记输入closing tag，eslint可以用这个算法提示用户出错了。更底层的应用，可以在词法解析过程。    

首先，需要遍历这个字符串，判断第一个字符是否属于左括号，若是左括号，我们要做的就是把它放到栈这个抽象容器中，为它找到一个相符的右括号。栈，是不是有点成都老年相亲角的意思，等着有缘人来配对？   

接下来判断第二个字符，若依然是左括号，则继续放到栈里等配对。直到出现一个右括号，呆在栈里的单身狗就可以出栈了。

- **用 switch 循环**
```js
function isValid(s) {
  let stack = [];
  const length = s.length;
  // 个数非偶 直接返回false
  if (length % 2) return false;
  }
  for (let item of s) {
    // 遍历 逐个判断是左还是右
    switch (item) {
      case '(':
      case '[':
      case '{':
        // 左则放到栈里
        stack.push(item);
        break;
        // 逐个判断 是否为最上层的要找到那个人
      case '}':
        if (stack.pop() !== '{') return false;
        break;
      case ']':
        if (stack.pop() !== '[') return false;
        break;
      case ')':
        if (stack.pop() !== '(') return false;
        break;
    }
  }
  // 全体配对 stack为 []，返回 true
  return !stack.length;
}
```

- **用 ES6 的 Map 映射**
```js
function isValid(s) {
  // let arr = s.split('');
  let map = new Map([[')', '('], [']', '['], ['}', '{']]);
  let stack = [];
  for (i of s) {
    if (map.get(i)) {
      if (map.get(i) === stack[stack.length - 1]) {
        stack.pop()
      } else {
        return false
      }
    } else {
      stack.push(i)
    }
  }
  return !stack.length
}
```