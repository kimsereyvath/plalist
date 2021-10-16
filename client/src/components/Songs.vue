<template>
    <v-layout column class="pt-5">
        <v-flex xs8>
            <panel title="Search for Songs">
                <v-text-field label="Song Name"></v-text-field>
            </panel>
            <panel title="Song">
                <v-btn route to="songs/create" slot="action" class="indigo accent-2">
                    <v-icon>add</v-icon>
                </v-btn>
                <div class="song" v-for="song in songs" :key="song.id">
                    <v-layout>
                        <v-flex xs6>
                            <div class="song-title">
                                {{song.title}}
                            </div>
                            <div class="song-artist">
                                {{song.artist}}
                            </div>
                            <div class="song-genre">
                                {{song.genre}}
                            </div>
                            <v-btn color="indigo" dark @click="navigateTo({
                                name: 'songs-view',
                                params: {
                                    songId: song.id
                                }
                            })">View</v-btn>
                        </v-flex>
                        <v-flex xs6> 
                            <img class="al-img" :src="song.albumImage"/>
                        </v-flex>
                    </v-layout>
                </div>
            </panel>
        </v-flex>
    </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
//import SongService from '../services/SongService'

export default {
    components: {
        Panel
    },
    data() {
        return {
            songs: null
        }
    },
    async mounted() {
        //this.songs = (await SongService.getAllSongs()).data
        await this.$store.dispatch("getAllSongs").then(response => {
            console.log("Got some data", response)
        }, error => {
            console.log("Got nothing from server", error)
        })

        this.songs = this.$store.state.songs
    },
    methods: {
        navigateTo(route) {
            this.$router.push(route)
        }
    }
}
</script>

<style scoped>
    .song {
        padding: 20px;
        height: 400px;
        overflow: hidden;
        text-align: center;
    }
    .song-title {
        font-size:30px;
    }
    .song-artist {
        font-size: 24px;
    }
    .song-genre {
        font-size: 18px;
    }
    .al-img {
        width: 70%;
        margin: 0 auto;
    }
</style>


