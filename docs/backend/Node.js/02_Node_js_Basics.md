---
layout: doc
title: 2 - Node.js Basics
---

# 2 - Node.js Basics

## install node

install node
查看版本号
```
node -v
```
## window object
js运行在浏览器的时候，浏览器会提供全局的window对象，里面包含很多方法，例如window.setTimeout, window.setInterval等等。

在Node环境里呢？也有window对象。用法和在浏览器中一样。

## DOM
Node环境中不能再操作DOM，这是跟浏览器不一样的地方。

## Import/Export
Since Node.js v12, you can use both `require()` and `import` in Node.js, while you are limited to `import` in the browser.

### CommonJS Module
export:
```js
const a = '哈哈哈哈';
const b = [1, 2, 3];

module.exports = { 
  aaa: a,
  bbb: b,
  // or
  // a, b
}
```

require:
```js
const {aaa, bbb} = require('./export');
console.log(aaa,  bbb);
```

### ES Module
虽然Node从12版本就开始支持，但操作起来比较麻烦，参考https://nodejs.cn/api/esm.html#esm_ecmascript_modules

## The File System
想要读写文件，需要先引入fs模块：
```js
const fs = require('fs');
```

### read file
fs.readFile方法，接受两个参数，一个是文件地址，另一个是回调函数，回调函数中亦接受两个参数：
```js
const fs = require('fs');

fs.readFile('./docs/blog1.txt', ((err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
}));
console.log('done');

// done
// Buffer< xx, yy, ..>
```

### writing files
fs.writeFile方法会覆盖原来的内容
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

---
## Streams
The main idea is: <mark>start using data, before it has finished loading</mark>。

想象加载一部电影时，我们是不可能等电影所有的data都缓冲完毕才开始看这部电影，而是等这部电影加载一部分就可以看了，这一小块一小块的data称之为chunk。

一个资源，先是以stream的方式传到客户端，fs中可以监听stream data，每当data装满一部分，就会被运送到客户端。

#### readStream
假设我们有一个文件 `./docs/blog2.txt`，即将通过stream传到客户端：

```js
const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog2.txt');

// 监听事件
readStream.on('data', (chunk) => {
  console.log('-----new chunk-----');
  console.log(chunk);
})
```
运行文件，我们可以得到：

![20230611231208](https://nic-gz-1308403500.file.myqcloud.com/vitepress/02_Node_js_Basics-2023-06-19-23-24-22.png)

#### writeStream
除了`readStream`，我们还可以`writeStream`:
```js
const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog2.txt' );

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

```js
const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog2.txt' );

const writeStream = fs.createWriteStream('./docs/blog3.txt')

// readStream.on('data', (chunk) => {
//   console.log('-----new chunk-----');
//   console.log(chunk);
//   writeStream.write('hello \n');
//   writeStream.write(chunk);
// })

readStream.pipe(writeStream);
```

删除blog3.txt，然后运行上面的代码，也会得到和前面一样的blog3.txt