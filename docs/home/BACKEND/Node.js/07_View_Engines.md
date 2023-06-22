---
layout: doc
title: 7 - View Engines
---

# 7 - View Engines
>Node js view engine is like Blade in Laravel. The most basic definition is that the view engine is a tool that helps us write HTML code and reuse it in a shorter and simpler way than usual. In addition, it can import data from the server side and render the final HTML.

Something just like HTML with a slight difference ?

## EJS

>EJS（Embedded JavaScript）是一种嵌入式 JavaScript 模板引擎，可用于生成 HTML、XML、JSON 等文档。它允许您在模板中使用 JavaScript 代码，以便动态生成内容。
>
>EJS 的模板类似于常规 HTML 文件，但包含特殊的标记（例如 <% %> 和 <%= %>），用于插入 JavaScript 代码和变量。这些标记允许您动态生成 HTML 内容，例如根据用户输入生成表单、根据数据集生成列表等。
> ——ChatGPT Turbo 3.5

### 安装
```shellscript
npm i ejs
```

### 使用
在app.js中，注册ejs:
```js
app.set('view engine','ejs');
```

ejs文件和HTML几乎一样，但它可以动态插入代码和变量。

使用`render()`方法渲染：
```js
app.get('/', (req, res) => {
  res.render('index');
})
```

## Passing Data Into Views
使用 `<% %>` 或` <%= %>`插入JavaScript语句：
```html
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nic部落格 | <%= title %></title>
</head>
```

变量`title`从哪里取的？回到app.js:

```js
app.get('/', (req, res) => {
  res.render('index',{title: 'HomePage'});
})
```

所以，变量从render这个页面的js文件定义，然后传递到ejs页面，渲染出来。

假设有一些博文变量`blogs`，我们现在要把它传到前台渲染出来：
```js
app.get('/', (req, res) => {
  const blogs = [
    {title: '玩玩Node.js', content: '好好玩好好玩好好玩' },
    {title:'东门沙角', content:'好好玩好好玩好好玩'},
    {title:'天气', content:'今天天气不错，但下午又热了起来'},

  ]
  res.render('index',{title: 'HomePage', blogs:blogs});
})

```

index.ejs:
```html
  <h1>All Blogs</h1>
  <% if(blogs.length > 0) { %>
  <% blogs.forEach(x=>{%>
  <div class="post">
    <h3> <%=x.title  %> </h3>
    <p><%=x.content  %></p>
  </div>
  <% }) %>

  <% } else {%>
  <p>opps, 一片荒芜 ..</p>
  <% }%>
```

这就是所谓的 SSR(Server-Side Render)！抽到了！

不禁猜想，nuxt.js 和 next.js 应该比这 ejs 好写，毕竟和前端框架紧密结合。

## Partials
Wait, `partials`??? 越来越像在dealing with我亲爱的博客框架Hugo了。

像上面Navbar，几乎每个页面都要有用，一旦需要更新它，就跑到所有页面进行更换，费时费力，不太聪明。

所以，若是页面中有公用的组件，最好将它抽出到partials，方便统一修改。

---

**新建patials文件夹**
首先，在views下新建文件夹partials，在其中新建nav.ejs。

将之前写在index.ejs中的nav代码拷贝到nav.ejs中。

**引用**

```html
<body>
  <h1>Home Page</h1>
  <%- include('./partials/nav.ejs') %>
  <br />
  ...
</body>
```
