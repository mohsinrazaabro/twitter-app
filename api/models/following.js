const mongoose = require("mongoose")

const followingSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },

    following: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model("following", followingSchema)