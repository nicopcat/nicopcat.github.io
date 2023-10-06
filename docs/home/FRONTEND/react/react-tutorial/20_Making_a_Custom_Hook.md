---
title: "8. 创建自定义Hook"
showToc: false
layout: doc
---
# 8. 创建自定义Hook
创建自己的hook，是为了更好地复用组件。

在src下新建文件**useFetch.js**。Hook的命名都是**use**开头。

然后把逻辑丢进去：
```jsx
import { useState ,useEffect } from "react";


const useFetch = (url) => { // 传入参数url
  const [data, setData] = useState(null); // blogs改成了data，意义更广泛
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetch(url).then((res) => {
      if (!res.ok) {
        throw Error('找不到资源')
      }
      return res.json()
    }).then((res) => {
      setData(res);
    }).catch(err => {
      console.log(err);
      setError(err.message);
    }).finally(()=>{
      setIsPending(false);
    })
  }, [url])   // 监听url的变化

  return {data, isPending, error} 	// return出去
}

export default useFetch;
```

在Home.js中使用
```jsx
import BlogList from "./BlogList";
import useFetch from "./useFetch";  // 引用hook

const Home = () => {
  const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');  //结构参数，传入url


  return (  
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>加载中。。。</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
}
 
export default Home;
```