(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{596:function(t,v,a){"use strict";a.r(v);var _=a(5),r=Object(_.a)({},(function(){var t=this,v=t.$createElement,a=t._self._c||v;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"第一章-rpg-maker-mv以及javascript"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第一章-rpg-maker-mv以及javascript"}},[t._v("#")]),t._v(" 第一章 RPG Maker MV以及JavaScript")]),t._v(" "),a("h2",{attrs:{id:"rpg-maker-mv简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rpg-maker-mv简介"}},[t._v("#")]),t._v(" RPG Maker MV简介")]),t._v(" "),a("p",[t._v("制作游戏需要专业的游戏引擎，这样可以事半功倍，若要想制作"),a("code",[t._v("RPG")]),t._v("类型的游戏，那么"),a("code",[t._v("RPG Maker MV")]),t._v("是一个不错的选择。")]),t._v(" "),a("p",[a("code",[t._v("RPG Maker")]),t._v("，又名"),a("strong",[t._v("RPG制作大师")]),t._v("、"),a("strong",[t._v("RPGツークル")]),t._v("、"),a("strong",[t._v("RPG Tsukuru")]),t._v("。是一款"),a("strong",[t._v("Enterbrain Incorporation")]),t._v("公司出品的RPG游戏制作工具，分为RPG Maker 2000，RPG Maker 2003，RPG Maker XP，RPG Maker VX，RPG Maker VX Ace，RPG Maker MV。")]),t._v(" "),a("p",[t._v("我们现在要介绍的是最新版的RPG Maker MV，这个版本可以实现的功能与前作基本一致，但最大的不同在于使用的语言由Ruby变成了"),a("code",[t._v("JavaScript")]),t._v("，以及由此带来的与Html5结合的便利。")]),t._v(" "),a("p",[t._v("现在，我们可以借助Html5+JavaScript，将制作的游戏部署到PC端，Android端，IOS端。通俗来讲，凡是可以浏览网页的设备，只要配置足够，都可以运行MV制作的游戏。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"title"},[t._v("mv源码的技术栈")]),a("p",[t._v("HTML5 + JavaScript ES5")])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"title"},[t._v("最新版的开发工具")]),a("p",[t._v("截止第二版教程开始编纂，最新版的"),a("code",[t._v("RPG Maker")]),t._v("是"),a("code",[t._v("RPGMZ")]),t._v("。其源码使用了一定程度上的"),a("code",[t._v("ES6")]),t._v("语法。")])]),a("h2",{attrs:{id:"javascript简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript简介"}},[t._v("#")]),t._v(" JavaScript简介")]),t._v(" "),a("p",[t._v("JavaScript是一种属于网络的脚本语言,已经被广泛用于Web应用开发，常用来为网页添加各式各样的动态功能，为用户提供更流畅美观的浏览效果。通常JavaScript脚本是通过嵌入在HTML中来实现自身的功能的。")]),t._v(" "),a("p",[t._v("实际上，我们的RPG Maker MV游戏本身就可以看做一个html组成的网站，因此，MV的游戏也需要使用JavaScript来实现其功能。可以说，网页制作使用的JavaScript和MV游戏制作使用的JavaScript没有什么不同。")]),t._v(" "),a("p",[t._v("但是，若要问JavaScript和java有什么关系，请参考雷锋与雷峰塔。记住这一点，不要把两者混用。")]),t._v(" "),a("p",[t._v("它最初由Netscape的Brendan Eich设计。 Netscape在最初将其脚本语言命名为LiveScript，后来Netscape在与Sun合作之后将其改名为JavaScript。JavaScript最初受Java启发而开始设计的，目的之一就是“看上去像Java”，因此语法上有类似之处，一些名称和命名规范也借自Java。但JavaScript的主要设计原则源自Self和Scheme。JavaScript与Java名称上的近似，是当时Netscape为了营销考虑与Sun微系统达成协议的结果。为了取得技术优势，微软推出了JScript来迎战JavaScript的脚本语言。为了互用性，Ecma国际（前身为欧洲计算机制造商协会）创建了ECMA-262标准（ECMAScript）。两者都属于ECMAScript的实现。尽管JavaScript作为给非程序人员的脚本语言，而非作为给程序人员的脚本语言来推广和宣传，但是JavaScript具有非常丰富的特性。")]),t._v(" "),a("p",[t._v("发展初期，JavaScript的标准并未确定，同期有Netscape的JavaScript，微软的JScript和CEnvi的ScriptEase三足鼎立。1997年，在ECMA（欧洲计算机制造商协会）的协调下，由Netscape、Sun、微软、Borland组成的工作组确定统一标准：ECMA-262。")]),t._v(" "),a("p",[t._v("我们使用JavaScript，也应当遵守标准。目前，js的最新标准是es6。")]),t._v(" "),a("p",[t._v("截止第二版重构，JavaScript的版本已经到了"),a("code",[t._v("ES10")]),t._v("。读者可自行"),a("a",{attrs:{href:"https://so.csdn.net/so/search?q=JavaScript%20%E7%89%88%E6%9C%AC",target:"_blank",rel:"noopener noreferrer"}},[t._v("搜索"),a("OutboundLink")],1),a("code",[t._v("JavaScript")]),t._v("的最新版本以及更新的语法。第二版教程不会详细的解释、说明、介绍、教学高版本的"),a("code",[t._v("JavaScript")]),t._v("语法。")]),t._v(" "),a("h2",{attrs:{id:"rpg-maker-mv中使用插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rpg-maker-mv中使用插件"}},[t._v("#")]),t._v(" RPG Maker MV中使用插件")]),t._v(" "),a("p",[t._v("首先先明确mv项目的目录结构，如下图；\n"),a("img",{attrs:{src:"https://rpg.blue/data/attachment/forum/201608/15/162940b3og0z9ha819o1ot.png",alt:""}})]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("audio")]),t._v(" 视频资源")]),t._v(" "),a("li",[a("strong",[t._v("data")]),t._v(" mv数据库，如装备数据")]),t._v(" "),a("li",[a("strong",[t._v("fonts")]),t._v(" 字体")]),t._v(" "),a("li",[a("strong",[t._v("icon")]),t._v(" 项目运行的图标")]),t._v(" "),a("li",[a("strong",[t._v("img")]),t._v(" 图片")]),t._v(" "),a("li",[a("strong",[t._v("js")]),t._v(" JavaScript代码")]),t._v(" "),a("li",[a("strong",[t._v("movies")]),t._v(" 视频资源")]),t._v(" "),a("li",[a("strong",[t._v("save")]),t._v(" 存档")]),t._v(" "),a("li",[a("strong",[t._v("Game.rpgproject")]),t._v(" rmmv项目识别文件")]),t._v(" "),a("li",[a("strong",[t._v("index.html")]),t._v(" mv项目载体")])]),t._v(" "),a("p",[t._v("其中，js目录下即是JavaScript所在的地方，打开js，libs是MV的库，系统所用到的一些配置都在其中。plugins是游戏的插件所在地，放在这里面的js文件才能被当做插件加载。如下图：\n"),a("img",{attrs:{src:"https://rpg.blue/data/attachment/forum/201608/15/162940ocgd0gc6iww3zfz7.png",alt:""}})]),t._v(" "),a("p",[t._v("其余的文件都是游戏的系统脚本，游戏程序的实现全靠这几部分。")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("main.js")]),t._v("\n是主文件，游戏的入口。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("plugins.js")]),t._v("\n是一个表，里面是对插件使用的配置情况。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("rpg_core.js")]),t._v("\n是游戏的核心，里面有游戏对图形等等的处理方法。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("rpg_managers.js")]),t._v("\n是游戏对数据的管理。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("rpg_object.js")]),t._v("\n是游戏中所用到的对象。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("rpg_scenes.js")]),t._v("\n是游戏中所显示的场景。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("rpg_sprites.js")]),t._v("\n是游戏中的精灵。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("rpg_windows.js")]),t._v("\n是游戏中的窗口。")])])]),t._v(" "),a("p",[t._v("关于mv源码翻译的内容，可以点此阅览。（待维护）")]),t._v(" "),a("p",[t._v("libs文件夹下，其内容如下图所示。其中，"),a("code",[t._v("fpsmeter.js")]),t._v("用于帧数测试。"),a("code",[t._v("lz-string.js")]),t._v("用于大量数据存储。"),a("code",[t._v("pixi.js")]),t._v("用于"),a("code",[t._v("HTML5 2D")]),t._v("渲染。\n"),a("img",{attrs:{src:"https://rpg.blue/data/attachment/forum/201608/15/162940ezg1zj5qg1gmx511.png",alt:""}})]),t._v(" "),a("p",[t._v("我们用到最多的就是"),a("code",[t._v("plugins")]),t._v("文件夹，此文件夹下所有的文件都会反映在"),a("code",[t._v("RPG Maker MV")]),t._v("的插件管理器中，如下图所示：\n"),a("img",{attrs:{src:"https://rpg.blue/data/attachment/forum/201608/15/162940dxx36ftqf7xtx2zl.png",alt:""}})]),t._v(" "),a("p",[t._v("在"),a("code",[t._v("plugins")]),t._v("文件夹内可以阅览全部可供使用的插件。如图：\n"),a("img",{attrs:{src:"https://rpg.blue/data/attachment/forum/201608/15/162941z07geeyp9ehoxhsq.png",alt:""}})]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"title"},[t._v("优化点")]),a("p",[t._v("值得注意的是，大批量的导入插件会导致插件下拉列表长度过长，影响插件的查找与配置。在编写插件时，可以采用模块化开发的方式来导入插件。点此开始学习模块化插件开发。（待补充）")])]),a("p",[t._v("这里，我们选择一个插件，EnemyBook，此插件的帮助文档显示了作者对使用者的提示，如下图。在我们自己写给自己用时，虽然当时不需要提示，但日子久了仍然会忘记一些功能的具体实现，因此，帮助文档是必不可少的。\n"),a("img",{attrs:{src:"https://rpg.blue/data/attachment/forum/201608/15/162941luxj2z2jmn22r233.png",alt:""}})]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"title"},[t._v("拓展")]),a("p",[t._v("大部分插件开发者的帮助文档是以RMMV可识别的注释形式，直接写入在插件内，这很容易造成文件冗长，不利于源码阅读。作者建议使用"),a("code",[t._v("JSDoc")]),t._v("的注释来配置生成自动化的"),a("strong",[t._v("插件使用说明书")]),t._v("，点此阅读JSDoc在mv插件中的使用。（待补充）")])]),a("p",[t._v("双击"),a("code",[t._v("parameters")]),t._v("参数表中的项目，就可以配置插件的参数，如下图。这也是由插件制作者设计好的。可以依据提示自行设置插件允许的功能。\n"),a("img",{attrs:{src:"https://rpg.blue/data/attachment/forum/201608/15/162941c03llz09if09t00l.png",alt:""}})]),t._v(" "),a("p",[t._v("设置好之后，别忘了将"),a("code",[t._v("status")]),t._v("状态设置为"),a("code",[t._v("on")]),t._v("开启状态。这样，我们就可以使用该插件了。")]),t._v(" "),a("p",[t._v("现在，我们设置一个老爷爷，通过与他对话来打开EnemyBook怪物图鉴。其事件页面使用"),a("code",[t._v("Plugin Command")]),t._v("，在其中输入我们刚才在帮助文档中看到的命令。此处应该用打开怪物图鉴的命令EnemyBook Open，设置如下图：\n"),a("img",{attrs:{src:"https://rpg.blue/data/attachment/forum/201608/15/162941r2yloowwf5i5itfo.png",alt:""}})]),t._v(" "),a("p",[t._v("测试游戏，可以看到，效果如图所示，??????的符号正是我们刚才设置的不知道的怪物的显示名字。\n"),a("img",{attrs:{src:"https://rpg.blue/data/attachment/forum/201608/15/162942u091q9nk6ks0efsp.png",alt:""}})]),t._v(" "),a("p",[t._v("现在，我们进行一次战斗，之后再看看会发生什么，如图。\n"),a("img",{attrs:{src:"https://rpg.blue/data/attachment/forum/201608/15/162944ygdoy11r1ha17hgz.png",alt:""}})]),t._v(" "),a("p",[t._v("战斗之后再打开EnemyBook，然后会发现，其中的Bat已经可以查看了，如图。\n"),a("img",{attrs:{src:"https://rpg.blue/data/attachment/forum/201608/15/162945gy1gv021jclpgvwj.png",alt:""}})]),t._v(" "),a("p",[t._v("这就是插件的用法示例，通过学习，我们自己也可以设计并制作自己的插件。如果不想制作插件，学习"),a("code",[t._v("JavaScript")]),t._v("也有助于我们理解和使用插件，因为并不是每个制作者的帮助文档都写的简单明了。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"title"},[t._v("拓展")]),a("p",[t._v("编写帮助文档很考验插件作者的写作水平。理想的帮助文档应当像"),a("a",{attrs:{href:"https://vuejs.bootcss.com/api/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue.js"),a("OutboundLink")],1),t._v("的文档那样，清晰明了，简单易懂。\n本教程不会提供帮助文档的写作教程。")])]),a("p",[t._v("如果我们要自己创建插件，只需要在"),a("code",[t._v("pulgins")]),t._v("文件夹下创建一个新的文本文件，将扩展名改为"),a("code",[t._v("js")]),t._v("，然后就可以调用了。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"title"},[t._v("更合适的插件新建方式")]),a("p",[t._v("新版建议使用"),a("code",[t._v("VScode")]),t._v("在"),a("code",[t._v("pulgins")]),t._v("文件夹内直接新建"),a("code",[t._v("JavaScript")]),t._v("文件，而不是先新建"),a("code",[t._v("txt")]),t._v("，再更改文件拓展名。读者可以在后续的章节内或本网站的其他地方学习到"),a("code",[t._v("VScode")]),t._v("的基本使用。")])]),a("h2",{attrs:{id:"如何编辑javascript"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何编辑javascript"}},[t._v("#")]),t._v(" 如何编辑JavaScript")]),t._v(" "),a("p",[t._v("事实上，任何文本编辑器都可以打开并编辑后缀名为"),a("code",[t._v(".js")]),t._v("的"),a("code",[t._v("JavaScript")]),t._v("的脚本文件，但笔者在这里推荐使用专业的编辑器，比如"),a("code",[t._v("notepad++")]),t._v("，以及笔者用的"),a("code",[t._v("visual studio code")]),t._v("，如图所示。\n一个好的编辑器可以帮助你完成一些繁琐的任务，使得编程事半功倍。\n"),a("img",{attrs:{src:"https://rpg.blue/data/attachment/forum/201608/15/162945psts26b6flbsoe9l.png",alt:""}})]),t._v(" "),a("p",[t._v("上图展示的是未汉化的"),a("code",[t._v("VScode")]),t._v("，"),a("code",[t._v("VScode")]),t._v("是可以通过插件配置设置成中文的。"),a("a",{attrs:{href:"https://blog.csdn.net/qq_24118527/article/details/82793610",target:"_blank",rel:"noopener noreferrer"}},[t._v("点此阅读"),a("code",[t._v("VScode")]),t._v("的汉化教程。"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"title"},[t._v("务必学会VScode或者是其他现代化的JavaScript代码打开软件")]),a("p",[t._v("第二版作者更愿意称呼为学习使用一款"),a("strong",[t._v("代码编辑器")]),t._v("来打开并编辑"),a("code",[t._v("JavaScript")]),t._v("。")]),t._v(" "),a("p",[t._v("第二版会大量地使用关于"),a("code",[t._v("VScode")]),t._v("的"),a("strong",[t._v("插件")]),t._v("，"),a("strong",[t._v("快捷键")]),t._v("等工具来教学，请务必学会"),a("code",[t._v("VScode")]),t._v("。"),a("a",{attrs:{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("点此下载VScode。"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("笔者跟推荐各位使用更加现代化的，专业的"),a("code",[t._v("WebStorm")]),t._v("来打开"),a("code",[t._v("mv")]),t._v("项目。笔者希望大家打开的是一个"),a("code",[t._v("mv")]),t._v("项目，而不是单独的，孤立的一份"),a("code",[t._v("JavaScript")]),t._v("代码。希望大家能够用整体的思想来看待"),a("code",[t._v("mv")]),t._v("项目")])]),a("h2",{attrs:{id:"快速运行javascript代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速运行javascript代码"}},[t._v("#")]),t._v(" 快速运行JavaScript代码 "),a("Badge",{attrs:{text:"拓展"}})],1),t._v(" "),a("p",[a("code",[t._v("mv")]),t._v("项目是运行在浏览器内的游戏，你可以按"),a("code",[t._v("F12")]),t._v("键，在浏览器提供的控制台内直接输入一些"),a("code",[t._v("JavaScript")]),t._v("代码并运行。这个技巧也可以用于mv项目的快速调试。")]),t._v(" "),a("h2",{attrs:{id:"在事件中使用脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在事件中使用脚本"}},[t._v("#")]),t._v(" 在事件中使用脚本")]),t._v(" "),a("p",[t._v("事实上，我们在事件中除了可以使用插件定义好的插件命令外，还可以直接在事件中嵌套入JavaScript语句。如图所示。\n"),a("img",{attrs:{src:"https://rpg.blue/data/attachment/forum/201608/15/162946j3zxgkxx93ks39kx.png",alt:""}})]),t._v(" "),a("p",[t._v("在事件中插入脚本，即"),a("code",[t._v("JavaScript")]),t._v("语句，之后在游戏中可以通过事件来触发，如图。\n"),a("img",{attrs:{src:"https://rpg.blue/data/attachment/forum/201608/15/162946wvf2vvlwzcjtree8.png",alt:""}})]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"title"},[t._v("规范化")]),a("p",[t._v("新版不建议在"),a("code",[t._v("mv")]),t._v("的事件内编写"),a("code",[t._v("JavaScript")]),t._v("，这不方便代码调试与管理。应当仅通过调用方法的方式执行"),a("code",[t._v("JavaScript")]),t._v("逻辑。")])])])}),[],!1,null,null,null);v.default=r.exports}}]);