(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{401:function(t,a,s){"use strict";s.r(a);var n=s(31),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"mv插件基本常识"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mv插件基本常识"}},[t._v("#")]),t._v(" mv插件基本常识")]),t._v(" "),s("h2",{attrs:{id:"常见的插件代码组织方式-立刻执行函数写法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见的插件代码组织方式-立刻执行函数写法"}},[t._v("#")]),t._v(" 常见的插件代码组织方式：立刻执行函数写法")]),t._v(" "),s("p",[t._v("很多插件的的代码组织方式几乎是这样的：")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* code */")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("整个插件代码通篇下来就是两个个括号，"),s("code",[t._v("(……)();")]),t._v("。这种代码组织方式可以被称为“立刻执行函数写法”。")]),t._v(" "),s("p",[s("code",[t._v("javascript")]),t._v("中没用私有作用域的概念，如果在多人开发的项目上，你在全局或局部作用域中声明了一些变量，可能会被其他人不小心用同名的变量给覆盖掉，根据"),s("code",[t._v("javascript")]),t._v("函数作用域链的特性，可以使用这种技术可以模仿一个私有作用域，用匿名函数作为一个“容器”，“容器”内部可以访问外部的变量，而外部环境不能访问“容器”内部的变量，所以"),s("code",[t._v("( function(){…} )()")]),t._v("内部定义的变量不会和外部的变量发生冲突，俗称“匿名包裹器”或“命名空间”。")]),t._v(" "),s("p",[t._v("更加严格的称呼是：立即执行函数表达式。")]),t._v(" "),s("p",[t._v("参考资料：")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://blog.csdn.net/iteye_19474/article/details/82580396",target:"_blank",rel:"noopener noreferrer"}},[t._v("javascript立即执行函数与函数声明和函数表达式"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"插件教程为什么修改类名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#插件教程为什么修改类名"}},[t._v("#")]),t._v(" 插件教程为什么修改类名？")]),t._v(" "),s("p",[t._v("什么时候不修改类名？什么时候修改类名？当我们修改里面的系统原本就有的对象的内容时，我们就不修改类名。当我们完全地创造一个新的东西时，我们就修改类名。")]),t._v(" "),s("p",[t._v("当我们仅仅只是在先有功能上添加一个新的功能时，我们需要在插件内复制大部分的代码，重写原来的类。")]),t._v(" "),s("p",[t._v("当我们要创建一个原来在游戏内从来没有的一个对象时，我们就需要写一个新的类名。由于新的类在功能上与原有的类有重复的部分，所以可以复制原有的类，并修改其类名。")])])}),[],!1,null,null,null);a.default=e.exports}}]);