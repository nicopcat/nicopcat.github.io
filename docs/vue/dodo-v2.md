---
layout: doc
title: Vue-Cli重写一个TO-DO APP
---
# Vue-Cli重写一个TO-DO APP
Dodo 1.0 是一款用 jQuery 写的待办记事 Web App，当时是在看黑马 JS 的课程，完全是跟着老师写的，现在回头看，有些真的是看不懂 😂。随着 Vue 知识的增加，遂想用 Vue.js 重写一下这款 App，就当练手。

项目体验：

[Dodo 1.0](https://www.niqks.tk/DoDo/)  
[Dodo 2.0](https://www.niqks.tk/dodo-v2/)

Dodo 虽小，问题可不少，独立地从 0 构建一个 App，思考的还挺多。我自己非常清楚，很多地方可以简化或有更好的办法，我可能现在没法做到简化，但以后一定可以。于是用这篇文字记录解决方案和过程中的所思所想。

## localStorage

重做项目也相当于复习`localStorage`的知识了。

### localStorage 概述

> 作为 Web Storage API 的接口，Storage 提供了访问特定域名下的会话存储或本地存储的功能，例如，可以添加、修改或删除存储的数据项。

`localStorage` 里面存储的数据不会过期，而存储在 `sessionStorage` 里面的数据在页面会话结束时会被清除。  
（session 这个单词让我想起，在一些外国网站，如果要找客服聊，结束按钮写的就是“End This Session”，结束这段会话。）

在 Dodo 项目中需要一直储存用户的 todos，所以需要的是不会过期的 `localStorage`。

### localStorage 的方法

`Storage` 对象有几个方法，也可以用在`localStorage`上：
方法|描述
----|----
`localStorage.getItem()` | 接受一个键名作为参数，返回键名对应的值。
`localStorage.setItem()` | 该方法接受一个键名和值作为参数，将会把键值对添加到存储中，如果键名存在，则更新其对应的值。
`localStorage.removeItem()` | 该方法接受一个键名作为参数，并把该键名从存储中删除。
`localStorage.clear()` | 清空存储中的所有键名。

在 Dodo 中，只是用了两个方法，一个是`localStorage.getItem()`，用以拿到数据，另一个是`localStorage.setItem()`，用来储存数据。

### Storage.setItem()

可以试着储存一些内容：

```js
// keyName: 'todoList', keyValue: '喝1L水'
const mydata = localStorage.setItem("todoList", "喝1L水");
```

在这里，我们确实可以很轻松地把两个`字符串`存放到本地储存中，但如果我需要储存的是一个`数组`，或`对象`呢？

于是`JSON`在这里排上了用场。  
简单来说，**JSON**是一种使用 Javascript 语法来描述数据对象数据格式，相当于一座桥梁，让我们的数据不再拘泥于字符串的格式。

1. 储存资料时，通过 `JSON.stringify()` 方法，将对象**stringify**成文本格式。
2. 去除数据时，通过`JSON.parse()` 方法将文本格式的数据，**parse**成原来的格式。

假设我有一个列表，储存了一些列任务的对象，里面包含`id`，`name`以及`done`等属性：

```js
let todoList = [
  {
    id: 01,
    taskName: "喝1L水",
    done: false,
  },
  {
    id: 02,
    taskName: "写完dodo review文章",
    done: false,
  },
];
```

- 将数据存放起来：

```js
localStorage.setItem("todoList", JSON.stringify(todoList));
```

- 取出数据：

```js
const dataList = JSON.parse(localStorage.getItem("todoList"));
```

### 异常

如果储存已满（localStorage 只有 5MB）或在 iOS 5 以后的移动版 Safari 浏览器的`无痕浏览`模式下，会抛出异常（Safari 在隐身模式下会将存储配额设置为 0 字节，这与其它浏览器不同，后者允许在隐身模式下使用单独的数据容器进行存储。）

日后会尝试解决这个问题。

## Vue-cli 3 中如何设置页面 icon 图标

官网有提到：

> #### Index 文件
>
> `public/index.html` 文件是一个会被 html-webpack-plugin 处理的模板。在构建过程中，资源链接会被自动注入。另外，Vue CLI 也会自动注入 resource hint (preload/prefetch、manifest 和图标链接 (当用到 PWA 插件时) 以及构建过程中处理的 JavaScript 和 CSS 文件的资源链接。

从中提取到信息点：Vue CLI 也会自动注入一些静态资源，其中包含我想要添加的图标，且需要使用 PWA 插件。

PWA，Progressive web apps

在 Vue-cli 官网检索`pwa`，进入 vue.config.js 的[全局配置页面](https://cli.vuejs.org/zh/config/#pwa)，然后点击进入[PWA Github 页面](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa)

根据网站，`pwa plugin for vue-cli`，只会在生产环境中注入，而不是开发模式。可以在`vue.config.js`文件或`package.json`的`"vue"`中配置`pwa`属性。

找到 `pwa.iconPaths`：

- pwa.iconPaths
  - Defaults 配置：

```
{
  faviconSVG: 'img/icons/favicon.svg',
  favicon32: 'img/icons/favicon-32x32.png',
  favicon16: 'img/icons/favicon-16x16.png',
  appleTouchIcon: 'img/icons/apple-touch-icon-152x152.png',
  maskIcon: 'img/icons/safari-pinned-tab.svg',
  msTileImage: 'img/icons/msapplication-icon-144x144.png'
}
```

打开 `vue.config.js` ，在 `module.exports`中添加以上代码。刷新一下就可以看到图标了。

---

<span style="font-size:14px; color:#ccc">
参考：
VUE----vue-cli3.0设置页面icon图标
https://blog.csdn.net/xyy1234567891/article/details/104841750  </span>

## vue 中的 img 路径

1. **引入 assets 中的 img**
   将图片文件放入 `/src/assets` 下，引用地址：

```html
<img src="@/assets/your-pic.png" />
```

2. 引入 public 中的 img
   将图片文件放入 `/public` 下，使用相对地址引用：

```html
<img src="./assets/your-pic.png" />
```

<span style="font-size:14px; color:#ccc">
参考：
https://blog.csdn.net/qq_40323256/article/details/115339101 </span>

## 通过用户输入的字符筛选任务

**需求：用户在搜索栏的 input 框内输入关键字，就可以检索相应的任务。**

有想过把每一条任务的字符串分解成一个个的单字放在一个数组里，然后匹配。但如果是两个字的搜索呢？事情到这里变得复杂了许多，行不通。

再想一想，似乎可以用`filter()`方法做。先拿到 todo 列表，再用`v-model`拿到的用户输入的数据，通过`indexOf()`方法查看 todo 里是否含有这些字符，如果返回值不等于`-1`，则说明含有，从而过滤出列表。

因为搜索栏和 todoList 不是父子组件，所以使用了 Vuex dispatch 到 store 中储存。

用户输入的搜索词，双向绑定为`enteredVal`：

```js
data() {
    return {
        enteredVal: "",
    };
},
```

用`dispatch`将`enteredVal`传递给`$store.state.filterWords`:

```js
methods: {
    passFilterWord() {
        this.$store.dispatch("passFilterWord", this.enteredVal);
        this.enteredVal = "";
    },
},
```

现在，todoList 组件就可以拿到用户输入的筛选词，然后筛选：

```JavaScript
export default {
  computed: {
    todoList() {
      return this.$store.getters.todoList;
    },
    thefilteredWord() {
      return this.$store.getters.filteredWord;
    },
    filteredTodos() {
      // todoList.taskName.indexOf('thefilteredWord')
      if (this.todoList == 0) {
        return 0;
      } else {
        return this.todoList.filter(
            // 不等于-1的对象就是我们需要的过滤出的对象
          (todo) => todo.taskName.indexOf(this.thefilteredWord) !== -1
        );
      }
    },
  },
}
```

## 如何修改任务的内容

**需求：点击某一个任务时，可以修改它的内容。**

原本每一条任务都放在`li`标签里，用`v-for`渲染。如果要实现修改，我需要把原本裸露在 li 里的内容放到`input`中，像这样：

```html
<span>
  <input
    type="text"
    v-model="item.taskName"
    @keyup.enter="editTodo(item.taskName, item.id)"
    @blur="editTodo(item.taskName, item.id)"
/></span>
```

用户点击任务，自然可以修改内容，UI 上我把`input`的样式改为透明。

用户修改完毕，设置两个事件：

1. 离开输入框
2. hit enter
   两者都会触发`@editTodo`事件，并传入两个参数：修改后的任务内容和该任务的 id。id 可以帮助锁定哪一个任务被修改了，进而修改 localStorage 里的内容，其余部分再拿到最新的数据进行 render。

- editTodo 方法：

```js
methods:{
  editTodo(content, id) {
    this.$store.dispatch("editTodo", {
      // 将更新的内容 content 和 id dispatch 给 actions
      content: content,
      id: id,
    });
    this.loadTodoList();
  },
}
```

- actions:

```js
actions:{
  editTodo(context, payload) {
      // 得到当前local数据
      let updatedData = JSON.parse(localStorage.getItem("todoList"));

      // 将id为payload.id的任务的taskName更新
      const index = updatedData.findIndex(item => item['id'] === payload.id);
      updatedData[index]['taskName'] = payload.content

      // 更新local数据
      localStorage.setItem("todoList", JSON.stringify(updatedData))
      context.commit('editTodos', updatedData);
  }
}
```

- 提交到 mutations:

```js
mutations:{
  editTodos(state, payload) {
      state.todos = payload;
  }
}
```

## 推荐 icon 生成网站

- [favicon](https://favicon.io/)
