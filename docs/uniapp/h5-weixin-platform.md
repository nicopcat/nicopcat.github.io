---
layout: doc
title: uniapp开发：微信公众号获得用户信息过程
---

# uniapp 开发：微信公众号获得用户信息过程

从上一个项目，学到了如何从小程序接口获取用户信息以及用户手机号码。

而同是微信的产品，微信公众号就没那么客气，不仅获取方式不同，而且手机号也不可以直接获取了。

## 网页授权获取 code

公众号网页授权文档：https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_webpage_authorization.html

想要获得用户授权，大概流程是这样的：

👇 用户同意授权，获取 code  
👉 code 换取 access_token 和 openid  
👉 openid 向后台换取 token

首先，要获得 code 需要以下步骤：

> 在确保微信公众账号拥有授权作用域（scope 参数）的权限的前提下（已认证服务号，默认拥有 scope 参数中的 snsapi_base 和 snsapi_userinfo 权限），引导关注者打开如下页面：

> https://open.weixin.qq.com/connect/oauth2/authorize?appid=APPID&redirect_uri=REDIRECT_URI&response_type=code&scope=SCOPE&state=STATE#wechat_redirect

这段话有几个点：

1. 该微信公众号**已认证**

2. 该微信公众号默认拥有 scope 参数中的 snsapi_base 和 snsapi_userinfo **权限**。这个大概需要在后台设置。

3. 用户需要**关注**这个公众号

4. 点开以下（页面）**链接**

以下是链接的参数说明：  
参数：

| 参数             | 是否必须 | 说明                                                                                                           |
| ---------------- | -------- | -------------------------------------------------------------------------------------------------------------- |
| appid            | 是       | 公众号的唯一标识                                                                                               |
| redirect_uri     | 是       | 授权后重定向的回调链接地址， 请使用 urlEncode 对链接进行处理                                                   |
| response_type    | 是       | 返回类型，请填写                                                                                               |
| scope            | 是       | snsapi_base：静默授权，获取用户 openid； snsapi_userinfo：弹出授权页面，可获一系列信息                         |
| state            | 否       | 重定向后会带上 state 参数，开发者可以填写 a-zA-Z0-9 的参数值，最多 128 字节                                    |
| #wechat_redirect | 是       | 无论直接打开还是做页面 302 重定向时候，必须带此参数                                                            |
| forcePopup       | 否       | 强制此次授权需要用户弹窗确认；默认为 false；需要注意的是，若用户命中了特殊场景下的静默授权逻辑，则此参数不生效 |

主要的几个参数：

### 坑 1： 非微信环境无法访问

本地调试，也就是非微信环境下，访问以上链接或产生报错：“请在微信客户端打开链接“

![weixin-plz](https://segmentfault.com/img/bVSc27?w=1242&h=2208)

就很讨厌。

解决办法之一，就是使用**微信开发者工具**，在”公众号网页项目“中打开运行的地址。

### 坑 2：redirect_uri 参数错误

好，现在是处在微信环境了，点开链接，接着报错“redirect_uri 参数错误”。

网页版看不出是什么问题，用手机点开链接，得知是因为公主号授权的域名跟前端提供的 redirect_uri 所指向的页面的域名不一致。

调整一致后，登陆成功，弹出用户授权的弹框。

### 坑 3：跳转到域名后，跳不回本地了

目前还处在开发阶段，所以用的是本地跑的服务器地址，而公众号绑定的生产环境的域名。

如果是测试号，可以绑定 ip 和域名，不是测试号就只能用正式域名，正是域名和本地 host 不一致，没办法跳转回来。

解决方法：修改 hosts 文件，将本地跑的服务器地址与域名做一个映射。

[https://juejin.cn/post/6844903902228250638](https://juejin.cn/post/6844903902228250638)

（未完待续）
