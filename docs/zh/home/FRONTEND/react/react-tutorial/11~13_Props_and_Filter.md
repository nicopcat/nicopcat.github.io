---
title: "4. Props_and_Filter"
showToc: false
layout: doc
---
# 4. Props_and_Filter

## props
这节学习如何从parent components 传参数给 child components.

和Vue类似，先在parent组件上绑定props，然后在child组件接参就可以。

parent组件：
```jsx 
import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { id: 1, title: 'today1', body: 'lorem1', author: 'mario1' },
    {id:2, title:'today2', body:'lorem2', author:'mario2'},
    {id:3, title:'today3', body:'lorem3', author:'mario3'},
  ]);


  return (  
    <div className="home">
    把blogs传递给child组件
      <BlogList blogs={blogs} />
    </div>
  );
}
 
export default Home;
```

child组件：
```jsx
const BlogList = (props) => {
  // receive props 👆
  const blogs = props.blogs

  return ( 
    <div className="blog-list">
          {blogs.map(x => (
      <div className="blog-preview" key={x.id}>
        <h2>{ x.title}</h2>
        <p>{x.body}</p>
        <p>By { x.author}</p>
      </div>
    ))}
  </div>
   );
}
 
export default BlogList;
```

接参的时候，还可以用ES6的语法解构参数，简化写法
```jsx
const BlogList = ({blogs}) => {

	// 直接引用blogs即可
}
```

## filter
我们已经成功从母组件传递参数给子组件。我们还可以通过filter方法，筛选特定的数据，传给子组件。

例如，只选取author为mario2的数据：
```jsx
  return (  
    <div className="home">
      <BlogList blogs={blogs.filter(x=>x.author === 'mario2')} title="All Blogs" />
    </div>
  );
```

## 函数也能传递
将函数以props的方式传递给子组件，类似于Vue中的emit，这种模式通常被称为“回调函数”。

在子组件定义一个按钮，点击按钮触发的函数，可以通过Props，触发母组件的函数，实现逻辑更改。

在子组件定义一个click事件`handleDelete`，并在props绑定该事件：
```jsx
const BlogList = ({blogs, title, handleDelete}) => {

  return ( 
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map(x => (
      <div className="blog-preview" key={x.id}>
        <h2>{ x.title}</h2>
        <p>{x.body}</p>
        <p>By {x.author}</p>
        <br />
        <button onClick={ ()=> handleDelete(x.id)}>Delete</button>
      </div> ))}
  </div>
   );
}
 
export default BlogList;
```


母组件：
```jsx
// 触发的函数
  const handleDelete = (id) => {
    const filteredBlogs = blogs.filter(x => x.id !== id)
    setBlogs(filteredBlogs);
  }

  return (  
    <div className="home">
      {/* 绑定handleDelete事件 */}
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
    </div>
  );
```