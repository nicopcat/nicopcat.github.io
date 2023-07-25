---
title: "3. 循环列表"
showToc: false
layout: doc
---
# 3. 循环列表
Vue使用`v-for`指令循环。

React则是直接用JavaScript的`map`函数遍历数组。

首先定义一个`blogs`列表
```jsx
import { useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { id: 1, title: 'today1', body: 'lorem1', author: 'mario1' },
    {id:2, title:'today2', body:'lorem2', author:'mario2'},
    {id:3, title:'today3', body:'lorem3', author:'mario3'},
  ]);


  return (  
    <div className="home">
    </div>
  );
}
 
export default Home;
```

然后写遍历
```jsx
  return (  
    <div className="home">
      {blogs.map(x => (
        <div className="blog-preview" key={x.id}>
          <h2>{x.title}</h2>
          <p>{x.body}</p>
          <p>By { x.author}</p>
        </div>
      ))}
    </div>
  );
```

注意JSX的写法和原生JS的不同。

原生JS：
```js
blogs.map(x=>{
	// ... 处理
}
```

JSX：
```jsx
{blogs.map(x => (
	<div className="blog-preview" key={x.id}>
		<h2>{x.title}</h2>
		<p>{x.body}</p>
		<p>By { x.author}</p>
	</div>
))}
```