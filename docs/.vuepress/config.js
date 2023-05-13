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
      { text: "Guide", link: "/about" },
      {
        text: "文章",
        items: [
          { text: '关于我', link: 'about.md' },
          { text: '关于我2', link: 'about1.md'}
        ],
      },
      { text: "我的GitHub", link: "https://github.com/A-lost-unicorn" },
    ],
    sidebar: ["", "about", "about1"],
  },
};
