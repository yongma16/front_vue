import { createApp } from "vue";
import App from "./App.vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import Router from "./router/index.ts";
import store from "./store/index.js";
const app = createApp(App);
app.use(Antd);
// store
app.use(store);
// router
app.use(Router);
app.mount("#app");
