import dashboardRoutes from './dashboard/index.js';

export default [
    ...dashboardRoutes,
    {
        path: '/index',
        name: 'index-page',
        component: () => import('@/views/index.vue'),
        meta: {
            title: '欢迎',
        },
    },
];