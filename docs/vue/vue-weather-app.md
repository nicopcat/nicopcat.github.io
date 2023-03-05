---
layout: doc
title: 用 Vue 写一个天气 Web App
---
# 用 Vue 写一个天气 Web App
在油管看到一个用Vue-cli 3写天气App的视频，非常简单易上手，界面也很好看，之前也没用过vue-cli 3写+打包应用，就打算跟着做练练手。

项目地址：
https://www.niqks.tk/weather-app/

油管地址：
https://www.youtube.com/watch?v=JLc-hWsPTUY&ab_channel=TylerPotts

## 1. 前提
安装这些东西：
- npm/yarn
- node.js
- git
## 2. Vue项目初始化
### 2.1 安装Vue-cli脚手架
首先在硬盘的某块区域，创建`weather-app`文件夹，存放Vue项目
```
cd weather-app
npm install -g @vue/cli
```

安装完毕提示：
```
 Your connection to the default npm registry seems to be slow.
 Use https://registry.npm.taobao.org for faster installation? Yes
```
Yes, 选择淘宝镜像加速


### 2.2 创建Vue项目
进到项目文件夹，利用命令创建项目名称，
```
vue create weather-app
```
```
? Please pick a preset: (Use arrow keys)     
> no1 ([Vue 3] dart-sass, babel, typescript) 
  Default ([Vue 2] babel, eslint) 
  Default (Vue 3) ([Vue 3] babel, eslint)    
  Manually select features
```
选择 Default (Vue 3)
### 2.3 运行serve预览
```
$ cd weather-app
$ npm run serve
```
在浏览器打开端口地址，就可以预览了

### 2.4 天气库 API
API地址： [OpenWeather](https://openweathermap.org/)

## 3. 代码
### 3.1 HTML结构

<details>
<summary>展开</summary>

```html
<template>
  <div id="app" :class="warmCold">
    <main>
      <div class="search-box">
        <input
          type="text"
          class="search-bar"
          placeholder="search..."
          v-model="query"
          @keydown.enter="getWeather"
        />
      </div>

      <div class="weather-wrap">
        <div class="location-box">
          <div class="location" v-if="weather.main != undefined">
            {{ weather.name }}, {{ weather.sys.country }}
          </div>
          <div class="date">{{ dateBuilder() }}</div>
        </div>

        <div class="weather-box" v-if="weather.main != undefined">
          <div class="temp">{{ Math.round(weather.main.temp) }}℃</div>
          <div class="weather">{{ weather.weather[0].description }}</div>
        </div>
      </div>
    </main>
  </div>
</template>
```
</details>

### 3.2 CSS样式

<details>
<summary>展开</summary>

```css
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "montserrat", sans-serif;
  }

  #app {
    background-image: url("assets/cold-bg.jpg");
    background-size: cover;
    background-position: center;
    transition: 0.4s;
  }

  #app .warm {
    background-image: url("assets/warm-bg.jpg");
    background-size: cover;
    background-position: center;
    transition: 0.4s;
  }

  main {
    min-height: 100vh;
    padding: 35px;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.25),
      rgba(0, 0, 0, 0.25)
    );
  }

  .search-box {
    width: 100%;
    margin-bottom: 5px;
  }

  .search-box .search-bar {
    display: block;
    width: 100%;
    padding: 15px;
    color: #313131;
    font-size: 20px;
    appearance: none;
    border: none;
    outline: none;
    background: none;

    background-color: rgba(252, 252, 252, 0.75);
    border-radius: 8px;
    transition: 0.4s;

    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  }

  .search-box .search-bar:focus {
    background-color: rgba(252, 252, 252, 0.75);
    box-shadow: 0px 0px 18px rgba(0, 0, 0, 0.25);
  }

  .location-box {
    margin-top: 20px;
    color: #fff;
    text-align: center;
  }

  .location-box .location {
    font-size: 40px;
    margin-top: 20px;
    text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
  }

  .location-box .date {
    margin-top: 20px;
    font-size: 20px;
    font-style: italic;
    font-weight: 200;
  }

  .weather-box {
    color: #fff;
    text-align: center;
  }

  .weather-box .temp {
    display: inline-block;
    margin-top: 20px;
    font-size: 100px;
    font-weight: 600;
    text-shadow: 2px 6px rgba(0, 0, 0, 0.25);
    background-color: rgba(255, 255, 255, 0.25);
    padding: 10px;
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    box-shadow: 5px 5px rgba(0, 0, 0, 0.15);
  }

  .weather-box .weather {
    margin-top: 20px;
    margin-top: 20px;
    font-size: 38px;
    font-weight: 600;
    text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
    font-style: italic;
  }
```
</details>


### 3.3 Script

视频中小哥用的是 fetch 获得后台数据，但把他的代码照搬下来也并没有成功，于是打算转用axios。~~但axios这里搞了很久！~~

#### 3.3.1 axios 下载和引入

在项目根目录安装axios
```
npm install --save vue-axios
```

App.vue下添加
```
import axios from "axios";
```

data中配置：
```javascript
  data() {
    return {
      api_key: "",  //从openweathermap.org 获取 
      url_base: "http://api.openweathermap.org/data/2.5/weather?q=",
      query: "",  //查询城市
      weather: {},  //储存天气
    };
```

在method中写查询天气的函数：
```javascript
getWeather() {
    var that = this;
    axios(
      //'units=metric' 参数表示摄氏度, 默认或写'units=imperial'为华氏度
      that.url_base + that.query + "&units=metric" + "&appid=" + that.api_key
    )
      .then((response) => {
        console.log(response.data, "success"); // 成功的返回
      })
      .catch((error) => console.log(error, "error")); // 失败的返回
```
#### 3.3.2 完整代码

<details>
<summary>展开</summary>

``` js
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      api_key: "a6ef943e9d2c87e6398de3dedfc354c5",
      url_base: "http://api.openweathermap.org/data/2.5/weather?q=",
      query: "",
      weather: {},
    };
  },
  methods: {
    // api.openweathermap.org/data/2.5/weather?q={city name}&units=metric&appid={API key}
    getWeather() {
      var that = this;
      axios(
        that.url_base + that.query + "&units=metric" + "&appid=" + that.api_key
      )
        .then((response) => {
          console.log(response.data, "success"); // 成功的返回
          that.weather = response.data;
        })
        .catch((error) => console.log(error, "error")); // 失败的返回
    },
    getDefaultWeather() {
      var that = this;
      axios(
        that.url_base + "liuzhou" + "&units=metric" + "&appid=" + that.api_key
      )
        .then((response) => {
          console.log(response.data, "success"); // 成功的返回
          that.weather = response.data;
        })
        .catch((error) => console.log(error, "error")); // 失败的返回
    },
    dateBuilder() {
      let d = new Date();
      d.getFullYear();
      d.getMonth(); // 获取当前月份(0-11,0代表1月)
      d.getDate(); // 获取当前日(1-31)
      let year = d.getFullYear();
      let months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
      let month = months[d.getMonth()];
      let date = d.getDate();

      let day = d.getDate();

      return year + "年" + month + "月" + date + "日";
    },
  },
  computed: {
    warmCold() {
      return this.weather.main != undefined && this.weather.main.temp > 15
        ? "warm"
        : "";
    },
  },
  created() {
    //自动加载indexs方法
    this.getDefaultWeather();
  },
};

```
</details>


## 4. 打包部署到 Github 上
### 4.1 打包
官方对 vue-cli-service build （打包）说明：

> vue-cli-service build 会在 dist/ 目录产生一个可用于生产环境的包，带有 JS/CSS/HTML 的压缩，和为更好的缓存而做的自动的 vendor chunk splitting。它的 chunk manifest 会内联在 HTML 里。

在根目录运行指令：
```
npm run build
```
这时可以在根目录中看到一个名为`dist`的文件夹。

### 4.2 部署到Github
Vue Cli 3 文档有教如何部署在多平台上。（这里记录部署到Github的步骤）
地址：https://cli.vuejs.org/zh/guide/deployment.html#github-pages

**步骤**
1. 在Github上新增一个`repository`，名字为`weather-app`
2. 创建好后cd weather-app 进入文件夹，输入第一堆command line：
    ```
    echo "# test" >> README.md
    git init
    git add README.md
    git commit -m "first commit"
    git branch -M main
    git remote add origin https://github.com/nicopcat/test.git
    git push -u origin main
    ```

3. 添加`vue.config.js`文件
自己在根目录里创建了一个`vue.config.js`文件，在里面添加如下内容：
      ```
      module.exports = {
        publicPath: process.env.NODE_ENV === 'production'
          ? '/my-project/'
          : '/'
      }
      ```
    `my-project` 即我的 `weather-app`

4. 在项目目录下，创建内容如下的 `deploy.sh` 文件
    ```
    #!/usr/bin/env sh

    # 当发生错误时中止脚本
    set -e

    # 构建
    npm run build

    # cd 到构建输出的目录下 
    cd dist

    # 部署到自定义域域名
    # echo 'www.example.com' > CNAME

    git init
    git add -A
    git commit -m 'deploy'

    # 部署到 https://<USERNAME>.github.io
    # git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

    # 部署到 https://<USERNAME>.github.io/<REPO>
    # git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

    cd -
    ```
其中，`git@github.com:<USERNAME>/<REPO>.git` 需要替换成自己仓库的地址哦

5. 用`Git Bash`在根目录，输入部署指令：
    ```
    sh deploy.sh
    ```
刷新Github会发现多了一个gh-pages的分支，打包的`dist`文件夹就放在这里

6. 进入该分支的Github Pages，选择Brach:gh-pages然后save，就可以访问了。

### 4.3 更新
1. 先更新master分支
```
git add .
git commit -m".."
git push
```

2. 再用git bash执行 sh deploy.sh，更新gh-pages部分

参考文档：
https://ithelp.ithome.com.tw/articles/10237170


## 5. 踩坑
### 5.1 axios 请求到的地址前面带了localhost:8080

之前`data`配置中的`url_base`，写的是`"http://api.openweathermap.org/data/2.5/weather?q="`，
**返回的地址是带localhost:8080 的地址** 😅
![20220128182036](https://blogpic-1308403500.cos.ap-shanghai.myqcloud.com/markdown/20220128182036.png)

在网上找了几篇文章，发现是**绝对地址**和**相对地址**的问题。如果请求的url地址不带`https://` ，就会成为相对地址，所以解决方案就是加上它。

### 5.2 git报错：无 github 访问权限
在连接github时，发生了无权限的问题。
具体报错为 `"Please make sure you have the correct access rights and the repository exists."`
多亏了大大文章解决了问题，最后是通过`在Github账号中添加一个新生成的SSH Key`搞定的

参考文章：https://blog.csdn.net/jingtingfengguo/article/details/51892864


<!-- Vue-如何使用axios实现同步请求嵌套方法
https://blog.csdn.net/qq_43528934/article/details/121656858?utm_medium=distribute.pc_aggpage_search_result.none-task-blog-2~aggregatepage~first_rank_ecpm_v1~rank_v31_ecpm-1-121656858.pc_agg_new_rank&utm_term=axios%E5%B5%8C%E5%A5%97%E5%A4%9A%E5%B1%82%E8%AF%B7%E6%B1%82&spm=1000.2123.3001.4430 -->


