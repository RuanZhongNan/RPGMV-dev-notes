# 业务

这里记录和 h5mota 网站重构内容的相关业务

- [旧版页面](https://h5mota.com/playNew.php)
- [新版页面](https://h5mota.com/play/)

## 玩塔页面 用户核心的玩塔页面

### 卡片样式？

之所以要有，是因为有一些人喜欢
https://h5mota.com/playNew.php 的卡片

但是另一些人喜欢
h5mota.com/indexPre.php

具体来说，一些人希望卡片上显示封面，而另一些人更想看通关情况和当前的榜首

由于卡片设计上无法做到同时满足需求，因此提供了这个按钮

然后记得保证手机体验

### 卡片样式参考链接

- https://h5mota.com/playNew.php
- h5mota.com/indexPre.php

### 产品业务设计

不对旧版卡片的展示字段，UI 设计，交互方式做讨论和改造。团队内无法敲定该部分的内容。

### 开发要求

- 提供卡片样式任意切换的按钮栏 允许用户切换成多种版本的 UI 展示样式
- 旧版卡片不改动样式
- 新版卡片保留一部分的字段，剩下的交互行为自由发挥

### 开发待办

- [ ] 补全玩塔页面核心的筛选框功能
- [ ] 收藏的塔
- [ ] 最近游玩