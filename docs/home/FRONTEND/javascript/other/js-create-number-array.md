---
title: "如何优雅地用JS创建包含0~n的整数数组"
layout: doc
lastUpdated: true
---
# 如何优雅地用JS创建包含0
Codewar 上有一题非常简单的题：
> 写一个函数，给任意一个正整数 n，求和。

Example:
```
2 -> 1 + 2  // output: 3
5 -> 1 + 2 + 3 + 4 + 5 //  output: 15
```

【**小学生解法**】

先用小学就学过等差数列的累加计算公式“( 首项 + 末项 ) * 项数 / 2”计算一下:

```
2 -> (1+2)* 2/2 = 3  ✔
5 -> (1+5)* 5/2 = 15 ✔
```

~~本小学生做对了！~~

【**用 for 循环**】

也很容易想到的是用 for 循环解题：

```js
function sum(n) {
  let sum = 0;
  for (i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}
```

---

其实像这种累加的题目，感觉非常适合用 `reduce` 来做，于是问题变成了**如何快速创建一个 0~n 的数组？**  

下面假设我们需要快速创建一个 0 ~ 9 的数组。 



# 数组字面量法 - [ ]括号语法
老老实实写下：
```js
let arr = [0, 1, 2, 3, 4 ... , 9]
```
很直观，但数组大了写得会很辛苦，也不优雅，如同苦力。

# ES5 方法

```js
Object.keys(Array.apply(null, {length: n}));
```
## Object.keys & Array.apply 方法
`Object.keys` 方法将**遍历对象的属性名，然后返回包含属性名的字符串数组**，我们可以使用它来返回数组的下标，也就是 0 ~ n。  

`Array.apply(null,{length:n})` 用来**创建 0 ~ n 的数组**（因为这个数组未初始化，所以值都是`undefined`）：
```js
let arr = Object.keys(Array.apply(null, { length: 10 }))

console.log(arr);  
// ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
```

`apply` 方法可传入两个参数，第一个是函数调用的 this 值，另一个参数可选，数组或类数组对象，这里我们传入类数组`{length: n}`

`{length: n}` 是类数组对象，它和数组相似，拥有 length 属性，但没有数组的方法，例如`map()`, `filter()`等

创建好了数组，需要把数组里的字符串转为数组类型：

```js
let arr = Object.keys(Array.apply(null, {length: 10})).map(n => +n))

console.log(arr)
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```
除了使用`{length: 10}` 来创建一个长度为10的数组，也可以用`Array(10)`：
```js
let arr = Object.keys(Array.apply(null, Array(10))).map(n => +n)

console.log(arr)
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

# ES6 方法

```js
Array.from(new Array(10).keys())
```
## Array.from 方法
ES6 中的 `Array.from` 方法可以对类数组或可迭代对象创建一个新的，浅拷贝的数组实例。

```js
console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]
```

### 语法：
```js
Array.from(arrayLike[, mapFn[, thisArg]])
```
### 参数：
1. 它接受一个`类数组`或`可迭代对象`作为必选参数。
2. `map` 函数以及该函数的 `this` 对象作为可选参数。

### 分析
`new Array(10)` （可以简化为 `Array(10)`）：意思是先创建一个长度为 10 且没有初始化的数组，然后使用 `Array.from` 方法创建数组初始化，数组里有 10 个 `undefined` 元素。接着使用 `Object.key()` 方法获取元素的属性名，也就是元素的下标（序列号），即 0 ~ 1 。  

其他写法：
```js
Array.from({ length: 10 }, (_, i) => i)
```

# ES6 方法之扩展运算符 `...`
ES6 提供的扩展运算符非常强大方便，它可以在函数调用/数组构造时, 将数组或者string展开。
```js
[...Array(10).keys()]
[...Array.from({length:100}).keys()]
```

大佬用的应该是**数组字面量**的展开特性。先用 `Array(10)` / `Array.from({length:100})` 创建长度为 10 的数组，然后用展开运算符把元素展开到数组中，再取元素的序号。

总之学到很多方法以及一些 ES6 新特性，感恩大佬hhh

# 参考
- 主要参考 yugasun 大佬的 [文章](https://yugasun.com/post/create-0-99-array-by-js.html)  
- 思否 - [《分析Array.apply(null, { length: 20 })》](https://segmentfault.com/a/1190000011435501 )
  
