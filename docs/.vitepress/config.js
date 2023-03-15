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
      {
        text: '前端',
        items: [
          { text: 'JavaScript', link: '/javascript/' },
          { text: 'Vue', link: '/vue/dodo_v2' },
          { text: 'Uniapp', link: '/uniapp/' },
          { text: '其他', link: '/tech_other/axios_basics' },
        ]
      },
      { text: '其他文字', link: '/other/' },
      // { text: '杂记', link: '/mumblejumbles/' },
      { text: '关于我', link: '/about/' },

      // {
      //   text: 'Dropdown Menu',
      //   items: [
      //     {
      //       text:'test222',
      //       items: [
      //         { text: 'Item A', link: '/item-1' },
      //         { text: 'Item B', link: '/item-2' },
      //         { text: 'Item C', link: '/item-3' }
      //       ]
      //     }
      //   ]
      // }
    ],
    // 侧边导航
    sidebar: {
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
            { text: 'Vue-Cli重写一个TO-DO APP', link: '/vue/dodo_v2' },
            { text: '用Vue实现多标签页面（tab栏）切换的两种方法', link: '/vue/tabs_with_vue' },       
            { text: 'cloak的用法', link: '/vue/v-cloak' },       
            { text: 'Vue 过渡动画效果', link: '/vue/vue_animations_transitions' },           
            { text: 'Vue Proxy Getter Setter', link: '/vue/vue_proxy_getter_setter' },       
            { text: '复习 Vue slot：插槽', link: '/vue/vue_slot' },       
            { text: 'Vue emits 警告', link: '/vue/vue_warn_emits' },       
            { text: '用 Vue 写一个天气 Web App', link: '/vue/vue_weather_app' },       

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
            { text: 'uniapp 开发：微信公众号获得用户信息过程', link: '/uniapp/h5_weixin_platform' }, 
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
          ]
        },
        {
          text: 'SQL',
          collapsible: true,
          items: [
            { text: 'SQL Murder Mystery', link: '/tech_other/SQL_Murder_Mystery' },
            { text: 'Select Star SQL 01', link: '/tech_other/Select_Star_SQL_Chapter01' },
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