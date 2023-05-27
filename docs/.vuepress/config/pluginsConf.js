const moment = require("moment");

moment.locale("zh-cn");
module.exports=  [
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
  ]