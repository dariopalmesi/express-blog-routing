const express = require('express')
const posts = require('./db/db')
const app = express()
const postsController = require('./controller/postsController.js')


const PORT = process.env.PORT
const HOST = process.env.HOST


app.listen(3000, (req, res) => {
    console.log(`Server is runnig at ${HOST}:${PORT}`)
})

app.get('/', (req, res) => {
    res.send('Post')
})


 app.get('/posts', postsController.index)

 app.get('posts/:slug', postsController.show)