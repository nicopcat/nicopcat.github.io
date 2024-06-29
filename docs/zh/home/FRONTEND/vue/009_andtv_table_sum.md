---
layout: doc
title: Ant Design Vue Table 加一个合计行
---
# Ant Design Vue Table 加一个合计行
众所周知，Vue 2版本的Ant Design Vue的Table组件并没有合计功能，那么就手动增加一个。

看了参考的[文章](https://zhuanlan.zhihu.com/p/398007082)，可能是因为原本的table的实际金额列因为业务写了一个customRender，方案二没有生效，于是选择了直观的方案一。方案一的好处就是只需要统计合计，把合计push进dataSource里就好。

```jsx
getList(){
  // 请求数据 ...

  if (res.success) {
    let r = res.result.records || res.result;

    // 计算合计
    if (Array.isArray(r) && r.length > 0) {
      // 需要计算的字段：amount, containerQuantity, quantity, amount
      // 使用reduce求和
      let sumAmount = r.reduce((acc, cur) => acc + cur.amount, 0);
      let sumQuantity =  r.reduce((acc, cur) => acc + cur.quantity, 0);

      // 克隆数组的第一项赋值给lastItem
      let sumRow = { ...r[0] };

      // 遍历sumRow的key，用switch case判断是否为需要计算的字段，是则赋值给上面计算好的总和
      for (const key in sumRow) {
        switch (key) {
          // id为第一列，显示'合计'
          case 'id':
            sumRow[key] = '合计';
            break;
          case 'amount':
            sumRow[key] = sumAmount;
            break;
          case 'quantity':
            sumRow[key] = sumQuantity;
            break;
          default:
          sumRow[key] = null;
            break;
        }
      }
      // 将计算好的sumRow push进数组，
      r.push(sumRow);
    }

    // 把增加了合计列
    this.dataSource = r;

  } else {
  // ..
  }

}
```

```html
<template>
	<a-table
        size="middle"
        :columns="isDetail ? columns2 : columns"
        :dataSource="dataSource"
        :pagination="ipagination"
        @change="handleTableChange">
  </a-table>
</template>
```

坑：

之前写的`sumRow[key] = ''`，后来又在金额显示上加了filter，显示.00两位小数，于是产生了一些计算，变成`sumRow[key] = null` 就没问题了。

```jsx
switch(){
// ...
          default:
          sumRow[key] = null;
            break;

// ...
}
```