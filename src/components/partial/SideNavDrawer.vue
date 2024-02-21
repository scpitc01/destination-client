<template>
    <v-navigation-drawer permanent hide-overlay>
        <v-list>
            <v-list-item title="Drawer left"></v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
import { VList, VListItem, VNavigationDrawer } from 'vuetify/lib/components'
//import router from '../../services/router.js'

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
        VNavigationDrawer
    }, methods: {
    }
}
</script>