const moment = require("moment");

moment.locale("zh-cn");
module.exports = [
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
  ["@vuepress/back-to-top"],
  ['@vuepress/nprogress'],
  [
    "@vuepress/google-analytics",
    {
      ga: "UA-269980562-1", // UA-00000000-0
    },
  ],
  [
    "@vuepress/medium-zoom",
    {
      selector: "img.custom",
    },
  ],
  [
    "@vssue/vuepress-plugin-vssue",
    {
      // 设置 `platform` 而不是 `api`
      platform: "github-v4",

      // 其他的 Vssue 配置
      owner: "A-lost-unicorn",
      repo: "docs",
      clientId: "42c134efccf7eab66abc",
      clientSecret: "e13fd05e5d069b741ddd03c02fd28abb5c02c1cb",
      autoCreateIssue: true,
    },
  ],
  // [
  //   "music-bar",
  //   {
  //     // playList: [],
  //     platform: [
  //       {
  //         name: "music.163.com",
  //         songIDs:[27483202,27483201]
  //         // playListIDs: ["4909779787"]
  //       }
  //     ],
  //     timeOut:2000,
  //     firstClickPlay:true
  //   }
  // ]
];
