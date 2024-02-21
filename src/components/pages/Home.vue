<template>
    <v-layout class="rounded rounded-md">
        <Navbar />
        <SideNavDrawer />
        <v-main class="d-flex justify-center align-center h-100">
            Main Content
        </v-main>
    </v-layout>
</template>

<script>
import { VLayout, VMain } from 'vuetify/lib/components'

import Navbar from '../partial/Navbar.vue'
import SideNavDrawer from '../partial/SideNavDrawer.vue'
export default {
    name: 'TestView',
    props: {
        msg: String
    },
    components: {
        Navbar,
        VLayout,
        VMain,
        SideNavDrawer
    }
}
</script>