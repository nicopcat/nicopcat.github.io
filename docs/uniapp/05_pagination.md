---
layout: doc
title: （五）uniapp 列表分页
---
# （五）uniapp 列表分页

移动端的分页与PC端的分页相差不大。

首先，后端会回传的数据结构是这样的：
```jsx
{
	"total": 2,  // 总条数
	"rows": [  	// 当页数据
		{
			"id": 21,
			"type": "采购报销",
		},
		{
			"id": 23,
			"type": "个人借支",
		},
	],
	"code": 200,
	"msg": "查询成功"
}
```

相应地，我们需要控制请求的页数pageNum以及每页的条数pageSize

```jsx
data() {
	return {
		list: [],
		total: null, //总条数
		pageQuery: {
			pageNum: 1,//第几页
			pageSize: 10,//显示多少条
		}
	}
},
```

然后Uniapp提供的api `onReachBottom()` 监控是否触底：
```jsx
//触底事件
onReachBottom() { 
if (this.pageQuery.pageNum * this.pageQuery.pageSize >= this.total) {
	uni.showToast({
		title: '没有更多数据了',
		icon: 'none',
		duration: 1000
	});
	setTimeout(() => {
		uni.hideLoading()
	}, 500)
} else {
	if (this.pageQuery.pageNum <= this.pageQuery.pageNum - 1) {
		setTimeout(() => {
			uni.hideLoading()
		}, 500)
	} else {
		uni.showLoading({
			title: '加载中'
		});
		this.pageQuery.pageNum++
		this.getList()
	}
	setTimeout(() => {
		uni.hideLoading()
	}, 500)
}
```

## ref
https://blog.csdn.net/babyxuqian/article/details/119409966