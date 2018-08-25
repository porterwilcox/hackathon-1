let router = require('express').Router()
let Posts = require('../models/post')

router.get('/posts', (req, res, next) => {
    Posts.find({})
        .then(posts => {
            return res.send(posts)
        })
        .catch(next)
})


router.post('/posts', (req, res, next) => {
    Posts.create(req.body)
        .then(post => {
            return res.send(post)
        })
        .catch(next)
})

router.put('/:id', (req, res, next) => {
    Posts.findByIdAndUpdate(req.params.id, req.body)
        .then(() => res.send({
            message: 'Successful Edit'
        }))
        .catch(next)
})

router.delete('/:id', (req, res, next) => {
Posts.findByIdAndRemove(req.params.id)
.then(() => res.send({
    message: 'Dhlorted!'
}))
.catch(next)
})


module.exports = router