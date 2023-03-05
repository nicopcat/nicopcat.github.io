---
layout: doc
title: Vue emits 警告
---
# Vue emits 警告

用 $emits 写组件通信的时候报错了：
> [Vue warn]: Extraneous non-emits event listeners (del) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option. 
  at <FortuneTransfer cash="珠宝若干" real-easte="House in Winona" onDel=fn<bound deleteIt> > 
  at <App>

父组件部分
``` javascript
app.component('fortune-transfer', {
    props: ['cash', 'realEaste'],
    template: `
            <h1>我要 {{ cash }}</h1>
            <h2>我还要 {{ realEaste }}</h2>
                <button @click="$emit('del')">删除</button>
            <br>
            `
})

app.mount('#app')
```

**原因：没有在组件的 emits 选项中列出已抛出的事件**

加上下列就不报错了：
``` js
emits: ['del'],
```

~~吐槽：官方文档的措辞让我觉得加不加都行。~~
