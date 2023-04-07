---
layout: doc
title: （二）引入uni-ui
---
# （二）引入uni-ui
uni-ui是uniapp官方的一套ui框架。它用起来还算趁手，美观度一般般吧，比起第三方ui框架，跨平台适配性最高。

因为我这两次H5的开发都是使用VSCode，所以下面的方法是针对vue-cli构建的引用步骤。

[https://uniapp.dcloud.net.cn/component/uniui/quickstart.html](https://uniapp.dcloud.net.cn/component/uniui/quickstart.html)

## 按需引入
进入组件的插件时长，点击下载。得到zip包以后，将里面的内容拷贝到uni_modules文件夹下即可。

刚刚创建的项目可能没有这个文件夹，需要自行创建。

有一个偷懒的方法，就是**通过HBX一键导入**。这是我唯一使用HBX的时候。

除了uni-ui的组件，第三方组件也要放到uni_modules文件夹下。

## 全量引入
如果想一次把所有uni-ui组件导入到项目中，只需要导入一个uni-ui组件即可点击去导入。

如果没有自动导入其他组件，可以在 uni-ui 组件目录上右键选择 安装三方插件依赖即可。

### npm安装 

首先，需要在根目录创建 `vue.config.js`文件 ，增加 `@dcloudio/uni-ui`包的编译即可正常，否则报错。

```js
// vue.config.js
module.exports = {
		transpileDependencies:['@dcloudio/uni-ui']
}
```

 **准备sass**

```
npm i sass -D   或   yarn add sass -D
```

和sass-loader

```
npm i sass-loader@10.1.1 -D   或   yarn add sass-loader@10.1.1 -D
```
 **最后安装 uni-ui**

```
npm i @dcloudio/uni-ui   或   yarn add @dcloudio/uni-ui
```

 **配置easycom**

使用 npm 安装好 uni-ui 之后，需要配置 easycom 规则，让 npm 安装的组件支持 easycom

打开项目根目录下的 pages.json 并添加 easycom 节点：

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
}
```

引入后就可以愉快滴使用ui框架了。