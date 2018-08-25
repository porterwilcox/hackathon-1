let router = require("express").Router()
let Users = require("../models/user")

router.get("/users", (req, res, next) => {
    Users.find({})
        .then(users => {
            return res.send(users)
        })
        .catch(next)
})
router.post("/login", (req, res, next) => {
    Users.findOne({
        username: req.body.username,
        password: req.body.password
    })
        .then(user => {
            if (user) {
                return res.send(user)
            }
            else {
                return res.status(401).send({
                    error: "Username or password incorrect"
                })
            }
        })
})
router.post("/register", (req, res, next) => {
    Users.create(req.body)
        .then(user => {
            return res.send(user)
        })
        .catch(next)
})
router.put("/users/:id", (req, res, next) => {
    Users.findByIdAndUpdate(req.params.id, req.body)
        .then(() => res.send({
            message: "update worked!",
            userImg: req.body.userImg
        }))
})
router.delete("/users/:id", (req, res, next) => {
    Users.findByIdAndRemove(req.params.id)
    .then(() => res.send({
        message: "Deletron Delta"
    }))
    .catch(next)
})

module.exports = router