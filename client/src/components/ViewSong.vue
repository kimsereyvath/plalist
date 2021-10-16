<template>
    <v-container fluid grid-list-xl class="pt-5">
        <v-layout row>
            <v-flex xs6>
                <panel title="View Song Details">
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
                                name: 'songs-edit',
                                params: {
                                    songId: song.id
                                }
                            })">Edit</v-btn>
                            <v-btn color="red" dark @click="deleteSong(song.id)"> Delete</v-btn>
                        </v-flex>

                        <v-flex xs6>
                            <img class="al-img" :src="song.albumImage" alt="" />
                            <br/>
                            {{song.album}}
                        </v-flex>
                    </v-layout>
                </panel>
            </v-flex>

            <v-flex xs6 class="ml-2">
                <panel title="lyrics">{{song.lyrics}}</panel>
            </v-flex>
        </v-layout>

        <v-layout row>
            <v-flex xs12 class="ml-2">
                <panel title="Youtube Videos">
                    <youtube :video-id="song.youtubeId" ref="youtube" @playing="playing" class="ml-5"></youtube>
                </panel>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
import SongService from '../services/SongService'
import Panel from './Panel.vue'

export default {
    data() {
        return {
            song: null,
            playing: false
        }
    },
    async mounted() {
        const songId = this.$route.params.songId
        this.song = (await SongService.ShowSong(songId)).data
    },
    components: {
        Panel
    },
    methods: {
        navigateTo(route) {
            this.$router.push(route)
        },
        async deleteSong(songId) {
            await SongService.DeleteSong(songId)
            this.$router.push('/songs')
        }
    },
}
</script>
<style>
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