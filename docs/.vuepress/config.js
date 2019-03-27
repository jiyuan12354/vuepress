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
    homeBackgroundUrl: '/homeBackground.jpg',
    locales: {
      '/en/': {
        label: 'English',
        selectText: 'Languages',
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Industry', link: '/en/hangye/' },
          { text: 'Why Us', link: '/en/reason/' },
          { text: 'Contact Us', link: '/en/request-a-quote/' },
        ],
      },
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        nav: [
          { text: '主页', link: '/' },
          { text: '行业', link: '/hangye/' },
          { text: '为何选择我们', link: '/reason/' },
          { text: '联系我们', link: '/request-a-quote/' },
        ],
      }
    },
  },
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '母体科技',
      description: '与我们一起创造你的专属应用程序',
    },
    '/en/': {
      lang: 'en-US',
      title: 'Mother Tech',
      description: 'Join us!'
    }
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