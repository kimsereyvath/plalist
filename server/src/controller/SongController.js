const {Song} = require('../models')

module.exports = {
    async post(req, res) {
        try {
            const song = await Song.create(req.body)
            res.send(song)
        } catch(error) {
            res.status(500).send({
                error: 'Internal Server error'
            })
        }
    },
    async get(req, res) {
        try {
            const songs = await Song.findAll({
                limit: 10
            })
            res.send(songs)
        } catch(error) {
            res.status(500).send({
                error: 'Internal Server error'
            })
        }
    },
    async show(req, res) {
        try {
            const song = await Song.findByPk(req.params.songId)
            res.send(song)
        } catch(error) {
            res.status(500).send({
                error: 'Internal Server error'
            })
        }
    },
    async put(req, res) {
        try {
            await Song.update(req.body, {
                where: {
                    id: req.params.songId
                }
            })
            res.send(req.body)
        } catch(error) {
            res.status(500).send({
                error: 'Internal Server error'
            })
        }
    },
    async delete(req, res) {
        try {
            const sonid = req.params.songId
            await Song.destroy({
                where: {
                    id: req.params.songId
                }
            })
            res.send(req.body)
        } catch(error) {
            res.status(500).send({
                error: 'Internal Server error'
            })
        }
    },
}