const dashboardRoutes = [
    {
        path: '/dashboard',
        name: 'dashboard-index',
        component: () => import('@/views/Dashboard/index.vue'),
        meta: {
            title: '',
        },
        children: [
            {
                path: 'welcome',
                name: 'dashboard-welcome',
                component: () => import('@/views/Dashboard/Welcome/index.vue'),
            }
        ],
    },
];

export default dashboardRoutes;