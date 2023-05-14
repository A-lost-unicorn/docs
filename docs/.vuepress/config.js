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
  ],
  themeConfig: {
    lastUpdated: "更新时间",
    logo: "/assets/img/logo.png",
    nav: [
      { text: "首页", link: "/" },
      { text: "算法", link: "/data_structure/" },
      { text: '关于我', link: '/about.md' },
      { text: "我的GitHub", link: "https://github.com/A-lost-unicorn" },
    ]
  },
};
