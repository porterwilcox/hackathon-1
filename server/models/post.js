let mongoose = require('mongoose')
let Schema = mongoose.Schema
let schemaName = 'Post'
let ObjectId = Schema.Types.ObjectId

let schema = new Schema({
    userId: {
        type: ObjectId,
        ref: 'User',
        required: true
    },
    username: {
        type: String,
        ref: 'User',
        required: true
    },
    timestamp: {
        type: String,
        required: true
    },
    voteCount: {
        type: Number,
        required: true
    },
    content: {
        type: String
    },
    imgUrl: {
        type: String
    },
    title: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model(schemaName, schema)