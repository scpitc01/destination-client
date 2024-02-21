
<template>
    <v-app-bar color="primary" dark flat>
        <v-app-bar-title>Destination App</v-app-bar-title>
        <v-menu>
            <template v-slot:activator="{ props }">
                <v-btn icon="mdi-dots-vertical" v-bind="props"></v-btn>
            </template>
            <v-list>
                <v-list-item>
                    <v-switch v-model="isDarkMode" label="Flip Light/Dark" hide-details></v-switch>
                </v-list-item>
                <v-list-item>
                    <v-btn @click="logout" icon="mdi-logout"></v-btn>
                </v-list-item>
            </v-list>
        </v-menu>
    </v-app-bar>
</template>

<script>
import { VAppBar, VAppBarTitle, VBtn, VMenu, VList, VListItem, VSwitch } from 'vuetify/lib/components'
import router from '../../services/router.js'

export default {
    name: 'NavBar',
    data() {
        return {
            isDarkMode: false
        }
    },
    props: {
        msg: String
    },
    components: {
        VAppBar,
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