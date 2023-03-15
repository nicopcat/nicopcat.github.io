---
layout: doc
title: （一）创建 uniapp 项目
---

# （一）创建uniapp项目

## 方案一：使用 uniapp 推荐的 HbuilderX 编辑器

https://uniapp.dcloud.net.cn/quickstart-hx.html

首先，下载 HbuilderX。

一开始真心不舍得抛弃宇宙第一好用编辑器 VSCode，无奈还是 HBX 对 uniapp 支持好一点，就开始用起了它。

### 创建一个 uni-app demo

在 HBuilderX 新建 uni-app 项目的模板中，选择需要的模板。不需要模板就选择默认模板。

在点击工具栏里的文件 -> 新建 -> 项目（快捷键 Ctrl+N）

### 运行 uniapp

进入 hello-uniapp 项目，点击工具栏的运行 -> 运行到浏览器 -> 选择浏览器，即可体验 uni-app 的 web 版。

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
