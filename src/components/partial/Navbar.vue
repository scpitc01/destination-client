
<template>
    <v-toolbar color="primary" dark flat>
        <template v-slot:prepend>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>
        <v-app-bar-title>Destination App</v-app-bar-title>
        <v-menu>
            <template v-slot:activator="{ props }">
                <v-btn icon="mdi-dots-vertical" v-bind="props"></v-btn>
            </template>
            <v-list>
                <v-list-item>
                    <v-switch v-model="hints" color="purple" label="Enable hints" hide-details></v-switch>
                </v-list-item>
                <v-list-item>
                    <v-btn @click="logout" icon="mdi-logout"></v-btn>
                </v-list-item>
            </v-list>
        </v-menu>
    </v-toolbar>
</template>

<script>
import { VToolbar, VAppBarNavIcon, VAppBarTitle, VBtn, VMenu, VList, VListItem, VSwitch } from 'vuetify/lib/components'
import router from '../../services/router.js'

export default {
    name: 'NavBar',
    props: {
        msg: String
    },
    components: {
        VToolbar,
        VAppBarNavIcon,
        VAppBarTitle,
        VBtn,
        VMenu,
        VList,
        VListItem,
        VSwitch
    }, methods: {
        logout() {
            document.cookie = 'jwt=;'
            router.push('/user/login')
        }
    }
}
</script>