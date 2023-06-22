---
title: "JavaScript ES6 Module 模块导入/导出"
date: 2022-07-04T17:00:00+08:00
layout: doc
lastUpdated: true
---
#  JavaScript ES6 Module 模块导入/导出
貌似在18年，原生JavaScript终于实现了自带模块的导出导入功能。


它有什么用呢？


比如我上一个demo，需要一个将两个对象深层合并的方法。

我可以选择直接写在组件里，但更直观的方法是把方法封装在 `./src/components/megreObj.js` 中，更易于查看。

组件内如何调用另一个文件里的方法呢？

**Module Export/Import come to rescue!**

# 应用模块到你的 HTML 
首先，你需要把 `type="module"`放到 `<script>`标签中，来声明这个脚本是一个模块，不然HTML是不会渲染的，还会报错：

```html
<script type="module" src="main.js"></script>
```

# Export

export有两种方式: 

1. `export default` 
    - 每个模块只能有**一个**默认导出
    - 引入时不需要 `{ }` 包裹
2. `export` 
    - 可以有多个
    - 引入时**需要** `{ }` 包裹

例子：

```jsx
// 默认导出
export default class user {
    constructor(name, age) {
        this.name = name;
        this.age = age
    }
}

// 普通导出
export function printName(user) {
    console.log(`username is ${user.name}`);
}

export function printAge(user) {
    console.log(`user age is ${user.age}`);
}
```

或者集合起来export:

```jsx
export default class user {
    constructor(name, age) {
        this.name = name;
        this.age = age
    }
}

function printName(user) {
    console.log(`username is ${user.name}`);
}
function printAge(user) {
    console.log(`user age is ${user.age}`);
}
function addUp(a, b) {
    return a + b;
}

// 把普通导出集合在一起导出
export { printName, printAge, addUp }
```

# Import

根据因为有两种export方式，必然有两种Import的方式：

1. 对于 `export default`: 直接import 
2. 对于 `export`: 包裹在`{ }`中 

```jsx
// User为默认导出，其余为普通导出
import User, { printName, printAge } from './test.js'
```

或使用

这样就引入成功了

## 重命名

如果我们用相同的名字导入不同的函数到顶级模块文件中，我们会收到冲突和错误。

所以需要给导入的模块进行重命名。

导入时，除了引用原来的名字，也可以按需重命名，用到了`as`语法：

```jsx
import U, { printName as pname, printAge as page, addUp } from './test.js'
```

## **创建模块对象**

上面的方法工作的挺好，但是有一点点混乱、亢长。一个更好的解决方是，导入每一个模块功能到一个模块功能对象上。可以使用以下语法形式：

```jsx
import * as Module from '/modules/test.js';
```

这里从test.js中导入了所有模块，并把它们当作对象使用，如

```jsx
Module.function1()
Module.function2()
etc.
```

但该方法不适用于export default

# 兼容性

1. module大概只兼容85%的浏览器，可以用babel转换成ES5版本。
2. 对不支持ES Module的浏览器，可以在index.html文件中添加一个 `nomodule`的属性，来告知浏览器不需要尝试加载module相关的功能，并放置一个pollyfill script保持兼容性。

---
# 参考
1. [MDN - JavaScript 模块](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Modules)

2. [WDS - JavaScript ES6 Modules](https://www.youtube.com/watch?v=cRHQNNcYf6s)