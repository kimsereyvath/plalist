import Api from './Api'

export default {
    AddNewSong(SongData) {
        return Api.post('songs', SongData)
    },

    getAllSongs() {
        //make a get request to songs end point
        return Api.get('songs')
    },

    ShowSong(SongId) {
        return Api.get(`songs/${SongId}`)
    },

    PutSong(song) {
        return Api.put(`songs/${song.id}`, song)
    },

    DeleteSong(SongId) {
        return Api.delete(`songs/${SongId}`)
    }
}