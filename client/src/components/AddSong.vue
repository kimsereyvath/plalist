<template>
    <v-layout>
        <v-flex xs4>
            <panel title="Add new song" class="pt-5">
                <v-card-text>
                    <v-form v-model="valid" ref="form">
                        <v-text-field v-model="song.title" label="Title" required :rules="required"></v-text-field>
                        <v-text-field v-model="song.artist" label="Artist" required :rules="required"></v-text-field>
                        <v-text-field v-model="song.genre" label="Genre" required :rules="required"></v-text-field>
                        <v-text-field v-model="song.album" label="Album" required :rules="required"></v-text-field>
                        <v-text-field v-model="song.albumImage" label="Album Image Url" required :rules="required"></v-text-field>
                        <v-text-field v-model="song.youtubeId" label="Yourube Id" required :rules="required"></v-text-field>
                    </v-form>
                </v-card-text>
            </panel>
        </v-flex>
        <v-flex xs8>
            <panel title="Lyrics" class="ml-2 pt-5">
                <v-textarea v-model="song.lyrics" label="Lyrics"></v-textarea>
            </panel>
            <v-card-actions>
                <v-btn color="indigo" dark @click="create">Submit</v-btn>
            </v-card-actions>
        </v-flex>
    </v-layout>  
</template>

<script>
import Panel from './Panel.vue'
import SongService from '../services/SongService'

export default {
    data() {
        return {
            song: {
                title: null,
                artist: null,
                genre: null,
                album: null,
                albumImage: null,
                youtubeId: null,
                lyrics: null
            },
            required: [(v) => !!v || 'This field is required']
        }
    },
    components: {
        Panel
    },
    methods: {
        async create() {
            try {
                if(this.$refs.form.validate()) {
                    await SongService.AddNewSong(this.song)
                    this.$router.push('/songs')
                }
            } catch(err) {
                //console.log("Error while creating a new song!")
                console.log(err)
            }
        }
    }
}
</script>

<style scoped>
    
</style>


