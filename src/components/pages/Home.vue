<template>
    <Navbar />
    <h1>Test</h1>
</template>

<script>
import Navbar from '../partial/Navbar.vue'
export default {
    name: 'TestView',
    props: {
        msg: String
    },
    components: {
        Navbar
    }
}
</script>