# vue2.7 尴尬的过渡版本

这个版本太特殊了。值得讨论。本文章内容偏向于主观。

## 升级指南

- [迁移至 Vue 2.7](https://v2.cn.vuejs.org/v2/guide/migration-vue-2-7.html)
- [2023 年初，我的 Vue2.7 升级实践踩坑总结](https://juejin.cn/post/7190297574694191163)
- [webpack5 + vue 2.6 => vue2.7 升级踩坑备忘录](https://juejin.cn/post/7131889718366568455)

## 综合态度

升级了。但是只能升级一点点。这是一个很尴尬的版本。

## 为什么要升级？

期望使用并享受 setup 组合式 api 带来的代码编写便利。

## 升级前的技术积累？

事实上，应该先学习 vue3 的技术，熟练使用 vue3 的最新语法糖和 setup 组合式 api 写法。然后才开始使用 vue2.7 的组合式 api。

## 尴尬

### 生态系统完全跟不上

有很多踩坑。最重要的一点是，vue2 时代的一揽子库，均跟不上 SFCs 的 `<script setup>` 语法糖。比如：

- 在 2.7 的 `<script setup>` 中，无法使用 vuex 常用的辅助函数。
- 2.7 的 `<script setup>` 无法使用 vue-router 的组合式 api。常用的后台管理系统根本不敢去升级路由版本，因为 api 改动过大。为了单纯的组合式 api 而对框架做升级根本不划算。
- 2.7 无法充分使用 vue-i18n 的组合式 api。v8 的是 vue2 的，v9 才提供了组合式 api，但是 v9 只面向与 vue3。

（备注 2.7 也可以使用 vue-i18n 提供的组合式 api，不过需要额外的库实现。）

### 自我阉割

有许多常用的功能丢了，没了，变差了。比如：

- this 实例的获取非常麻烦，还需要考虑生产环境能否访问。有的时候你还真的需要去访问 this 示例的。
- 2.7 的 `<script setup>` 仅仅允许单一模块导出，不允许同时导出多个模块。这限定死了某些特殊的代码写法。

### 不能完全使用 vue3 的语法

2.7 事实上不能充分的发挥 vue3 的技术。凡是 vue3 更新了更好的语法糖，你都没有资格在 2.7 内使用。我经常写 vue3，然后再切换回 2.7，我是会会明显感受到限制。这会给我带来相当大的心智负担，我需要额外考虑，2.7 不能使用最新的语法糖。

## 目前涌现出来的 vue 代码编写风格选型？

事实上出现了多种多样的代码写法了，我们需要权衡利弊。

### vue2.6 + export default {option} + js + vetur <Badge text="还行" type="info" />

这是最传统的代码写法。由 vetur 提供 vue 的语言服务。还算可以。

该写法是大家所熟知的写法。大家都会写，都熟悉。上来就能写，并实现业务。

该写法在规模化的组件内，确实被诟病。这是选项式 api 本身的弊端。

### vue2.7 + export default defineComponent({option}) + js + volar <Badge text="推荐" type="tip" />

这个写法以增量的形式，拓展了很多功能。又不至于因为 vue2.7 + `<script setup>` 的缘故导致部分语法不能使用。

### vue2.7 + `<script setup>` + js + volar <Badge text="坐牢" type="danger" />

不做赘述。自我阉割，废物一个。垃圾玩意。

### vue3 + `<script setup>` + ts + volar <Badge text="做不到" type="note" />

很抱歉，客观来说我们做不到。我做得到，我们做不到。

#### 旧项目本身的升级成本过大

项目体量巨大时，你升级和迁移都忙不过来的。你来不及全面重构。

#### 仅新项目可用

仅仅只有全新的项目，我们才有资格说，使用全套的，全新的技术栈。

#### 对开发团队的技术栈要求过高

不要小瞧了这个写法的变更。写代码的不只有前端同事，还有后端同事。我们根本无法保证全体开发同事能够看懂 vue3 的新语法，typescript 的类型语法。学这些技术要时间的，我们团队没有时间去学习这些颠覆性的技术。大家习惯旧版本的语法了，新语法改动挺大的，大家学不完。

#### 诸多不确定性

对于我来说，我仅仅只是在后台内使用 vue3 技术栈。没有在移动端内使用该技术栈，更不清楚写一些移动端核心的依赖包能不能较好的兼容。

#### 没有成熟的二开框架

我是没有找到一款成熟的，开箱即用的，文档丰富的后台二开框架。就算找到了，团队更换框架的成本也是付不起的。

## 总结

- 不要迷信组合式 api 能改变什么。
- 2.7 不配。
