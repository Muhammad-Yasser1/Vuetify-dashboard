<template>
    <div>
        <v-container class="my-5">
            <v-layout row wrap justify-space-around>
                <v-expansion-panel v-model="panel" expand>
                    <v-expansion-panel-content v-for="(project, index) in projects" :key="index">
                        <div slot="header">{{ project.title }}</div>
                        <v-card class="px-2 indigo lighten-5">
                            <v-card-text>
                                <div
                                    class="font-weight-medium my-2 grey--text"
                                >due by: {{ project.due }}</div>
                                {{ project.content }}
                                {{ project.content }}
                                {{ project.content }}
                                {{ project.content }}
                                {{ project.content }}
                            </v-card-text>
                        </v-card>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            panel: []
        };
    },
    computed: {
        projects() {
            return this.$store.state.projects.filter(
                project => project.person == "Muhammad Yasser"
            );
        }
    }
};
</script>

<style>
</style>
