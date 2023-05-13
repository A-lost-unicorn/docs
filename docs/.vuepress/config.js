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
      { text: "Home", link: "/" },
      { text: "Guide", link: "/about" },
      {
        text: "Languages",
        items: [
          {
            text: "Group1",
            items: [
              { text: "Home", link: "/" },
              { text: "Guide", link: "/about" },
            ],
          },
          {
            text: "Group2",
            items: [
              { text: "Home", link: "/" },
              { text: "Guide", link: "/about" },
            ],
          },
        ],
      },
      { text: "External", link: "https://google.com" },
    ],
    sidebar: ["", "about", "about1"],
  },
};
