---
title: "JavaScript 中 this 的绑定"
date: 2022-05-13T22:00:00+08:00
layout: doc
lastUpdated: true
---
# JavaScript 中 this 的绑定

`this`会在执行的上下文中绑定一个对象，有时候绑定全局对象，有时绑定的是某个对象，所以在什么情况下进行什么绑定，比较迷惑。

先说结论：`this`的绑定取决于**函数的直接调用位置**。

## 1. 调用位置

首先要理解什么是调用位置：**调用位置就是函数在代码中调用的位置，而不是函数声明的位置**。

```js
function foo{
    console.log('foo');
    bar(); // <-- bar()的调用位置
}
function bar{
    console.log('bar');
    baz(); // <-- baz()的调用位置
}

function baz{
    console.log('baz');
}

foo(); // <-- foo()的调用位置
```

## 2. 绑定规则

判断`this`是如何绑定，首先找到函数的调用位置，然后对比下面的规则，看符合哪一条，且这些规则具有不同的优先级。

### 2.1 默认绑定

首先，最常用的函数调用类型是：**独立函数调用**。这条规则可以看作是不符合其他规则时的默认规则。

#### 场景 1：独立函数的调用

因为`this`没有绑定到任何对象，所以默认绑定到全局。

```js
function foo() {
  console.log(this.a);
}

const a = 2;

foo(); // 2
```

#### 场景 2：将函数作为参数传入另一个函数时

这样的绑定，本质上仍然是独立函数的调用。

```js
function foo(fn) {
  fn();
}

function bar() {
  console.log(this.a); // window
}
var a = 8;

foo(bar); // 8
```

但，如果使用`let`和`const`，或是严格模式下，隐式绑定会丢失。

```js
let a = 8;

function foo(fn) {
  fn();
}

function bar() {
  console.log(this.a);
}

foo(bar); // undefined
```

### 2.2 隐式绑定

第二条需要考虑的规则是**调用位置是否由上下文对象**，或者说，**是否被某个对象拥有或包含**。

#### 场景 1：通过对象调用函数

`foo()`被调用时，它的落脚点指向`obj`对象，调用位置会使用`obj`上下文来引用函数，因此也可以称为函数被调用时`obj`对象“拥有”或“包含”它。  
当函数引用有上下文时，隐式绑定规则会把函数调用中的`this`绑定到这个上下文对象，因此`this.a`和`obj.a`是一样的。

```js
function foo() {
  console.log(this.a);
}

const obj = {
  a: 2,
  foo: foo, // foo 指向 foo()，被 obj 包含/拥有
};

obj.foo(); // 2
```

#### 场景 2：多层对象调用函数

对象属性的引用链中只有最顶层（最后一层）会影响调用位置。

```js
function foo() {
  console.log(this.a);
}

const obj2 = {
  a: 42,
  foo: foo,
};

const obj1 = {
  a: 2,
  obj2: obj2,
};

obj1.obj2.foo(); // 42
```

#### 场景 3：隐式丢失

隐式绑定的`this`很容易丢失绑定对象。

下面这个例子，虽然`bar`是`obj.foo`的一个引用，但实际上它引用的是`foo()`函数本身，函数调用位置是`bar`，它没有绑定任何对象，因此是默认绑定。

```js
// 非严格模式
function foo() {
  console.log(this.a);
}

var obj = {
  a: 2,
  foo: foo,
};

// 函数别名
var bar = obj.foo;
var a = "hello";

bar(); // hello
```

另外一种丢失的情况，发生在传入回调函数时，这也包括我们常用的定时`setTimeout`

```js
function foo() {
  console.log(this.a);
}

function bar(fn) {
  // fn引用的是foo
  fn(); // <-- 调用位置
}

var obj = {
  a: 2,
  foo: foo,
};

// 函数别名

var a = "hello??";

bar(obj.foo); // hello??
```

回调函数丢失`this`绑定非常常见，甚至还有可能修改`this`的绑定。

### 2.3 显式绑定

隐式绑定的实现，**必须是在一个对象内部包含一个指向函数的属性，然后通过该属性间接地引用函数**。

如果我们不想这样做呢？可以使用显式绑定。

#### 方法 1：call(..) 和 apply(..)

第一个参数是对象，它们会把`this`绑定到这个对象，然后调用函数时指向这个对象。

```js
function foo() {
  console.log(this.a);
}

var obj = {
  a: 2,
};

foo.call(obj); // 输出：2  恭喜，成功绑上
```

#### 方法 2：硬绑定

**如果我们希望一个函数总是显示的绑定到一个对象上，可以怎么做呢？**

可以用**硬绑定**的方法。这种绑定是一种显式的强制绑定，之后无论如何调用函数，它的`this`指向都不会修改，所以称之为硬绑定。

- 方法 1：创建一个包裹函数，传入参数并返回这些值

```js
function foo(arg) {
  console.log(this.a, arg);
  return this.a + arg;
}

obj = {
  a: 5,
};

var bar = function () {
  return foo.apply(obj, arguments);
};

var b = bar(3); // 5, 3
console.log(b); // 8
```

- 方法 2：利用辅助函数手动硬绑定：

```js
function foo() {
  console.log(this.name);
}

var obj = {
  name: "快来绑定我",
};

function bind(fn, obj) {
  return function () {
    return fn.apply(obj, arguments);
  };
}

var bar = bind(foo, obj);

bar(); // 快来绑定我
```

因为硬绑定非常常见，所以 ES5 也提供了内置的方法`Function.prototype.bind()`

- 方法 3：使用`Function.prototype.bind`

```JavaScript
function foo() {
  console.log(this.name);
}

var obj = {
  name: "快来绑定我"
}

var bar = foo.bind(obj);

bar(); // 快来绑定我
bar(); // 快来绑定我
```

#### API 调用的“上下文”

第三方库的许多函数，以及 JavaScript 语言和宿主环境中许多新的内置函数，都提供一个可选的参数，通常成为"上下文"(context)，它的作用和`bind(..)`一样，确保你的回调函数使用指定的`this`。

比如`forEach(..)`函数：

```js
function foo(el) {
  console.log(el, this.id);
}
var obj = {
  id: "个",
};

[1, 2, 3].forEach(foo, obj);
// 1 '个'
// 2 '个'
// 3 '个'
```

### 2.4 new 绑定

`new`关键字很容易让人想到“类”，但确切来说，它的作用不是初始化一个类，也不会实例化一个类。实际上，被`new`调用的函数，只是一个被`new`操作符调用的普通函数而已。

使用`new`关键字来调用函数时，会执行如下的操作：

1. 创建（或者说构造）一个全新的对象
2. 这个新对象会被执行`[[ 原型 ]]`连接
3. 这个新对象会绑定到函数调用的`this`上（this 的绑定在这个步骤完成）
4. 如果函数没有返回其他对象，`new`表达式中的函数调用会返回这个新对象

```js
function foo(name) {
  console.log(this); // foo {}
  this.name = name;
  console.log(this.name); // Nic
}

var bar = new foo("Nic"); // 绑定完成
console.log(bar.name); // Nic
```

## 3. 优先级

#### 优先级总结：

new 绑定 > 显示绑定（bind）> 隐式绑定 > 默认绑定

1. 默认规则的优先级最低
2. 显示绑定 > 隐式绑定
3. new 绑定优 > 隐式绑定
4. new 绑定 > bind 绑定

论证过程参考：  
《你不知道的 JavaScript》上卷 p91-95  
或  
coderwhy 的文章 [《前端面试之彻底搞懂 this 指向》](https://mp.weixin.qq.com/s/hYm0JgBI25grNG_2sCRlTA)

（题外话，他这篇文章的内容，除了例子，基本上都来自上面那本书 hh ）

## 4. 绑定的例外

当然，总是会有规则之外的例外。

### 忽略显示绑定

如果在显示绑定中，我们传入一个`null`或者`undefined`，那么这个显示绑定会被忽略，而会使用默认绑定：

```js
function foo() {
  console.log(this.a);
}

var a = 2;
foo.call(null); // 2
foo.call(undefined); // 2
```

为什么会想要传入一个`null`呢？

在某些情况下，我们要用`aplly(..)`来展开一个数组，或是用`bind(..)`做点什么。但这俩函数都需要传入一个`this`的绑定对象，但我们不太关心`this`绑定点啥，于是需要`null`这么一个绝妙的占位符。

### 间接引用

另外一种情况，当创建一个函数的`间接引用`时，会应用默认绑定规则。

间接引用最容易发生在赋值时：

```js
function foo() {
  console.log(this.a);
}

var a = 2;
var o = { a: 3, foo: foo };
var p = { a: 4 };

o.foo(); // 3

// foo函数被直接调用，那么是默认绑定 👇
(p.foo = o.foo)(); // 2
```

### ES6 箭头函数

ES6 中的箭头函数并不会使用以上这四条绑定规则，它有自己的想法。它会根据当前的词法作用域来决定`this`。具体地说，箭头函数会继承外层调用的`this`绑定（无论`this`绑定到什么）。这和之前常用的`self = this`机制一致。

```js
function foo() {
  return () => {
    console.log(this.a);
  };
}

var obj1 = {
  a: 1,
};

var obj2 = {
  a: 2,
};

var bar = foo.call(obj1); // 1

bar.call(obj2); // output还是 1
```

`foo()`内部创建的箭头函数会捕获调用`foo()`时的`this`。因为`foo()`绑定到`obj1`，相应地，`bar`（引用箭头函数）的`this`也会绑定到`obj1`，且硬绑定无法修改。

箭头函数也经常用在回调函数中，比如计时器：

```js
function foo() {
  setTimeout(() => {
    console.log(this.a);
  }, 1000);
}

var obj = {
  a: 2,
};

foo.call(obj); // 1秒后打印结果： 2
```

## 练手题目

1. 第一题

```js
var name = "window";
var person = {
  name: "person",
  sayName: function () {
    console.log(this.name);
  },
};
function sayName() {
  var sss = person.sayName;
  sss();
  person.sayName();
  person.sayName();
  (b = person.sayName)();
}
sayName();
```

2. 第二题

```js
var name = "window";
var person1 = {
  name: "person1",
  foo1: function () {
    console.log(this.name);
  },
  foo2: () => console.log(this.name),
  foo3: function () {
    return function () {
      console.log(this.name);
    };
  },
  foo4: function () {
    return () => {
      console.log(this.name);
    };
  },
};

var person2 = { name: "person2" };

person1.foo1();
person1.foo1.call(person2);

person1.foo2();
person1.foo2.call(person2);

person1.foo3()();
person1.foo3.call(person2)();
person1.foo3().call(person2);

person1.foo4()();
person1.foo4.call(person2)();
person1.foo4().call(person2);
```

~~反正目的就是要把人头搞晕~~

附赠：[40 道 this 面试题](https://github.com/i-want-offer/questions_collection/tree/master/this%E9%A2%98%E7%9B%AE)
