let mongoose = require('mongoose')
let Schema = mongoose.Schema
let schemaName = 'User'
let ObjectId = Schema.Types.ObjectId

let schema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    userImg: {
        type: String,
        default: "//placehold.it/100x100"
    }
})

module.exports = mongoose.model(schemaName, schema)