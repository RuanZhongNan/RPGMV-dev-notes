(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{676:function(e,s,t){"use strict";t.r(s);var r=t(8),v=Object(r.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"作者对于rmmv的工作目标-rmmv开发待办"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#作者对于rmmv的工作目标-rmmv开发待办"}},[e._v("#")]),e._v(" 作者对于rmmv的工作目标（rmmv开发待办）")]),e._v(" "),t("h3",{attrs:{id:"drill-page图片层级调整实验"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#drill-page图片层级调整实验"}},[e._v("#")]),e._v(" drill page图片层级调整实验")]),e._v(" "),t("p",[e._v("重新考虑静态资源文件与"),t("code",[e._v("md")]),e._v("文件的组织层级，不一定放在同一个文件夹下，而是在"),t("code",[e._v("\\docs\\.vuepress\\public\\img")]),e._v("内。因为图片"),t("code",[e._v("id")]),e._v("不更改")]),e._v(" "),t("h4",{attrs:{id:"实现方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实现方式"}},[e._v("#")]),e._v(" 实现方式")]),e._v(" "),t("p",[e._v("1.1： 设计pandoc命令生成的文件路径名。\n1.2： 设计全局字符串替换的规则。\n1.3： 设计路由自动生成的规则。设计依赖于文件夹路径的路由名称。处理拼音中文名的路由配置。查询vdoing的路由配置写法。\n未来期望情况：\n2： 提供公共的图片集，不做img图片的分仓库管理。未来再考虑自动化上传img图片与md引用路径的绝对替换。")]),e._v(" "),t("h3",{attrs:{id:"使用ts模块化rmmv-实现一个cli"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用ts模块化rmmv-实现一个cli"}},[e._v("#")]),e._v(" 使用ts模块化rmmv，实现一个cli")]),e._v(" "),t("ul",[t("li",[e._v("让webpack管理，运行，打包一个小规模的demo")]),e._v(" "),t("li",[e._v("让这个小规模的demo迁移到vue-cli内，将配置迁移，缩减至‘vue.config.js’内")]),e._v(" "),t("li",[e._v("模块化rmmv，迁移至vue-cli内。")]),e._v(" "),t("li",[e._v("标记，推广为‘rmmv-cli’")]),e._v(" "),t("li",[e._v("js -> ts 发布‘rmmv-ts-cli’")])]),e._v(" "),t("h3",{attrs:{id:"学习代码压缩技术"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#学习代码压缩技术"}},[e._v("#")]),e._v(" 学习代码压缩技术")]),e._v(" "),t("p",[e._v("代码压缩尝试\nuglifyjs")]),e._v(" "),t("h3",{attrs:{id:"待学习的jsdoc2md技术"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#待学习的jsdoc2md技术"}},[e._v("#")]),e._v(" 待学习的jsdoc2md技术")]),e._v(" "),t("p",[e._v("这个技术可以将jsdoc转变成md。\nhttps://github.com/jsdoc2md/jsdoc-to-markdown")]),e._v(" "),t("p",[e._v("https://github.com/jsdoc2md/jsdoc-to-markdown/blob/master/docs/API.md")]),e._v(" "),t("h3",{attrs:{id:"待研究的光追技术"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#待研究的光追技术"}},[e._v("#")]),e._v(" 待研究的光追技术")]),e._v(" "),t("p",[e._v("YEP_GridFreeDoodads.js\nFilterController.js\nParticleEmitter.js\nhttps://sigmasuccour.itch.io/false-server\n遊戲這裡下載")]),e._v(" "),t("h3",{attrs:{id:"错误日志本地导出的功能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#错误日志本地导出的功能"}},[e._v("#")]),e._v(" 错误日志本地导出的功能")]),e._v(" "),t("h3",{attrs:{id:"js文件的自动检测更新-下载文件与模块异步加载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#js文件的自动检测更新-下载文件与模块异步加载"}},[e._v("#")]),e._v(" js文件的自动检测更新，下载文件与模块异步加载")]),e._v(" "),t("h3",{attrs:{id:"设计模式的学习"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设计模式的学习"}},[e._v("#")]),e._v(" 设计模式的学习")]),e._v(" "),t("p",[e._v("继承、组合、聚合。这三种东西怎么实现？有什么优缺点？在什么时候使用最好？")]),e._v(" "),t("h3",{attrs:{id:"在线运行的rmmv"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在线运行的rmmv"}},[e._v("#")]),e._v(" 在线运行的rmmv")]),e._v(" "),t("p",[e._v("CodeSandbox，代码在线运行器，云IDE，这个工具稍做改动，兴许就可以在线运行一个rmmv了。")]),e._v(" "),t("h3",{attrs:{id:"iframe显示本地静态资源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#iframe显示本地静态资源"}},[e._v("#")]),e._v(" iframe显示本地静态资源")]),e._v(" "),t("p",[e._v("有很多技术栈表明，可以使用iframe显示一些静态文件资源。")]),e._v(" "),t("ul",[t("li",[e._v("先试着在VuePress内构建自己的专属vue组件，让指定页面可以直接打开另外一整套的静态网站资源。")])]),e._v(" "),t("p",[e._v("这个静态网站全部使用vue-cli开发。用elementUI做表单，这个表单最终生成可使用的代码")]),e._v(" "),t("h3",{attrs:{id:"给仇九做一个低代码的-点击即可导出-生成代码的页面"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#给仇九做一个低代码的-点击即可导出-生成代码的页面"}},[e._v("#")]),e._v(" 给仇九做一个低代码的，点击即可导出，生成代码的页面")]),e._v(" "),t("p",[e._v("受到和风天气页面的启发，目前先实现一个低代码生成可执行代码块的功能。想制作出一个html，并以合适的形式部署到页面内，打包生成出最终的页面。\n最终的可参考效果页面：https://widget.qweather.com/create-simple")]),e._v(" "),t("p",[e._v("受限制的一些关注点：")]),e._v(" "),t("ul",[t("li",[e._v("仇九不使用VuePress，尽可能不要更换其文件夹目录以实现生产环境静态资源的部署")]),e._v(" "),t("li",[e._v("仇九的插件是国际化的，静态文件资源要实现基本的i18n功能。需要使用vue-i18n库。")])]),e._v(" "),t("p",[e._v("目前想到的一些技术方案如下：")]),e._v(" "),t("h4",{attrs:{id:"vuepress-elementui"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-elementui"}},[e._v("#")]),e._v(" VuePress + elementUI")]),e._v(" "),t("p",[e._v("在VuePress页面内，使用elementUI，开发自定义组件。进而实现一系列的功能。关键在于如何让自定义的vue可以被VuePress识别并打包。还要实现在生产环境下不出现错误。")]),e._v(" "),t("p",[e._v("可参考的内容：\nhttps://www.yuque.com/yihui123/fe/vuepress\nhttps://github.com/Lee-Tanghui/vuepress-element-doc\nhttps://github.com/search?q=vuepress+elementui")]),e._v(" "),t("h4",{attrs:{id:"vuepress-iframe"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-iframe"}},[e._v("#")]),e._v(" VuePress + iframe")]),e._v(" "),t("p",[e._v("在VuePress内，直接使用iframe打开位于静态文件资源夹的页面。直接在md内使用iframe，导入静态文件资源即可使用相关的功能。可能的缺点是大小不够合适，显示效果不佳。")]),e._v(" "),t("h4",{attrs:{id:"静态文件直接访问路由"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#静态文件直接访问路由"}},[e._v("#")]),e._v(" 静态文件直接访问路由")]),e._v(" "),t("p",[e._v("利用静态文件的特性，直接把生成的生产环境级别文件，复制粘贴到VuePress的静态资源文件夹内。其实现原理和上一条完全相同。但是差别在于访问的形式，访问的资源不是webpack导入的静态模块，而是利用服务器静态文件资源访问的性质来跳转页面，进而使用后续功能。")]),e._v(" "),t("p",[e._v("这会带来一个问题，VuePress可以承载静态文件资源，那么作为开发版本的vue-cli需要和VuePress项目合并在一起么？怎么让一个vue-cli项目变成VuePress的子项目？并且实现打包出来的文件生成到.vuepress/public/target目录内？")]),e._v(" "),t("h4",{attrs:{id:"直接定义一个特殊的文件夹来存储网页"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#直接定义一个特殊的文件夹来存储网页"}},[e._v("#")]),e._v(" 直接定义一个特殊的文件夹来存储网页")]),e._v(" "),t("p",[e._v("考虑到仇九网站的文件夹整理层级，这里的方案是构建一个单独的文件夹，借助路由跳转的方案，直接访问到产品界面。其中vue-cli项目由阮中楠自己保管管理。")]),e._v(" "),t("p",[e._v("暂定的协作流程：")]),e._v(" "),t("ol",[t("li",[e._v("阮中楠自己开辟一个新的仓库，用vue-cli开发一个页面。并自主部署到相应的gitee page页面内。")]),e._v(" "),t("li",[e._v("与仇九共同检查，逐步优化，迭代升级产品。")]),e._v(" "),t("li",[e._v("将产品打包，迁移到仇九的仓库内，当做是生产环境下的部署。")]),e._v(" "),t("li",[e._v("仇九在文档内提供跳转链接，以生产环境链接或相对路径的方式跳转到产品页面内。")])])])}),[],!1,null,null,null);s.default=v.exports}}]);