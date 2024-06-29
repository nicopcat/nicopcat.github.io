---
layout: doc
title: 复习 Vue slot：插槽
---
# 复习 Vue slot：插槽

可以看作是一个占位符，将某些内容从某个组件传入某个出口，出口写作`<slot></slot>`。    

# 非具名插槽  
最基本的插槽，作用是占位符。    

有一个`<NavLink />`的组件，其中的内容可以通过插槽分发出去： 

```HTML
<nav-link url="/profile">
  Your Profile
</nav-link>
```


在`<NavLink />`模板中，当组件渲染的时候，`<slot></slot>` 将会被替换为“Your Profile”:  
```HTML
<a v-bind:href="url" class="nav-link">
  <slot></slot>
</a>
```

# 具名插槽
`<slot>` 元素有一个特殊的 attribute：`name`，它用来指定某个内容是分发给某个特定标签的，没有`name`属性的`<slot>` 元素会被作为`default` 默认出口分发。 

既然有了出口，那内容的指定呢？可以使用`v-slot: XXX` 指令，这个指令必须写在组件下的 `<template>` 标签上，简写为 `#XXX`

```HTML
<base-layout>
    <!-- 指定header为分发内容的对象 -->
    <template v-slot:header>
      <h1>Here might be a page title</h1>
    </template>
</base-layout>
```

# 插槽作用域
有一个规则：  
>父级模板里的所有内容都是在父级作用域中编译的；子模板里的所有内容都是在子作用域中编译的。  

像上级组件那样直接使用 `{{  }}` 引用是不行的，如何让模板里的插槽访问到组件里的数据呢？    
例如，设想一个带有如下模板的`<current-user>` 组件：  

```HTML
<span>
  <slot>{{ user.lastName }}</slot>
</span>
```
这样写是无效的，`<slot></slot>` 内部根本访问不到 `user`。  

我们可以将 `user` 作为 `<slot>` 元素的一个 attribute 绑定上去：

```HTML
<span>
  <slot :user="user">
    {{ user.lastName }}
  </slot>
</span>
```

这个绑上去的属性被称为 **插槽 prop**，它能实现上下级作用域的传值，然后，我们可以使用 `v-slot` 指令，在`<template>`中为这个插槽 prop 定义一个名字，方便后续引用。

```HTML
<!-- 在这里，名字定义为slotProps，可以任意修改 -->
<current-user>
  <template v-slot:default="slotProps">
    {{ slotProps.user.firstName }}
  </template>
</current-user>
```
由此看出，还是要从上级组件中传值下去，不能直接在`<slot></slot>`里面直接引用（吧？）。

## 几个要注意的地方

1. 当被提供的内容只有默认插槽时，组件的标签才可以被当作插槽的模板来使用，如下：  

```HTML
<current-user v-slot:default="slotProps">
  {{ slotProps.user.firstName }}
</current-user>
```  

2. 默认插槽的缩写语法不能和具名插槽混用，因为它会导致作用域不明确
```HTML
<!-- 无效，会导致警告 -->
<current-user v-slot="slotProps">
  {{ slotProps.user.firstName }}
  <template v-slot:other="otherSlotProps">
    slotProps is NOT available here
  </template>
```

推荐完整写法：
```HTML
<current-user>
  <template v-slot:default="slotProps">
    {{ slotProps.user.firstName }}
  </template>

  <template v-slot:other="otherSlotProps">
    ...
  </template>
</current-user>
```
