<template>
    <v-layout class="rounded rounded-md">
        <Navbar />
        <SideNavDrawer />
        <br />
        <v-main>
            <h3>Rated Destinations</h3>
            <br />
            <v-container v-if="isLoading">
                <h3>Is Loading...</h3>
            </v-container>
            <v-container v-else>
                <v-data-table :headers="headers" :items="responseData" item-key="_id" class="elevation-1">
                    <template v-slot:item="{ item }">
                        <tr>
                            <td>{{ item.destinationsObject.state }}</td>
                            <td>{{ item.destinationsObject.city }}</td>
                            <td><v-rating v-model="item.rating" readonly half-increments hover active-color="blue"
                                    color="orange-lighten-1"></v-rating></td>
                            <td>
                                <v-btn icon="mdi-pencil" @click="goToEditPage(item.destinationId)"></v-btn>
                            </td>
                            <td>
                                <v-btn icon="mdi-trash-can" @click="navigateToRatingsPage(item._id)"></v-btn>
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
    name: 'ListRatedDestinationsView',
    data() {
        return {
            responseData: [],
            isLoading: false,
            headers: [
                { title: 'City', value: 'destinationsObject.city' },
                { title: 'State', value: 'destinationsObject.state' },
                { title: 'Rating', value: 'rating' },
                { title: 'Edit', value: 'action', sortable: false },
                { title: 'Delete', value: 'action', sortable: false }
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
                const response = await axios.get(`/destination/rating/${userId}`)
                this.responseData = response.data
                console.log(this.responseData)
                this.isLoading = false
            } catch (error) {
                toast.error('Unable to retrieve users destination information. Please try to load the page again or contact the admin.')
            }
        },
        async goToEditPage(destinationId) {
            router.push(`/destination/rating/${destinationId}`)
        },
        async removeRating(destinationRatingId) {
            console.log(destinationRatingId)
        }
    }
}
</script>