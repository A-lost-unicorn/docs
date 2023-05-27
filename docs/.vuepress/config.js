const headConf=require("./config/headConf");
const pluginsConf=require("./config/pluginsConf");
const navConf=require("./config/navConf");


module.exports = {
  base: "/docs/",
  title: "a lost unicorn",
  description: "🦄",
  head: headConf,
  plugins:pluginsConf,
  themeConfig: {
    lastUpdated: "更新时间",
    logo: "/assets/img/logo.png",
    nav: navConf,
  },
};
