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
    smoothScroll: true,
    lastUpdated: "更新时间",
    logo: "/assets/img/logo.png",
    nav: navConf,
    sidebar:[
      '/data_structure/',
      {
      // '/data_structure/': [
      //   '',  /*data_structure*/
      //   ['day1',''] /*data_structure/day1.html*/
      // ]
      title:'数组',
      path:'/data_structure/Array/',
      collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/data_structure/Array/binarySearch',
          '/data_structure/Array/removeElements',
          '/data_structure/Array/squareOfOrderedArray',
          '/data_structure/Array/theSmallestSubarray'
        ]
  },
]
  },
  markdown: {
    lineNumbers: true
  }
};
