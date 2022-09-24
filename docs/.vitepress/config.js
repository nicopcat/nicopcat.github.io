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
    // 右上角导航
    nav: [
      { text: 'JavaScript', link: '/javascript/' },
      { text: '空菜单', link: '/configs' },
      { text: '还是空菜单', link: 'https://github.com/...' },
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
    sidebar: [
      {
        text: '第一节 语言基础',
        collapsible: true,
        items: [
          { text: '操作符', link: '/javascript/operator' }, // 去到test文件夹的index.md
          { text: 'Item B', link: '/item-b' },
        
        ]
      },
      {
        text: 'Section Title B',
        collapsible: true,
        items: [
          { text: 'Item C', link: '/item-c' },
          { text: 'Item D', link: '/item-d' },
          
        ]
      }
    ],
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