import { createRouter, createWebHistory } from 'vue-router' // Import Vue Router functions
import Home from '../components/pages/Home.vue'
import Login from '../components/pages/authentication/Login.vue'
import Registration from '../components/pages/authentication/Registration.vue'
import AddDestination from '../components/pages/destination/SearchDestination.vue'
import AddDestinationRating from '../components/pages/destination/DestinationRating.vue'
import axios from './axios'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home, meta: { requiresAuth: true } },
        { path: '/user/login', component: Login },
        { path: '/user/register', component: Registration },
        { path: '/destination/add', component: AddDestination, meta: { requiresAuth: true } },
        { path: '/destination/rating/:id', component: AddDestinationRating, meta: { requiresAuth: true } }
    ]
})

router.beforeEach(async (to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)jwt\s*=\s*([^;]*).*$)|^.*$/, '$1')
        if (!token) {
            // Redirect to login page if JWT token is missing
            next('/user/login')
        } else {
            try {
                await axios.get('/auth/token/valid')
                next()
            }
            catch (err) {
                console.log(err)
                next('/user/login')
            }
        }
    } else {
        // Continue to the requested route
        next()
    }
})

export default router