const express = require('express')
const app = express()
const db = require('./db/db.js')


const PORT = process.env.PORT
const HOST = process.env.HOST


app.listen(3000, (req, res) => {
    console.log(`Server is runnig at ${HOST}:${PORT}`)
})

app.get('/', (req, res) => {
    res.send('Post')
})


app.get('/posts', (req, res) => {
    res.status(200).json({
        data: db,
        counter: db.length
    })
})