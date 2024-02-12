<template>
    <Navbar />
    <v-container>
        <v-card class="mx-auto" max-width="400">
            <v-card-title class="text-center">Login</v-card-title>
            <v-card-text>
                <v-form @submit.prevent="login">
                    <v-text-field v-model="username" label="Username" outlined :rules="[rules.required]"></v-text-field>
                    <v-text-field v-model="password" label="Password" type="password" outlined
                        :rules="[rules.required]"></v-text-field>
                    <v-btn color="primary" block type="submit">Login</v-btn>
                    <br />
                    <router-link to="/user/register">
                        <v-btn color="primary" block>Register</v-btn>
                    </router-link>
                </v-form>
                <v-divider></v-divider>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
import Navbar from '../../partial/Navbar.vue'
import axios from '../../../services/axios'
import { useToast } from "vue-toastification"
import router from '../../../services/router.js'
import { VContainer, VCard, VForm, VBtn, VDivider, VTextField, VCardText, VCardTitle } from 'vuetify/lib/components'
const toast = useToast()
export default {
    data() {
        return {
            username: '',
            password: '',
            rules: {
                required: value => !!value || 'Required.',
            },
        }
    },
    name: 'LoginView',
    components: {
        Navbar,
        VContainer, VCard, VForm, VBtn, VDivider, VTextField, VCardText, VCardTitle
    },
    methods: {
        async login() {
            try {
                if (!this.username || !this.password) return
                const response = await axios.post('/auth/login', { 'username': this.username, 'password': this.password })
                document.cookie = `jwt=${response.data}; path=/`
                router.push('/')
            } catch (error) {
                toast.error('Invalid username/password combination.')
            }
        }
    }
}
</script>