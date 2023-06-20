export default {
  title: 'Nic',
  description: 'JavaScript Notebook',
  appearance: true,//可以选择深浅主题
  ignoreDeadLinks: true,
  lastUpdated: true,//显示最近更新时间
  head:[
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  markdown: {
    theme: 'one-dark-pro',
    lineNumbers: true
  },
  themeConfig: {
    outline: 'deep',
    outlineTitle: '目录',
    lastUpdatedText: '最后更新于 ',
    siteTitle: "Nic's Tavern",
    // logo: 'https://blogpic-1308403500.file.myqcloud.com/avatar/small-head-king.jpg',
    logo: 'static/android-chrome-192x192.png',
    // algolia搜索
    // algolia: {
    //   apiId: 'CFOL320B5S',
    //   apiKey: 'cbc54468c9d0e14a93d01c5e318fad98',
    //   indexName: 'app',
    //   searchParameters: {
    //     facetFilters: ['tags:guide,api']
    //   }
    // },
    // 右上角导航
    nav: [
      // 下拉菜单
      {
        text: 'FRONTEND',
        items: [
          { text: 'JavaScript', link: '/javascript/' },
          { text: 'Vue', link: '/vue/001_dodo_v2' },
          { text: 'Uniapp', link: '/uniapp/' },
          { text: 'SQL', link: '/SQL/SQL_Murder_Mystery' },
          { text: '其他', link: '/tech_other/axios_basics' },
        ]
      },
      {
        text: 'BACKEND',
        items: [
          { text: 'Node.js', link: '/backend/Node.js/' },
        ]
      },
      { text: '其他文字', link: '/other/' },
      // { text: '杂记', link: '/mumblejumbles/' },
      { text: '关于我', link: '/about/' },
    ],
    // 侧边导航
    sidebar: {
      '/backend/Node.js/':[
        {
          text: 'Node.js 入门',
          collapsible: true,
          items: [
            { text: '1 - Introduction & Setup', link: '/backend/Node.js/01_Introduction_and_Setup' }, 
            { text: '2 - Node.js Basics', link: '/backend/Node.js/02_Node_js_Basics.md' }, 
            { text: '3 - Clients & Servers', link: '/backend/Node.js/03_Clients_and_Servers.md' },
            { text: '4 - NPM', link: '/backend/Node.js/04_NPM' },
            { text: '6 - Express Apps', link: '/backend/Node.js/06_Express_Apps' },
            { text: '7 - View Engines', link: '/backend/Node.js/07_View_Engines' },
            { text: '8 - Middleware', link: '/backend/Node.js/08_Middleware' },
            { text: '9 - MongoDB', link: '/backend/Node.js/09_MongoDB' },
            { text: '10 - Get, Post & Delete Requests', link: '/backend/Node.js/10_Get_Post_Delete_Requests' },
            { text: '11 - Express Router & MVC', link: '/backend/Node.js/11_Express_Router_MVC' },
          ]
        },
      ],
      '/javascript/':[
        {
          text: 'JavaScript高级程序设计 笔记',
          collapsible: true,
          items: [
            { text: 'HTML中的 JavaScript', link: '/javascript/js_4_notes/script_tag' }, 
            { text: '操作符', link: '/javascript/js_4_notes/operator' },     
          ]
        },
        {
          text: '其他',
          collapsible: true,
          items: [
            { text: 'codewars练习', link: '/javascript/other/codewars' }, 
            { text: '如何优雅地用JS创建包含0', link: '/javascript/other/js-create-number-array' }, 
            { text: 'JavaScript ES6 Module 模块导入/导出', link: '/javascript/other/JS-ES-Module' }, 
            { text: '如何浅合并一下 JavaScript 对象（其实希望深拷贝）', link: '/javascript/other/js-object-merge' }, 
            { text: '用简单的方式理解JavaScript Promise', link: '/javascript/other/js-promise' }, 
            { text: 'let & const 对比 var 的新特性', link: '/javascript/other/let-n-const' }, 
            { text: '力扣 oh Leetcode', link: '/javascript/other/my-miserable-leetcode' }, 
            { text: 'JavaScript 中 this 的绑定', link: '/javascript/other/this-and-context' }, 
            { text: 'ES6数组与对象的解构赋值', link: '/javascript/other/variable-destructuring' }, 

          ]
        },
      ],
      '/vue/':[
        {
          text: 'vue笔记',
          collapsible: true,
          items: [
            { text: 'Vue-Cli重写一个TO-DO APP', link: '/vue/001_dodo_v2' },
            { text: '用Vue实现多标签页面（tab栏）切换的两种方法', link: '002_/vue/tabs_with_vue' },
            { text: 'cloak的用法', link: '/vue/003_v-cloak' },
            { text: 'Vue 过渡动画效果', link: '/vue/004_vue_animations_transitions' }, 
            { text: 'Vue Proxy Getter Setter', link: '/vue/005_vue_proxy_getter_setter' },
            { text: '复习 Vue slot：插槽', link: '/vue/006_vue_slot' },
            { text: 'Vue emits 警告', link: '/vue/007_vue_warn_emits' },
            { text: '用 Vue 写一个天气 Web App', link: '/vue/008_vue_weather_app' },
            { text: 'Ant Design Vue Table 加一个合计行', link: '/vue/009_andtv_table_sum' },
            { text: '使用vue filters把数字变为两位小数', link: '/vue/010_vue_filter_fixed2' },
            { text: '把jeecg j-date改造成年份选择器', link: '/vue/011_j_date_year_selector' },
          ]
        },
      ],
      '/uniapp/':[
        {
          text: 'uniapp',
          collapsible: true,
          items: [
            { text: '（一）创建uniapp项目', link: '/uniapp/01_create_uniapp_proj' }, 
            { text: '（二）引入uni-ui', link: '/uniapp/02_import_uni_ui' }, 
            { text: '（三）图片/文件上传', link: '/uniapp/03_file_upload' }, 
            { text: '（四）路由传参', link: '/uniapp/04_emit_params' }, 
            { text: '（五）列表分页', link: '/uniapp/05_pagination' }, 
          ]
        },
        {
          text: '微信小程序',
          collapsible: true,
          items: [
            { text: '微信公众号获得用户信息过程', link: '/uniapp/h5_weixin_platform' }, 
          ]
        }
      ],
      '/SQL/':[
        {
          text: 'SQL Murder Mystery',
          collapsible: true,
          items: [
            { text: 'SQL Murder Mystery', link: '/SQL/SQL_Murder_Mystery' },
          ]
        },
        {
          text: 'Select Star SQL',
          collapsible: true,
          items: [
            { text: "Chapter 1 - Beazley's Last Statement", link: '/SQL/01_Select_Star_SQL' },
            { text: 'Chapter 2 - Claims of Innocence', link: '/SQL/02_Select_Star_SQL' },
            { text: 'Chapter 3 - The Long Tail', link: '/SQL/03_Select_Star_SQL' },
            { text: 'Chapter 4 - Execution Hiatuses', link: '/SQL/04_Select_Star_SQL' },
          ]
        }

      ],
      '/tech_other/':[
        {
          text: '其他',
          collapsible: true,
          items: [
            { text: '了解 axios', link: '/tech_other/axios_basics' }, 
            { text: '如何使用Netlify快速部署个人项目', link: '/tech_other/vue_netlify_deploy' }, 
            { text: 'Git使用笔记', link: '/tech_other/git_guide' }, 
            { text: 'Git拉取远程分支到本地的方法', link: '/tech_other/git_remote_branch' }, 
            { text: '好玩的JavaScrip动画框架——GSAP', link: '/tech_other/GSAP_intro' }, 
            { text: '2分钟创建一个简易Node.js服务器', link: '/tech_other/node_server' }, 
            { text: 'Node.js GET请求', link: '/tech_other/node_GET' }, 
            { text: 'Tech Daily 001', link: '/tech_other/tech_daily_001' }, 
            { text: '如何用腾讯云的储存对象(COS)结合CDN作图床', link: '/tech_other/Tencent_Cloud_COS_CDN' }, 
            { text: '如何在vscode 启动调试工具', link: '/tech_other/vscode_debugger' }, 
            { text: 'VSCode常用快捷键', link: '/tech_other/vscode_shortcuts' }, 
            { text: '打包利器Webpack和它基本配置', link: '/tech_other/webpack_basics' }, 
            { text: 'Node.js POST请求', link: '/tech_other/node_POST' }, 
            { text: 'TS基础学习', link: '/tech_other/ts-intro' },
            { text: 'flutter 已未读消息存本地', link: '/tech_other/flutter_notice_localStorage' }, 
          ]
        },
       
      ],
      
      '/other/':[
        {
          text: '目录',
          collapsible: true,
          items: [
            { text: '工具', link: '/other/my_tools' },
            { text: '养老保险怎么交，退休后能拿多少钱？', link: '/other/retire_pension' },
          ]
        },
      ],
      // '/mumblejumbles/':[
      //   {
      //     text: '杂记们',
      //     collapsible: true,
      //     items: [
      //       { text: '2022.10 National Holidays Diaries', link: '/mumblejumbles/2022-national-holidays' },
      //     ]
      //   },
      // ],
      '/tools/':[
        {
          text: '工具',
          items: [
            { text: '工具页', link: '/tools/' }, //
          ]
        },
      ]
    }
    ,
    // 底部
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Nekolas'
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    }
  }
}