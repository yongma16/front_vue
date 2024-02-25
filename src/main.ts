import { createApp } from "vue";
import App from "./App.vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import Router from "./router/index.ts";
const app = createApp(App);
app.use(Antd);
// router
app.use(Router);
app.mount("#app");
