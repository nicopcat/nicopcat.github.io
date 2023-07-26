---
title: "6. 条件渲染"
showToc: false
layout: doc
---
# 6. 条件渲染
为了展示上一篇讲的的条件渲染，我们再用pending状态举个例子。

在调用接口，获取数据的过程中，网络不佳的时候，页面暂时没有内容，那就可以用pending的内容暂时替换。

先创建一个变量
```jsx
const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8000/blogs').then((res) => {
      return res.json()
    }).then((res) => {
      setBlogs(res);
    }).catch(err => {
      console.log(err);
    }).finally(()=>{
    // 加载完毕后，关掉isPending的显示
      setIsPending(false);
    })
  },[])

// 模板
  return (  
    <div className="home">
      {isPending && <div>加载中。。。</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />}
    </div>
  );
```

当isPending为true，会显示加载中。当数据Fetch完毕，isPending设为false，则不显示。

如果觉得加载速度过快，效果不明显，可以按F12，打开开发者工具，选择newwork panel，点No throttile下拉框，切换为Fast 3G即可或更慢的网络，效果就出来了。

