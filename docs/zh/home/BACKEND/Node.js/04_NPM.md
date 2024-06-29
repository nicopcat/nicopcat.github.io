---
layout: doc
title: 4 - NPM
---

# 4 - NPM
我每天都在用的node第三方包管理系统。

首先，我们来安装一个第三方包nodemon。nodemon提供的hot reload功能，让我们每次修改代码不需要先停止服务，再重新运行。

**安装**

```
npm -i -g nodemon
```

**使用**

```
nodemon ./server/server.js
```

## packages.json
如果你有很多第三方包想要引入，那么大概率会需要一个包管理文件。
命令行初始化：
```
npm init
```
此时，得到一个packages.json文件

