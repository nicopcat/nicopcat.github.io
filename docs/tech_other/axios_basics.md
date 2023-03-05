---
title: "了解 axios"
date: 2022-010-15T17:00:00+08:00
tags: ["axios"]
draft: true
showToc: false
layout: doc
---
# 了解 axios

--- 

# 参数的携带方式

## 携带在url中
```js
axios.post('categories/' this.roldId)
```
## 携带参数
直接
```js
axios.post('categories',
    this.addCateForm
)
```


```js
axios.get('categories', {
    params: this.queryInfo
})
```

## 放到请求体中

```js
axios.post(
    `roles/${this.roleId}/rights`,
    { rids: keys }
)
```