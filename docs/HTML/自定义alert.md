---
title: 自定义alert
date: 2022-09-18 15:11:43
permalink: /pages/4f58e9/
categories: 
  - HTML
---




我这里没有找到‘window.alert’ 的样式调整方案。

目前有这样的方式来实现自定义弹框：
1： 使用‘custom elements’来实现自定义组件，自定义一个弹框。使用‘custom elements’技术，实现‘HTMLDialogElement’接口。
《custom elements》
https://developer.mozilla.org/zh-CN/docs/Web/Web_Components/Using_custom_elements

《HTMLDialogElement》
https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLDialogElement

2： 直接照搬组件库，实现更加容易自定义的弹框
《MessageBox 弹框》
https://element.eleme.cn/#/zh-CN/component/message-box#xiao-xi-ti-shi


如果实现了上述效果，并且实现了rmmv的插件化，联系QQ2715305267以通知该用户。