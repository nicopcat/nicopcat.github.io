---
layout: doc
title: Parent组件利用 Props 给 Child 组件传值小故事
---
# Parent组件利用 Props 给 Child 组件传值小故事

> 剧情简介：
从前有个parent组件，想传值给child组件，需要一个props的参数来记录传哪些值。Prop是组件上注册的自定义的属性，其属性值就是parent组件中的数据，可以供child组件在模板中访问。

Let’s say，有一个叫 parent 的组件（接下来简称 p组件），某天它即将去世，p组件嘱咐他的助手 props ，请 props 把手上的遗产传给它的子孙 child组件（简称 c组件）。

```jsx
const App = {
    data() {
        return {
            fortune: [
                { id: 1, cash: 'dollar 10m', realEaste: 'House in Chicago' },
                { id: 2, cash: '金条50', realEaste: 'House in New York' },
                { id: 3, cash: '珠宝若干', realEaste: 'House in Winona' }
            ]
        }
    }
}
```

p组件的助手 props 几经周折终于找到了c组件，问：“ 你的p组件中有好几个遗产，一个是id, 一个是cash，还有一个是realEaste ，你需要哪个，就把它的名字写到你的参数props上就可以”

c听完点点头，默默地把cash和realEaste都写进了自己的参数props里。
至于id？它选择不要。😂

props补充道，除此之外，你还需要在你的template中用差值表达式写上这些遗产名（cash和realEaste），这样才会转移到你的名下：

```jsx
//child 组件
app.component('fortune-transfer', {
    props: ['cash', 'realEaste'],
    template: `
			<h1>我要 {{ cash }}</h1>
			<h2>我还要 {{ realEaste }}</h2>
			<br>
			`
})

//当一个值被传递给一个 prop attribute( transfer ) 时，它就成为该组件实例中的一个 property。该 property 的值可以在模板中( {{ transfer }} )访问，就像任何其他组件 property 一样。
```

然而，得到财富并没有那么简单，c组件还需在markup的部分写上相应的属性才行。

```html
<fortune-transfer v-for="item in fortune" :cash='item.cash' :real-easte ='item.realEaste'></fortune-transfer>

/*这里的:real-easte 原本是 :realEaste 但是因为要在html中编译所以要把驼峰式改成kebab-case
```

此时，c组件 就可以尽情享用 p组件 给它留下的遗产啦~~~

**html结构**
```html
<h1>我要 dollar 10m</h1>
<h2>我还要 House in Chicago</h2>
<br>
<h1>我要 金条50</h1>
<h2>我还要 House in Chicago</h2>
<br>
<h1>我要 珠宝若干</h1>
<h2>我还要 House in Chicago</h2>
<br>
```

**渲染结果**
![20220129205703](https://blogpic-1308403500.cos.ap-shanghai.myqcloud.com/markdown/20220129205703.png)