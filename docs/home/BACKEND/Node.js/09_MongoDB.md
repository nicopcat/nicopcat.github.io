---
layout: doc
title: 9 - MongoDB
---

# 9 - MongoDB

## SQL和NoSQL的区别

SQL（Structured Query Language）和NoSQL（Not Only SQL）是两种不同类型的数据库系统。SQL是关系型数据库（RDBMS）的代表，而NoSQL则是非关系型数据库（NOSQL）的代表。以下是它们之间的一些主要区别：

**数据模型**：SQL数据库使用表格数据模型，数据被组织为行和列。而NoSQL数据库则使用各种不同的数据模型，包括文档、键值、列族和图形等。

**数据结构**：SQL数据库要求在设计表格结构时事先定义好列名和数据类型，而NoSQL数据库则支持动态的、非结构化的数据，可以随时添加或删除字段。

**可扩展性**：NoSQL数据库具有更好的可扩展性，可以通过分片和复制等方式轻松地增加处理能力和可靠性，而SQL数据库则需要使用更复杂的分区和复制技术。

**事务处理**：SQL数据库支持事务处理，确保数据的一致性和完整性，而NoSQL数据库则通常不支持事务处理，因此在数据一致性和完整性方面可能存在一些限制。

**查询语言**：SQL数据库使用SQL查询语言，可以完成复杂的查询操作，包括联合、交集、排序等。而NoSQL数据库则通常使用基于键值的查询语言，仅支持简单的查询操作。

MongoDB属于非关系型数据库。

| SQL | NoSQL |
|---|---|
| Table | Collections|
| Rows | Documents|
| Columns | |

## MongoDB Setup & Atlas
https://cloud.mongodb.com/

具体的注册和setup可以参考视频。

## Mongoose, Models & Schemas

### Mongoose
- Mongoose is an ODM library - Object Document Mapping library.

>Mongoose 是一个 Node.js 环境下的 Object Data Modeling（ODM）库，它为 MongoDB 数据库提供了一种优雅的、基于模型的方式来操作数据。Mongoose 的设计目标是让开发者能够更轻松地在 Node.js 应用程序中使用 MongoDB 数据库，它提供了一些方便的功能，如模型定义、查询构建、数据验证、中间件等。
>
>Mongoose 提供了一种类似于 ORM（Object-Relational Mapping）框架的方式来操作 MongoDB 数据库，通过定义模型（Model）、文档（Document）和查询器（Query）等概念，使开发者能够更加方便地进行数据库操作。同时，Mongoose 还提供了一些方便的功能，如数据验证、查询构建器、中间件等，使得开发者能够更加轻松地构建复杂的应用程序。
>
###  Schemas
- Schemas defines the structure of a type of data / document
	- Properties & property types

>在 Mongoose 中，Schema 是用来定义 MongoDB 中集合（collection）的结构的一种机制，它类似于关系数据库中的表结构定义。Schema 定义了集合中的字段、数据类型、默认值、验证规则等信息，以及对这些字段进行操作的方法，例如增加、删除、修改等。通过定义 Schema，Mongoose 可以对 MongoDB 中的数据进行更加方便、强大的操作。
>
>Schema 可以包含以下类型：
>
>基本类型：String、Number、Date、Boolean、Buffer、ObjectID、Mixed
>数组类型：[String]、[Number]、[Date]、[Boolean]、[Buffer]、[ObjectID]、[Mixed]
>嵌套类型：包含其他 Schema 类型的对象


例如：

| User Schema | Blog Schema |
| --- |--- | 
| name(string), required | title(string), required |
| age(string) | snippets(string), required|
| bio(string), required | body(string), required |

### Models
Models allow us to communcate with database collections.


## 实战
注册，创建Clusters，创建Collections, 最后将DB地址放到app.js中
```js
// connect to MongoDB
const dbURI = 'mongodb+srv://nekolas:admin123@webappcluster.rxnnbvp.mongodb.net/';

// 在.net/ 后面可以指定集合名称，如.net/learnNodeDB
// 如果不指定，系统会分发一个test 集合，并把数据存放其中

mongoose.connect(dbURI).then((r) => {
  console.log('connecting to db');
  app.listen(3000);
}).catch((err) => {
  console.log(err);
});

```

创建connect后重跑，发现报错：
> MongooseServerSelectionError: Could not connect to any servers in your MongoDB Atlas cluster. One common reason is that you're trying to access the database from an IP that isn't whitelisted.

看到这个报错，只需要去 SECURTIY > Network Access > + ADD IP ADDRESS > ADD CURRENT IP ADDRESS 

点击Confirm, 保存`0.0.0.0/0` 这个地址即可。

### 创建schema  & model
在根目录下新建文件夹models，且新建blog.js。让我们在blog.js中创建一些blog schema，其实就是定义关于blog的一些字段和类型。

```js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  title: { type: String, required: true },
  snippets: { type: String, required: true },
  body: { type: String, required: true },
}, { timestamps: true });
```

根据我们定义的blog schema，我们可以创建一个model:
```js
const Blog = mongoose.model('Blog', blogSchema);
```

最后，需要将刚刚创建好的model export出去。
```js
//...
module.exports Blog;
```

## Getting & Saving
接下来我们试着将数据保存到数据库中。


```js
// 引入model:
const Blog = require('./models/blog')

// 在new post 页面写一些内容
app.get('/new', (req, res) => {
  const blog = new Blog({
    title: '今天送水的好慢',
    snippets: '他是从桂林送过来的么',
    body: '从早上10点整到下午14:41，都够去桂林的来回了。真是有够慢的。'
  })

	// 调用save()方法，调用异步请求，将数据保存到数据库
  blog.save().then((r) => {
    console.log(r);
    res.send(r);
   }).catch((err) => {
    console.log(err);
  })
})
```

用`find`方法读取所有blogs：
```js
app.get('/all-blogs', (req, res) => {
  Blog.find().then((r) => {
    console.log(r);
    res.send(r);
   }).catch((err) => {
    console.log(err);
  })
})
```

用`findById`方法读取某一篇blog：
```js
app.get('/single-blog', (req, res) => {
  Blog.findById('648972ae90c7b60531212d46').then((r) => {
    console.log(r);
    res.send(r);
   }).catch((err) => {
    console.log(err);
  })
})
```

## Outputting Documents in Views
是时候把数据库的blog渲染到页面了。

```js
app.get('/blogs', (req, res) => {
// 找到所有的博文
  Blog.find().then((r) => {
  // 渲染，传参
    res.render('index',{title: 'About', blogs: r});
   }).catch((err) => {
    console.log(err);
  })
})
```
`find()`方法后可以接一个`.sort()`方法，对数据进行排序：
```js
Blog.find().sort({ createdAt: -1}).then().catch()
```
上面写法根据创建时间的倒序排序，也就是最新的博文放在最上面。