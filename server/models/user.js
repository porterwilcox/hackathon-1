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
    }
})

module.exports = mongoose.model(schemaName, schema)