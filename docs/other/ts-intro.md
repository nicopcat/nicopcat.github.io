---
layout: doc
title: 关于本站
---

# TypeScript 介绍

### TypeScript 是什么

TypeScript 可以看作是弥补 JavaScript 一些短板的一门语言，它是 JS 的 subset(超集)，意思就是，TS 包含了 JS，另外还有其他的一些内容，这些内容能让开发这更好地进行开发。

TS 的一些好处是：

1. 可靠：类型的定义和编译器的引入，可以在编译时就避免 JS 大多数的 runtime 错误，更可靠，更容易维护
2. 清晰：显式类型声明提升代码可读性，代码校验啊可以交给编译器负责
3. 广泛：TS 是 JS 的超集，这意味着可以在 TS 代码中使用任何 JS 代码和库

### 课程中你可以学到什么？

- 研究 TypeScript**编译流程、工作环境**
- 学习 TypeScript **12 个基本类型**

# 了解 TS 工作流

### 安装

通过 npm 或 VSCode 插件，下面是 npm 安装的方法：
全局安装：

```shell
npm install -g typescript
```

只安装在某个 project：

```shell
npm install typescript --save-dev
```

https://www.typescriptlang.org/download

### 开发配置环境

TS 不可以直接运行在 JS 环境中，需要编译成 JS 文件才可以。本质上来说，TS 转换成 JS 就像就像 babel 做的事情，把 TS 翻译成浏览器可读的 ES5 的 JS 语法。

### 编译

新创建一个 index.ts 的文件，在里面写一些代码，完了需要输入指令`tsc index.ts` 指令，将 TS 文件编译为浏览器可以运行的 JS 文件。

当然，每次手动编译实在是麻烦，可以利用 VS Code 的“监视任务”来完成自动编译，步骤如下：

1. 初始化 tsc，创建  `tsconfig.json` 文件：

```
tsc --init
```

这时会在当前目录生成一个 `tsconfig.json` （配置）文件。

2. 打开该配置文件，指定 output 路径为 `./js`文件夹

```json
 // "outFile": "./",
    "outDir": "./js",
 // ...
```

3. VS Code 监控任务自动编译  
   点击菜单 -   终端 - 运行任务 - 选择 `tsc: 监视 - tsconfig.json`

开启监视后，每当保存.ts 文件，IDE 就会自动将.ts 编译成.js 文件。

# TS 基础

### 1.声明变量

在变量后加上`: 变量类型`，如

```ts
let firstName: string = 'Nic';
```

### 2. 数字、布尔和字符串

和 js 基本一致
JS: 数字类型不做专门区分，TS 也是一样的，统称为 Number 类型。

### 3. 数组 Array 和元组 tuple

TS 的数组继承了 JS 数组的强包容性，可以存放任意类型数据。

```ts
let list1: number[] = [1, 2, 3, 4];

let list2: Array<number> = [1, 2, 3, 4]; // 泛型？

let list3 = [1, 2, 3, 4];
```

数组的特殊形式，它固定数组的长度和类型。

```ts
// 声明元组的时候需要指定类型
let person1: [number, string] = [1, 'aaa'];
// 第一位必须是Number，第二位必须是String，且长度有且只有2
```

视频说 ts 有一个 bug：使用 `person1.push(3)` 时，IDE 并不报错，元组长度变为 3。

而查看文档得知，当访问一个越界的元素，会使用联合类型替代：
``

```ts
x[3] = 'world'; // OK, 字符串可以赋值给(string | number)类型

console.log(x[5].toString()); // OK, 'string' 和 'number' 都有 toString

x[6] = true; // Error, 布尔不是(string | number)类型
```

### 4. 联合类型 union 和字面量类型 literal

对某变量可以包含多种类型的声明，用 `|` 对声明的类型进行分割：

```ts
let union: string | number = 2;
```

相当于可枚举类型的变种，与 union 混合起来使用，相当强大。

```ts
let literal: 1 | '2' | false | [1, 2] | object;

literal = { k: '2' };

console.log(literal);
```

### 5. 枚举类型 enum

enum 用来定义枚举类型：

```ts
enum Color {
	red,
	green,
	blue,
}

let color = Color.green;

console.log(color); // 1
```

枚举类型的输出是数字，可以配合 switch 语句使用。

### 6. any 和 unknown

`any`: 支持所有的类型。

any 的使用场景是，不想花太多精力在一些不必要的类型定义上，从而跳过检查，加速开发。

`unknown`: 比 any 更保险，它也表示不确定类型，但能保证类型安全。当确定变量类型后才能正常使用。

### 7. void, undefined 和 never

这三个词可以指定函数的类型，如

```ts
funtion printIt(): void {
	console.log('指定这个函数为void类型')
}
```

void: 函数没有返回值，变量不存在

undefined: 变量未定义

never: 无法执行完成的函数

### 8. 类型适配(类型断言) Type Assertions

主要用于各种类型的适配各种，比如，一个变量先是指定为 any 类型，现在要重新指定为 string 类型，就可以使用类型断言的方法。

下面的例子，因为 test 未使用类型断言，类型仍然是 any，无法使用 string 的内建方法

```ts
let test: any = 'hi there';

test.endsWith('d');

console.log(test); // hi there
```

类型断言主要有两种写法：

1. 使用单括号包裹类型： ` (<string>test)`
2. 使用`as`关键字： `(test as string)`

使用断言后：

```ts
let test: any = 'hi there';

let str = (<string>test).endsWith('e');
// 或者
// let str = (test as string).endsWith('e')

console.log(str); // true
```

### 9. 函数类型

写法与 ES6 一致。

在这个基础上，TS 可以给参数绑定类型。

```ts
let fn = (msg: string) => {
	console.log(msg);
};

fn('yo');
```

也可以用问号，使参数变为可选的。

```ts
let fn = (msg: string, optionalParam?: number) => {
	console.log(msg, optionalParam);
};

fn('yo');
```

假如`optionalParam`不用可选修饰符`?`修饰，`fn('yo')`就会报错

# TS 的面对对象

## 1. object 对象类型

基本相似。只不过变量如果是一个 object 类型，里面的数据类型会被自动确定：

```ts
// 栗子1
let person = {
	name: 'Mike', // TS自动识别name为string
	age: 10, // TS自动识别age为number
};

console.log(person.name); // Mike

// 栗子2
let person = {
	name: 'Mike',
	age: 10,
};

console.log(person.email); // TS中报错，这个属性不存在；JS中不报错，只是会打印 undefined
```

---

# 资源

1. https://www.imooc.com/learn/1306
