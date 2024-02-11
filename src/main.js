import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router' // Import Vue Router functions
import Home from './components/pages/Home.vue'
import Login from './components/pages/authentication/Login.vue'
import Registration from './components/pages/authentication/Registration.vue'
import { createVuetify } from 'vuetify'
import Toast from "vue-toastification"
import 'vue-toastification/dist/index.css'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.min.css'

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

const app = createApp(App)
const vuetify = createVuetify() // Create a Vuetify instance
app.use(Toast)
app.use(vuetify) // Use the Vuetify instance in the app
app.use(router) // Use the router instance in the app
app.mount('#app')
