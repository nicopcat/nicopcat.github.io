---
layout: doc
title: 10 - Post & Delete Requests
---

# 10 - Post & Delete Requests

GET请求之前已经演示过，接下来说说POST和DELETE请求，以及路由传参参数等。

## Post request

以表单提交为例子学习POST

定义一个表单。`/blogs` 为post方法的用第一个参数：路径。

```html
<form action="/blogs" method="POST">
  <input type="text" placeholder="输入标题" id="title" name="title" required>
  <input type="text" placeholder="输入摘选" id="snippets" name="snippets" required>
  <textarea rows="16" placeholder="输入内容.." id="body" name="body" required></textarea>
  <div class="btn">
    <button>提 交</button>
  </div>
</form>
```

app.js

```jsx
app.post('/blogs', (req, res) => {
  console.log(req.body); // { title: '今天打羽毛球了哩', snippets: '不错', body: '和汪汪打羽毛球' }
  const blog = new Blog(req.body);
  blog.save().then((r) => {
    res.redirect('/blogs')
  }).catch((err) => {
    console.log(err);
  })
})
```

将表单提交的数据保存到数据库中，然后跳转页面。

## Route Parameters

使用路由参数，获得id

```jsx
app.get('/blogs/:id', (req, res) => {
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
```

```html
<div class="details content">
  <h2><%= blog.title %></h2>
  <div class="content">
    <p><%= blog.body %></p>
  </div>
  <a class="delete" data-doc=" <%= blog._id %>">删 除</a>
</div>
```

## Delete Requests

details.ejs
```html
<script>
  const delBtn = document.querySelector('a.delete');
  delBtn.addEventListener('click', (e) => {
    const endpoint = `/blogs/${delBtn.dateset.doc}`;

    fetch(endpoint, {
      method: 'DELETE'
    }).then(e => {
      console.log(e);
    }).catch(err => {
      console.log(err);
    })
  })
</script>
```

使用`findByIdAndDelete()` 找到数据并删除
```js
app.delete('/blogs/:id', (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id).then(r => {
    res.render('details', {
      title: 'Blog details',
      blog: r
    });
   }).catch((err) => {
    console.log(err);
  })
})
```