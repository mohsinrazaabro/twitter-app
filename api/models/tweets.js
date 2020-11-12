const mongoose = require("mongoose")

const tweetSchema = new mongoose.Schema({
    tweet: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },

    time: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model("tweet", tweetSchema)