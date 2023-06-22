---
layout: doc
title: script 元素
lastUpdated: true
---

# HTML 中的 JavaScript

这一节主要讨论如何将 JavaScript 引入 HTML 中。

## 2.1 script 元素

将 JavaScript 插入 HTML 的主要方法，是使用`<script>`元素。

### 两种写法

1. 行内脚本

   直接写在 HTML 文件中：

```HTML
<!DOCTYPE html>
<head>
    <title>Document</title>
</head>
<body>
    <div id="ad"></div>

    <script>
      function sayHi(){
        console.log('这是行内脚本')
      }
    </script>
</body>
</html>
```

2. 外部脚本

   引用外部脚本，需要使用 src 属性指定路径：

```HTML
<script src="index.js"></script>
```

### `<script>` 元素属性

`<script>` 有 8 个属性：

1. `async`: 立即下载脚本，但并不阻止其他页面动作。不一定按顺序执行脚本。

2. `defer`: 表示允许在文档解析和显示完成后，再执行脚本。按顺序执行。

3. `charset`: 表示字符集。大多数浏览器并不在乎。

4. `crossorigin`: 配置相关 CORS(跨域资源请求)。默认不使用。

5. `integrity`: 验证子资源完整性。防止 CDN 提供恶意脚本。

6. `src`: 引用的脚本路径。

7. `language`: 已废弃。

8. `type`: 代替 language，表示代码块中脚本语言的 content-type（或者成为 MINE-Type）。这个值默认是`text/javascript`，然后这个值是废弃状态，取而代之的是`application/x-javascript`。如果`type = 'module'`，则表示代码会被当作 ES6 模块，此时才能使用`import`/`export`关键字。

## 2.1.1 `<script>` 放哪里

过去是放在`<head>`中，外部文件统一，方便管理。但若是这样放，会很容易阻塞其他的进程，因为要等所有的 JS 文件下载，解析和执行后，才能开始渲染页面，这段时间屏幕完全空白，非常影响用户体验。

现代 JS 开发，一般都把脚本放到`<body>`的最后，即`</body>之前`：

```HTML
<!DOCTYPE html>
<head>
    <title>Document</title>
</head>
<body>
    <div id="ad"></div>
    <!-- 其他内容 -->
    <!-- ... -->


    <!-- 脚本放到最后 -->
    <script src="index.js"></script>
</body>
</html>
```

### 2.1.2 推迟/异步执行脚本

除了把脚本放到后面,还可以利用`<script>`的两个属性`async`和`defer`，人为推迟执行。

#### defer 推迟执行

> defer 属性表示，浏览器会立即下载该脚本，但不会马上执行，直到整个页面解析完成。

值得注意的一点，defer 的脚本会按照**出现的顺序执行**，下面的例子中，example1.js 会先于 example2.js 执行。

```HTML
<body>
    <div id="ad"></div>
    <!-- 其他内容 -->
    <!-- ... -->


    <!-- 脚本放到最后 -->
    <script defer src="example1.js"></script>
    <script defer src="example2.js"></script>
</body>
```

#### async 异步执行

async 与 defer 功能类似，区别在于，defer 并**不保证脚本按出现的顺序执行**。

#### 用 defer 还是 async 呢？

假如 js 文件互相没有依赖关系，用哪个都行。在不能确保这一点的前提，**推荐优先使用 defer**。

不过不是所有浏览器都支持 defer 或 async。

## 2.4 `<nonscript>`元素

`<nonscript>`的出现，是为了解决浏览器不支持 JavaScript 的情况，给浏览器提供替代内容。

`<nonscript>`可以包含任何 body 中的 HTML 元素，浏览器将在一下情况渲染其中的内容：

- 浏览器不支持脚本
- 浏览器对脚本的支持被关闭

## 2.5 小结

1. 要包含外部的 JS 文件，需要将 src 属性设置为 JS 文件的 URL，可以从外部链接获取脚本，但要确保该脚本是安全的。

2. defer 与 async 功能类似，区别在于 defer 会按脚本出现的顺序执行，async 不会，优先考虑使用 defer。

3. `<nonscript>`元素可以让不支持 JavaScript 的浏览器渲染特定内容。
