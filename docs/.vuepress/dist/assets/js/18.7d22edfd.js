(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{401:function(t,s,a){"use strict";a.r(s);var n=a(31),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"项目调试方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目调试方式"}},[t._v("#")]),t._v(" 项目调试方式")]),t._v(" "),a("p",[t._v("按F8进行debug。")]),t._v(" "),a("h2",{attrs:{id:"update方法原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update方法原理"}},[t._v("#")]),t._v(" update方法原理")]),t._v(" "),a("p",[t._v("update一帧运行一次、refresh一般是需要的时候、调用一下刷新。")]),t._v(" "),a("h2",{attrs:{id:"类的定义方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类的定义方式"}},[t._v("#")]),t._v(" 类的定义方式")]),t._v(" "),a("p",[t._v("mv项目的绝大多数类采用"),a("a",{attrs:{href:"https://blog.csdn.net/iteye_9339/article/details/81473212",target:"_blank",rel:"noopener noreferrer"}},[t._v("混合的构造函数/原型方式"),a("OutboundLink")],1),t._v("来定义。")]),t._v(" "),a("h2",{attrs:{id:"类的继承方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类的继承方式"}},[t._v("#")]),t._v(" 类的继承方式")]),t._v(" "),a("p",[t._v("mv项目中的绝大多数类采用"),a("a",{attrs:{href:"https://blog.csdn.net/xgy123xx/article/details/106019671",target:"_blank",rel:"noopener noreferrer"}},[t._v("寄生组合式继承"),a("OutboundLink")],1),t._v("的方式来完成类的继承。")]),t._v(" "),a("h3",{attrs:{id:"寄生组合式继承定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#寄生组合式继承定义"}},[t._v("#")]),t._v(" 寄生组合式继承定义")]),t._v(" "),a("p",[t._v("所谓寄生组合式继承，即通过借用构造函数来继承属性，通过原型链的混成形式来继承方法。其背后的基本思路是：不必为了指定子类型的原型而调用超类型的构造函数，我们所需要的无非就是超类型原型的一个副本而已。本质上，就是使用寄生式继承来继承超类型的原型，然后再将结果指定给子类型的原型。"),a("a",{attrs:{href:"https://blog.csdn.net/qq_35718410/article/details/91412908",target:"_blank",rel:"noopener noreferrer"}},[t._v("引自《JavaScript高级程序设计》"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("其中，我们常见的"),a("code",[t._v("Object.create()")]),t._v("方法是"),a("code",[t._v("ES5")]),t._v("中"),a("strong",[t._v("原型式继承")]),t._v("的规范化。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/weixin_36465540/article/details/90176318",target:"_blank",rel:"noopener noreferrer"}},[t._v("点此查阅更多细节。"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("结合上面两个部分的内容，作者有了以下的理解:")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("理解")]),t._v(" "),a("p",[t._v("方法的定义与继承均在"),a("code",[t._v("prototype")]),t._v("原型链完成，属性则是在"),a("code",[t._v("function")]),t._v("类本身中定义，且继承的时候也是用构造函数来完成属性的继承。")])]),t._v(" "),a("h2",{attrs:{id:"object-create-实现继承的例子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#object-create-实现继承的例子"}},[t._v("#")]),t._v(" Object.create()实现继承的例子")]),t._v(" "),a("p",[t._v("由于作者水平有限，尚不能理解透彻该部分的继承。这里粘贴了和mv项目几乎相同的继承例子，作为本小节内容。"),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/orphaned/Web/JavaScript/Reference/Global_Objects/Object/create",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN.Object.create()"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Shape - 父类(superclass)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Shape")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 父类的方法")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Shape")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("move")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Shape moved.'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Rectangle - 子类(subclass)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Rectangle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Shape")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// call super constructor.}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 子类续承父类")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Rectangle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Shape")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Rectangle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constructor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Rectangle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" rect "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Rectangle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Is rect an instance of Rectangle?'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  rect "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Rectangle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Is rect an instance of Shape?'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  rect "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Shape")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\nrect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("move")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Outputs, 'Shape moved.'")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br")])]),a("h2",{attrs:{id:"对mv源码的总体理解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对mv源码的总体理解"}},[t._v("#")]),t._v(" 对mv源码的总体理解")]),t._v(" "),a("p",[t._v("以下内容为作者自己的理解，不一定准确。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("理解")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("在"),a("code",[t._v("JavaScript ES5")]),t._v("版本中，继承写法的最优解是"),a("strong",[t._v("寄生组合式继承")]),t._v("，使用"),a("code",[t._v("call(this)")]),t._v('方法来实现子构造方法调用父构造方法，实现"属性"的继承；使用'),a("code",[t._v("Object.create")]),t._v("和"),a("code",[t._v("prototype.constructor")]),t._v('的方式实现原型链指向，实现"方法"的继承。')])]),t._v(" "),a("li",[a("p",[t._v("在"),a("code",[t._v("JavaScript ES6")]),t._v('版本中，使用语法糖可以同时实现"'),a("strong",[t._v("属性")]),t._v('"和"'),a("strong",[t._v("方法")]),t._v('"的继承。')])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("mv源码")]),t._v("中的"),a("code",[t._v("call(this)")]),t._v("写法目的是为了实现继承；"),a("strong",[t._v("mv插件")]),t._v("的"),a("code",[t._v("call(this)")]),t._v("写法目的是为了实现方法功能拓展。")])]),t._v(" "),a("li",[a("p",[t._v("mv插件编写原理是：使用"),a("code",[t._v("call(this)")]),t._v("方法调用原来的方法，做出功能拓展，利用"),a("code",[t._v("PluginsManager")]),t._v("的"),a("code",[t._v("document.appendChild")]),t._v("方法实现代码的导入，并利用V8引擎实现的"),a("strong",[t._v("词法作用域")]),t._v("与变量原理实现"),a("code",[t._v("JavaScript")]),t._v("的"),a("strong",[t._v("方法覆盖")]),t._v("，最后实现mv源码调用mv插件的方法。")])]),t._v(" "),a("li",[a("p",[t._v("mv插件写法的本质是"),a("strong",[t._v("直接修改mv源码")]),t._v("。")])])])]),t._v(" "),a("h3",{attrs:{id:"参考文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[t._v("#")]),t._v(" 参考文章")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("MDN")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create#%E7%94%A8_object.create%E5%AE%9E%E7%8E%B0%E7%B1%BB%E5%BC%8F%E7%BB%A7%E6%89%BF",target:"_blank",rel:"noopener noreferrer"}},[t._v("用object.create实现类式继承"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call#%E4%BD%BF%E7%94%A8_call_%E6%96%B9%E6%B3%95%E8%B0%83%E7%94%A8%E7%88%B6%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用call方法调用父构造函数"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Objects/Inheritance",target:"_blank",rel:"noopener noreferrer"}},[t._v("继承"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain",target:"_blank",rel:"noopener noreferrer"}},[t._v("继承与原型链"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[t._v("CSDN")]),t._v(" "),a("p",[t._v("https://blog.csdn.net/weixin_36465540/article/details/90176318")]),t._v(" "),a("p",[t._v("https://blog.csdn.net/qq_35718410/article/details/91412908")]),t._v(" "),a("p",[t._v("https://blog.csdn.net/lixiaosenlin/article/details/108140634")]),t._v(" "),a("p",[t._v("https://blog.csdn.net/xgy123xx/article/details/106019671")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);