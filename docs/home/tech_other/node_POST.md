---
title: "Node.js POST请求"
date: 2022-07-08T02:00:00+08:00
publishDate: 2022-07-08T18:00:00+08:00
tags: ["Node.js","intro","POST"]
draft: false
showToc: false
layout: doc
---
# Node.js POST请求
好，继续学习Node.js的POST请求~

接下来的任务是创建一个用户登录表单，用户输入的用户名和密码数据会传到后端，服务器校验。校验通过之后，页面跳转。


文档结构：
```text
|-- node_POST
    |-- server.js
    |-- html
        |-- 404-zh.html
        |-- 404.html
        |-- about-zh.html
        |-- about.html
        |-- index-zh.html
        |-- index.html
        |-- login-fail.html
        |-- login-success.html
        |-- login.html

```
# 表单
新建表单，绑定action和method：
```html
<form action="/process-login" method="POST">
```

当用户提交的时候，会触发action，地址跳转到`"/process-login"`。 后端可以通过监听这个url，然后对传过来的数据继续处理。

首先判断是否POST请求，然后判断url是否为上述地址：

```js
if (url === '/process-login')
```

## 前端如何给后端传递数据的

前端通过互联网将数据传给后端，这个数据被形象地成为stream（数据流）。

前端提交的data会转换成二进制数据，流向Node.js后端。在这个过程中，数据会被切割成好几部分，分批发送。

![data-stream](https://nic-gz-1308403500.file.myqcloud.com/posts/node-js-POST-2022-07-06-08-48-19.png "Stream")

当数据分批抵达Node.js服务器后，数据会先被储存在一个缓冲区(Buffer)，之后Node.js会根据情况将数据从缓冲区传到程序中。

缓冲区可以控制数据流的速度，当数据流接收速度过快，数据就保存在缓冲区内；当速度较小，数据将暂时积攒在缓存中，攒够了程序才读取。典型的例子就是视频缓冲。

# 处理前端POST过来的数据

判断好确实是表单那边传过来的数据后，定义一个数组变量`body`：

```jsx
if (url === '/process-login') {
	let body = [];
}
```

程序会分批读取缓冲区里传过来的数据，所有需要对数据进行监听，每传过来一次，就将数据push到body变量里：

```jsx
if (url === '/process-login') {
  let body = [];

  // 然后插入request监听器 监听data
  request.on('data', (chunk) => {
    body.push(chunk)
  })
}
```

创建第二个监听器`request.on('end', callback)`，查看数据是否完全读取：

```jsx
if (url === '/process-login') {
  let body = [];

  request.on('data', (chunk) => {
    body.push(chunk)
  })

  // 分段数据从Buffer转换成程序能识别和调用的步骤 
  request.on('end', () => {
    // concat方法用于合并数据 
    body = Buffer.concat(body).toString();
    body = new URLSearchParams(body);
}
```

由于querystring方法已废弃，所以改用`URLSearchParams`解析数据。

参考 [http://nodejs.cn/api/url.html#class-urlsearchparams](http://nodejs.cn/api/url.html#class-urlsearchparams)

相关语法：

```jsx

// 创建新的URL对象并储存
const params = new URLSearchParams(obj)

// 通过key读取val
params.urlSearchParams.get(name)
```

## 根据data信息，写一个用户验证

此时，用户输入的username和password已保存在body变量中，所以写if条件句进行简单判断：

```jsx
if (body.get('username') === 'admin' && body.get('password') === '123456') {
  response.setHeader('Location', '/login-success.html')
  response.statusCode = 301

} else {
  response.setHeader('Location', '/login-fail.html')
  response.statusCode = 301
}

response.end();
```

这里用到的API是`urlSearchParams.get(name)`。如果username为`'admin'`且password为`'123456'`则登录成功，状态码设置成`301`，跳转使用`res.setHeader('Location',’/addr’)`

最后，用`response.end()`把后端数据发往前端

---
# 参考
1. [WenXuanDecode - NodeJS: 实操登录表单提交和后端处理](https://www.youtube.com/watch?v=MQD8lSf439g&list=PL50akgsaBZlF9DADkYuQZLQBDLHZHZ-9N&index=5)

2. [Node.js API - new URLSearchParams(obj)](https://nodejs.org/api/url.html#new-urlsearchparamsobj)