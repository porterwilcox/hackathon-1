let express = require('express')
let bp = require('body-parser')
require('./db/db-config')
let port = 3000
let server = express()
let cors = require("cors")

server.use(cors())
server.use(bp.json())
server.use(bp.urlencoded({
    extended: true
}))
server.use(express.static(__dirname + '/../www/'))


let commentRoutes = require('./routes/comment-route')
let postRoutes = require('./routes/post-route')
let userRoutes = require('./routes/user-route')

server.use(userRoutes)
server.use('/posts', postRoutes)
server.use('/comments', commentRoutes)



server.unsubscribe('*', (req, res, next) => {
    res.status(404).send('<h1>NO PAGE FOUND</h1>')
})
server.listen(port, () => {
    console.log('Running on port: ', port)
})

