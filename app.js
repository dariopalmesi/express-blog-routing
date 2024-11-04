const express = require('express')
const app = express()
const postsController = require('./controller/postsController.js')
const postRouter = require('./routes/posts.js')


const PORT = process.env.PORT
const HOST = process.env.HOST


router.listen(3000, (req, res) => {
    console.log(`Server is runnig at ${HOST}:${PORT}`)
})

router.get('/', (req, res) => {
    res.send('Post')
})


 app.use('/posts', postRouter) 