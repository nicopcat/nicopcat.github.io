---
title: "ES6数组与对象的解构赋值"
date: 2021-11-28T15:23:00+09:00
layout: doc
lastUpdated: true
---
# ES6数组与对象的解构赋值
在ES6以前，为变量赋值只能直接指定值，而**ES6允许以变量解构的方式赋值**。

那么，何为解构？
> 按照一定模式，从数组和对象中提取值，对变量进行赋值。 —— 
（[变量的解构赋值 - 阮一峰ES6入门](https://es6.ruanyifeng.com/?search=%E8%A7%A3%E6%9E%84&x=0&y=13#docs/destructuring)）


## 1. 数组解构 
数组解构允许我们按照一一对应的关系从数组中提取然后将值赋值给变量：
``` js
let arr = [1, 2, 3];
let [a, b, c] = arr;

console.log(a);
console.log(b);
console.log(b);
//输入结果分别为 1, 2, 3
```
### 情况1：完全匹配
`let [a, b, c] = [1, 2, 3];`

### 情况2：部分匹配
```js
let [x, y] = [1, 2, 3];
x // 1
y // 2

let [a, [b], d] = [1, [2, 3], 4];
a // 1
b // 2
d // 4
```
**例子**：codewar上有[一道题](https://www.codewars.com/kata/558fc85d8fd1938afb000014/javascript)：**求一组正整数中的两个最小值的和**。    

题目不难，但我看到其中的一个solution，觉得它非常聪明，它就用了数组的部分解构：
```js
function sumTwoSmallestNumbers(numbers) {  
  var [ a, b ] = numbers.sort((a, b) => a - b)
  return a + b
}
```

我的答案：  
```js
function sumTwoSmallestNumbers(numbers) {  
  let r = numbers.sort((a, b) => a - b);
  return r[0] + r[1];
}
```

### 情况3：解构失败
- 无法匹配上
``` js
let [foo] = [];
let [bar, foo] = [1];
//如果解构不成功，变量的值就等于undefined。
```
- 如果等号的右边不是数组（或者严格地说，不是可遍历的结构，参见*Iterator*一章），那么将会报错。
```js
// 报错
let [foo] = 1;
let [foo] = false;
let [foo] = NaN;
let [foo] = undefined;
let [foo] = null;
let [foo] = {};
```

## 2. 对象解构
对象解构允许我们使用变量的名字匹配对象的属性，匹配成功将对象属性的值赋值给变量
> **数组的元素是按次序排列的**，变量的取值由它的位置决定；而对象的属性**没有次序**，变量必须与属性**同名**，才能取到正确的值。
```js
let { bar, foo } = { foo: 'aaa', bar: 'bbb' };
foo // "aaa"
bar // "bbb"
```

### 变量解构的用途
#### 1. 交换变量的值
```js
let x = 1;
let y = 2;

[x, y] = [y, x];
```
这样写更优雅易读

### 2. 从函数返回多个值
函数只能返回一个值，如果要返回多个值，只能将它们放在数组或对象里返回。有了解构赋值，取出这些值就非常方便。
```js
// 返回一个数组
function example() {
  return [1, 2, 3];
}
let [a, b, c] = example();
// 返回一个对象
function example() {
  return {
    foo: 1,
    bar: 2
  };
}
let { foo, bar } = example();
```

### 3. 函数参数的定义
解构赋值可以方便地将一组参数与变量名对应起来。
```js
// 参数是一组有次序的值
function f([x, y, z]) { ... }
f([1, 2, 3]);

// 参数是一组无次序的值
function f({x, y, z}) { ... }
f({z: 3, y: 2, x: 1});
```

### 4. 提取JSON的数据
```js
let jsonData = {
  id: 42,
  status: "OK",
  data: [867, 5309]
};
let { id, status, data: number } = jsonData;

console.log(id, status, number);
// 42, "OK", [867, 5309]
```