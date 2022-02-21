(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{595:function(e,s,t){"use strict";t.r(s);var r=t(9),n=Object(r.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"如何编写控制live-server插件的settings-json文件并改变其端口号"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何编写控制live-server插件的settings-json文件并改变其端口号"}},[e._v("#")]),e._v(" 如何编写控制Live Server插件的settings.json文件并改变其端口号")]),e._v(" "),t("p",[e._v("在启动我们本地的web项目时，有时需要对"),t("code",[e._v("Live Server")]),e._v("插件提供的端口号进行调整，比如说将预设值"),t("code",[e._v("5500")]),e._v("调整成自己想要的其他数值。这时我们需要去"),t("code",[e._v("settings.json")]),e._v("文件内进行修改。")]),e._v(" "),t("p",[e._v("假设你已经学会了用"),t("code",[e._v("Live Server")]),e._v("启动web，并假设我们要设置的端口号为"),t("code",[e._v("4399")]),e._v("。")]),e._v(" "),t("p",[e._v("首先，我们在本项目的"),t("code",[e._v(".vscode")]),e._v("文件夹内新建一个与"),t("code",[e._v("launch.json")]),e._v("文件并列的"),t("code",[e._v("settings.json")]),e._v("。\n在"),t("code",[e._v("settings.json")]),e._v("中做以下配置：")]),e._v(" "),t("div",{staticClass:"language-JavaScript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[e._v('"liveServer.settings.port"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("4399")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\t\n  "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[e._v('"liveServer.settings.root"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/"')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br")])]),t("p",[e._v("我们不仅要修改"),t("code",[e._v("settings.json")]),e._v("的值，还要同步修改"),t("code",[e._v("launch.json")]),e._v("内"),t("code",[e._v("url")]),e._v("属性的值为"),t("code",[e._v("http://localhost:4399")]),e._v("，这样我们才算是修改好了"),t("code",[e._v("Live Server")]),e._v("的端口号。")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://blog.csdn.net/qq_39438464/article/details/113783740",target:"_blank",rel:"noopener noreferrer"}},[e._v("点此阅读其他的参考文章。"),t("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=n.exports}}]);