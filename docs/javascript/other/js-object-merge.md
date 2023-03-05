---
title: "如何浅合并一下 JavaScript 对象（其实希望深拷贝）"
date: 2022-06-23T15:00:00+08:00
layout: doc
lastUpdated: true
---
# 如何浅合并一下 JavaScript 对象（其实希望深拷贝）
由于业务需求，本人需要将两个对象进行合并。 
![bussiness](https://nic-gz-1308403500.file.myqcloud.com/posts/js-object-merge-2022-06-24-14-02-37.jpg)

# 浅合并

对象层级较浅的情况，可以使用 ES6 `...`语法，解构赋值，或`Object.assign()`快速合并；但对象里有子对象嵌套时，前两招就不好使了。要么使用第三方库，如 loadash 的 `_.merge()` 或 jQuery 的 `$.extend()` 方法，要么自己封装一个函数。

说聊聊几个做浅拷贝的方法。
## `...` 拷贝对象属性
使用扩展运算符 `{...obj}` 克隆或者拷贝对象的属性：
```js
const obj1 = { name: "Nic" }
const clonedObj = { ...obj1 }

console.log(clonedObj)  // { name: "Nic" }
```
## `...` 合并对象
使用扩展运算符 `{...obj}` 合并两个对象，可以看到，扩展运算符内部的同名属性会被**覆盖**掉：
```js
const obj1 = { a: 1 }
const obj2 = { a: 2, b: 3 }
const obj3 = { a: 3, b: 4, c: 5 }

const obj = { ...obj1, ...obj2, ...obj3 }

console.log(obj); // { a: 3, b: 4, c: 5 }
```

**扩展运算符得到的只是浅拷贝。**  

`clonedObj`拷贝的是引用地址，当`obj1.hobbies.gaming`属性改变时，`clonedObj.hobbies.gaming`也随之改变：
```js
const obj1 = {
  name: "Nic",
  hobbies: {
    gaming: "fall guys",
    reading: "novel"
  }
}
const clonedObj = { ...obj1 }
obj1.hobbies.gaming = "splatoon 2"

console.log(clonedObj.hobbies.gaming)  // splatoon 2
```

## Object.assign()
接下来看看 `Object.assign()` 表现如何。  
`Object.assign()` 方法将所有可枚举（*Object.propertyIsEnumerable() 返回 true*）和自有（*Object.hasOwnProperty() 返回 true*）属性从一个或多个源对象复制到目标对象，返回修改后的对象。  

语法：*`Object.assign(target, source)`*  

MDN Demo：
```js
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }
```

**遗憾的是，`Object.assign()` 也是浅拷贝。**
```js
const obj1 = {
  name: "Nic",
  hobbies: {
    gaming: "fall guys",
    reading: "novel"
  }
}
const clonedObj = { ...obj1 }
// obj1.hobbies.gaming = "splatoon 2"

// console.log(clonedObj.hobbies.gaming) 


const clonedObj2 = Object.assign(clonedObj, obj1)
obj1.hobbies.gaming = "splatoon 2"

console.log(clonedObj.hobbies.gaming) 
```


# 深合并
这么看来，EMCAScript 似乎并没有处理深拷贝的方法供我们使用。可我就不想用第三方库啊摔！那怎么办？~~选择先找一个别人写好的方法~~

以下记录一个利用递归合并对象的方法并封装于 vue 项目中的过程。

**step 1: 方法**
在 `./src/utils` 下新建 `mergeObj.js`文件，添加如下代码
```js
// 封装的一个 js 对象递归合并函数
export default function mergeObj(target, sources) {
  const obj = target
  if (typeof target !== 'object' || typeof sources !== 'object') {
    return sources // 如果其中一个不是对象 就返回sources
  }
  for (const key in sources) {
    // 如果target也存在 那就再次合并
    if (Object.prototype.hasOwnProperty.call(target, key)) {
      obj[key] = mergeObj(target[key], sources[key])
    } else {
      // 不存在就直接添加
      obj[key] = sources[key]
    }
  }
  return obj
}

```
**step 2: 引用**
在相应的组件中引用，然后直接使用函数：
```js
<script>
import mergeObj from '../../utils/mergeObj.js'
export default {
  // ... 

  methods: {
    // ...
  const option = mergeObj(obj1, obj2)
}
</script>
```