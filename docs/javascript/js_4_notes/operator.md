---
layout: doc
title: 操作符
lang: zh
lastUpdated: true
---

# 操作符

## 1. 自增/自减运算符

1. 求值前自增：++a
2. 求职后自增：a++
   区别在于，计算式子稍微复杂一点，结果会不一样。

## 2. 位运算符 bit operation

计算机底层是以 2 进制计算的。对计算机的二进制数据进行运算的符号叫位运算符。

人们习惯 10 进制计算，计算机会先把 10 进制转为 2 进制，然后计算出结果，再把结果转为 10 进制。

位运算符有 7  个，分为两类：

- 逻辑位运算符：按位与（&）、按位或（|）、按位异或（^）、按非位（~）
- 移位运算符：左移（<<）、右移（>>）、无符号右移（>>>）

## 3. 布尔操作符

布尔操作符，顾名思义，是针对布尔值转换的。

布尔操作符有 3 个：逻辑非（`!`），逻辑与（`&&`）和逻辑或（`||`）。

布尔操作符需要将原本非布尔值的任何值，转换为布尔值再做逻辑计算。

**逻辑非**：`!` 一个英文叹号，能把黑白颠倒，true 变成 false，false 变成 true.

**逻辑与**：`&&` 两个 and 的符号，就像小学逻辑运算，或是电路串联，逻辑与给我一种严格的感觉，一种，宁缺毋滥之感。两个对象，只要有一个是 false，那么这颗老鼠屎就坏了整锅汤，于是结果取 false。即， true && false → false； true && true → true；false && false → false。整体来说，向上取值。

**逻辑或**： `||` 两个竖线组成的，随性的取值。和逻辑与不一样，它像是红白脸中的白脸，专门给人台阶下的那种老好人。两个值，只要有一个是 true，那就过关啦！即， true || false → true； true || true → true； false || false → false，整体来说，向下兼容。

#### 转换规则

如果记不住转换规则，就可以用两个逻辑非（`!!`）处理，得到的就是转换结果。
例如，

```js
// opps 我不记得a这个对象是怎么转换的啦？！
let a = {};

// 啊哈 可以用 !!a 来测试！
console.log(!!a); // 是true！
```

| 数据类型                   | 举例       | 转换为布尔值 |
| -------------------------- | ---------- | ------------ |
| 对象(甚至是对象)           | let a = {} | true         |
| 空字符串                   | ''         | false        |
| 数值 0                     | 0          | false        |
| 非 0 数值（包括 Infinity） | Infinity   | true         |
| null & undefiend & NaN     | -          | false        |

#### 逻辑非 `&&`

但其实只有**逻辑非**会进行这样的转换，逻辑与，不一定会！

从原因上解释，是因为逻辑与是一种短路操作符，意思是假如第一个操作数决定了结果，那么第二个操作符就会被忽略。

结合 && 严格的取数尿性，看到 && 操作符，首先判断左边的操作数是否为 fasle,如果是，那就不用看第二个了，铁定是 false

如果左边是 true，再判断第二个来决定取值。

#### 逻辑或 `||`

和逻辑非一样，逻辑或也有短路的特性，一旦第一个操作数是 true，那后面就不需要计算了，直接取 true。

利用逻辑或的短路性质，可以避免给变量赋值 null 或 undefined，防止报错。

## 4. 加性操作符和减性操作符

也就是 `+` 和 `-` 操作符。

对于数值，两个符号就相当于数学中的加号和减号。

但一旦涉及到字符串，就有些蹊跷。。

#### + 操作符

加操作符，有点基础的朋友都知道，它能做字符串的拼接。

书上是这么写的：

> 如果有任一操作数是字符串，则将另一个操作数转换为字符串，再将两个字符串拼接在一起。对于`null`和`undefined`，则调用`String()`函数加以处理。

例子：

```js
let a = 5 + '5';

console.log(a); // `55`
```

且顺序无关紧要：

```js
let a = '5' + 61;
let b = 5 + '61';

console.log(a === b); // true
```

#### - 操作符

比起 `+` 操作符的字符串拼接， `-` 操作符在处理字符串使，偏向于数字这一边：

> 如果有任一操作数是字符串、布尔值、`null`或`undefined`，则现在后台使用`Number()`将其转换为数值，再计算。如果转换结果是`NaN`，则减法计算结果是`NaN`。

```js
let a = 5 - '5';

console.log(a); // 0
```

## 5. 比较操作符

也就是 `>` `<` `<=` `>=` 这几个比较值大小的操作符。

数值的比较相对简单：比较孰大孰小。

其他值的比较：遵循着一定的原则：

- 数值：比较数值
- **字符串： 比较对应字符的编码（ASCII 码？）**
- 如果其中一个不是数值，就先转换成数值
- 如果有对象，则用 valueOf()方法取值；否则用 toString()方法取值比较
- 假如其中一个是布尔值，则转换为数值再比较

比较字符串的时候，容易犯”a 在 b 前面所以 `a < b === true`“的错误。

别忘了，字符串比的不是外在，而是内心！！
