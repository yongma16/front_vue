// 基础路由
// @ts-ignore
import LAYOUT from '@/layout/index.vue'

export default {
    path: '/',
    name: 'Layout',
    component: LAYOUT,
    // redirect: '/Layout/demo',
    meta: {
        orderNo: 1,
        key: '1',
        icon: 'ion:grid-outline',
        title: 'vue3平台',
    },
    children: [
        {
            path: 'demo',
            name: 'demo',
            // @ts-ignore
            component: () => import('@/views/demo/demo.vue'),
            meta: {
                // affix: true,
                icon: 'ion:grid-outline',
                title: 'demo',
            },
        },
        {
            path: 'page-a',
            name: 'page-a',
            // @ts-ignore
            component: () => import('@/views/page-a/index.vue'),
            meta: {
                // affix: true,
                icon: 'ion:grid-outline',
                title: 'page-a',
            },
        },
        {
            path: 'page-b',
            name: 'page-b',
            // @ts-ignore
            component: () => import('@/views/page-b/index.vue'),
            meta: {
                // affix: true,
                icon: 'ion:grid-outline',
                title: 'page-b',
            },
        },
    ],
};
