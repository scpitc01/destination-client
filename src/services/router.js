import { createRouter, createWebHistory } from 'vue-router' // Import Vue Router functions
import Home from '../components/pages/Home.vue'
import Login from '../components/pages/authentication/Login.vue'
import Registration from '../components/pages/authentication/Registration.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home, meta: { requiresAuth: true } },
        { path: '/user/login', component: Login },
        { path: '/user/register', component: Registration }
    ]
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)jwt\s*=\s*([^;]*).*$)|^.*$/, '$1')
        if (!token) {
            // Redirect to login page if JWT token is missing
            next('/user/login')
        } else {
            // Continue to the requested route
            next()
        }
    } else {
        // Continue to the requested route
        next()
    }
})

export default router