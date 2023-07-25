---
layout: doc
title: 'v-cloak的用法'
---
# v-cloak的用法

进入Gallery的时候，总会先显示很难看的 Vue 源代码的 mustache brackets。这是因为网速慢一点的话，先加载js文件，等到挂载结束才render页面。

于是 `v-cloak` 指令就排上用场了:  
> Used to hide un-compiled template until it is ready.  

`v-cloak` 经常用来隐藏未编译的模板，直到渲染完成。  

> `v-cloak` will remain on the element until the associated component instance is mounted. Combined with CSS rules such as [v-cloak] { display: none }, it can be used to hide the raw templates until the component is ready.  

`v-cloak` 将会作用在某个元素，直到完成挂载。结合CSS，如 [v-cloak] { display: none } 使用，可以用来隐藏还没准备好的模板。

例子：
```css
[v-cloak] {
  display: none;
}
```

```html
<div v-cloak>
  {{ message }}
</div>
```

---

参考： 
https://staging-cn.vuejs.org/api/built-in-directives.html#v-cloak