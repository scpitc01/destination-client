import { createApp } from 'vue'
import App from './App.vue'
import { createVuetify } from 'vuetify'
import Toast from "vue-toastification"
import router from './services/router'
import 'vue-toastification/dist/index.css'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.min.css'

const app = createApp(App)
const vuetify = createVuetify() // Create a Vuetify instance
app.use(Toast)
app.use(vuetify) // Use the Vuetify instance in the app
app.use(router) // Use the router instance in the app
app.mount('#app')
