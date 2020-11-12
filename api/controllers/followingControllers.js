const following = require("../models/following")




const getHelloWorld = (req, res) => {
    res.send("Hello")
}

const follow = async (req, res) => {
    const exists = await following.findOne({
        username: req.authData.name,
        following: req.body.following
    })
    if(exists == null){
        const newFollowing = new following({
            username: req.authData.name,
            following: req.body.following
        })
        const Following = await newFollowing.save()
        res.json(Following)
    } else {
        res.json({message: `already following ${req.body.following}`})
    }
}

const unfollow = async (req, res) => {
    await following.deleteMany({username:req.authData.name, following: req.body.following})
    res.json({message: `unfollowed ${req.body.following}`})
}





module.exports = {
    getHelloWorld,
    follow,
    unfollow
}