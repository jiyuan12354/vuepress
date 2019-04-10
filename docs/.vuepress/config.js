module.exports = {
  title: '母體科技',
  description: '幫妳做您想做的事',
  base: '/',
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
    sidebarDepth: 3,
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
        label: '繁體中文',
        selectText: '選擇語言',
        nav: [
          { text: '主頁', link: '/' },
          { text: '行業', link: '/hangye/' },
          { text: '為何選擇我們', link: '/reason/' },
          { text: '聯系我們', link: '/request-a-quote/' },
        ],

        sidebar: {
          '/hangye/': [
            {
              title: '解決方案',
              collapsable: false,
              children: [
                '/hangye/transport.md',
                '/hangye/community.md'
              ]
            },
          ],
        }
      }
    },
  },
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '母體科技',
      description: '與我們壹起創造妳的專屬應用程序',
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