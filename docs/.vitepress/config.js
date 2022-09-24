export default {
  title: 'Vitepress',
  description: 'Just playing around.',
  base:'/nicopcat.github.io',
  themeConfig: {
    siteTitle: 'My Custom Title',
    logo: 'https://blogpic-1308403500.file.myqcloud.com/avatar/small-head-king.jpg',
    // 右上角导航
    nav: [
      { text: 'Test', link: '/test/test1' },
      { text: 'Configs', link: '/configs' },
      { text: 'Changelog', link: 'https://github.com/...' },
      {
        text: 'Dropdown Menu',
        items: [
          {
            text:'test222',
            items: [
              { text: 'Item A', link: '/item-1' },
              { text: 'Item B', link: '/item-2' },
              { text: 'Item C', link: '/item-3' }
            ]
          }
        ]
      }
    ],
    sidebar: [
      {
        text: 'Section Title A',
        items: [
          { text: 'Item A', link: '/test/' }, // 去到test文件夹的index.md
          { text: 'Item B', link: '/item-b' },
        
        ]
      },
      {
        text: 'Section Title B',
        items: [
          { text: 'Item C', link: '/item-c' },
          { text: 'Item D', link: '/item-d' },
          
        ]
      }
    ]
  }
}