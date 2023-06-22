---
title: "Tech Daily 001"
date: 2022-04-22T18:00:00+08:00
# lastmod: 2022-03-03T12:29:00+08:00
draft: false
showToc: false
tags: ["TechDaily"]
layout: doc
---
# Tech Daily 001
跟逛维基百科一样，前端用语一个接一个映入眼帘，了解完 A 又出现了 B, C, D……

# Composition API

Vue 3 重大新特性之一，中文“组合式 API”，Vue 2.x 使用的是 Option API。简单来说就是把一坨代码放到`setup()`函数里集中管理，解决业务关注点过多的问题。

![tech-daily-001-2022-04-22-18-45-34](https://blogpic-1308403500.file.myqcloud.com//posts-coverstech-daily-001-2022-04-22-18-45-34.png)

查看[大帅老猿](https://juejin.cn/post/6890545920883032071)花了一夜做的动画

# pinia

大菠萝，全新的 Vue 状态管理库，相当于 vuex 5 版本。

## 特点

- 体积非常小
- 简化状态管理：砍掉了 vuex 中的 mutation，只剩下 state, getter 和 action
- 支持 TypeScript
- 非常适合 Vue 3 的 Composition API
- 适合管理小型单页应用程序
  ![pinia](https://camo.qiitausercontent.com/1646f0baaa071a4e8c77e2ed4e17a759acde98ec/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f3530373337312f65633062383636312d393233372d623266302d623435322d3530666265353937323863662e706e67#center)

# Nuxt.js

混合型开源的 vue 框架（框架的框架？）

> NuxtJS 让你构建你的下一个 Vue.js 应用程序变得更有信心。这是一个   开源   的框架，让 web 开发变得简单而强大。

目前有 Nuxt 2，Nuxt Bridge 和 Nuxt 3 这几个版本，似乎还在开发中。

# Pollyfill

由于各个浏览器/版本不统一，造成某些功能无法使用，pollyfill 相当于处理兼容性的工具。

通常做法是，**先检查当前浏览器是否支持某个 API，如果不支持就加载相应的 polyfill 脚本。**

# Babel

> Babel 是一个工具链，主要用于将 ECMAScript 2015+ 版本的代码转换为向后兼容的 JavaScript 语法，以便能够运行在当前和旧版本的浏览器或其他环境中。

下面列出的是 Babel 能为你做的事情：

- 语法转换
- 通过 Polyfill 方式在目标环境中添加缺失的特性 (通过 [@babel/polyfill](https://link.juejin.cn/?target=https%3A%2F%2Fwww.babeljs.cn%2Fdocs%2Fbabel-polyfill) 模块)
- 源码转换 (codemods)

# AST 抽象语法树

AST 是一种树形结构，并且是某种代码的一种抽象表示。

高级语言例如 JavaScript，首先通过 parser 转化为 AST，然后才转为更低级的 Bytecode 或 Machine Code，经历**词法分析**和**语法分析**两个步骤。
