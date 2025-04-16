import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: '/index'
        },
        {
            path: '/home',
            name: 'Home',
            component: () => import('../views/home/Home.vue')
        },
        {
            path: '/index',
            name: 'Index',
            component: () => import('../views/index/Index.vue')
        }
    ]
});

export default router;
