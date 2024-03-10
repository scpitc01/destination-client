<template>
    <v-layout class="rounded rounded-md">
        <Navbar />
        <SideNavDrawer />
        <v-main>
            <v-container v-if="isLoading">
                <h3>Is Loading...</h3>
            </v-container>
            <v-container v-else>
                <h3>Destination Rating for {{ responseData.city }}, {{ responseData.state }}</h3>
                <br />
                <v-row>
                    <v-rating v-model="rating" half-increments hover active-color="blue"
                        color="orange-lighten-1"></v-rating>
                    &nbsp;&nbsp;
                    <v-btn color="primary" type="submit">Update Rating</v-btn>
                </v-row>
            </v-container>
        </v-main>
    </v-layout>
</template>

<script>
import axios from '../../../services/axios'
import { useToast } from "vue-toastification"
import { VContainer, VLayout, VMain, VRating, VRow, VBtn } from 'vuetify/lib/components'
import Navbar from '../../partial/Navbar.vue'
import SideNavDrawer from '../../partial/SideNavDrawer.vue'
const toast = useToast()

export default {
    name: 'DestinationRating',
    data() {
        return {
            responseData: {},
            isLoading: false,
            rating: 0
        }
    },
    created() {
        this.fetchData(this.$route.params.id)
    },
    props: {
        msg: String
    },
    components: {
        Navbar,
        VContainer,
        VLayout,
        VMain,
        VRating,
        VRow,
        VBtn,
        SideNavDrawer
    }, methods: {
        async fetchData(id) {
            try {
                this.isLoading = true
                const response = await axios.get(`/destination/${id}`)
                this.responseData = response.data
                this.isLoading = false
            } catch (error) {
                toast.error('Unable to retrieve destination information. Please try to add the destination again or contact the admin.')
            }
        }
    }
}

</script>