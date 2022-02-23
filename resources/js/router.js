
import { createRouter, createWebHistory } from 'vue-router';

import EventCreator from './pages/EventCreator';
import NotFound from './layouts/NotFound'

export const router = createRouter({
    history: createWebHistory(),
    linkExactActiveClass: 'active',
    routes: [
        {
            path: '/',
            name: 'home',
            component: EventCreator
        },
        {
            path: '/:catchAll(.*)',
            name: 'not-found',
            component: NotFound
        },
    ]
});

export default router;