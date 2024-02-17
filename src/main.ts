// @ts-ignore
import { createApp } from "vue";
// @ts-ignore
import App from "./App.vue";
// @ts-ignore
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
// @ts-ignore
import Router from "./router/index.ts";
const app = createApp(App);
app.use(Antd);
// router
app.use(Router);
app.mount("#app");
