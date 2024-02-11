
<template>
    <v-toolbar color="primary" dark flat>
        <template v-slot:prepend>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>
        <v-app-bar-title>Destination App</v-app-bar-title>
        <template v-slot:append>
            <v-btn icon="mdi-dots-vertical"></v-btn>
        </template>
    </v-toolbar>
</template>

<script>
import { VToolbar, VAppBarNavIcon, VAppBarTitle, VBtn } from 'vuetify/lib/components'

export default {
    name: 'NavBar',
    props: {
        msg: String
    },
    components: {
        VToolbar,
        VAppBarNavIcon,
        VAppBarTitle,
        VBtn
    }
}
</script>