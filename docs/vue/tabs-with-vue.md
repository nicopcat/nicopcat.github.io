---
layout: doc
title: 用Vue实现多标签页面（tab栏）切换的两种方法
---
# 用Vue实现多标签页面（tab栏）切换的两种方法
这里有一个用简单的button和子组件做的标签页面。
效果如下：
![20220219144105](https://blogpic-1308403500.cos.ap-shanghai.myqcloud.com/markdown/20220219144105.png#center)

## 目标
点击`Active Goals`按钮，就可以激活`Active Goals`组件下的内容。同样的，点击`Manage Goals`按钮，就可以激活`Manage Goals`组件下的内容。

## 结构
HTML结构:
```HTML
<template>
  <div>
    <button>Active Goals</button>
    <button>Manage Goals</button>
    <active-goals></active-goals>
    <manage-goals></manage-goals>
  </div>
</template>
```

`active-goals`组件：
```HTML
<template>
  <h2>这是 Active Goals 组件的内容</h2>
</template>
```

`manage-goals`组件：
```HTML
<template>
  <h2>这是 Manage Goals 组件的内容</h2>
</template>
```

都是很简单的两个组件。


## 实现
### 方法1：v-if 结合 methods 传值
定义一个data项`selectedBtn`:
```JavaScript
data() {
    return {
      selectedBtn: "active-goals"
    };
```

给`button`绑定点击事件：
```HTML
<template>
  <div>
    <button @click="setSelectedBtn('active-goals')">Active Goals</button>
    <button @click="setSelectedBtn('manage-goals')">Manage Goals</button>
    <active-goals></active-goals>
    <manage-goals></manage-goals>
  </div>
</template>
```


当我们点击按钮，参数就会传到接下来定义的方法中
```JavaScript
methods: {
    setSelectedBtn(btn) {
      this.selectedBtn = btn;
    }
```

每当点击按钮，我们就能让Vue知道我们点击的是哪一个按钮，然后用`v-if`显示该组件的内容:
```HTML
<active-goals v-if="selectedBtn === 'active-goals'"></active-goals>
<manage-goals v-if="selectedBtn === 'manage-goals'"></manage-goals>
```

### 方法2：使用动态组件 - component 的 is 属性
vue提供的动态组件非常适合用来做多标签切换，其中的`is` 属性允许我们展示特定的组件的内容。

```HTML
<template>
  <div>
    <button @click="setSelectedBtn('active-goals')">Active Goals</button>
    <button @click="setSelectedBtn('manage-goals')">Manage Goals</button>
    <component :is="selectedBtn"></component>
  </div>
</template>
```

一旦`selectedBtn`的值改变，组件就会动态切换。