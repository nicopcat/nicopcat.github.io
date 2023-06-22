---
layout: doc
title: 8 - Middleware
---

# 8 - 中间件 Middleware

指在服务器接收请求和发送响应之间运行的代码。

>在 Node.js 中，中间件是指一个函数或者一组函数，它们可以被嵌入到 HTTP 请求和响应处理流程中，用于完成特定的任务，例如日志记录、身份验证、请求转发、数据格式转换等等。中间件可以被看作是一个拦截器或者过滤器，它们可以修改请求和响应对象，或者在处理请求和响应之前或之后执行某些操作。

之前处理404时就用过中间件`app.use()`
```js
// 404 page
app.use((req, res) => {
  res.status(404).render('404',{title: '404'});
})
```

## 使用next()
`next()` 有着放行的作用，如果不call `next()`, 那么请求将卡在这个中间件里
```js
app.use((req, res, next) => {
  console.log('第一个中间件');
  console.log(req.hostname);
  next()
})

app.use((req, res, next) => {
  console.log('第二个中间件');
  next()
})
```

## Third Party Middlewares
使用一个叫morgan的logger中间件。

安装
```
npm i morgan
```

使用
```js
const express = require('express');
const app = express();
const morgan = require('morgan');

app.listen(3000);

app.use(morgan('tiny'));

// ...

```

## Static Files
从之前的实践中，我们目前只能在`<head>`标签中写内联样式，而不能用外联的.css文件，这是因为App没用对文件进行处理。

处理静态文件，可以用Express自带的中间件。

**app.js中运行中间件**

```js
// middleware for static files
app.use(express.static('public'));
```
上面的代码将public文件夹指定为静态文件的目录。

根目录新建public 文件夹 ，将style.css放入该文件。

在head.ejs中，引入style.css
```html
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nic部落格 | <%= title %></title>

  <link rel="stylesheet" type="text/css" href="style.css">
</head>
```
注意，路径为`styles.css`或`/styles.css`，因为引用的根目录已设置为`/public`。
