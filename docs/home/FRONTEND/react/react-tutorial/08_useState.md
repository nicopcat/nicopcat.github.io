---
title: "2. useState"
showToc: false
layout: doc
---
# 2. useState
在Vue2中，更新一个变量的状态，可以通过`this`获取挂载在data中的数据，然后直接更新。挂载在data中的数据本身就是响应式的，所以不需要额外操作就可以更新数据。

在React中，需要使用Hook，更新数据的状态，类似于指定哪些数据是有可能更新的，于是侦听这些数据。

`useState`便是React中用于处理响应式数据的hook。

首先，我们引入 useState:
```jsx
import { useState } from "react";
```

然后使用`useState`定义一个响应式的变量`name`，并定义一个方法`setName`，`name`的初始值设为`Joe`:
```jsx
const [name, setName] = useState('Joe');
```

将`setName`放到click方法中使用：
```jsx
const setNames = (e) => {
  setName('haha')
}
```

当模板中的button被点击时，触发`setNames`方法，然后触发`setName`，并重新渲染对应的数据。