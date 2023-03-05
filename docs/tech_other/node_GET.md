---
title: "Node.js GET请求"
date: 2022-07-06T02:00:00+08:00
publishDate: 2022-07-07T18:00:00+08:00
tags: ["Node.js","intro","GET"]
draft: false
showToc: false
layout: doc
---
# Node.js GET请求
---

# resquest中的几个属性和方法：

`request.url`: 返回请求页面的url

`request.method`: 识别请求方法

服务器想要知道请求页面的url以及方法，然后返回匹配的内容：

```jsx
// 判断方法
if (method === 'GET') {
    if (url === '/') {
      sendResponse('index.html', 200, response)
    } else if (url === '/about.html') {
      sendResponse('about.html', 200, response)
    }
    else {
      sendResponse('404.html', 404, response)
    }
  } else {

  }

});
```

# 配置sendResponse函数

使用`sendResponse()`函数，根据请求html读取相应文件 通过`end()`发给用户

- `sendResponse()`函数有三个参数：`filename`, `statusCode`, `response`
- 导入fs(file system)模块

```jsx
const fs = require('fs');
```

- 使用`fs.readFile()`函数，读取文件。它有两个参数：`filename(路径)`，`callback`
- 这个`callback`也有两个参数：`error`, `data`。`error`是错误信息，`data`是返回的内容

```jsx
const sendResponse = (filename, statusCode, response) => {
  fs.readFile(`./html/${filename}`, (error, data) => {
    if (error) {
			// 设置报错状态码 500
      response.statusCode = 500;
			// 设置请求头 内容类型：文本
      response.setHeader('Content-Type', 'text/plain')
			// 简单的报错信息      
			response.end('internet error')
    } else {
      response.statusCode = statusCode;
      response.setHeader('Content-Type', 'text/html')
      // 发送读取到的data（文件和信息等）
			response.end(data)
    }
  })
}
```

# GET请求带参数

![Untitled](https://nic-gz-1308403500.file.myqcloud.com/posts/node-js-GET-intro-2022-07-06-02-22-07.png)

## JavaScript URL Object

它提供了获取参数的一些方法。

```jsx
const requestUrl = new URL(请求的url,基本url)
// 请求url： 即页面请求url，如about.html
// 基本url：http://${ip}:${port}
```

打印`requestUrl` ，可以得到：

![Untitled](https://nic-gz-1308403500.file.myqcloud.com/posts/node-js-GET-intro-2022-07-06-02-23-04.png)

在地址栏的后面加上表示搜索的参数 `?lang=zh`，打印`requestUrl` 可以得到：

![Untitled](https://nic-gz-1308403500.file.myqcloud.com/posts/node-js-GET-intro-2022-07-06-02-23-11.png)

打印结果说明，我们可以从searchParams对象拿到参数信息，即`requestUrl.searchParams.get("lang")`，结果为zh字面量。

可以根据请求获取lang信息并保存到变量：

```jsx
const lang =  requestUrl.searchParams.get("lang")
```

增加一个`selector`变量，这个变量放到之后的`sendReqeust()`参数中。

接着，写判断语句，让url变成对应的路径：

```jsx
const lang = requestUrl.searchParams.get('lang')
    let selector;

		// 根据lang 切换selctor的值
    if (lang === null || lang === 'en') {
      selector = ''
    } else if (lang === 'zh') {
      selector = '-zh'
    } else {
      selector = ''
    }
```

接着，重写url判断语句，读取对应的file:

```jsx
const lang = requestUrl.searchParams.get('lang')
    let selector;

    if (lang === null || lang === 'en') {
      selector = ''
    } else if (lang === 'zh') {
      selector = '-zh'
    } else {
      selector = ''
    }

// 根据selector的值，读取不同的html文件
if (url === '/' || url === `/index.html`) {
      sendResponse(`index${selector}.html`, 200, response)
    } else if (url === `/about.html`) {
      sendResponse(`about${selector}.html`, 200, response)
    }
    else {
      console.log(url);
      console.log(selector);
      sendResponse(`404${selector}.html`, 404, response)
    }
```
---
# 参考
1. [WenXuanDecode - NodeJS GET请求 入门教学](https://www.youtube.com/watch?v=gOPS_1jgaR4&list=PL50akgsaBZlF9DADkYuQZLQBDLHZHZ-9N&index=3)
