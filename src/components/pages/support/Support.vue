<template>
    <v-layout class="rounded rounded-md">
        <Navbar />
        <SideNavDrawer />
        <br />
        <v-main>
            <h3>Support</h3>
            <br />
            <v-container>
                <p>This application was written as a masters project to work with machine learning for the University of
                    Louisville. If you have any issues or concerns with this application please email
                    scpitc01@louisville.edu</p>
            </v-container>
        </v-main>
    </v-layout>
</template>

<script>
import { VLayout, VMain, VContainer } from 'vuetify/lib/components'
import Navbar from '../../partial/Navbar.vue'
import SideNavDrawer from '../../partial/SideNavDrawer.vue'

export default {
    name: 'SupportView',
    data() {
        return {
        }
    },
    components: {
        Navbar,
        VLayout,
        VMain,
        VContainer,
        SideNavDrawer
    }
}
</script>