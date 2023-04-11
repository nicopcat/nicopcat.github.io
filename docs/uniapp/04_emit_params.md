---
layout: doc
title: （四）uniapp路由传参
---
# （四）uniapp路由传参

### 1. 字符串拼接传参 ✔

适用于传递简单的字符串参数。

A页面传递：

```jsx
edit() {
		let params = 'hello'
		uni.navigateTo({ url: '/pages/myPrepay/edit?params=' + params })
},
```

B页面接收：

```jsx
onLoad(option) {
    if (option.params) {
      console.log(option.params);  //  打印结果：hello
    }
}
```

### 2. 用`JSON.stringify` 和 `JSON.parse()` 把对象序列化 ✔

A页面：

```jsx
edit(item) {
		let obj = JSON.stringify(item)
		uni.navigateTo({ url: '/pages/myPrepay/edit?item=' + obj })
},
```

B页面接收：

```jsx
onLoad(option) {
    if (option.item) {
      let data = JSON.parse(option.item)
      this.getAdminList(data)
    }
}
```

### 3. 使用 `eventChannel.emit()` ✔

A页面发送：

```jsx
edit(item) {
		// 第二种方法注释掉
		// let obj = JSON.stringify(item)
		// uni.navigateTo({ url: '/pages/myPrepay/edit?item=' + obj })

// 来试试麻烦的eventChannel.emit()
		uni.navigateTo({
			url:`/pages/myPrepay/edit`,  
			success:(res)=>{
				res.eventChannel.emit('sendTestValue',{
						info:item
				})
			}
		})
},
```

B页面接收：

```jsx
	onload(){
		this.page = this.getOpenerEventChannel();
		this.page.on('sendTestValue',(data)=>{
			// 这是data 就是上个页面传递的对象了
		})
	}
```

### 4. `uni.$emit('name', obj)`

这个方法确实能传递对象，但是第一次点击不生效

```jsx
// 传递
uni.$emit('test', obj)

// 接收
mounted:{

	uni.$on('list', (data)=> {
		console.log(data)
		uni.$off('test', this.test)
	})
}
```

关闭监听：（但如果这样写根本接收不到，很怪异）

```jsx
destroyed: function() {
	uni.$off('test', this.test)
}
```