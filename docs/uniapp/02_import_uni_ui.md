---
layout: doc
title: （二）引入uni-ui
---
# （二）引入uni-ui

[https://uniapp.dcloud.net.cn/component/uniui/quickstart.html](https://uniapp.dcloud.net.cn/component/uniui/quickstart.html)

1. ****npm安装****

cli 项目默认是不编译 `node_modules`下的组件的，导致条件编译等功能失效 ，导致组件异常 需要在根目录创建 `vue.config.js`文件 ，增加 `@dcloudio/uni-ui`包的编译即可正常

```js
// vue.config.js
module.exports = {
		transpileDependencies:['@dcloudio/uni-ui']
}
```

1.  **安装 sass**

```
npm i sass -D   或   yarn add sass -D
```

2. **安装 sass-loader**

```
npm i sass-loader@10.1.1 -D   或   yarn add sass-loader@10.1.1 -D
```

3. **配置easycom**
```json
// pages.json
{
	"easycom": {
		"autoscan": true,
		"custom": {
			// uni-ui 规则如下配置
			"^uni-(.*)": "@dcloudio/uni-ui/lib/uni-$1/uni-$1.vue"
		}
	},
	
	// 其他内容
	pages:[
		// ...
	]
}
```