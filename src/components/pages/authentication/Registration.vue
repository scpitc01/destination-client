<template>
    <Navbar />
    <v-container>
        <v-card class="mx-auto" max-width="400">
            <v-card-title class="text-center">Registration</v-card-title>
            <v-card-text>
                <v-form @submit.prevent="register">
                    <v-text-field v-model="userObject.username" label="Username" outlined
                        :rules="[rules.required]"></v-text-field>
                    <v-text-field v-model="userObject.password" label="Password" type="password" outlined
                        :rules="[rules.required]"></v-text-field>
                    <v-text-field v-model="userObject.confirmPassword" label="Confirm Password" type="password" outlined
                        :rules="[rules.required]"></v-text-field>
                    <v-text-field v-model="userObject.email" label="Email" outlined></v-text-field>
                    <v-btn color="primary" block type="submit">Register</v-btn>
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
import { VContainer, VCard, VForm, VBtn, VDivider, VTextField, VCardText, VCardTitle } from 'vuetify/lib/components'
const toast = useToast()
export default {
    data() {
        return {
            userObject: {
                username: '',
                password: '',
                confirmPassword: '',
                email: ''
            },
            rules: {
                required: value => !!value || 'Required.',
            },
        }
    },
    name: 'RegistrationView',
    components: {
        Navbar,
        VContainer, VCard, VForm, VBtn, VDivider, VTextField, VCardText, VCardTitle
    },
    methods: {
        async register() {
            try {
                if (this.userObject.password !== this.userObject.confirmPassword) toast.error('The passwords must match.')
                if (!this.userObject.username || !this.userObject.password || !this.userObject.confirmPassword) return
                await axios.post('/auth/register', this.userObject)
            } catch (error) {
                toast.error('Invalid username/password combination.')
            }
        }
    }
}
</script>