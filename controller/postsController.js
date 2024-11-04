const index =  (req, res) => {
    const responseData = {
     data: db,
     counter: db.length
    }
 
    res.status(200).json({responseData})
 }