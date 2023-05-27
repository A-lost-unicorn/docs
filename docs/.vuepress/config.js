const moment = require("moment");
moment.locale("zh-cn");
module.exports = {
  base: "/docs/",
  title: "a lost unicorn",
  description: "🦄",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["meta", { name: "author", content: "a lost unicorn" }],
    ["meta", { name: "keywords", content: "a lost unicorn,vuepress" }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '\images\icons\icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '\images\icons\icon-152x152.png', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '\images\icons\icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  plugins: [
    [
      "@vuepress/last-updated",
      {
        transformer: (timestamp) => {
          return moment(timestamp).format("LL");
        },
      },
    ],
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: {
          message: "发现有新内容",
          buttonText: "刷新",
        },
      },
    ],
    ['@vuepress/back-to-top'],
    // [ '@vuepress/google-analytics',
    // {
    //   'ga': '378835474' // UA-00000000-0
    // }
    // ]
  ],
  themeConfig: {
    lastUpdated: "更新时间",
    logo: "/assets/img/logo.png",
    nav: [
      { text: "首页", link: "/" },
      { text: "算法", link: "/data_structure/" },
      { text: "劝学", link: "/quan.md" },
      { text: "关于我", link: "/about.md" },
      { text: "GitHub", link: "https://github.com/" },
    ],
  },
};
