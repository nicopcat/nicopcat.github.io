---
title: "2分钟创建一个简易Node.js服务器"
date: 2022-07-06T01:00:00+08:00
tags: ["Node.js","intro"]
draft: fasle
showToc: false
layout: doc
---
# 2分钟创建一个简易Node.js服务器
首先，下载 [Node](https://nodejs.org/en/)，输入`node -v` 查看当前Node版本。

然后创建一个 server.js 文件。

下面使用node.js自带http module创建服务器
```jsx

// 使用require函数导入http，返回一个http object 储存到变量
const http = require('http');

// 使用 createServer函数创建服务器 返回server object
const server = http.createServer((request, response) => {
    // request 可以获得前端发来的请求信息，如POST,请求头等
    // response 给前端发送的信息
    // 如response.end()给前端发送信息
    // response.header()设置头部信息

    // 这次只是简单地返回一句话 证明运行成功！
    response.end('wow You are running node.js')
});

// 监听来自前端的请求 使用server object里的listen()函数
// 三个参数：port，ip，callback
const port = 3000;  // 可自行定义
const ip = '127.0.0.1' // 本机ip

// 定义请求监听器（一个函数）
server.listen(port, ip, () => {
    console.log(`Server is running at http://${ip}:${port}`);
});
```

和前端不一样的是，node.js 服务器不会热重载，更新完需要重新运行服务器。

--- 
# 参考
1. [WenXuanDecode - Create 1st NodeJS Module](https://www.youtube.com/watch?v=7HCrawdnTuw&list=PL50akgsaBZlF9DADkYuQZLQBDLHZHZ-9N&index=7)