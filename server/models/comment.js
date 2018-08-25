let mongoose = require('mongoose')
let Schema = mongoose.Schema
let schemaName = 'Comment'
let ObjectId = Schema.Types.ObjectId

let schema = new Schema({
    username: {
        type: String,
        ref: 'User',
        required: true
    },
    postId: {
        type: ObjectId,
        ref: "Post",
        required: true
    },
    timestamp: {
        type: String,
        required: true
    },
    // voteCount: {
    //     type: Number,
    //     required: true
    // },
    content: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model(schemaName, schema)