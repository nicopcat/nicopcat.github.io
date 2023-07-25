---
title: "7. 处理请求错误"
showToc: false
layout: doc
---
# 7. 处理请求错误
主要就是用response返回的状态 和 `.catch()` 捕获错误。

```jsx
import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  const handleDelete = (id) => {
    const filteredBlogs = blogs.filter(x => x.id !== id)
    setBlogs(filteredBlogs);
  }

  useEffect(() => {
    console.log('你好，useEffect');
    fetch('http://localhost:8000/blogs').then((res) => {
      if (!res.ok) {
        throw Error('找不到资源')
      }
      return res.json()
    }).then((res) => {
      setBlogs(res);
    }).catch(err => {
      console.log(err);
      setError(err.message);
    }).finally(()=>{
      setIsPending(false);
    })
  },[])

  return (  
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>加载中。。。</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />}
    </div>
  );
}
 
export default Home;

```