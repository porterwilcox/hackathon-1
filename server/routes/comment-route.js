let router = require('express').Router()
let Comments = require('../models/comment')

router.get('/:postId', (req, res, next) => {
    Comments.find({
        postId: req.params.postId
    })
        .then(comments => {
            return res.send(comments)
        })
        .catch(err => {
            return next(err)
        })
})
router.post('/', (req, res, next) => {
    Comments.create(req.body)
        .then(comment => res.send(comment))
        .catch(next)
})

router.put('/:id', (req, res, next) => {
    Comments.findByIdAndUpdate(req.params.id, req.body)
        .then(() => res.send({
            message: 'Successful Edit'
        }))
        .catch(next)
})
router.delete('/:id', (req, res, next) => {
    Comments.findByIdAndRemove(req.params.id)
        .then(() => res.send({
            message: 'Dhlorted!'
        }))
        .catch(next)
})

module.exports = router