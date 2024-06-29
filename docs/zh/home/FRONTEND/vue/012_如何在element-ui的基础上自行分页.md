---
layout: doc
title: 如何在element-ui的基础上自行分页
editLink: true
---
# {{ $frontmatter.title }}

一般来说，数据由后端做好分页，前端使用传入分页参数即可。如果有特殊需求，需要前端来做分页，应该怎么做呢？

这里以Vue3/Element-Plus为例。

1. 请求去掉参数

```js
const getTableData = async () => {
  const table = await getThingTemplateList({ ...searchInfo.value })
  if (table.code === 0) {
    tableData.value = table.data.list
    total.value = table.data.total  // total还是需要的
    // page.value = table.data.page
    // pageSize.value = table.data.pageSize
  }
}
```

2. 数据根据当前页数`page`和每页数量`pageSize`来截取

Template:
```html
 <el-table ref="multipleTable" style="width: 100%" tooltip-effect="dark"
        :data="tableData.slice((page - 1) * pageSize, page * pageSize)" row-key="ID" @selection-change="handleSelectionChange" align="center">
 </el-table>
```
使用`arr.slice(startPoint, endPoint)`方法截取相应的数据。


3. 最后我们处理一下分页事件

template:
```html
      <div class="gva-pagination">
        <el-pagination layout="total, sizes, prev, pager, next, jumper" :current-page="page" :page-size="pageSize"
          :page-sizes="[10, 30, 50, 100]" :total="total" @current-change="handleCurrentChange"
          @size-change="handleSizeChange" />
      </div>
```


```js
// 分页
const handleSizeChange = (val) => {
  pageSize.value = val
  // getTableData()
}

// 修改页面容量
const handleCurrentChange = (val) => {
  page.value = val
  // getTableData()
}
```