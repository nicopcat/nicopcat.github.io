---
title: "用简单的方式理解JavaScript Promise"
date: 2022-07-03T13:00:00+08:00
layout: doc
lastUpdated: true
---
# 用简单的方式理解JavaScript Promise
众所周知，在JavaScript的世界中，代码是单线程执行的。

这样设计的后果是容易**阻塞随后的脚本运行**。


下面的例子中，要等待`doNotDoThis()`打印完0 ~ 100000，才能接着打印`console.log('Second log')`， 

```js
function doNotDoThis() {
    for (let i = 0; i < 100000; i++) {
        console.log(i);
    }
}

// 立即打印
console.log('First log')

// Don't do this.
doNotDoThis();

// 然后立即打印
console.log('Second log')
```



只要我们网络冲浪，访问不同的网址，就需要向各个服务器发送HTTP请求，然后等待返回数据。

但是呢，服务器不可能立即返回数据到客户端。

但如果按照单线程的运行方式，服务器返回数据之前，浏览器会处于一种卡死状态，这会让我们冲浪的体验极差。

![sending-requests](https://nic-gz-1308403500.file.myqcloud.com/posts/js-promise-2022-07-03-14-13-18.png "图源：知乎-张秋怡")

于是就有了一些解决方案。

# 异步请求1.0 ———— 古早的Callback
我们可以给处理函数传递一个回调函数来处理回调结果。

我们常见的定时器`setTimeout()`就是回调函数：
```js
const callball =  () => {
    console.log("I'm a callback.")
  }

function isCallback() {
  setTimeout(callback, 2000)
}

isCallback()
//2秒后打印： I'm a callback.
```

但要是回调函数非常复杂，嵌套好几个回调函数，就会造成**回调地狱**
```js

// a函数执行b，b函数执行c，c函数打印最终结果
a(function (resultA) {
    b(resultA, function (resultB) {
        caches(resultB, function (resultC) {
            console.log(resultC);
        })
    })
})
```

![callback-hell](https://nic-gz-1308403500.file.myqcloud.com/posts/js-promise-2022-07-02-21-02-58.png)


于是就有了一种更直观简洁的写法：**Promise**

使用Promise简化上个例子的回调写法：
```js
a()
  .then(function (resultA) { b(resultA) })
  .then(function (resultB) { c(resultB) })
  .then(function (resultC) { console.log(resultC) })
```

代码是不是看起来更直观了？
# 异步请求2.0 ———— Promise
Promise是一个对象，它接受两个参数：`resolve` 和 `reject`，两者都是函数（函数确实可以当作参数传递给另一个函数）


所以我们可以在回调函数里调用`resolve()`，表示任务成功执行；若是Promise报错或者拒绝履行承诺，则调用`reject()`

基本写法:
```js
let p = new Promise(function(resolve, reject) {});
```


使用Promise写异步请求，意味着在将来的某个时间点，Promise一定会返回一个结果，并保存在resolve()和reject()中。

Jecelyn Yeen 在她的[文章](https://www.digitalocean.com/community/tutorials/understanding-javascript-promises)中，举了一个非常浅显易懂的例子来解释Promise的概念。

她假设，你是一个小孩，你妈妈承诺下周会帮你买一部新手机。

其间会有三种状态：

1. Pending（进行中）: 你不知道自己是否会得到
2. Fullfilled（已成功）：妈妈很高兴，帮你买了新手机
3. Reject（已失败）：妈妈心情差，没有帮你买新手机

用代码实现一下：

```js
const isMomHappy = true;

const willGetNewPhone = new Promise((resolve, reject) => {
  if (isMomHappy) {
    const phone = {
      brand: 'Apple',
      color: 'black'
    }
    resolve(phone);
  } else {
    const reason = new Error('mon is not happy')
    reject(reason)
  }
})
```

结果或是成功（resolve），或是失败（reject）。

接下来，我们就要调用这个Promise，该怎么调用呢？

在Promise被创建(被操作符new)时，Prmomise的回调函数就开始执行了。所以我们要关心的不是Promise怎么被调用，而是**Promise完成任务之后，程序如何处理Promise返回的信息**。

## then()
`willGetNewPhone`现在是一个Promise object，这个object提供了一个方法：`then()`

将`then()`方法想象为“这可行，然后（then）使用从 promise 返回的数据执行此操作。“如果没有数据，可以跳过 then 方法。


如果想在`willGetNewPhone`的Promise执行完成后执行后续代码，可以这样写：
```js
willGetNewPhone.then()
```

`then()`方法也有可能返回另一个promise，因此你可以像这样链接另一个`then()`方法：
```js
promise
  .then(value => {
    return value.anotherPromise()
  })
  .then(anotherValue => {
    // 使用这个值
  })
```


## resolve()
我们需要在`then()`里写一个回调函数：

```js
willGetNewPhone
  .then(res => console.log(res) })
// 打印得到我们上面定义的 phone对象
```
同时可以看出，`resolve()`可以得到成功时Promise返回的信息。

## reject()
`reject()`也能返回值，一般返回的是错误信息。

假如妈妈翻脸不给买手机了，任务就会执行`reject()`，这时浏览器会默认报错：
```plaintext
Uncaught (in promise) Error: mon is not happy
```
不想要浏览器报错，就需要在`then()`的后面加上一个`catch()`来捕捉错误：

```js
willGetNewPhone
  .then(() => { console.log('Got new phone.'); })
  .catch( error => console.log(error))
// Error: mon is not happy 不会报错
```

## then() 链式
接着，让我们使用这个Promise对象问妈妈要手机。
```js
const askMom = () => {
  willGetNewPhone
    .then(ok => {
      // ok 这个参数传递的就是promoise返回resolve()的结果
      console.log(`I got a new ${ok.color} ${ok.brand} phone!`)
    })
    .catch(error => {
      console.log(error.message)
    })
}

askMom();
// I got a new black Apple phone!
// 或 reject:
// mon is not happy
```
## 总结
1. Promise有效解决 callback hell 问题

2. Promise提供resolve()和reject()函数应对超长任务的进度 

3. then()语句会在异步执行任务完成后被执行

4. 使用catch()语句捕捉reject()的报错

# Async/Await
比Promise更直观的一种异步写法，下次写写。✍

---
# 参考
- [廖雪峰 - Promise](https://www.liaoxuefeng.com/wiki/1022910821149312/1023024413276544)

- [Understanding JavaScript Promises](https://www.digitalocean.com/community/tutorials/understanding-javascript-promises)

- [手写一个Promise/A+](https://segmentfault.com/a/1190000023157856###)

- [WenXuanDecode - JavaScript Promise 是什么](https://www.youtube.com/watch?v=CTChl_DYTz0)