(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{583:function(s,a,t){"use strict";t.r(a);var n=t(5),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"_4-变量和数据类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-变量和数据类型"}},[s._v("#")]),s._v(" 4-变量和数据类型")]),s._v(" "),t("h2",{attrs:{id:"变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#变量"}},[s._v("#")]),s._v(" 变量")]),s._v(" "),t("p",[s._v("变量是储存信息的容器。变量需要起一个变量名。变量名须以字母、"),t("code",[s._v("$")]),s._v("或"),t("code",[s._v("_")]),s._v("符号开头，而且对大小写敏感。建议大家平常都用字母开头，我个人比较讨厌美元和短命鬼。")]),s._v(" "),t("p",[s._v("使用变量前需要声明这个变量，我们使用"),t("code",[s._v("var")]),s._v("来声明一个变量，例如：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" a"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" b"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" c"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" pi"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.14")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("就像这样，我们就声明了一系列的变量，并且给他们赋了相应的值。也可以不赋值来声明一个变量，在后面的使用中再给它赋值，例如：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" m"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nm"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("250")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"title"},[s._v("语义化的变量命名")]),t("p",[s._v("第二版建议新手从一开始就养成"),t("strong",[s._v("语义化变量命名")]),s._v("的习惯。如果你的插件涉及到了这样的写法：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 无明确指示意义的变量命名 容易造成误解")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" aaa "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("我们会称呼这样的代码为"),t("strong",[s._v("烂代码")]),s._v("。也许第一版的教程会使用类似的方式来教学，当也仅仅限于教学。实际编写插件时，请不要这样命名。建议用以下的方式命名。")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 表示实际运行时间 时间间隔等含义")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" duration "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])]),t("h2",{attrs:{id:"赋值"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#赋值"}},[s._v("#")]),s._v(" 赋值")]),s._v(" "),t("p",[s._v("赋值要使用"),t("code",[s._v("=")]),s._v("，叫做赋值号，注意，这东西不是等号，"),t("strong",[s._v("不表示两个相等")]),s._v("，只是把右边的值给左边，或者说把左边的变量设置成和右边一样的。")]),s._v(" "),t("p",[s._v("::: “=”的理解\n请不要把"),t("strong",[s._v("赋值号")]),s._v("和数学意义上的"),t("strong",[s._v("等号")]),s._v("相等同。如果你在阅读代码时仍然无法转过弯，仍旧把"),t("strong",[s._v("赋值符")]),s._v("当做是等号，那你很可能无法再继续学习编程了。")]),s._v(" "),t("p",[s._v("观察以下的代码：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" num "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nnum "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" num "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("经过赋值运算后，变量"),t("code",[s._v("num")]),s._v("的值为"),t("code",[s._v("2")]),s._v("。笔者对此不做解释，这应当是形而上学的、字面意义上的理解。\n:::")]),s._v(" "),t("h2",{attrs:{id:"使用es6的const和let来代替var定义变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用es6的const和let来代替var定义变量"}},[s._v("#")]),s._v(" 使用ES6的const和let来代替var定义变量 "),t("Badge",{attrs:{text:"进阶"}})],1),s._v(" "),t("p",[s._v("建议使用"),t("code",[s._v("JavaScript")]),s._v("的ES6版本提供的const和let来定义变量，而不是传统的var。用实现块级作用域的变量来代替全局变量式的var。这种写法更加规范稳妥，不容易出现插件变量名冲突。这里不进一步介绍块级作用域。")]),s._v(" "),t("p",[s._v("用"),t("code",[s._v("const")]),s._v("定义常量，即不会发生变化的变量，不可被再次赋值的变量>")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" fuck "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'草我？'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 直接报错 无法对一个const常量再次赋值")]),s._v("\nfuck "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'我就草！'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("用"),t("code",[s._v("let")]),s._v("定义变量。")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" sometimeCanFuckAgain "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'我房间里，有一些好康的~'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 可以再次赋值，不会报错")]),s._v("\nsometimeCanFuckAgain "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'杰哥不要啊~'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"title"},[s._v("代码风格的撕裂")]),t("p",[t("code",[s._v("mv")]),s._v("项目的代码版本是"),t("code",[s._v("ES5")]),s._v("的，而笔者推荐的"),t("code",[s._v("ES6")]),s._v("。虽然在代码执行层面上，不会出现错误。但是不同版本的代码交错在一起，容易造成代码风格的混乱。但是笔者还是推荐大家使用"),t("code",[s._v("ES6+")]),s._v("以上版本的"),t("code",[s._v("JavaScript")]),s._v("来开发插件，而不是使用过于老旧的"),t("code",[s._v("ES5")]),s._v("。")])]),t("h2",{attrs:{id:"数据类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据类型"}},[s._v("#")]),s._v(" 数据类型")]),s._v(" "),t("p",[s._v("数据类型就是数据的类型。\n"),t("code",[s._v("JavaScript")]),s._v("有字符串、数字、布尔、数组、对象、Null、Undefined这样几种基本数据类型。\n而且，"),t("code",[s._v("JavaScript")]),s._v("拥有动态的数据类型，这意味着相同的变量可用作不同的类型，例如，前一刻它还是个数字，后面就变成字符串了：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//声明一个变量a")]),s._v("\na"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//给a赋值5，此时a是个数字类型")]),s._v("\na"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hehe"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//给a赋值“hehe”，此时a是个字符串类型")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"数字"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数字"}},[s._v("#")]),s._v(" 数字")]),s._v(" "),t("p",[s._v("这就是表示一个数字，没什么好说的，例如：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" x1"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("34.00")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//使用小数点来写")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" x2"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("34")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//不使用小数点来写")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("还可以用科学计数法，例如：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" y"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("123e5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 12300000")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" z"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("123e-5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 0.00123")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"布尔"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#布尔"}},[s._v("#")]),s._v(" 布尔")]),s._v(" "),t("p",[s._v("布尔类型是逻辑运算的，只有两个值："),t("code",[s._v("true")]),s._v("和"),t("code",[s._v("false")]),s._v("。")]),s._v(" "),t("h3",{attrs:{id:"字符串"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#字符串"}},[s._v("#")]),s._v(" 字符串")]),s._v(" "),t("p",[s._v("一种比较特殊的（我不喜欢特殊……）类型，用引号包裹着的内容来表示。单引号可以，双引号也可以，例如：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" carname"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Bill Gates"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" carname"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Bill Gates'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("也可以用引号包裹引号，这种字符串是里面有引号的字符串，例如：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" answer"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Nice to meet you!"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" answer"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"He is called 'Bill'\"")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" answer"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'He is called \"Bill\"'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"title"},[s._v("引用类型")]),t("p",[s._v("第一版之所以称呼其为"),t("strong",[s._v("特殊的类型")]),s._v("，是因为"),t("strong",[s._v("字符串")]),s._v("是典型的引用类型变量。在"),t("code",[s._v("JavaScript")]),s._v("内还有很多类似的变量，他们在赋值的时候具有不同的特性。第二版不会介绍过多关于引用类型变量的使用细节，会直接应用其特点来教学。请读者自行查找其他的资料和教程来学习"),t("code",[s._v("JavaScript")]),s._v("的基础变量类型——"),t("strong",[s._v("引用类型")])])]),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"title"},[s._v("引号使用带来的代码风格差异")]),t("p",[s._v("在"),t("code",[s._v("JavaScript")]),s._v("的实战开发中，会有两类不同的引号使用风格。一类倡导使用"),t("strong",[s._v("单引号")]),s._v("，另一类则倡导"),t("strong",[s._v("双引号")]),s._v("。读者可以自行选择喜好的风格。")])]),t("h3",{attrs:{id:"数组"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数组"}},[s._v("#")]),s._v(" 数组")]),s._v(" "),t("p",[s._v("数组就是一些变量的顺序组合，"),t("code",[s._v("JavaScript")]),s._v("中这样来创建一个数组：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" cars"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Array")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\ncars"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Audi"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\ncars"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"BMW"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\ncars"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Volvo"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("或者 (condensed array):")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" cars"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Array")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Audi"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"BMW"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Volvo"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("或者 (literal array):")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" cars"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Audi"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"BMW"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Volvo"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("数组的"),t("strong",[s._v("下标")]),s._v("是从"),t("code",[s._v("0")]),s._v("开始的，你可以用"),t("code",[s._v("[]")]),s._v("里面加数字的形式来访问数组里面存储的数据。")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"title"},[s._v("更合适的数组定义方式")]),t("p",[s._v("第二版建议读者有且仅使用"),t("strong",[s._v("方括号")]),s._v("的方式来直接定义数组，而不是使用"),t("code",[s._v("new")]),s._v("的方式来定义数组，这不方便，无法发挥"),t("code",[s._v("JavaScript")]),s._v("的优势。")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 不推荐")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" arr "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Array")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 推荐")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" list "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/First_steps/Arrays",target:"_blank",rel:"noopener noreferrer"}},[s._v("点此阅读很多关于数组的知识点。"),t("OutboundLink")],1)]),s._v(" "),t("p",[t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array",target:"_blank",rel:"noopener noreferrer"}},[s._v("点此阅读更多Array的API方法。"),t("OutboundLink")],1)])]),t("h3",{attrs:{id:"对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#对象"}},[s._v("#")]),s._v(" 对象")]),s._v(" "),t("p",[s._v("对象由花括号分隔。在括号内部，对象的属性以名称和值对的形式 (name : value) 来定义。属性由逗号分隔：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" person"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("firstname"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Bill"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" lastname"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Gates"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" id"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5566")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("上面例子中的对象 (person) 有三个属性："),t("code",[s._v("firstname")]),s._v("、"),t("code",[s._v("lastname")]),s._v("以及"),t("code",[s._v("id")]),s._v("。空格和折行无关紧要。声明可横跨多行：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" person "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  firstname"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Bill"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  lastname"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Gates"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  id"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5566")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("对象的访问有两种形式，一种是使用"),t("code",[s._v(".")]),s._v("来访问，一种是使用"),t("code",[s._v("[]")]),s._v("加"),t("strong",[s._v("变量名")]),s._v("来访问，例如：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("person"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("lastname"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nname"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("person"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"lastname"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"title"},[s._v("Object对象的数据结构")]),t("p",[s._v("实战开发中，我们往往称呼JavaScript的对象为"),t("strong",[s._v("键值对")]),s._v("，这样的形式在数据结构上类似于"),t("strong",[s._v("Map")]),s._v("。")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object",target:"_blank",rel:"noopener noreferrer"}},[s._v("点此阅读很多关于Object对象的知识点。"),t("OutboundLink")],1)])]),t("h3",{attrs:{id:"对象字面量的对象定义方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#对象字面量的对象定义方式"}},[s._v("#")]),s._v(" 对象字面量的对象定义方式 "),t("badge",{attrs:{text:"基础概念"}})],1),s._v(" "),t("p",[s._v("第二版推荐读者使用对象字面量的方式来定义并使用对象，尽可能的少使用new来实例化对象。示例如下：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" author "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  versions"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"第二版"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"阮中楠"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("updated")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('" 即刻更新第二版教程。 "')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("在mv项目中，有很多的类，需要我们使用"),t("code",[s._v("new")]),s._v("的方式实例化对象。这里不做演示，在后续的章节中给出实例。")]),s._v(" "),t("h3",{attrs:{id:"引用类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#引用类型"}},[s._v("#")]),s._v(" 引用类型 "),t("Badge",{attrs:{text:"进阶"}})],1)])}),[],!1,null,null,null);a.default=e.exports}}]);