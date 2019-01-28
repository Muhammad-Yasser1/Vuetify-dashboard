<template>
    <div>
        <v-container class="my-5">
            <v-layout row wrap>
                <v-flex v-for="(person, index) in team" :key="index" xs12 sm6 md4 lg3>
                    <v-card flat class="text-xs-center ma-3">
                        <v-responsive class="pt-4">
                            <v-avatar size="80">
                                <img :src="person.avatar" alt="Avatar">
                            </v-avatar>
                        </v-responsive>
                        <v-card-text>
                            <div class="subheading">{{ person.name }}</div>
                            <div class="grey--text">{{ person.role }}</div>
                        </v-card-text>
                        <v-card-actions class="text-xs-center">
                            <v-btn flat color="grey">
                                <v-icon left small>message</v-icon>
                                <span class="caption">Message</span>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            team: [
                {
                    name: "Muhammad Yasser",
                    role: "Full-Stack Developer",
                    avatar: require("../assets/avatar-1.png")
                },
                {
                    name: "Ahmed Hesham",
                    role: "Graphic Designer",
                    avatar: require("../assets/avatar-2.png")
                },
                {
                    name: "Belal El-Gendy",
                    role: "Front-End Developer",
                    avatar: require("../assets/avatar-3.png")
                },
                {
                    name: "Zeina Shaker",
                    role: "Front-End Developer",
                    avatar: require("../assets/avatar-4.png")
                },
                {
                    name: "Caroline Ali",
                    role: "Back-End Developer",
                    avatar: require("../assets/avatar-5.png")
                },
                {
                    name: "Khaled Zedan",
                    role: "Back-End Developer",
                    avatar: require("../assets/avatar-6.png")
                }
            ]
        };
    }
};
</script>

<style>
</style>
