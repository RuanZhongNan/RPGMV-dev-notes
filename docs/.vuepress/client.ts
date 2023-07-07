import { defineClientConfig } from "@vuepress/client";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import DrillGoods from "./components/drill-goods/DrillGoods.vue";

export default defineClientConfig({
	enhance: ({ app, router, siteData }) => {
		app.use(ElementPlus);
		app.component("DrillGoods", DrillGoods);
	},
});
