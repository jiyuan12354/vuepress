module.exports = {
  title: '母体科技',
  description: '帮你做你想做的事',
  base: '/muti/',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico'
      }
    ]
  ],
  themeConfig: {
    // navbar: false,
    nav: [
      { text: '主页', link: '/' },
      { text: '行业', link: '/hangye/' },
      { text: '为何选择我们', link: '/reason/' },
      { text: '5G时代', link: '/5G/' },
      { text: '大数据', link: '/big-data/' },
      // { text: '大数据', link: 'https://google.com' },
    ],
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Industry', link: '/hangye/' },
          { text: 'Why Choose Us', link: '/reason/' },
          { text: '5G', link: '/5G/' },
          { text: 'Big Data', link: '/big-data/' },
        ],
      },
      '/zh/': {
        label: '简体中文',
        selectText: '选择语言',
        nav: [
          { text: '主页', link: '/zh/' },
          { text: '行业', link: '/zh//hangye/' },
          { text: '为何选择我们', link: '/zh//reason/' },
          { text: '5G时代', link: '/zh//5G/' },
          { text: '大数据', link: '/zh//big-data/' },
        ],
      }
    },
    locales: {
      '/': {
        lang: 'en-US',
        title: 'Mother Tech',
        description: 'Join us!'
      },
      '/zh/': {
        lang: 'zh-CN',
        title: '母体科技',
        description: '与我们一起创造你的专属应用程序',
      }
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@public': './public'
      }
    }
  },
  ga: 'UA-109340118-1'
}