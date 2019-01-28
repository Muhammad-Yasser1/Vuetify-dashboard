<template>
    <v-app>
        <navbar></navbar>
        <v-content class="ma-4">
            <router-view></router-view>
        </v-content>
    </v-app>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
    name: "App",
    components: {
        Navbar
    },
    data() {
        return {
            //
        };
    }
};
</script>

<style lang="scss">
.theme--light.application {
    background: #f7f7fa;
}
</style>

