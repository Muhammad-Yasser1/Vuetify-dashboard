<template>
    <nav>
        <v-toolbar app flat color="blue darken-3">
            <v-toolbar-side-icon @click="drawer = !drawer" class="white--text"></v-toolbar-side-icon>
            <v-toolbar-title class="white--text text-uppercase">
                <span class="font-weight-light">Team</span>
                <span class="font-weight-bold">Tasks</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-menu offset-y>
                <v-btn slot="activator" flat color="white">
                    <v-icon left>expand_more</v-icon>
                    <span>Menu</span>
                </v-btn>
                <v-list>
                    <v-list-tile
                        v-for="(link, index) in links"
                        :key="index"
                        router
                        :to="link.route"
                    >
                        <v-list-tile-title>{{ link.text }}</v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-menu>
            <v-btn color="white" flat>
                <span>SignOut</span>
                <v-icon right>exit_to_app</v-icon>
            </v-btn>
        </v-toolbar>
        <v-navigation-drawer app v-model="drawer" class="blue darken-3 white--text">
            <v-flex column class="text-xs-center mt-5">
                <v-avatar size="80">
                    <img :src="require('../assets/avatar-1.png')" alt="Avatar">
                </v-avatar>
                <div class="mt-2">Muhammad Yasser</div>

                <v-dialog max-width="600px">
                    <v-btn class="info caption mt-4" slot="activator">Add a New Project</v-btn>

                    <v-card>
                        <v-card-title>
                            <h2>Add a New Project</h2>
                        </v-card-title>
                        <v-card-text>
                            <v-form ref="theform">
                                <v-text-field
                                    :rules="inputRules"
                                    prepend-icon="folder"
                                    label="Title"
                                    v-model="title"
                                ></v-text-field>
                                <v-textarea
                                    :rules="inputRules"
                                    prepend-icon="edit"
                                    label="Content"
                                    v-model="content"
                                ></v-textarea>

                                <v-menu>
                                    <v-text-field
                                        prepend-icon="date_range"
                                        :value="formattedDate"
                                        label="Due Date"
                                        slot="activator"
                                    ></v-text-field>
                                    <v-date-picker v-model="due"></v-date-picker>
                                </v-menu>

                                <v-btn flat class="info ml-0 mt-2" @click="sub">Add Project</v-btn>
                            </v-form>
                        </v-card-text>
                    </v-card>
                </v-dialog>
            </v-flex>
            <v-divider class="my-4"></v-divider>
            <v-list>
                <v-list-tile v-for="link in links" :key="link.icon" router :to="link.route">
                    <v-list-tile-action>
                        <v-icon class="white--text">{{ link.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title class="white--text">{{ link.text }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
import format from "date-fns/format";
export default {
    data() {
        return {
            inputRules: [
                v => v.length >= 3 || "The Minimum length of characters is 3"
            ],
            drawer: false,
            title: "",
            content: "",
            due: "",
            links: [
                { icon: "dashboard", text: "Dashboard", route: "/" },
                { icon: "folder", text: "My Projects", route: "/projects" },
                { icon: "person", text: "Team", route: "/team" }
            ]
        };
    },
    methods: {
        sub() {
            if (this.$refs.theform.validate()) {
                console.log("done");

                this.$store.state.projects.push({
                    title: this.title,
                    person: "Muhammad Yasser",
                    content: this.content,
                    due: this.formattedDate,
                    status: "ongoing"
                });
            }
        }
    },
    computed: {
        formattedDate() {
            return this.due ? format(this.due, "Do MMM YYYY") : "";
        }
    }
};
</script>
