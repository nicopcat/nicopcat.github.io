---
layout: doc
title: 使用vue filters把数字变为两位小数
---
# 使用vue filters把数字变为两位小数
**需求**：把table中所有与金额相关的数字，显示为2位小数

**呈现效果**：

![presentation](https://nic-gz-1308403500.file.myqcloud.com/vitepress/tasks-2023-06-05-10-45-37.png)

## 思路

用 vue 的`filter`来进行过滤，过滤的过程就是将数字转为两位小数。

filter就是过滤器，用在`插值表达式`aka `mustache bracket` `{{ }}`或`v-bind`表达式中。

filter可以定义在单个文件中，如

```jsx
filters: {
  capitalize: function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
  }
}
```

也可以定义在全局：

```jsx
Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})
```

因为涉及的文件较多，所以选择全局定义。

## 在main.js中定义过滤器


```jsx
Vue.filter('returnFloat', (value) {
  // 首先判断传入的数值是否为假
	if (value === undefined || value === null) {
    return null;
  }

  // 如果 value 是整数，则直接返回两位小数的字符串
  if (Number.isInteger(value)) {
    return value.toFixed(2);
  }

  // 否则按照原函数的逻辑进行处理
  value = Math.round(parseFloat(value) * 100) / 100;
  var xsd = value.toString().split(".");
  if (xsd.length == 1) {
    value = value.toString() + ".00";
    return value;
  }
  if (xsd.length > 1) {
    if (xsd[1].length < 2) {
      value = value.toString() + "0";
    }
    return value;
  }
})
```
不得不在最后承认，这个方法是网上找+ChatGPT修改而得的。(●'◡'●)

---

这么一大坨写在main.js里，有点不优雅，所以打算把方法写到`@/utils/util.js`文件里，然后在`main.js`中引用：

util.js

```jsx
/**
 * 金额转2位字符串再转数字
 */
export function returnFloat(value){
  if (value === undefined || value === null) {
    return null;
  }

  // 如果 value 是整数，则直接返回两位小数的字符串
  if (Number.isInteger(value)) {
    return value.toFixed(2);
  }

  // 否则按照原函数的逻辑进行处理
  value = Math.round(parseFloat(value) * 100) / 100;
  var xsd = value.toString().split(".");
  if (xsd.length == 1) {
    value = value.toString() + ".00";
    return value;
  }
  if (xsd.length > 1) {
    if (xsd[1].length < 2) {
      value = value.toString() + "0";
    }
    return value;
  }
 }
```

main.js

```jsx
import { returnFloat} from '@/utils/util.js'

Vue.filter('returnFloat', returnFloat)
```

这样清爽多了。

## 使用filter

在需要转换的columns下，增加一个`scopedSlots: { customRender: 'fixed2' }` 的自定义插槽，然后在table中增加对应的渲染模板即可。

具体业务文件：

```html
<template>
      <a-table
        :columns="columns"
        :dataSource="dataSource"
      >

        <span slot="fixed2" slot-scope="text, record">
          <span> {{ text | returnFloat }} </span>
        </span>

      </a-table>
</template>

<script>
  export default {
    data () {
      return {
        // 表头
        columns: [
          {
            title:'结算单号',
            align:"center",
            dataIndex: 'statementNo'
          },
          {
            title:'客户名称',
            align:"center",
            dataIndex: 'customerName'
          },
          {
            title:'结算金额',
            align:"center",
            dataIndex: 'amount',
            scopedSlots: { customRender: 'fixed2' }
          },
          {
            title:'实际结算金额',
            align:"center",
            dataIndex: 'realityAmount',
            scopedSlots: { customRender: 'fixed2' }
          },
        ],
      }
    },
  }
</script>
```