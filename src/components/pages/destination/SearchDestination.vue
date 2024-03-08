<template>
    <v-layout class="rounded rounded-md">
        <Navbar />
        <SideNavDrawer />
        <br />
        <v-main class="d-flex justify-center align-center h-100">
            <v-card>
                <v-card-title class="text-center">Search Destination</v-card-title>
                <v-card-text>
                    <v-form @submit.prevent="searchForDestination">
                        <v-combobox label="State" v-model="citySearchObject.stateAbbreviation" :rules="[rules.required]"
                            :items="['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY']"></v-combobox>
                        <v-text-field label="City" v-model="citySearchObject.city" :rules="[rules.required]"
                            outlined></v-text-field>
                        <v-btn color="primary" block type="submit">Search</v-btn>
                    </v-form>
                    <v-divider></v-divider>
                </v-card-text>
            </v-card>
        </v-main>
    </v-layout>
</template>

<script>
import axios from '../../../services/axios'
import { useToast } from "vue-toastification"
import { VLayout, VMain, VCard, VCardTitle, VCardText, VForm, VTextField, VBtn, VDivider, VCombobox } from 'vuetify/lib/components'
import Navbar from '../../partial/Navbar.vue'
import SideNavDrawer from '../../partial/SideNavDrawer.vue'
const toast = useToast()

export default {
    name: 'SearchDestination',
    data() {
        return {
            citySearchObject: {
                stateAbbreviation: '',
                city: ''
            },
            rules: {
                required: value => !!value || 'Required.',
            },
        }
    },
    props: {
        msg: String
    },
    components: {
        Navbar,
        VLayout,
        VMain,
        VCard,
        VCardTitle,
        VCardText,
        VForm,
        VTextField,
        VBtn,
        VDivider,
        VCombobox,
        SideNavDrawer
    }, methods: {
        async searchForDestination() {
            try {
                if (!this.citySearchObject.stateAbbreviation || !this.citySearchObject.city) return
                const response = await axios.post('/destination/', this.citySearchObject)
                console.log(response)
            } catch (error) {
                toast.error('Unable to retrieve location information')
            }
        }
    }
}

</script>