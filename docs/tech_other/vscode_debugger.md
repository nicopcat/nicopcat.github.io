---
title: "如何在vscode 启动调试工具"
date: 2022-04-18T16:00:00+08:00
draft: false
showToc: false
weight: false
tags: ["工具","VSCode"]
layout: doc
---
# 如何在vscode 启动调试工具
除了浏览器里的 dev tool，非常牛逼的 VS Code 也内置了调试控制台，只需按照步骤配置 launch.json 文件即可。

# 步骤

1. 打开代码文件夹
2. 点右侧菜单栏的 **运行和调试** 或快捷键 **Ctrl + Shift + D**
3. 点击 创建 **launch.json** 文件。VSCode 会在工作区的 .vscode 文件夹下生成一个新的 launch.json 文件
4. 可以观察到，左侧有 lauch 菜单（一个类似播放的按钮），可以用此菜单启动服务器了。
   ![vscode-debugger-2022-04-18-16-24-17](https://blogpic-1308403500.file.myqcloud.com//posts-coversvscode-debugger-2022-04-18-16-24-17.png)

---

参考：https://segmentfault.com/a/1190000022804681
