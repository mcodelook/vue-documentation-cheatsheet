import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../core/views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
            children: [
                {
                    path: ':tab?',
                    name: 'tab',
                    component: HomeView,
                    beforeEnter: (to, from, next) => {
                        const validTabs = [
                            'essentials',
                            'componentsindepth',
                            'reusability',
                            'builtincomponents',
                            'other'
                        ]
                        if (validTabs.includes(to.params.tab)) {
                            next()
                        } else {
                            next('/essentials')
                        }
                    }
                }
            ]
        }
    ]
})

export default router
