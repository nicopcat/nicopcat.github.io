---
title: "12 - 部署到 Vercel"
layout: doc
---
# 部署到 Vercel

 啊，在去涠洲岛前，终于把我的 Node.js + Express项目部署到了 Vercel！
 
 查了很多资料，结果都 didn't work for me，我也一直以为是 vercel.json 配置文件没写对，仿佛修改它，结果都是徒劳。
 
 直到我搜到[这篇博客](https://www.cnblogs.com/zhongweiv/p/nodejs_express.html)，看到作者在 app.js 里写的和我稍微不一样。

我写的：
```js
app.set('view engine','ejs')
```

这行代码应该只是将ejs注册为view engine，但并没有告诉程序，要执行哪些ejs文件，加上下面的代码才能生效：
```js
app.set('views', path.join(__dirname, 'views'))
```

这行代码指定文件夹`views`为ejs的源文件路径。。

解决了这个问题，网站就不再报错，但css文件加载错误，那肯定是因为静态资源路径没有配置正确。

查看代码，指定静态资源路径的代码是：
```js
app.use(express.static('./public'));
```

改成下面就work了：
```js
app.use(express.static(path.join(__dirname, 'public')));
```


另外，在修改的过程中，我发现我的数据库链接密钥都暴露在app.js里，于是把这个变量放到了.env文件，并添加到 .gitignore ，这样就不会公开了。

---
源码：https://github.com/nicopcat/node-express-micro-blog

项目地址：https://node-express-micro-blog.vercel.app/
