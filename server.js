const express = require("express");
const app = express();

var cors = require('cors')
const mongoose = require("mongoose");
require("dotenv").config()



//cors
app.use(cors())

//database
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection
db.on("error", (error) => {
    console.error(error)
})
db.once("open", () => {
    console.log("Database is connected !")
})


app.use(express.json())

app.use(express.static('public'))
if(process.env.NODE_ENV === "production"){
    app.use(express.static(__dirname + '/public/'))

    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'))
}

//routes
const usersRoutes = require("./api/routes/users");
app.use("/users", usersRoutes)

const tweetsRoutes = require("./api/routes/tweets");
app.use("/tweets", tweetsRoutes)

const followingRoutes = require("./api/routes/following");
app.use("/following", followingRoutes)




app.listen(process.env.PORT, () => {
    console.log("server running at port 4000")
})