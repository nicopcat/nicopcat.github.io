---
layout: doc
title: 11 - Express Router & MVC
---

# 11 - Express Router & MVC

## Express创建路由
express自带路由配置，所以，我们即将把路由相关的代码都放到新文件blogRoutes.js中。

首先，在根目录下新建文件夹**routes**, 然后在里面新建文件**blogRoutes.js**。

将**app.js**中路由相关的代码转移到其中：
```js
const express = require('express');
const Blog = require('../models/blog');

const router = express.Router();

// 主页
router.get('/', (req, res) => {
  res.redirect('/blogs');
})

// 关于页
router.get('/about', (req, res) => {
  res.render('about',{title: 'About'});
})

// 新建文章页
router.get('/new', (req, res) => {
  res.render('new',{title: '写文章'});
})

// 新增文章
router.post('/blogs', (req, res) => {
  const blog = new Blog(req.body);
  blog.save().then((r) => {
    res.redirect('/blogs')
  }).catch((err) => {
    console.log(err);
  })
})

// 获取所有文章列表
router.get('/blogs', (req, res) => {
  Blog.find().sort({ createdAt: -1}).then((r) => {
    res.render('index',{title: 'About', blogs: r});
   }).catch((err) => {
    console.log(err);
  })
})

// 获取某一篇文章详情
router.get('/blogs/:id', (req, res) => {
  const id = req.params.id;
  Blog.findById(id).then(r => {
    res.render('details', {
      title: 'Blog details',
      blog: r
    });
   }).catch((err) => {
    console.log(err);
  })
})

// 删除某文章
router.delete('/blogs/:id', (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id).then(r => {
    res.json({ redirect: '/blogs' });
   }).catch((err) => {
    console.log(err);
  })
})

// 导出路由
module.exports = router;
```

router还可以设置根目录路径：
```js
// routes
app.use('/blogs', blogRoutes);
```

## MVC
MVC = Model, View and Controller，即，模型，视图和控制器

简单说，就是把代码拆成三个模块，让代码模块化，增加可重用性，让人更容易阅读。

## Controllers
创建controllers，以便将逻辑层从试图层分离出来。

根目录下创建文件夹controllers，并新建blogController.js，将之前写在blogRoutes.js中的逻辑放到其中：

blogController.js
```js
const Blog = require('../models/blog');

// 逻辑写在这里
const blog_index = (req, res) => {
  res.render('index',{title: '首页'});
}


module.exports = {
  blog_index
}
```

相应地，在blogRoutes.js中写：
```js
const express = require('express');
const router = express.Router();

// 引用
const blogControllers = require('../controllers/blogController');

// 主页
router.get('/', blogControllers.blog_index);

```

最后，blogRoutes.js将会看起来非常neat：
```js
const express = require('express');
const blogControllers = require('../controllers/blogController');
const router = express.Router();

// 主页
router.get('/', blogControllers.blog_index);

// 关于页
router.get('/about', blogControllers.blog_about);

// 新建文章页
router.get('/new', blogControllers.blog_new);

// 新增文章
router.post('/blogs', blogControllers.blog_add_new);

// 获取所有文章列表
router.get('/blogs', blogControllers.blog_all_posts);

// 获取某一篇文章详情
router.get('/blogs/:id',  blogControllers.blog_detail);

// 删除某文章
router.delete('/blogs/:id', blogControllers.blog_delete);

// 导出路由
module.exports = router;
```

blogController.js:
```js
const Blog = require('../models/blog');

const blog_index = (req, res) => {
  res.render('index',{title: '首页'});
}

const blog_about = (req, res) => {
  res.render('about',{title: '关于'});
}
const blog_new = (req, res) => {
  res.render('new',{title: '写文章'});
}
const blog_add_new = (req, res) => {
  const blog = new Blog(req.body);
  blog.save().then((r) => {
    res.redirect('/blogs')
  }).catch((err) => {
    console.log(err);
  })
}
const blog_all_posts = (req, res) => {
  Blog.find().sort({ createdAt: -1}).then((r) => {
    res.render('blogs',{title: '所有文章', blogs: r});
   }).catch((err) => {
    console.log(err);
  })
}
const blog_detail = (req, res) => {
  const id = req.params.id;
  Blog.findById(id).then(r => {
    res.render('details', {
      title: 'Blog details',
      blog: r
    });
   }).catch((err) => {
    console.log(err);
  })
}
const blog_delete = (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id).then(r => {
    res.json({ redirect: '/blogs' });
   }).catch((err) => {
    console.log(err);
  })
}
module.exports = {
  blog_index,
  blog_about,
  blog_new,
  blog_add_new,
  blog_all_posts,
  blog_detail,
  blog_delete,
}
```

这样就完成了视图，模型和逻辑层的分离。