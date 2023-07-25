---
layout: doc
title: （一）创建一个 uniapp 项目
---

# （一）创建一个 uniapp 项目

## 方案一：使用 HbuilderX 创建项目

https://uniapp.dcloud.net.cn/quickstart-hx.html

HXB是官方推荐的编辑器。确实，在某些方面确实比较便利，例如引入插件，打包等等。如果实在并不想用BHX，下面还会介绍如何在VSCode中创建uniapp项目。
### 下载 HbuilderX
https://dcloud.io/hbuilderx.html

### 创建一个 uni-app demo
打开 HBX，视线来到左上角工具栏 文件 -> 新建 -> 项目（或使用快捷键 Ctrl+N）

没有特殊需要的话，选择默认模板。

模板选好后，输入项目名称，然后点击右下角“创建”，就完成了第一步。

### 运行 uniapp

进入刚刚项目，点击工具栏的运行 -> 运行到浏览器 -> 选择浏览器，即可体验 uni-app 的 web 版。

目录：

```
┌─components              组件目录
│  ├─uni-list             list 列表目录
│  │  └─uni-list.vue      list 组件文件
│  ├─uni-list-item        list-item 列表目录
│  │  └─uni-list-item.vue list 组件文件
│  ├─uni-badge         	  badge 角标目录
│  │  └─uni-badge.vue     badge 组件文件
│  └─ //....              更多组件文件
├─pages                   业务页面文件存放的目录
│  ├─index
│  │  └─index.vue         index示例页面
├─main.js                 Vue初始化入口文件
├─App.vue                 应用配置，用来配置App全局样式以及监听 应用生命周期
├─manifest.json           配置应用名称、appid、logo、版本等打包信息，详见
└─pages.json              配置页
```

### 发布

菜单栏 - 发行 - 选择需要的发行端

## 方案二：使用脚手架
其实还是可以用VSCode开发的。

使用Vue-cli构建，npm/yarn包管理，webpack打包————标准化的Vue项目✔

### 全局安装 vue-cli

https://uniapp.dcloud.net.cn/quickstart-cli.html

```
npm install -g @vue/cli@4
```

这里指定版本，以免最新的有什么问题。

### 创建 uni-app 项目

```
vue create -p dcloudio/uni-preset-vue my-project
```

创建完成，命令行会让你选择一个模板。默认模板以外的模板，会有一些内置的组件，供初学者学习。

### 运行

```
npm run serve  或 yarn serve
```
