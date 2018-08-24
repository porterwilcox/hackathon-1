let mongoose = require("mongoose")
const connectionStr = `mongodb://hackertron:codeworks1@ds018498.mlab.com:18498/hackathon-1`
let connection = mongoose.connection

mongoose.connect(connectionStr, {
    useNewUrlParser: true
})

connection.on('error', err => {
    console.log("DB ERROR:", err)
})

connection.once('open', () => {
    console.log("connected to db")
})