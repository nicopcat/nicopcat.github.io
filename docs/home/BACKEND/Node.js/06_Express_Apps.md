---
layout: doc
title: 6 - Express Apps
---

# 6 - Express Apps

>Express.js是一个基于Node.js平台的Web应用程序框架，它提供了一组强大的特性和工具，使得创建Web应用程序和API更加简单和快速。Express.js具有简单的API、易于学习、灵活性强、可扩展性好等特点，被广泛用于构建各种类型的Web应用程序，包括单页面应用程序、多页面应用程序、RESTful API等。由于其流行和活跃的社区支持，Express.js已成为Node.js生态系统中最受欢迎的Web框架之一。

简单地，Express 是 Node.js 的一个框架，它可以帮助我们更加优雅地管理路由请求、服务端逻辑和响应。

上一篇使用的是Node.js内置功能，接下来就使用Express实现同样的功能。

## 安装
```
npm i express
```

## 创建一个express app
```js
const express = require('express');
const app = express();

app.listen(3000);

app.get('/', (req, res) => {
  res.send('<p>using express!</p>');
})
```

## HTML & Routing
现在学会了向前台发送简单的html snippets，那么如何发送html文档呢？又怎么设置路由？

```js
app.get('/', (req, res) => {
  res.sendFile('./views/index.html', {root:__dirname})
})

app.get('/about', (req, res) => {
  res.sendFile('./views/about.html', {root:__dirname})
})
```

以上代码分别为根目录`/`设置了路径，和返回的html文件，浏览器输入`/`时，会访问**index.html**，浏览器输入`/about`，则访问**about.html**。

然后加上一个navbar，点击Home，浏览器访问`'localhost:3000/'`，后台受收到请求，返回相应的文件。
```html
  <nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
  </nav>
```


## Redirects & 404
It's very easy to do redirect with express app.

```js
// redirects
app.get('/about-me', (req, res) => {
  res.redirect('/about')
})
```

and also 404 page,
```js
// 404 page
app.use((req, res) => {
  res.sendFile('./views/404.html',{root: __dirname})
})
```

Notice the `app.use()` method, it matches every request sending through. So we'd better put it at the bottom of everything. When no urls can be catched by the upper ones, they will evnetually fall on the 404 landing page.

And don't forget to set the status for 404 page, otherwise the header will set 200 OK instead.(Coz we actually land somewhere name 404.html)
![snapshot](https://nic-gz-1308403500.file.myqcloud.com/vitepress/06_Express_Apps-2023-06-19-23-22-27.png)

set status:
```js
// 404 status
app.use((req, res) => {
  res.status(404).sendFile('./views/404.html',{root: __dirname})
})
```