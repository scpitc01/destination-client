<template>
    <v-navigation-drawer color="secondary" permanent hide-overlay>
        <v-list>
            <v-list-item><v-btn @click="goToDestinationRecommendation" block
                    type="submit">Destination<br />Recommendations</v-btn></v-list-item>
            <v-list-item><v-btn @click="goToAddDestinationPage" block
                    type="submit">Add<br />Destination</v-btn></v-list-item>
            <v-list-item><v-btn @click="listRatedDestinations" block type="submit">List
                    Rated<br />Destination</v-btn></v-list-item>
            <v-list-item><v-btn @click="goToSupport" block type="submit">Support</v-btn></v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
import { VList, VListItem, VNavigationDrawer, VBtn } from 'vuetify/lib/components'
import router from '../../services/router.js'

export default {
    name: 'SideNavDrawer',
    data() {
        return {
        }
    },
    props: {
        msg: String
    },
    components: {
        VList,
        VListItem,
        VNavigationDrawer,
        VBtn
    }, methods: {
        goToDestinationRecommendation() {
            const userId = document.cookie.replace(/(?:(?:^|.*;\s*)userId\s*=\s*([^;]*).*$)|^.*$/, '$1')
            router.push(`/recommendation/user/${userId}`)
        },
        goToAddDestinationPage() {
            router.push('/destination/add')
        },
        goToSupport() {
            router.push('/support')
        },
        listRatedDestinations() {
            const userId = document.cookie.replace(/(?:(?:^|.*;\s*)userId\s*=\s*([^;]*).*$)|^.*$/, '$1')
            router.push(`/destination/user/${userId}`)
        }
    }
}
</script>