---
title: "let & const 对比 var 的新特性"
date: 2021-11-26T22:13:01+08:00
layout: doc
lastUpdated: true
---
# 
## let
- `let` 关键字用于声明变量
- 用 `let` 声明的变量具有**块级作用域**，`var` 则没有，这可以阻止循环变量变成全局变量
```js
var a = [];
for (var i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    };
}

a[6](); // 10
//i因为由var声明，所以是全局变量，经过循环后，i= 10，所以结果都为10
```
```js
var a = [];
for (let i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    };
}

a[6](); // 6
//如果使用let，声明的变量仅在块级作用域内有效，最后输出的是 6
```
    
- 不存在变量提升：必须先声明，再使用
- 不能重复声明
```js
let a = 0;
let a;
// Uncaught SyntaxError: Identifier 'a' has already been declared
```
- 用 `let` 声明的变量具有暂时性死区(Temporal Dead Zone):
> ES6 规定，`let/const` 命令会使区块形成封闭的作用域。若在声明之前使用变量，就会报错。  
> 总之，在代码块内，使用 `let` 命令声明变量之前，该变量都是不可用的。

## const
- 和 `let` 一样，`const` 关键字声明的常量具有**块级作用域**
```js
if (true) {
  const MAX = 5;
}

MAX // Uncaught ReferenceError: MAX is not defined
```

- `const` 关键字声明的常量必须赋初始值
```js
const foo;
// SyntaxError: Missing initializer in const declaration
```

- `const` 变量赋值的内存地址（值）不可更改，但数组用`.` 和 `[ ]` 赋值时不受影响
``` js
const PI = 3.1415;
PI // 3.1415

PI = 3;
// TypeError: Assignment to constant variable.
```

**const 保存常量的本质**：
> const 实际上保证的，并不是变量的值不得改动，而是变量指向的那个**内存地址**所保存的数据不得改动。  

> 对于简单类型的数据（数值、字符串、布尔值），值就保存在变量指向的那个内存地址，因此等同于常量。但对于复合类型的数据（主要是对象和数组），变量指向的内存地址，保存的只是一个指向实际数据的**指针**，`const` 只能保证这个指针是固定的（即总是指向另一个固定的地址），至于它指向的数据结构是不是可变的，就完全不能控制了。  
