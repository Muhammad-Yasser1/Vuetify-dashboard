<template>
    <div>
        <v-container class="my-5">
            <v-layout row wrap mb-3>
                <v-tooltip top>
                    <v-btn flat color="grey" @click="sortBy('title')" slot="activator">
                        <v-icon left>folder</v-icon>
                        <span class="capion text-lowercase">by project name</span>
                    </v-btn>
                    <span>Sort projects by project name</span>
                </v-tooltip>
                <v-tooltip top>
                    <v-btn flat color="grey" @click="sortBy('person')" slot="activator">
                        <v-icon left>person</v-icon>
                        <span class="capion text-lowercase">by person name</span>
                    </v-btn>
                    <span>Sort projects by person name</span>
                </v-tooltip>
                <v-tooltip top>
                    <v-btn flat color="grey" @click="sortBy('due')" slot="activator">
                        <v-icon left>schedule</v-icon>
                        <span class="capion text-lowercase">by Due Date</span>
                    </v-btn>
                    <span>Sort projects by Due Date</span>
                </v-tooltip>
                <v-tooltip top>
                    <v-btn flat color="grey" @click="sortBy('status')" slot="activator">
                        <v-icon left>done</v-icon>
                        <span class="capion text-lowercase">by status</span>
                    </v-btn>
                    <span>Sort projects by status</span>
                </v-tooltip>
            </v-layout>
            <v-card flat v-for="(project, index) in projects" :key="index">
                <v-layout pa-3 row wrap class="project" :class="project.status">
                    <v-flex xs12 md6>
                        <div class="caption grey--text">Project Title</div>
                        <div>{{ project.title }}</div>
                    </v-flex>
                    <v-flex xs6 sm4 md2>
                        <div class="caption grey--text">Person</div>
                        <div>{{ project.person }}</div>
                    </v-flex>
                    <v-flex xs6 sm4 md2>
                        <div class="caption grey--text">Due by</div>
                        <div>{{ project.due }}</div>
                    </v-flex>
                    <v-flex xs2 sm4 md2>
                        <v-chip
                            :class="project.status"
                            class="right caption white--text"
                        >{{ project.status }}</v-chip>
                    </v-flex>
                </v-layout>
                <v-divider></v-divider>
            </v-card>
        </v-container>
    </div>
</template>
<script>
export default {
    data() {
        return {
            projects: this.$store.state.projects
        };
    },
    methods: {
        sortBy(prop) {
            this.projects.sort((a, b) => (a[prop] > b[prop] ? 1 : -1));
        }
    }
};
</script>

<style>
.project.complete {
    border-left: 4px solid #3cd1c2;
}
.project.ongoing {
    border-left: 4px solid orange;
}
.project.overdue {
    border-left: 4px solid tomato;
}
.v-chip.complete {
    background: #3cd1c2;
}
.v-chip.ongoing {
    background: orange;
}
.v-chip.overdue {
    background: tomato;
}
</style>
