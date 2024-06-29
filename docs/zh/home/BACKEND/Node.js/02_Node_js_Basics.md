---
layout: doc
title: 2 - Node.js Basics
---

# 2 - Node.js Basics

## Install node
安装完成后，输入命令查看Node.js版本号：
```
node -v
```
## Window object
JavaScript在浏览器中运行的时候，浏览器会提供全局的window对象，其中包含很多方法，例如定时器`window.setTimeout`, `window.setInterval`等等。

在Node环境里也有window对象，用法和在浏览器中一样。

## DOM
Node环境中也不能（不需要）操作DOM，这是跟浏览器不一样的地方。

## 模块的导入/导出 Import/Export 

Node.js中推荐使用 ****CommonJS**** 对模块导入导出。


自 Node.js v12 开始，你可以在 Node.js 中同时使用 `require()` 和 `import`，而在浏览器中，你只能使用 `import`。

### CommonJS Module ✔
```js
 // export:

const a = '哈哈哈哈';
const b = [1, 2, 3];

module.exports = { 
  aaa: a,
  bbb: b,
  // or
  // a, b
}
```


```js
// require:

const {aaa, bbb} = require('./export');
console.log(aaa,  bbb);
```

### ES Module
虽然Node从12版本就开始支持，但操作起来比较麻烦，参考https://nodejs.cn/api/esm.html#esm_ecmascript_modules

## The File System 文件读写
想要读写文件，需要先引入fs模块：
```js
const fs = require('fs');
```

### read file
`fs.readFile`方法，接受两个参数：一个是文件地址，另一个是回调函数，回调函数中亦接受两个参数。
```js
const fs = require('fs');

fs.readFile('./docs/blog1.txt', ((err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
}));
console.log('done');

// 打印结果：
// done
// Buffer< xx, yy, ..>
```

### writing files
`fs.writeFile`方法会覆盖原来的内容。同样的，第一个参数是文件的相对地址，第二个参数是内容，第三个参数是回调函数。
```js
fs.writeFile('./docs/blog1.txt', 'hello world', () => {
  console.log('writing done.');
});
```

### directories
可以先用`fs.existsSync`方法判断是否存在这个目录。如果在相同目录已存在时调用`fs.mkdir`，会报错。

```js
// 是否存在
if (fs.existsSync('./assets')) {
	// 如果存在则remove
  fs.rmdir('./assets', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('dir delete');
  })
} else {
	// 不存在则make
  fs.mkdir('./assets', (err) =>{
    if (err) {
      console.log(err);
    }
    console.log('done.');
  })
}
```

### deleting files
直接贴代码，用的是`fs.unlink`
```js
if (fs.existsSync('./docs/deleteme.txt')) {
  fs.unlink('./docs/deleteme.txt', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('delete done.');
  })
}
```

## 流 Streams

>Streams（流）是Node.js中的一个核心概念，它是一种处理流式数据的机制。在Node.js中，流可以将数据分成一系列小块，这些小块可以逐个地处理，从而提高数据处理的效率和性能。

>在Node.js中，有四种类型的流：可读流（Readable）、可写流（Writable）、双工流（Duplex）和转换流（Transform）。其中，可读流用于读取数据，可写流用于写入数据，双工流既可以读取数据也可以写入数据，转换流用于在读取和写入数据之间进行转换。

想象你在加载一部电影时，不可能等电影所有的data都缓冲完毕才开始看这部电影，一般等一部分缓冲(Buffer)好就可以开始看了，这一小块一小块的data称之为**chunk**。

一个资源，先是以stream的方式传到客户端，利用`readStream.on()`监听stream data，每当data装满一部分，就会被运送到客户端。

#### 读取 readStream
假设我们有一个文件 `./docs/blog2.txt`，即将通过stream传到客户端：

```js
const fs = require('fs');

//这里创建了一个可读文件
const readStream = fs.createReadStream('./docs/blog2.txt');

// 监听事件
readStream.on('data', (chunk) => {
  // 一旦chunk存在，就打印内容
  console.log('-----new chunk-----');
  console.log(chunk);
})
```
运行文件，我们发现，控制台打印了分割线`'-----new chunk-----'`以及一大堆二进制的数据 `<Buffer 61 61 61 61 ...>`

![20230611231208](https://nic-gz-1308403500.file.myqcloud.com/vitepress/02_Node_js_Basics-2023-06-19-23-24-22.png)

#### 写入 writeStream
除了`readStream`，我们还可以`writeStream`:
```js
const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog2.txt' );
// 在 blog3.txt 中写入内容
const writeStream = fs.createWriteStream('./docs/blog3.txt')

readStream.on('data', (chunk) => {
  console.log('-----new chunk-----');
  console.log(chunk);
  writeStream.write('hello \n');
  writeStream.write(chunk);
})
```

![20230611231639](https://nic-gz-1308403500.file.myqcloud.com/vitepress/02_Node_js_Basics-2023-06-19-23-25-01.png)

#### pipe
除了上面那种写法，还可以用pipe达到相同的目的。

在Node.js中，pipe（管道）是一种将可读流和可写流连接在一起的机制。通过使用`pipe()`方法，我们可以**将一个可读流的输出直接连接到一个可写流的输入**，从而实现数据的流式传输和处理。


```js
const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog2.txt' );
const writeStream = fs.createWriteStream('./docs/blog3.txt')

// 不需要监听读取文件了
// readStream.on('data', (chunk) => {
//   console.log('-----new chunk-----');
//   console.log(chunk);
//   writeStream.write('hello \n');
//   writeStream.write(chunk);
// })

// 读取文件后直接写入
readStream.pipe(writeStream);
```