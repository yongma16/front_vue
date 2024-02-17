// import { useStore } from "vuex";
import * as VueRouter from "vue-router";


// import.meta.glob() 直接引入所有的模块 Vite 独有的功能
const modules = import.meta.glob('./modules/**/*.ts', { eager: true });

const routeModuleList:any=[]
// 加入到路由集合中
Object.keys(modules).forEach((key) => {
    const mod = modules[key].default || {};
    const modList = Array.isArray(mod) ? [...mod] : [mod];
    console.log('modList',modList)
    routeModuleList.push(...modList);
});

const router: any = VueRouter.createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: VueRouter.createWebHashHistory(),
    routes: routeModuleList,
});
// 路由权限  beforeResolve
router.beforeResolve(async (to: any, from: any, next: any) => {
    return next()
});
export default router;
