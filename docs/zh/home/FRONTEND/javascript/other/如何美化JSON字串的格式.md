---
layout: doc
title: 如何美化JSON字串的格式
editLink: true
---
# {{ $frontmatter.title }}

### 原因
不经过处理的JSON字串，就是一条长字串，不利于阅读：
```json
{ "name": "anran758", "avatar": "https://xxx", "detail": { "desc": "some description", "level": 2 } }
```

希望处理成格式化的形式：
```json
{
  "name": "anran758",
  "avatar": "https://xxx",
  "detail": {
    "desc": "some description",
    "level": 2
  }
}
```

###  JSON.strigify() api

JSON 有一个 ` JSON.strigify()` 的 api，用于将对象处理成JSON字串。

这个api接收三个参数：
第一个是需要序列化的对象；第二个参数是replacer，用以对属性转换和处理，由于我们不需要额外的处理，因此传入一个null；第三个参数则是空格索引的个数，封顶是10，0或不传则没有空格。

我们传入的数据:
```js
var userInfo = {name: 'anran758',github: 'https://github.com/anran758'};
var info = JSON.stringify(userInfo, null, 2);

console.log(info);
// "{↵  "name": "anran758",↵  "github": "https://github.com/anran758"↵}"
```

这样空格就传进去了。但是，html无法渲染空格，它会忽略掉，于是就需要用一个特别的标签来包裹。


### pre 和 code

HTML 中有两个标签可以展示源代码: `<pre> `和 `<code> `。

它们之间不同之处在于:

- `<pre>` 表示预定义格式文本，按照原文件中的编排，以等宽字体的形式展现出来，文本中的空白符（比如空格和换行符）都会显示出来。

- `<code>` 则是呈现一段计算机代码，它以浏览器的默认等宽字体显示，但并不一定会完整呈现原来的格式。

经过比对，pre更符合实际需求。

---
示例代码如下：

*js*
```js
var userInfo = {name: 'anran758',github: 'https://github.com/anran758'};
var info = JSON.stringify(userInfo, null, 2);

console.log(info);
```

*html*
```html
<span>
	<pre>{{info}}</pre>
</span>
```


### 参考资料
---
1. [js-将JSON数据格式输出至页面上](https://anran758.github.io/blog/2019/08/24/js-%E5%B0%86JSON%E6%95%B0%E6%8D%AE%E6%A0%BC%E5%BC%8F%E8%BE%93%E5%87%BA%E8%87%B3%E9%A1%B5%E9%9D%A2%E4%B8%8A/)