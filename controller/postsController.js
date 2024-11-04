const db = require('../db/db.js')

const index =  (req, res) => {
    const responseData = {
     data: db,
     counter: db.length
    }
 
    res.status(200).json({responseData})
 }

 const show = (req, res) => {

    const post = posts.find(post => post.slug === req.params.slug)
    if (!post) {
        return res.status(404).json({
            erroe: `404! Not found`
        })
    }
    return res.json({
        data: post
    })

}

module.exports = {
    index,
    show
}