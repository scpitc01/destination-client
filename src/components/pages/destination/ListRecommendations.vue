<template>
    <v-layout class="rounded rounded-md">
        <Navbar />
        <SideNavDrawer />
        <br />
        <v-main>
            <h3>Recommended Destinations</h3>
            <br />
            <v-container v-if="isLoading">
                <h3>Is Loading...</h3>
            </v-container>
            <v-container v-else>
                <v-data-table :headers="headers" :items="responseData" item-key="_id" class="elevation-1">
                    <template v-slot:item="{ item }">
                        <tr>
                            <td>{{ item.state }}</td>
                            <td>{{ item.city }}</td>
                            <td><v-rating v-model="item.estimatedRating" readonly half-increments hover
                                    active-color="blue" color="orange-lighten-1"></v-rating></td>
                            <td>
                                <v-btn icon="mdi-pencil" @click="goToEditPage(item._id)"></v-btn>
                            </td>
                        </tr>
                    </template>
                </v-data-table>
            </v-container>
        </v-main>
    </v-layout>
</template>

<script>
import axios from '../../../services/axios'
import router from '../../../services/router.js'
import { useToast } from "vue-toastification"
import { VLayout, VMain, VContainer, VDataTable, VRating, VBtn } from 'vuetify/lib/components'
import Navbar from '../../partial/Navbar.vue'
import SideNavDrawer from '../../partial/SideNavDrawer.vue'
const toast = useToast()

export default {
    name: 'ListRecommendationsView',
    data() {
        return {
            responseData: [],
            isLoading: false,
            headers: [
                { title: 'City', value: 'city' },
                { title: 'State', value: 'state' },
                { title: 'Rating', value: 'estimatedRating' },
                { title: 'Edit', value: 'action', sortable: false }
            ]
        }
    },
    props: {
        msg: String
    }, created() {
        this.fetchData(this.$route.params.id)
    },
    components: {
        Navbar,
        VLayout,
        VMain,
        VContainer,
        VDataTable,
        VRating,
        VBtn,
        SideNavDrawer
    }, methods: {
        async fetchData(userId) {
            try {
                this.isLoading = true
                const response = await axios.get(`destination/recommendation/${userId}`)
                this.responseData = response.data
                console.log(this.responseData)
                this.isLoading = false
            } catch (error) {
                console.log(error)
                toast.error(`Unable to retrieve users destination information. ${error.response.data.message}`)
            }
        },
        async goToEditPage(destinationId) {
            router.push(`/destination/rating/${destinationId}`)
        }
    }
}
</script>