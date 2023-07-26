---
title: "5. useEffect_Hook"
showToc: false
layout: doc
---
# 5. useEffect_Hook

## 14 - Basis
useEffect是React中的一个钩子函数，用于在函数组件中**执行副作用操作**或者在组件挂载、更新或卸载时执行一些操作。

副作用指的是那些不直接与组件渲染相关的操作，例如发送网络请求、访问浏览器缓存、添加/删除DOM元素、以及访问第三方库等等。这些操作可能会影响到组件的状态或者页面的展示，因此需要在适当的时机进行处理。useEffect提供了一种简单的方式来管理这些副作用。

useEffect的基本语法为：

```jsx
useEffect(() => {
  // 执行副作用操作
}, [dependency]);
```

## 15 - useEffect Dependencies

实际上，每一次rerender都会触发useEffect，我们并不想这样频繁，无目的地触发它。所以，我们可以指定某一个变量作为的dependency，它变化才会触发useEffect，感觉类似于Vue里的watch。

```jsx
import { useEffect, useState } from "react";

const [name, setName] = useState('jack');

  useEffect(() => {
    console.log('你好，useEffect');
  },[name]) // 监听name变量
  
return (  
	<div className="home">
		<button onClick={()=>setName('MA')}>Change name</button>
	</div>
);
```

## 16 - Using JSON Server
JSON Server是用来模拟请求的虚拟服务器。

首先在根目录新建文件和文件夹 ./data/db.json，将blogs假数据写入：
```json
{
  "blogs": [
    {
      "id": 1,
      "title": "today1",
      "body": "lorem1",
      "author": "mario1"
    },
    {
      "id": 2,
      "title": "today2",
      "body": "lorem2",
      "author": "mario2"
    },
    {
      "id": 3,
      "title": "today3",
      "body": "lorem3",
      "author": "mario3"
    }
  ]
}
```

可以使用[转换工具](https://www.convertsimple.com/)快速转换。

然后安装json-server包并运行：
```
npx json-server --watch data/db.json --port 8000
```

成功运行后，数据就可以通过这种伪API模式拿到。
Resources：`http://localhost:8000/blogs`

## 17 - Fetching Data with useEffect
使用fetch api获取假数据。

```jsx
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
	  // api endpoint:
    fetch('http://localhost:8000/blogs').then((res) => {
      return res.json() // 返回Promise
    }).then((res) => {
      setBlogs(res);  // 拿到数据
    }).catch(err => {
      console.log(err);
    })
  },[name])
```

取到数据后，使用setBlogs更新数据，然后rerender。

注意，blogs变量一开始是null，如果不处理会报错。在模板中改造一下：
```jsx
  return (  
    <div className="home">
      {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />}
    </div>
```

这里使用`{}`包住js表达式，然后用条件语句，选择性地渲染。假如blogs为null，则不渲染该模板，避免报错。

也可以给blogs初始值设为空数组，也不会报错。

