export default {
  title: 'Nic',
  description: 'JavaScript Notebook',
  appearance: true,//可以选择深浅主题
  ignoreDeadLinks: true,
  lastUpdated: true,//显示最近更新时间
  markdown: {
    theme: 'one-dark-pro',
    lineNumbers: true
  },
  themeConfig: {
    outline: 'deep',
    outlineTitle: '目录',
    lastUpdatedText: '最后更新于 ',
    siteTitle: "Nic's Tavern",
    logo: 'https://blogpic-1308403500.file.myqcloud.com/avatar/small-head-king.jpg',
    // algolia搜索
    algolia: {
      appId: 'CFOL320B5S',
      apiKey: 'cbc54468c9d0e14a93d01c5e318fad98',
      indexName: 'nicopcat.github.io',
      // searchParameters: {
      //     facetFilters: ['tags:guide,api']
      // }
    },
    // 右上角导航
    nav: [
      { text: 'JavaScript', link: '/javascript/' },
      { text: '其他文章', link: '/other/' },
      { text: '工具', link: '/tools/' },

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
          text: '第二章',
          collapsible: true,
          items: [
            { text: '2. HTML中的 JavaScript', link: '/javascript/chap02/script-tag' }, //
          ]
        },
        {
          text: '第三章 语言基础',
          collapsible: true,
          items: [
            { text: '操作符', link: '/javascript/chap03/operator' }, // 去到test文件夹的index.md          
          ]
        },
      ],
      '/other/':[
        {
          text: '文章',
          collapsible: true,
          items: [
            { text: '养老保险怎么交，退休后能拿多少钱？', link: '/other/retire-pension' },
            { text: 'TS基础学习', link: '/other/ts-intro' },

          ]
        },
      ],
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