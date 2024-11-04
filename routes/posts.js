const express = require('express')
const router = express.Router()
const postsController = require('../controller/postsController.js')


app.get('/', postsController.index)

 app.get('/:slug', postsController.show)

module.exports = router