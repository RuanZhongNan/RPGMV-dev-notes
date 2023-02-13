// 侧边栏 和 顶部导航栏的数组形式配置类型
import {
  SidebarArrayOptions,
  NavbarOptions,
  SidebarGroupItem,
  SidebarStructureItem,
  SidebarItem,
} from 'vuepress-theme-hope';

/** 本地自定义的 共同数组类型 @deprecated 实际使用的时候 类型无法共同使用 */
type CommonArrayOptions = SidebarArrayOptions | NavbarOptions;

/** 顶部导航栏配置数组 */
export const navConfList: NavbarOptions = [
  {
    text: '插件开发',
    prefix: '/developing-rmmv-plugins/',
    children: [
      'index/',
      'source-code-infrastructure/',
      'plugins-infrastructure/',
      'basic-concept/',
      'nature/',
    ],
  },

  {
    text: '源码解析',
    prefix: '/understand-source-code/',
    children: [
      '菜单的背景图为什么是当前场景截图/',
      '场景类所需的基本函数/',
      '地图场景与菜单场景之间的切换/',
      '窗口速查表/',
      // 'source-code-infrastructure/',
      // 'plugins-infrastructure/',
      // 'basic-concept/',
      // 'nature/',
    ],
  },
];

(navConfList as SidebarGroupItem[]).forEach((elm) => (elm.collapsible = true));

/** 左侧侧边栏配置数组 */
export const sideConfList: SidebarArrayOptions = [
  ...navConfList,
  {
    text: '阮喵喵自己的笔记',
    prefix: '阮喵喵自己的笔记/',
    children: 'structure',
    collapsible: true,
  },
];
