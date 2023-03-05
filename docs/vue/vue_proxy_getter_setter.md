---
title: Vue Proxy Getter Setter
layout: doc
---

# Vue Proxy Getter Setter

初学 Vue 的朋友都知道，在vue实例的`data`中存放的数据，如果你修改它，修改后的内容也会同步映射到挂在的容器中。所以，Vue 是怎么做到的呢？
偶然间从 [Vue中的数据代理](https://www.bilibili.com/video/BV1Zy4y1K7SH?p=11) 中了解到，Vue 主要是调用了`Object.defineProperty()`方法实现的。


## Object.defineProperty()
> Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。 -- <cite>MDN</cite>

直接增修`data`中的内容，或者使用`Object.defineProperty`增修，都可以达到类似的目的，但后者多了一些属性，以限制读写。


## `Object.defineProperty()`中的一些属性

|属性|描述|默认值|
|----|---------|----|
|`configurable`|当且仅当该属性的 configurable 键值为 true 时，该属性的描述符才能够被改变，同时该属性也能从对应的对象上被**删除**。|`false`|
|`enumerable`|当且仅当该属性的 `enumerable` 键值为 `true` 时，该属性才会出现在对象的**枚举属性**中。（意思是才可以**遍历**）|`false`|
|`value`|该属性对应的值。可以是任何有效的 JavaScript 值（数值，对象，函数等）。|`undefined`|
|`writable`|当且仅当该属性的 `writable` 键值为 `true` 时，属性的值，也就是上面的 `value`，才能被赋值运算符 (en-US)改变。|`false`|
|`get`|属性的 `getter` 函数，如果没有 `getter`，则为 `undefined`。当访问该属性时，会调用此函数。执行时不传入任何参数，但是会传入 `this` 对象（由于继承关系，这里的`this`并不一定是定义该属性的对象）。该函数的返回值会被用作属性的值|`undefined`|
|`set`|属性的 `setter` 函数，如果没有 `setter`，则为 undefined。当属性值被修改时，会调用此函数。该方法接受一个参数（也就是被赋予的新值），会传入赋值时的 `this` 对象。|`undefined`|


## Vue中的数据代理

Vue 通过 `Object.defineProperty()` 为 `data` 中增添数据，然后为每一组data中的数据对象指定getter和setter，需要取得数据时，就调用 `getter` ；需要修改数据时，就调用 `setter`。vue额外做的事情就是增加了数据代理。如果vue没有数据代理，使用数据时需要写 `{ {_data.name} }`，因为vue暗地里调用了 `setter` 和 `getter`，所以我们在使用时就只需要写 `{ {name} }`。  
  
![20211224141459](https://s2.loli.net/2021/12/24/NRZ7x5a3yrf4bjV.png)

## 总结：
1. Vue 中的数据代理通过vm对象来代理data对象中属性的操作（读/写）

2. Vue 中数据代理的好处：更加方便的操作data中的数据

3. 基本原理：
- 通过 object.defineProperty()把 data 对象中所有属性添加到vm上。
- 为每一个添加到 vm 上的属性，都指定一个 getter/setter。
- 在 getter/setter 内部去操作（读/写）data 中对应的属性。