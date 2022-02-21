const nav = require("./nav.js");
const plugins = require("./plugins.js");

module.exports = {
  lang: 'zh-CN',
  title: '阮中楠的RPGMV开发笔记',
  description: '整合RMMV生态，从现在开始',

  // https://blog.csdn.net/qq_28584685/article/details/88017069
  base: "/rpgmv-dev-notes/",

  head: [
    // 设置 favicon.ico，注意图片放在 public 文件夹下
    ['link', {
      rel: 'icon',
      href: 'little-alice-icon.png'
    }]
  ],

  // 默认主题
  // theme: '@vuepress/theme-default',

  // reco主题
  theme: 'reco',

  themeConfig: {
    // 目前可以导入图片 但是自己的网站不提供，可以为drillpage增加logo配置
    // logo: '/ruanCat-logo.jpg',

    nav,
    sidebar: 'auto',
    lastUpdated: '上一次更新',
    smoothScroll: true,
    /**
     * https: //vuepress-theme-reco.recoluan.com/views/1.x/sidebar.html
     * 在所有页面中启用自动生成子侧边栏， 原 sidebar 仍然兼容
     */
    subSidebar: 'auto',
    sidebarDepth: 2,

    sidebar: {
      '/drill-api/2.6.1/': [

        {
          title: 'default-config',
          // path: '/default-config/',
          collapsable: true,
          children: [
            // 暂时无法显示 因为文件暂时隐藏了
            // 'abstract',
            // 'syntax',
            // 'customStyleAndScript'

            // default-config/ 成功
            'default-config/abstract',
            'default-config/syntax',
            'default-config/customStyleAndScript'
          ]
        },

        {
          title: '基础',
          collapsable: true,
          children: [
            '',
            'installUse',
            'blog',
            'frontMatter'
          ]
        },

        {
          title: '进阶',
          collapsable: true,
          children: [
            'timeline',
            'valine',
            'password',
            'configJs',
            'home',
            'notfound',
            'mode',
            'local',
            'codeTheme',
            'sidebar'
          ]
        },

        // {
        //   title: '默认主题配置',
        //   collapsable: true,
        //   children: [
        //     'abstract',
        //     'syntax',
        //     'customStyleAndScript'
        //   ]
        // },

        {
          title: '其他',
          collapsable: true,
          children: [
            'updatetoone',
            'recommend'
          ]
        }
      ],
    },

    // 全局作者姓名配置
    author: '阮中楠',

    valineConfig: {
      appId: 'fOpA1EMy75xXVnyBBfNopgul-9Nh9j0Va',
      appKey: '1hzgeHXNTCtDNQ9XLkPwAlN8',
      // 不显示评论 不提供评论 只使用浏览量显示功能
      showComment: false
    },

    // 正在学习配置
    // algolia: {
    //   apiKey: '00b93f0976fee99faecdc1c6165756b5',
    //   indexName: 'RPGMV-dev-notes',
    //   // 如果 Algolia 没有为你提供 `appId` ，使用 `BH4D9OD16A` 或者移除该配置项
    //   appId: 'N62BQRC6XH',
    // },

  },

  // 代码行数配置
  markdown: {
    lineNumbers: true
  },

  // 全部的插件配置
  plugins,
}