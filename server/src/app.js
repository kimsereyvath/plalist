const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const {sequelize} = require('./models')
const AuthController = require('./controller/AuthController')
const AuthControllerPolicy = require('./policies/AuthControllerPolicy')
const SongController = require('./controller/SongController')

const app = express()
const port = 3000

app.use(morgan('tiny'))
app.use(bodyParser.json())
app.use(cors())

app.post('/register', AuthControllerPolicy.register, AuthController.register)
app.post('/login', AuthController.login)
app.post('/songs', SongController.post)
app.get('/songs', SongController.get)
app.get('/songs/:songId', SongController.show)
app.put('/songs/:songId', SongController.put)
app.delete('/songs/:songId', SongController.delete)


sequelize.sync()
    .then(() => {
        app.listen(port, () => console.log(`Your app listening on port ${port}`))
    })