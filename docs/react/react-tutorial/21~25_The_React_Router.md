---
title: "9. React 路由"
showToc: false
layout: doc
---
# 9. React 路由
首先下载router包
```
npm react-router-dom@5
```

引入并使用
```jsx
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/create">
              <Create />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
```
注意，如果不加`exact`属性去找完全匹配的路径，匹配则会出错。

## Router Link
Router Link组件是路由导航，本质上是a标签。

在Navbar.js中把a标签更换为Router Link:
```jsx
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (  
    <nav className="navbar">
      <h1>The Dojo Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create" style={{
          color: 'white',
          backgroundColor: '#f1356d',
          borderRadius: '8px'
        }}>New Blog</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;
```

## 25 路由传参
在BlogDetails.js页面，可以使用`useParams`钩子。

```jsx
import { useParams } from 'react-router-dom';

const BlogDetails = () => {
  const {id} = useParams(); // 返回一个key为id的对象
  return (  
    <div className="blog-details">
      <h2>Blog Details</h2>
      <p className="content">
        这是id为 {id} 的文章
      </p>
    </div>
  );
}
 
export default BlogDetails;
```

在blog列表页面，点击某一篇文章，跳转到文章详情。竟然是用Link(林克)包住每一条文章，点击的时候出发路由跳转。

应该可以写在点击事件的吧，只是还没看到。

```jsx
  return ( 
    <div className="blog-preview">
      <h2>{title}</h2>
      {blogs.map(x => (
        <Link to={`/blogs/${x.id}`} key={x.id}>
		      <div className="blog-preview"  onClick={()=>{detail(x)}}>
		        <h2>{ x.title}</h2>
		        <p>By {x.author}</p>
		        <br />
          </div>
	      </Link> 
      ))}
	  </div>
   );
}
```