---
title: "好玩的JavaScrip动画框架——GSAP"
date: 2022-03-12T13:00:00+08:00
draft: false
tags: ["GSAP","翻译","JavaScript"]
layout: doc
description: 'Getting Started with GSAP!'
---
# 好玩的JavaScrip动画框架——GSAP
GSAP 全称是 GreenSock Animation Platform，是一个非常强大的基于 JS 的动画库，初次接触的我深感，短短几行代码就能实现非常酷炫的特效。

在学习的过程中，顺便把官网的教程翻译成中文参考。

# 什么是 GSAP?

## GSAP 其实是在操控属性

动画最终可以归结为一个每秒多次改变属性值的过程，可以使某物产生移动、褪色、旋转等效果。GSAP 抓取一个起始值和一个终止值，然后每秒在它们之间插值 60 次。

例如，在 1 秒内将一个物体的 X 坐标从 0 改变到 1000，并使其迅速向右移动。将不透明度从 1 到 0 渐变，使一个元素淡出。作为一个动画师，你的任务是决定改变哪些属性，多快，以及运动的风格（即[缓动](https://greensock.com/get-started/#easing)--我们后面会讲到）。

## DOM, SVG, `<canvas>` 以及其他

GSAP 并没有预定义它可以处理哪些属性。它超级灵活，几乎可以适应你扔给它的任何东西。GSAP 可以对以下所有内容进行动画处理：

- CSS: 2D and 3D transforms, colors, width, opacity, border-radius, margin, and 几乎所有的 CSS 属性
- SVG 属性: viewBox, width, height, fill, stroke, cx, r, opacity, etc. 像 MorphSVG 和 DrawSVG 这样的插件可以用于高级效果
- 任何数值 例如，一个被渲染到`<canvas>`的对象。对三维场景中的相机位置进行动画处理，或对数值进行过滤。GSAP 经常与 Three.js 和 Pixi.js 一起使用。

## GSAP 到底是什么？

GSAP 是一套用于脚本动画的工具。它包括：

- GSAP 核心 - 它是引擎的核心，为任何对象的任何属性制作动画。它使用的是[tween](https://greensock.com/docs/v3/GSAP/Tween)动画库，可以让你更好地控制动画。
- 其他，如为你节省时间的插件，缓动工具，实用方法，等等。

# 安装 GSAP

可以使用 CDN,下载或使用 NPM/YARN 安装，也可以从 Github 获取。参考[installation page](https://greensock.com/install)，最简单的就是用 script 标签引入：

```js
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"></script>
```

# 基本的 Tweening 知识

开始学习一些基础的 tweens 吧，可以参考官网给出的[codepen](https://codepen.io/GreenSock/pen/aYYOdN) demo.

## gsap.to()

为了创建一个动画，gsap.to()需要两个参数：

- 目标(target) - 也就是你想让它动起来的对象。可以是一个单纯的对象，或一个 array 中的对象，或者是像 jQuery 的选择器，如`".myClass"`.
- 变量(vars) - 一个带有你要制作动画的属性/值对的对象（比如`opacity:0`.5, `rotation:45`，等等），以及其他可选的特殊属性，比如`duration`和`onComplete`。

举个栗子，要在 1 秒内把一个 id 为"logo"的元素，移动到`x`为 100 的地方（即`transform: translateX(100px)`），可以这样写：

```js
gsap.to("#logo", { duration: 1, x: 100 });
```

注意：记住，GSAP 可以操作的并不仅仅是 DOM 元素，所以你甚至可以对原始对象的自定义属性进行动画处理，像这样:

```js
var obj = { prop: 10 };
gsap.to(obj, {
  duration: 1,
  prop: 200,
  //onUpdate fires each time the tween updates; we'll explain callbacks later.
  onUpdate: function () {
    console.log(obj.prop); //logs the value on each update.
  },
});
```

打开 dev tool 你可以看到，在 1 秒内 GSAP 打印了从 10 到 200 的数值。可以看出，每次 tween 更新，都会触发 onUpdate()从而打印数字。

请注意，在上面的 demo 中，`opacity`, `scale`, `rotation` 和`x`值都被动画化了，但 DOM 元素实际上并没有这些属性! 换句话说，不存在`element.scale`或`element.opacity`这样的东西。那是它怎么做到的呢？这就是 GSAP 的魔力。在我们谈论这背后的细节之前，让我们先看看 GSAP 的插件以及它们是如何工作的，因为这将澄清一些重要的概念。

# Plugins

可以把插件看作是动态地添加到 GSAP 中以增加特殊属性的工具，注入额外的功能。这使核心引擎体积小而有效，同时允许无限扩展。每个插件都与一个特定的属性名称有关。

其中最受欢迎的插件是：

- SplitText: 将文本块分割成行、字和字符，并使你能够轻松地将每个部分做成动画。
- Draggable：增加了拖放任何元素的功能。
- MorphSVGPlugin: 对复杂的 SVG 路径进行平滑变形。
- DrawSVGPlugin: 对 SVG 笔触的长度和位置进行动画处理。
- MotionPathPlugin: 沿着一个路径对任何元素进行动画。

## CSS 插件

在前面的例子中，GSAP 使用了一个叫做[CSSPlugin](https://greensock.com/docs/v3/GSAP/InternalPlugins/CSSPlugin)的核心插件（一个包含在 GSAP 核心中的插件）。它自动注意到目标是一个 DOM 元素，所以它**拦截**了这些值，并在背后做了一些额外的工作，将它们当作内联样式（在这种情况下是 `element.style.transform` 和 `element.style.opacity`）。请务必观看本文顶部的 "入门 "视频，看看它的操作。

CSSPlugin 的特点:

- 使各**浏览器的行为正常化**，并解决各种浏览器的错误和不一致的问题
- 通过自动分层、缓存转换组件、防止布局紊乱等来**优化性能**。
- 独立控制**2D 和 3D 变换组件**（`x`、`y`、旋转、`scaleX`、`scaleY`、`skewX`等）（消除了操作顺序的问题）
- 读取计算值，所以你**不必手动定义起始值**
- 对**复杂的值**进行动画处理，如`borderRadius: "50% 50%"`和`boxShadow: "0px 0px 20px 20px red"`
- 在必要时应用供应商特定的**前缀**（-moz-, -ms-, -webkit-, 等等）。
- 动画化**CSS 变量**
- 规范**SVG**和 DOM 元素之间的行为（对 transforms 特别有用）。
- ...还有更多

基本上，CSSPlugins 让你非常省心。

由于动画化 CSS 属性非常普遍，GSAP 会自动感知目标是一个 DOM 元素，并在内部将 CSS 值传给 CSSPlugin。没有必要用 css:{}对象来包装东西。对你来说，需要打的字更少了。不客气。

要了解 CSSPlugin 的高级功能，请阅读完整的[CSSPlugin 文档](https://greensock.com/docs/v3/GSAP/CorePlugins/CSSPlugin)。

# 2D 和 3D transforms

CSSPlugin 根据 transforms（变形）相关的属性，可以识别的一些短代码：

| GSAP           | CSS                          |
| -------------- | ---------------------------- |
| x: 100         | transform: translateX(100px) |
| y: 100         | transform: translateY(100px) |
| rotation: 360  | transform: rotate(360deg)    |
| rotationX: 360 | transform: rotateX(360deg)   |
| rotationY: 360 | transform: rotateY(360deg)   |
| skewX: 45      | transform: skewX(45deg)      |
| skewY: 45      | transform: skewY(45deg)      |
| scale: 2       | transform: scale(2, 2)       |
| scaleX: 2      | transform: scaleX(2)         |
| scaleY: 2      | transform: scaleY(2)         |
| xPercent: -50  | transform: translateX(-50%)  |
| yPercent: -50  | transform: translateY(-50%)  |

GSAP 可以对任何`transform`值进行动画处理，但我们强烈建议使用上面的快捷方式，因为它们更快、更准确（GSAP 可以跳过解析计算的矩阵值，因为对于超过 180 度的旋转值来说，它本身就是模糊的）。GSAP 提供的另一个主要便利是对每个组件的独立控制，同时提供一个一致的操作顺序。

性能说明：对于浏览器来说，更新`x`和`y`（transform）要比更新影响文档流的`top`和`left`容易得多。所以要移动一些东西，我们建议使用`x`和`y`写动画。

**请记住：**

- 请确保对所有带连字符的属性进行 camelCase 转换。font-size 写作 fontSize，背景色写作 backgroundColor。
- 当对`left`和`top`等位置属性进行动画处理时，你试图移动的元素也必须有一个`absolute`、`relative`或`fixed`的 CSS `position`值。

## from() 方法

有时，将你的元素设置在它们应该结束的地方（例如，在一个介绍性的动画结束后），然后从其他的值开始移动，这会非常方便。这正是`gsap.from()`的作用。

例如，你现在有一个 `"#logo"` 元素，初始`x`位置为 `0`，然后你创建了下面的 tween：

```js
gsap.from("#logo", { duration: 1, x: 100 });
```

于是这个`#logo`会立即跳到`x`为`100`的位置，然后开始移动到`x`为`0`的位置（或当 tween 开始工作时的随便某个值）。话句话说，这个元素将从**你提供的值**开始动画，而不是初始值。

请看[Codepen](https://codepen.io/GreenSock/pen/OJLgroR)例子。

也有一个`fromTo()`方法，允许你指定初始值和结束值。

## set() 方法

如果你想即刻设置一些属性，使用`.set()`方法。它本质上是一个`duration`为`0`的 tween。

```js
gsap.set("#logo", { fontSize: 20, x: 10 });
```

## 特殊属性 Special properties

一个特殊属性就像一个保留的关键字，GSAP 对它的处理方式与普通（动画）属性不同。特殊属性被用来定义回调、延迟、缓动、交错等。

特殊属性的一个基本例子是`duration`（我们已经在使用它了）。

```js
gsap.to("#logo", { duration: 1, x: 100 });
```

其他一些常见的特殊属性：

- delay - 动画开始前的延迟
- onComplete - 当动画完成时的回调
- onUpdate - 每次动画更新/渲染时的回调
- ease - 缓动（如 `"power2.inOut"`）。
- stagger - 为每个目标/元素动画错开开始时间

# 缓动 Easing

如果你的动画有声音，它听起来会是什么样的？它应该看起来很好玩吗？机器人式的？滑稽？逼真？要成为一名动画明星，你必须培养对缓动的敏锐感觉，因为它决定了 A 点和 B 点之间的运动风格。

一个 "缓动 "控制了 tween 过程中的变化率。下面是一个交互式工具，它可以让你直观地探索各种缓动效果。注意：你可以点击底部代码中的下划线部分来改变数值。

可视化工具地址：https://greensock.com/get-started/#easing

要想对你的缓和曲线进行绝妙的控制，一定要看看[CustomEase](https://greensock.com/docs/v3/Eases/CustomEase)，它允许你绘制任何你所想的缓动曲线。[CustomWiggle 和 CustomBounce](https://greensock.com/wiggle-bounce) 是高级缓动工具，可以创造极其复杂和逼真的效果。

# 交错 Staggers

交错器让一组对象的动画绘制变得容易，让每个对象的动画开始之间有一个小的延迟。
DEMO2: https://codepen.io/GreenSock/pen/RwbZaZK

你甚至可以通过添加一些配置选项来错开布置在网格中的项目!
DEMO2: https://codepen.io/GreenSock/pen/qBWjOMK

# 回调 Callbacks

当一个特定的动画相关事件发生时，这些回调函数会调用一个函数：

- onComplete：动画**完成**时被调用。
- onStart：动画**开始**时被调用。
- onUpdate：每次动画**更新**时调用（在动画激活时的每一帧）。
- onRepeat：每次动画**重复**时调用。
- onReverseComplete：当动画**反转**时再次到达它的起点时被调用。

要在动画结束时调用`tweenComplete()`函数，你应该这样写：

```js
gsap.to("#logo", { duration: 1, x: 100, onComplete: tweenComplete });

function tweenComplete() {
  console.log("the tween is complete");
}
```

## 回调参数 Callback Parameters

每个回调函数可以选择性地传递任意数量的参数。由于可以有多个参数，它们必须以数组形式传递（即使只有一个）。

```js
gsap.to("#logo", {
  duration: 1,
  x: 100,
  onComplete: tweenComplete,
  onCompleteParams: ["done!"],
});

function tweenComplete(message) {
  console.log(message);
}
```

默认情况下，回调的 scope（在该函数中`this`的指向）即 tween 本身，但你也可以指定 scope，比如 `callbackScope: yourScope`。

Callbacks DEMO: https://codepen.io/GreenSock/pen/MWgoLgq

## Controlling Animations
你需要一个实例来控制动画，`to()`、`from()`和`fromTo()`方法都会返回一个Tween实例，所以你可以把它存为一个变量，然后非常轻松地控制动画:
```js
//create a reference to the animation
var tween = gsap.to("#logo", {duration: 1, x: 100});

//pause
tween.pause();

//resume (honors direction - reversed or not)
tween.resume();

//reverse (always goes back towards the beginning)
tween.reverse();

//jump to exactly 0.5 seconds into the tween
tween.seek(0.5);

//jump to exacty 1/4th into the tween's progress:
tween.progress(0.25);

//make the tween go half-speed
tween.timeScale(0.5);

//make the tween go double-speed
tween.timeScale(2);

//immediately kill the tween and make it eligible for garbage collection
tween.kill();
```

Demo: [Basic Control Methods](https://codepen.io/GreenSock/pen/OJLgdyg)

---
\* 2020-3-15 更新

# Sequencing with Timelines
有了GSAP的时间线，复杂的序列编排将变得异常简单。

时间线就像一个容器，你可以把tweens放在这个容器里（有点像一个时刻表）。它们可以重叠或间隔；你可以完全控制。当时间线的播放头移动时，它会经过它的子tweens，并相应地渲染它们。你想插入多少就插入多少，用标准方法把整个组作为一个整体来控制（如`play()`, `reverse()`, `pause()`等）。你甚至可以在时间线中嵌套时间线！

一旦你掌握了时间线的窍门，一个全新的可能性世界就会打开。它提供了一种使你的动画代码模块化的奇妙方法。

## 何时使用timeline
- 将一组动画作为一个整体来控制时
- 创建一个序列时，不需要使用大量的`delay`，避免混乱（逐步构建，当前面的动画时间调整时，自动影响后面的动画，这大大简化了实验和维护）。
- 使你的动画代码模块化
- 做任何类型的复杂编排
- 在一组动画的基础上启动回调（比如 "在所有动画完成后，调用myFunction()"）

但如果你只是在左右之间做一个动画，那么时间线可能是多余的。

**基本排序**
timeline有类似`to()`、`from()`和`fromTo()`的方法，为我们提供了一种快速创建Tween并将其添加到时间线上的方法。
```js
//create a timeline instance
var tl = gsap.timeline();

//the following two lines do the SAME thing:
tl.add( gsap.to("#id", {duration: 2, x: 100}) );
tl.to("#id", {duration: 2, x: 100}); //shorter syntax!
```
默认情况下，动画是一个接一个地插入的，可以使用[位置参数](https://greensock.com/position-parameter)来精确控制动画的位置。

Demo: [Basic Sequencing](https://codepen.io/GreenSock/pen/WNeOPGz)
<!-- 
# Timeline control

# Getter / Setter methods

# Getting Current Values of an Element's Property -->
