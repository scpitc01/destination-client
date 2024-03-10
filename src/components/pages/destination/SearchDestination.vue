<template>
    <v-layout class="rounded rounded-md">
        <Navbar />
        <SideNavDrawer />
        <v-main>
            <v-container>
                <h3>Destination Search</h3>
                <v-form @submit.prevent="searchForDestination">
                    <v-row>
                        <v-col cols="10" md="6">
                            <v-select v-model="citySearchObject.stateAbbreviation" :rules="[rules.required]"
                                :items="['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY']"
                                label="State" outlined required></v-select>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-text-field label="City" v-model="citySearchObject.city" :rules="[rules.required]"
                                outlined></v-text-field> </v-col>
                    </v-row>
                    <v-btn color="primary" type="submit">Submit</v-btn>
                </v-form>
            </v-container>
            <v-container v-if="results.length > 0">
                <h3>Results</h3>
                <v-data-table :headers="headers" :items="results" item-key="_id" class="elevation-1">
                    <template v-slot:item="{ item }">
                        <tr>
                            <td>{{ item.state }}</td>
                            <td>{{ item.city }}</td>
                            <td>
                                <v-btn text @click="navigateToRatingsPage(item._id)">Details</v-btn>
                            </td>
                        </tr>
                    </template>
                </v-data-table>
            </v-container>
            <v-container v-else>
                <h3>No Results Found.</h3>
            </v-container>
        </v-main>
    </v-layout>
</template>

<script>
import axios from '../../../services/axios'
import { useToast } from "vue-toastification"
import { VContainer, VRow, VForm, VTextField, VBtn, VCol, VSelect, VLayout, VMain, VDataTable } from 'vuetify/lib/components'
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
            results: [],
            headers: [
                { title: 'State', value: 'state' },
                { title: 'City', value: 'city' },
                { title: 'Action', value: 'action', sortable: false }
            ],
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
        VContainer,
        VRow,
        VForm,
        VTextField,
        VBtn,
        VCol,
        VSelect,
        VLayout,
        VMain,
        VDataTable,
        SideNavDrawer
    }, methods: {
        async searchForDestination() {
            try {
                if (!this.citySearchObject.stateAbbreviation || !this.citySearchObject.city) return
                const response = await axios.post('/destination/', this.citySearchObject)
                this.results = [response?.data]
                console.log(response)
            } catch (error) {
                toast.error('Unable to retrieve location information')
            }
        },
        async navigateToRatingsPage(destinationId) {
            console.log(destinationId)
        }
    }
}

</script>