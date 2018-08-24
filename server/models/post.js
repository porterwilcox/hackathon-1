let mongoose = require('mongoose')
let Schema = mongoose.Schema
let schemaName = 'Post'
let ObjectId = Schema.Types.ObjectId

let schema = new Schema({
    userId: {
        type: ObjectId,
        ref: "User",
        required: true
    },
    postId: {
        type: ObjectId,
        ref: "Post",
        required: true
    },
    timestamp: {
        type: Number,
        required: true
    },
    voteCount: {
        type: Number,
        required: true
    },
    content: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model(schemaName, schema)