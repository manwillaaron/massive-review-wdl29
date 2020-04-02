require('dotenv').config()
const express = require('express')
const massive = require('massive')
const app = express()
const c = require('./controller')
const { SERVER_PORT, CONNECTION_STRING } = process.env

app.use(express.json())

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('db is all good')
    app.listen(SERVER_PORT, () => {
        console.log('listening on port ' + SERVER_PORT)
    })
}) 


app.get('/api/movies', c.getMovies)
app.get('/api/genre', c.getGenres)

