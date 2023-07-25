---
title: "1. React 基础"
showToc: false
layout: doc
---
# 1. React 基础
## 课程介绍
心血来潮想学React，于是继续看The Net Ninja的教程，做了个简单的Gojo-Blog demo

访问地址：https://gojo.nekolas.com/

课程地址：[Full Modern React Tutorial](https://www.youtube.com/watch?v=j942wKiXFu8&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d)

这个课跟下来很快，我感觉和Vue其实也相差无几，特别是Vue 3的Composition API，都是函数式编程的思想。

应用层面是感觉到相似，底层的话还没有研究过。

## 2. Creating a React App
装上Node，就可以用npx创建react项目
```shell
npx create-react-app dojo-blog
```

运行：
```shell
npm start
```

## 3. Components & Templates
和Vue一样，React也是组件化的框架，而模板不是用html，而是jsx书写。
index.js 引用 App.js 并注入内容。
App.js 书写 templates，然后`export`出去。
在App.js中，有一个入口函数：
```jsx
import './App.css';

function App() {
	return (
		// ... jsx templates
	)
}

export default App;
```

## 4 - Dynamic Values in Templates
和 Vue 中类似，声明的变量，可以在模板中引用，只不过 Vue 用两对胡子括号，React 只用一对：
```jsx
import logo from './logo.svg';
import './App.css';

function App() {
  const welcome = 'ahhaha, 我在学react';
  const obj = { name: 'haha', age: 12 };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{ welcome}</h1>
        <p>{ obj.name}</p>
      </header>
    </div>
  );
}

export default App;
```

## 5 - Multiple Components
在import和export和use组件方面，React和Vue相差无几。

Navbar组件：
```jsx
const Navbar = () => {
  return (  
    <nav className="navbar">
      <h1>The Dojo Blog</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/create">New Blog</a>
      </div>
    </nav>
  );
}
 
export default Navbar;
```

App.js
```jsx
import './App.css';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;

```

## 6 - Adding Styles
样式的增加方式稍有不同。

我们知道，Vue的样式是在每一个SFC下，有一个`<style></style>`的标签，指定全局或当前页面的样式，一般会加上scoped属性，防止污染其他页面的样式。

而React的样式是通过在当前页面`import`样式文件，然后把样式注入到当前页面的。

也可以写内联样式：
```jsx
  <a href="/create" style={{
    color: 'white',
    backgroundColor: '#f1356d',
    borderRadius: '8px'
  }}>New Blog</a>
```

## 7 - Click Events
React中的click event, 也像引用变量一样，把引用的函数写在大括号中。

普通点击事件写法： `onClick={function}`
```jsx
const Home = () => {
  const printHello = () => {
    console.log('hello');
  }

  return (  
    <div className="home">
      <button onClick={printHello}>Print Hello</button>
    </div>
  );

  // 打印结果： hello
}
 
export default Home;
```

传参写法：用匿名函数包裹
```jsx
const Home = () => {
  const printParams = (name) => {
    console.log(name);
  }

  return (  
    <div className="home">
      <button onClick={ ()=> {printParams('hehe')} }>Print Whatever You Pass</button>
    </div>
  );

  // 打印结果： hehe
```