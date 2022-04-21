(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{461:function(t,s,a){"use strict";a.r(s);var e=a(14),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_3-插件参数和命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-插件参数和命令"}},[t._v("#")]),t._v(" 3-插件参数和命令")]),t._v(" "),a("h2",{attrs:{id:"阅读别人的文章来学习插件参数的配置写法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#阅读别人的文章来学习插件参数的配置写法"}},[t._v("#")]),t._v(" 阅读别人的文章来学习插件参数的配置写法")]),t._v(" "),a("p",[t._v("第二版建议读者去阅读"),a("a",{attrs:{href:"https://www.jianshu.com/p/0bd8b462dac1",target:"_blank",rel:"noopener noreferrer"}},[t._v("这篇文章"),a("OutboundLink")],1),t._v("来学习如何定义配置插件参数。")]),t._v(" "),a("h2",{attrs:{id:"插件参数识别的流程说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插件参数识别的流程说明"}},[t._v("#")]),t._v(" 插件参数识别的流程说明")]),t._v(" "),a("p",[t._v("本节简单介绍插件参数是如何被"),a("code",[t._v("JavaScript")]),t._v("识别的，这里默认读者已经阅读了上述的文章。")]),t._v(" "),a("h3",{attrs:{id:"rmmv识别注释格式的插件参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rmmv识别注释格式的插件参数"}},[t._v("#")]),t._v(" RMMV识别注释格式的插件参数")]),t._v(" "),a("p",[a("code",[t._v("RMMV")]),t._v("会按照一定的插件参数编写格式来识别并生成可被"),a("code",[t._v("JavaScript")]),t._v("识别的插件参数，保存在"),a("code",[t._v("js\\plugins.js")]),t._v("文件内，如下图参考：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/HechiCollegeComputerAssociation/image-store/raw/master/20220220/fvbxwsoW1c3I.png",alt:""}})]),t._v(" "),a("p",[a("code",[t._v("plugins.js")]),t._v("文件是由"),a("code",[t._v("RPGMV")]),t._v("自动识别生成的文件，其本质是一个名为"),a("code",[t._v("$plugins")]),t._v("的全局数组。")]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("不要改动plugins.js")]),t._v(" "),a("p",[t._v("如果改动了此文件的格式，会导致"),a("code",[t._v("RPGMV")]),t._v("无法识别此文件，导致更新数据失败。")])]),t._v(" "),a("p",[a("code",[t._v("$plugins")]),t._v("全局数组以"),a("code",[t._v(".js")]),t._v("的文件保存，"),a("code",[t._v("index.html")]),t._v("以"),a("code",[t._v("script")]),t._v("标签的方式来引入此文件。")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("js/plugins.js"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("项目入口文件"),a("code",[t._v("main.js")]),t._v("会第一步执行以下语句，加载全部的插件参数。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("PluginManager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$plugins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("至此，"),a("code",[t._v("mv")]),t._v("已经可以使用静态对象"),a("code",[t._v("PluginManager")]),t._v("来识别并管理插件参数了。")])])}),[],!1,null,null,null);s.default=n.exports}}]);