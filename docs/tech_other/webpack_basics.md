---
title: "打包利器Webpack和它基本配置"
date: 2022-07-09T22:00:00+08:00
# publishDate: 2022-07-07T18:00:00+08:00
tags: ["Node.js","Webpack","打包"]
draft: false
showToc: false
layout: doc
---
# 打包利器Webpack和它基本配置
Vue-cli用了一阵子，发现不太了解其内置的打包工具————webpack。这个神奇的小东西怎么配置的呢？来学习一下用法~

Webpack是一个**静态资源打包工具**，内建依赖项图。它除了打包，还可以帮我们做其他的事情。
# 为什么选择 webpack
想要理解为什么要使用 webpack，我们先回顾下历史，在打包工具出现之前，我们是如何在 web 中使用 JavaScript 的。

在浏览器中运行 JavaScript 有两种方法。第一种方式，引用一些脚本来存放每个功能；此解决方案很难扩展，因为加载太多脚本会导致网络瓶颈。第二种方式，使用一个包含所有项目代码的大型 .js 文件，但是这会导致作用域、文件大小、可读性和可维护性方面的问题。

# 安装

```bash
mkdir webpack-demo
cd webpack-demo
npm init -y
npm install webpack webpack-cli --save-dev
```

# 基本使用

webpack的核心概念：

- Entry：打包入口，从入口开始构建依赖图。
- Output：打包出口，在Webpack经过一系列处理后的最终输出结果。
- Module：模块，在 Webpack里一切皆模块，一个模块对应着一个文件。Webpack会从配置的 Entry 开始递归找出所有依赖的模块。
- Chunk：代码块，一个 Chunk 由多个模块组合而成，用于代码合并与分割。
- Loader：模块转换器，用于把模块原内容按照需求转换成新内容。
- Plugin：扩展插件，在Webpack构建流程中的特定时机注入扩展逻辑来改变构建结果或做你想要的事情。

一个简单的配置例子：

```jsx
const path = require('path')

module.exports = {
    entry: './main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.[hash].bundle.js'
    }
}
```


## Entry

**entry point**指定打包的入口。默认入口就是`'./src/index.js'`，可以自行指定。

## Output

打包生成bundle的出口。

使用`output`字段处理配置过程，如上例。

*注：引入的`path`模块，是Node.js 中的一个核心模块，用来操作文件地址。

## Loaders

Webpack只认识JavaScript和JSON文件，像 html 或 css 它是不认识的，直接打包会报错。这时候Loaders就派上用场了。

Loader将处理它不认识的文件，并转换成有效的模块，供程序使用，然后添加到依赖图里。

Webpack可以通过`import`导入任何类型的模块，使用的工具就是Loaders.

在更高层面，在 webpack 的配置中，**loader** 有两个属性：

1. `test` 属性，识别出哪些文件会被转换。
2. `use` 属性，定义出在进行转换时，应该使用哪个 loader。

```jsx
const path = require('path');

module.exports = {
  output: {
    filename: 'my-first-webpack.bundle.js',
  },
  module: {
    rules: [{ test: /\.txt$/, use: 'raw-loader' }],
  },
};
```

## Plugins

loader 用于转换某些类型的模块，而插件则可以用于执行范围更广的任务。包括：打包优化，资源管理，注入环境变量。

使用插件的方式：`require()`

**webpack.config.js**
```jsx
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 指定html模板插件
const webpack = require('webpack'); // 用于访问内置插件

module.exports = {
  module: {
    rules: [{ test: /\.txt$/, use: 'raw-loader' }],
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
};
```

### 常用插件

- html-webpack-plugin: 创建html并插入script标签
- autoprefixer: 给css加前缀
- mini-css-extract-plugin: 抽离css样式link到html
- webpack-dev-server: 启动webpack服务
- webpack-dev-middleware:webpack服务集成到本地的服务
- uglifyjs-webpack-plugin:压缩js
- optimize-css-assets-webpack-plugin:压缩css
- clean-webpack-plugin:清空目录

## Mode

通过选择 `development`, `production`或 `none`之中的一个，来设置 `mode`参数，你可以启用webpack 内置在相应环境下的优化。其默认为 `production`。


# 实战
新建文件：
```plain-text
webpack-demo
  | - package.json
  | - package-lock.json
  | - webpack.config.js
  | - /src
    | - index.html
    | - main.js
```

**index.html**: 只有一个h1和一个div
```html
<body>
  <h1>学习Webpack</h1>
  <div></div>
  <script src="./src/main.js"></script>
</body>
```


**main.js**: 一些操作DOM变换颜色的脚本
```jsx
const divEL = document.querySelector('div');
divEL.addEventListener('click', () => {
	divEL.style.backgroundColor = 'Red'
})
```

**webpack.config.js**
```jsx
const path = require('path')

module.exports = {
    entry: './main.js',  // 入口文件
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.[hash].bundle.js'
    },
    mode: "development"
}
```

报错1：

```
Module not found: Error: Can't resolve './main.js' in 'D:\Dropbox\Coding\playground\Webpack-demo’
```

原因：main.js 路径错误

路径改为`'./src/main.js'`后，打包成功，根目录里多了一个dist文件夹，符合`output`给我们输出的文件名。

![dist](https://nic-gz-1308403500.file.myqcloud.com/posts/webpack-basics-2022-07-09-23-03-06.png)


## **npm scripts**

我们可以设置一个快捷方式，启动本地server运行 webpack 副本，添加一个 npm script:

**package.json**

```jsx
{
  "name": "webpack-demo",  // 项目名称
  "version": "1.0.0",
  "description": "",
  "main": "index.js",  // 入口文件
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack"  // 新添加的 npm script 指令
  },
  "devDependencies": {
    "webpack": "^5.73.0",
    "webpack-cli": "^4.10.0"
  }
}
```

## 使用HtmlWebpackPlugin插件

可以发现，目前我们的dist文件夹里并没有index.html，说明除了JavaScript和Json，webpack真的不会任何其他文件。

我们可以手动把index.html添加到dist里，但有一个更方妙的方法：使用`HtmlWebpackPlugin`插件

`HtmlWebpackPlugin`的用处是：**根据我们指定的html模板，帮我们在dist自动生成html文件。这样就避免我们不断地手动往dist里添加index.html文件**。

文档：[https://webpack.docschina.org/plugins/html-webpack-plugin/#root](https://webpack.docschina.org/plugins/html-webpack-plugin/#root)

步骤也是一样的 ：
1. 先install
    
    ```bash
    npm i -D html-webpack-plugin
    ```
    
2. 导入该插件（`require()`）并写具体配置：
    
    **webpack.config.js**
    
    ```jsx
    const HtmlWebpackPlugin = require('html-webpack-plugin');
    const path = require('path')
    
    module.exports = {
      mode: "development",
      entry: './src/main.js',
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.[hash].bundle.js'
      },
      plugins: [new HtmlWebpackPlugin({template: 'src/index.html'})],
    }
    ```
    

`html-webpack-plugin`
 为应用程序生成一个 HTML 文件，并自动将生成的所有 bundle 注入到此文件中。

配置文档：[https://github.com/jantimon/html-webpack-plugin#options](https://github.com/jantimon/html-webpack-plugin#options)

## 尝试使用Loaders

Loader的好处之前已经分析了，现在尝试加入css和img资源。

老规矩，先install，require，最后配置loader:

```bash
npm i -D style-loader css-loader
```

**webpack.config.js**

```jsx
const path = require('path')

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.[hash].bundle.js'
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'], // 应保证 style-loader 在前，否则可能报错
            }
        ]
    }
}
```

现在，尝试在./src下添加一个css文件：`style.css`。并将其 import 到我们的 `index.js`中：

```jsx
import './style.css';

const divEL = document.querySelector('div');
divEL.addEventListener('click', ()=>{
    divEL.style.backgroundColor = 'Red'
})
```

保存下，重新运行build，可以发现css样式已添加到打包的bundle.js中。

---
# ref

1. Webpack5 快速入門 - 布魯斯前端： [https://www.youtube.com/watch?v=uP6KTupfyIw](https://www.youtube.com/watch?v=uP6KTupfyIw)

2. Webpack 中文文档： [https://webpack.docschina.org/concepts/](https://webpack.docschina.org/concepts/)

3. Webpack由浅入深(基础配置)： [https://juejin.cn/post/6844903695818178567](https://juejin.cn/post/6844903695818178567)