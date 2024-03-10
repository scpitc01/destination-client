<template>
    <v-layout class="rounded rounded-md">
        <Navbar />
        <SideNavDrawer />
        <v-main>
            <v-container v-if="isLoading">
                <h3>Is Loading...</h3>
            </v-container>
            <div v-else>
                <v-container>
                    <h3>Destination Rating for {{ responseData.city }}, {{ responseData.state }}</h3>
                    <br />
                    <v-row>
                        <v-rating v-model="destinationRating.rating" half-increments hover active-color="blue"
                            color="orange-lighten-1"></v-rating>
                        &nbsp;&nbsp;
                        <v-btn color="primary" @click="saveRating" type="submit">Update Rating</v-btn>
                    </v-row>
                    <v-row>

                        <v-checkbox cols="3" :disabled="true" label="Amusment Park"
                            v-model="responseData.hasAmusementPark"></v-checkbox>
                        <v-checkbox cols="3" :disabled="true" label="Aquarium"
                            v-model="responseData.hasAquarium"></v-checkbox>
                        <v-checkbox cols="3" :disabled="true" label="Artistic Plays"
                            v-model="responseData.hasArtisticsPlays"></v-checkbox>
                    </v-row>
                    <v-row>
                        <v-checkbox cols="3" :disabled="true" label="Beach" v-model="responseData.hasBeach"></v-checkbox>
                        <v-checkbox cols="3" :disabled="true" label="Casino" v-model="responseData.hasCasino"></v-checkbox>
                        <v-checkbox cols="3" :disabled="true" label="Mountains"
                            v-model="responseData.hasMountains"></v-checkbox>
                    </v-row>
                    <v-row>
                        <v-checkbox cols="3" :disabled="true" label="Musuems" v-model="responseData.hasMuseum"></v-checkbox>
                        <v-checkbox cols="3" :disabled="true" label="Night Life"
                            v-model="responseData.hasNightLife"></v-checkbox>
                        <v-checkbox cols="3" :disabled="true" label="Outdoor Activities"
                            v-model="responseData.hasOutdoorActivities"></v-checkbox>
                    </v-row>
                    <v-row>
                        <v-checkbox cols="3" :disabled="true" label="Skiing" v-model="responseData.hasSkiing"></v-checkbox>
                        <v-checkbox cols="3" :disabled="true" label="Sports Stadiums"
                            v-model="responseData.hasSportStadium"></v-checkbox>
                        <v-checkbox cols="3" :disabled="true" label="Zoos" v-model="responseData.hasZoo"></v-checkbox>
                    </v-row>
                    <v-row v-if="responseData?.aquariumResults?.length > 0">
                        <h4>Aquarium Results</h4>
                        <v-data-table :headers="headers" :items="responseData.aquariumResults" item-key="name"
                            class="elevation-1">
                            <template v-slot:item="{ item }">
                                <tr>
                                    <td>{{ item.name }}</td>
                                    <td>{{ item.type }}</td>
                                    <td>{{ item.address }}</td>
                                </tr>
                            </template>
                        </v-data-table>
                    </v-row>
                    <v-row v-if="responseData?.gamblingResults?.length > 0">
                        <h4>Gambling Results</h4>
                        <v-data-table :headers="headers" :items="responseData.gamblingResults" item-key="name"
                            class="elevation-1">
                            <template v-slot:item="{ item }">
                                <tr>
                                    <td>{{ item.name }}</td>
                                    <td>{{ item.type }}</td>
                                    <td>{{ item.address }}</td>
                                </tr>
                            </template>
                        </v-data-table>
                    </v-row>
                    <v-row v-if="responseData?.landMarkResults?.length > 0">
                        <h4>Landmark Results</h4>
                        <v-data-table :headers="headers" :items="responseData.landMarkResults" item-key="name"
                            class="elevation-1">
                            <template v-slot:item="{ item }">
                                <tr>
                                    <td>{{ item.name }}</td>
                                    <td>{{ item.type }}</td>
                                    <td>{{ item.address }}</td>
                                </tr>
                            </template>
                        </v-data-table>
                    </v-row>
                    <v-row v-if="responseData?.museumResults?.length > 0">
                        <h4>Museum Results</h4>
                        <v-data-table :headers="headers" :items="responseData.museumResults" item-key="name"
                            class="elevation-1">
                            <template v-slot:item="{ item }">
                                <tr>
                                    <td>{{ item.name }}</td>
                                    <td>{{ item.type }}</td>
                                    <td>{{ item.address }}</td>
                                </tr>
                            </template>
                        </v-data-table>
                    </v-row>
                    <v-row v-if="responseData?.nightLifeResults?.length > 0">
                        <h4>Night Life Results</h4>
                        <v-data-table :headers="headers" :items="responseData.nightLifeResults" item-key="name"
                            class="elevation-1">
                            <template v-slot:item="{ item }">
                                <tr>
                                    <td>{{ item.name }}</td>
                                    <td>{{ item.type }}</td>
                                    <td>{{ item.address }}</td>
                                </tr>
                            </template>
                        </v-data-table>
                    </v-row>
                    <v-row v-if="responseData?.restaurantResults?.length > 0">
                        <h4>Restaurant Results</h4>
                        <v-data-table :headers="headers" :items="responseData.restaurantResults" item-key="name"
                            class="elevation-1">
                            <template v-slot:item="{ item }">
                                <tr>
                                    <td>{{ item.name }}</td>
                                    <td>{{ item.type }}</td>
                                    <td>{{ item.address }}</td>
                                </tr>
                            </template>
                        </v-data-table>
                    </v-row>
                    <v-row v-if="responseData?.skiingResults?.length > 0">
                        <h4>Skiing Results</h4>
                        <v-data-table :headers="headers" :items="responseData.skiingResults" item-key="name"
                            class="elevation-1">
                            <template v-slot:item="{ item }">
                                <tr>
                                    <td>{{ item.name }}</td>
                                    <td>{{ item.type }}</td>
                                    <td>{{ item.address }}</td>
                                </tr>
                            </template>
                        </v-data-table>
                    </v-row>
                    <v-row v-if="responseData?.theaterResults?.length > 0">
                        <h4>Theater Results</h4>
                        <v-data-table :headers="headers" :items="responseData.theaterResults" item-key="name"
                            class="elevation-1">
                            <template v-slot:item="{ item }">
                                <tr>
                                    <td>{{ item.name }}</td>
                                    <td>{{ item.type }}</td>
                                    <td>{{ item.address }}</td>
                                </tr>
                            </template>
                        </v-data-table>
                    </v-row>
                    <v-row v-if="responseData?.zooResults?.length > 0">
                        <h4>Zoo Results</h4>
                        <v-data-table :headers="headers" :items="responseData.zooResults" item-key="name"
                            class="elevation-1">
                            <template v-slot:item="{ item }">
                                <tr>
                                    <td>{{ item.name }}</td>
                                    <td>{{ item.type }}</td>
                                    <td>{{ item.address }}</td>
                                </tr>
                            </template>
                        </v-data-table>
                    </v-row>
                </v-container>
            </div>
        </v-main>
    </v-layout>
</template>

<script>
import axios from '../../../services/axios'
import { useToast } from "vue-toastification"
import { VContainer, VLayout, VMain, VRating, VRow, VBtn, VCheckbox, VDataTable } from 'vuetify/lib/components'
import Navbar from '../../partial/Navbar.vue'
import SideNavDrawer from '../../partial/SideNavDrawer.vue'
const toast = useToast()

export default {
    name: 'DestinationRating',
    data() {
        return {
            responseData: {},
            isLoading: false,
            rating: 0,
            headers: [
                { title: 'Name', value: 'name' },
                { title: 'Type', value: 'type' },
                { title: 'Address', value: 'address' }
            ],
            destinationRating: {
                _id: '',
                rating: 0,
                userId: null,
                destinationId: null
            }
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
        VCheckbox,
        VDataTable,
        SideNavDrawer
    }, methods: {
        async fetchData(id) {
            try {
                const userId = document.cookie.replace(/(?:(?:^|.*;\s*)userId\s*=\s*([^;]*).*$)|^.*$/, '$1')
                this.isLoading = true
                const response = await axios.get(`/destination/${id}`)
                const destinationResponse = await axios.get(`/destination/rating/${userId}/${id}`)
                if (destinationResponse.data) {
                    this.destinationRating = destinationResponse.data
                }
                this.responseData = response.data
                this.isLoading = false
            } catch (error) {
                toast.error('Unable to retrieve destination information. Please try to add the destination again or contact the admin.')
            }
        },
        async saveRating() {
            if (this.destinationRating?._id == '') {
                try {
                    this.destinationRating.userId = document.cookie.replace(/(?:(?:^|.*;\s*)userId\s*=\s*([^;]*).*$)|^.*$/, '$1')
                    this.destinationRating.destinationId = this.$route.params.id
                    await axios.post(`/destination/rating`, this.destinationRating)
                }
                catch (err) {
                    toast.error('Unable create new destination rating. Please let the owner know if this error')
                }

            }
            else {
                try {
                    await axios.patch(`/destination/rating`, this.destinationRating)
                }
                catch (err) {
                    toast.error('Unable to update destination rating. Please let the owner know if this error persists.')
                }
            }
        }
    }
}

</script>