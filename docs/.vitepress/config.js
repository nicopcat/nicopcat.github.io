export default {
  title: 'Nic',
  description: 'blog for everything (?)',
  appearance: true,//可以选择深浅主题
  ignoreDeadLinks: true,
  lastUpdated: true,//显示最近更新时间
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  markdown: {
    theme: 'one-dark-pro',
    lineNumbers: true
  },
  // public config
  themeConfig: {
    outline: 'deep',
    // outlineTitle: '目录',
    // lastUpdatedText: '最后更新于 ',
    siteTitle: "Nic's Tavern",
    // logo: 'https://blogpic-1308403500.file.myqcloud.com/avatar/small-head-king.jpg',
    logo: 'static/android-chrome-192x192.png',
    search: {
      provider: 'local'
    },
    // 底部
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Nekolas'
    },
    docFooter: {
      prev: 'PREVIOUS',
      next: 'NEXT'
    }
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      outlineTitle: 'catalog',
      lastUpdatedText: 'last edited at ',
      themeConfig: {
        outlineTitle: '目录',
        lastUpdatedText: '最后更新于 ',
        nav: [
          { text: 'home', link: '/en' },
          { text: 'about', link: '/en/about' },
        ],
        // 侧边导航
        sidebar: {
          '/en/home/FRONTEND/typescript/': [
            {
              text: 'TypeScript 笔记',
              collapsible: false,
              items: [
                { text: 'Object-Oriented Programming in TypeScript', link: '/zh/home/FRONTEND/typescript/Object-Oriented Programming in TypeScript.md' },
              ]
            },
          ],
        }
        ,
      }
    },
    zh: {
      label: '中文',
      lang: 'zh', // 可选，将作为 `lang` 属性添加到 `html` 标签中
      themeConfig: {
        outlineTitle: '目录',
        lastUpdatedText: '最后更新于 ',
        nav: [
          // 下拉菜单
          {
            text: 'FRONTEND',
            items: [
              // { text: 'TypeScript', link: '/zh/home/FRONTEND/typescript/' },
              { text: 'JavaScript', link: '/zh/home/FRONTEND/javascript/' },
              { text: 'Vue', link: '/zh/home/FRONTEND/vue/001_dodo_v2' },
              { text: 'React', link: '/zh/home/FRONTEND/react/react-tutorial/01~07_React_Basics' },
              { text: 'Uniapp', link: '/zh/home/FRONTEND/uniapp/' },
              { text: '其他', link: '/zh/home/tech_other/axios_basics' },
            ]
          },
          {
            text: 'BACKEND',
            items: [
              { text: 'Node.js', link: '/zh/home/BACKEND/Node.js/' },
              { text: 'SQL', link: '/zh/home/BACKEND/SQL/SQL_Murder_Mystery' },
            ]
          },
          { text: '其他文字', link: '/zh/home/other/' },
          // { text: '杂记', link: '/mumblejumbles/' },
          { text: '关于我', link: '/zh/about' },
        ],
        // 侧边导航
        sidebar: {
          '/zh/home/BACKEND/Node.js/': [
            {
              text: 'Node.js 入门',
              collapsible: true,
              items: [
                { text: '1 - Introduction & Setup', link: '/zh/home/BACKEND/Node.js/01_Introduction_and_Setup' },
                { text: '2 - Node.js Basics', link: '/zh/home/BACKEND/Node.js/02_Node_js_Basics.md' },
                { text: '3 - Clients & Servers', link: '/zh/home/BACKEND/Node.js/03_Clients_and_Servers.md' },
                { text: '4 - NPM', link: '/zh/home/BACKEND/Node.js/04_NPM' },
                { text: '6 - Express Apps', link: '/zh/home/BACKEND/Node.js/06_Express_Apps' },
                { text: '7 - View Engines', link: '/zh/home/BACKEND/Node.js/07_View_Engines' },
                { text: '8 - Middleware', link: '/zh/home/BACKEND/Node.js/08_Middleware' },
                { text: '9 - MongoDB', link: '/zh/home/BACKEND/Node.js/09_MongoDB' },
                { text: '10 - Post & Delete Requests', link: '/zh/home/BACKEND/Node.js/10_Get_Post_Delete_Requests' },
                { text: '11 - Express Router & MVC', link: '/zh/home/BACKEND/Node.js/11_Express_Router_MVC' },
                { text: '12 - 部署到 Vercel', link: '/zh/home/BACKEND/Node.js/12_Deploy_on_Vercel' },
              ]
            },
          ],
          '/zh/home/FRONTEND/typescript/': [
            {
              text: 'TypeScript 笔记',
              collapsible: false,
              items: [
                { text: 'Object-Oriented Programming in TypeScript', link: '/zh/home/FRONTEND/typescript/Object-Oriented Programming in TypeScript.md' },
              ]
            },
          ],
          '/zh/home/FRONTEND/javascript/': [
            // {
            //   text: 'JavaScript高级程序设计 笔记',
            //   collapsible: true,
            //   items: [
            //     { text: 'HTML中的 JavaScript', link: '/zh/home/FRONTEND/javascript/js_4_notes/script_tag' }, 
            //     { text: '操作符', link: '/zh/home/FRONTEND/javascript/js_4_notes/operator' },   
            //   ]
            // },
            {
              text: '其他',
              collapsible: true,
              items: [
                { text: 'codewars练习', link: '/zh/home/FRONTEND/javascript/other/codewars' },
                { text: '如何优雅地用JS创建包含0', link: '/zh/home/FRONTEND/javascript/other/js-create-number-array' },
                { text: 'JavaScript ES6 Module 模块导入/导出', link: '/zh/home/FRONTEND/javascript/other/JS-ES-Module' },
                { text: '如何浅合并一下 JavaScript 对象（其实希望深拷贝）', link: '/zh/home/FRONTEND/javascript/other/js-object-merge' },
                { text: '用简单的方式理解JavaScript Promise', link: '/zh/home/FRONTEND/javascript/other/js-promise' },
                { text: 'let & const 对比 var 的新特性', link: '/zh/home/FRONTEND/javascript/other/let-n-const' },
                { text: '力扣 oh Leetcode', link: '/zh/home/FRONTEND/javascript/other/my-miserable-leetcode' },
                { text: 'JavaScript 中 this 的绑定', link: '/zh/home/FRONTEND/javascript/other/this-and-context' },
                { text: 'ES6数组与对象的解构赋值', link: '/zh/home/FRONTEND/javascript/other/variable-destructuring' },
                { text: '如何美化JSON字串的格式', link: '/zh/home/FRONTEND/javascript/other/如何美化JSON字串的格式' },
              ]
            },
          ],
          '/zh/home/FRONTEND/vue/': [
            {
              text: 'vue笔记',
              collapsible: true,
              items: [
                // { text: 'Vue-Cli重写一个TO-DO APP', link: '/zh/home/FRONTEND/vue/001_dodo_v2' },
                // { text: '用Vue实现多标签页面（tab栏）切换的两种方法', link: '/zh/home/FRONTEND/vue/002_tabs_with_vue' },
                { text: 'cloak的用法', link: '/zh/home/FRONTEND/vue/003_v-cloak' },
                { text: 'Vue 过渡动画效果', link: '/zh/home/FRONTEND/vue/004_vue_animations_transitions' },
                { text: 'Vue Proxy Getter Setter', link: '/zh/home/FRONTEND/vue/005_vue_proxy_getter_setter' },
                // { text: '复习 Vue slot：插槽', link: '/zh/home/FRONTEND/vue/006_vue_slot' },
                { text: '用 Vue 写一个天气 Web App', link: '/zh/home/FRONTEND/vue/008_vue_weather_app' },
                { text: 'Ant Design Vue Table 加一个合计行', link: '/zh/home/FRONTEND/vue/009_andtv_table_sum' },
                { text: '使用vue filters把数字变为两位小数', link: '/zh/home/FRONTEND/vue/010_vue_filter_fixed2' },
                { text: '把jeecg j-date改造成年份选择器', link: '/zh/home/FRONTEND/vue/011_j_date_year_selector' },
                { text: '如何在element-ui的基础上自行分页', link: '/zh/home/FRONTEND/vue/012_如何在element-ui的基础上自行分页' },

              ]
            },
          ],
          '/zh/home/FRONTEND/react/': [
            {
              text: 'React Tutorial',
              collapsible: true,
              items: [
                { text: '1. React 基础', link: '/zh/home/FRONTEND/react/react-tutorial/01~07_React_Basics' },
                { text: '2. useState', link: '/zh/home/FRONTEND/react/react-tutorial/08_useState' },
                { text: '3. 循环列表', link: '/zh/home/FRONTEND/react/react-tutorial/10_Cycle_List' },
                { text: '4. Props_and_Filter', link: '/zh/home/FRONTEND/react/react-tutorial/11~13_Props_and_Filter' },
                { text: '5. useEffect_Hook', link: '/zh/home/FRONTEND/react/react-tutorial/14~17_useEffect_Hook' },
                { text: '6. 条件渲染', link: '/zh/home/FRONTEND/react/react-tutorial/18_Conditional_Render' },
                { text: '7. 处理请求错误', link: '/zh/home/FRONTEND/react/react-tutorial/19_Handling_Fetch_Errors' },
                { text: '8. 创建自定义Hook', link: '/zh/home/FRONTEND/react/react-tutorial/20_Making_a_Custom_Hook' },
                { text: '9. React 路由', link: '/zh/home/FRONTEND/react/react-tutorial/21~25_The_React_Router' },
                { text: '10. POST请求', link: '/zh/home/FRONTEND/react/react-tutorial/29_ Making_A_POST_Request' },
                { text: '11. 404错误页', link: '/zh/home/FRONTEND/react/react-tutorial/32_404_Page' },
              ]
            },
          ],
          '/zh/home/FRONTEND/uniapp/': [
            {
              text: 'uniapp',
              collapsible: true,
              items: [
                { text: '（一）创建uniapp项目', link: '/zh/home/FRONTEND/uniapp/01_create_uniapp_proj' },
                { text: '（二）引入uni-ui', link: '/zh/home/FRONTEND/uniapp/02_import_uni_ui' },
                { text: '（三）图片/文件上传', link: '/zh/home/FRONTEND/uniapp/03_file_upload' },
                { text: '（四）路由传参', link: '/zh/home/FRONTEND/uniapp/04_emit_params' },
                { text: '（五）列表分页', link: '/zh/home/FRONTEND/uniapp/05_pagination' },
              ]
            },
            {
              text: '微信小程序',
              collapsible: true,
              items: [
                { text: '微信公众号获得用户信息过程', link: '/zh/home/FRONTEND/uniapp/h5_weixin_platform' },
              ]
            }
          ],
          '/zh/home/BACKEND/SQL/': [
            {
              text: 'SQL Murder Mystery',
              collapsible: false,
              items: [
                { text: 'SQL Murder Mystery', link: '/zh/home/BACKEND/SQL/SQL_Murder_Mystery' },
              ]
            },
            {
              text: 'Select Star SQL',
              collapsible: true,
              items: [
                { text: "Chapter 1 - Beazley's Last Statement", link: '/zh/home/BACKEND/SQL/01_Select_Star_SQL' },
                { text: 'Chapter 2 - Claims of Innocence', link: '/zh/home/BACKEND/SQL/02_Select_Star_SQL' },
                { text: 'Chapter 3 - The Long Tail', link: '/zh/home/BACKEND/SQL/03_Select_Star_SQL' },
                { text: 'Chapter 4 - Execution Hiatuses', link: '/zh/home/BACKEND/SQL/04_Select_Star_SQL' },
              ]
            }

          ],
          '/zh/home/tech_other/': [
            {
              text: '其他',
              collapsible: true,
              items: [
                { text: '了解 axios', link: '/zh/home/tech_other/axios_basics' },
                { text: '如何使用Netlify快速部署个人项目', link: '/zh/home/tech_other/vue_netlify_deploy' },
                { text: 'Git使用笔记', link: '/zh/home/tech_other/git_guide' },
                { text: 'Git拉取远程分支到本地的方法', link: '/zh/home/tech_other/git_remote_branch' },
                { text: '好玩的JavaScrip动画框架——GSAP', link: '/zh/home/tech_other/GSAP_intro' },
                { text: '2分钟创建一个简易Node.js服务器', link: '/zh/home/tech_other/node_server' },
                { text: 'Node.js GET请求', link: '/zh/home/tech_other/node_GET' },
                { text: 'Tech Daily 001', link: '/zh/home/tech_other/tech_daily_001' },
                { text: '如何用腾讯云的储存对象(COS)结合CDN作图床', link: '/zh/home/tech_other/Tencent_Cloud_COS_CDN' },
                { text: '如何在vscode 启动调试工具', link: '/zh/home/tech_other/vscode_debugger' },
                { text: 'VSCode常用快捷键', link: '/zh/home/tech_other/vscode_shortcuts' },
                { text: '打包利器Webpack和它基本配置', link: '/zh/home/tech_other/webpack_basics' },
                { text: 'Node.js POST请求', link: '/zh/home/tech_other/node_POST' },
                { text: 'TS基础学习', link: '/zh/home/tech_other/ts-intro' },
                { text: 'flutter 已未读消息存本地', link: '/zh/home/tech_other/flutter_notice_localStorage' },

              ]
            },

          ],
          '/zh/home/other/': [
            {
              text: '目录',
              collapsible: true,
              items: [
                { text: '工具', link: '/zh/home/other/my_tools' },
                { text: '养老保险怎么交，退休后能拿多少钱？', link: '/zh/home/other/retire_pension' },
              ]
            },
          ],
        }
        ,
      }
    }
  },

}