---
layout: doc
title: 3 - Clients & Servers
---

# 3 - Clients & Servers

## creating a server
- create a server
- listen to the request and then respond

首先引入`http`模块，才能使用http功能：
```js
const http = require('http');
```

然后通过http里的`createServer`方法创建服务器，它接收一个回调函数，包含`request`和`respond`两个参数：
```js
const server = http.createServer((req, res) => {
  console.log('made a request');
  res.end('haha');
});
```

最后是监听该服务器，当有访问的时候，进行监听。监听时需要设置prot和ip地址。
```js
server.listen(3000, 'localhost', () => {
  console.log('port: 3000');
})
```


以下是全部代码：
```js
const http = require('http');

const server = http.createServer((req, res) => {
  console.log('made a request');
  res.end('haha');
});

server.listen(3000, 'localhost', () => {
  console.log('port: 3000');
})
```

## Requests & Responses
从request身上，可以访问到method, url等属性。method让我们知道进行的是哪种请求，url可以让我们设置简单的路由。

从respond身上也能获取许多属性，这些属性可以设置cookies, 把一些重要信心返回给客户端，比如headers, 状态码等等，让客户端知道这次请求的效果如何。

可以简答低用response返回一些HTML标签，
```js
const server = http.createServer((req, res) => {
  res.write('<p>这是p标签</p>')
  res.end();
});
```

这种做法肯定是不可取的啦，最终返回的还得是文件，然后再进行渲染。

## 返回 HTML 文件
如何给客户端返回一个HTML文件呢？那就需要引入fs模块，使用fs.readFile读取文件，随后返回给客户端。

```js
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
	// 注意，header的Content-Type需要设置为text/html
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  
  // 读取文件
  fs.readFile('./views/index.html', (err, data) => {
    if (err) {
      throw err;
      res.end();
    }
    else {
    // 结束时返回文件
      res.end(data);
     }
  })

});

```

## Basic Routing
简单的路由可以通过更改readFile的**路径**参数实现。

当根路径被访问时，后端返回index.html，可以写成
```js
if(req.url === '/'){
  fs.readFile('./views/index.html', (err, data) => {
    if (err) {
      throw err;
      res.end();
    }
    else {
      res.end(data);
     }
  })
}
```

多个路径可以用`switch..case..`
```js
let path = './views/';
  switch (req.url) {
    case '/':
      path += 'index.html'
      break;
    case '/index':
      path += 'index.html'
      break;
    default:
      path += '404.html'
      break;
  }
  fs.readFile(path, (err, data) => {
    if (err) {
      throw err;
      res.end();
    }
    else {
      res.end(data);
     }
  })
```

## Status Code
- 状态码为浏览器描述了响应的类型，此次请求到底是成功，还是失败。
- 如果是失败的请求，它可以简单反映失败的原因


|  range   | meaning  |
|  ----  | ----  |
| 100  | informational response |
| 200  | success codes |
| 300  | codes for redirects |
| 400  | user or client error codes |
| 500  | server error codes |

在node.js server中设状态码非常容易：
```js
res.statusCode = 200;
```
or `writeHead`
```js
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
```

## redirects
当需要重定向时，可以使用 `setHeader` 实现：
```js
  let path = './views/';
  switch (req.url) {
    case '/':
      res.statusCode = 200;
      path += 'index.html'
      break;
      
		// 当访问 /about，重定向至/index
    case '/about':
      res.statusCode = 301;
      res.setHeader('Location', '/index')
      res.end();
      break;
    default:
      res.statusCode = 404;
      path += '404.html'
      break;
  }
```