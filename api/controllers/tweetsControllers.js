
const tweet = require("../models/tweets")
const following = require("../models/following")
const e = require("express")


const getHelloWorld = (req, res) => {
    res.json({message: "Hello worldf"})
} 

                                    

const createTweet = async (req, res) => {
    try{
        const newTweet = new tweet({
            username: req.authData.name,
            tweet: req.body.tweet
        })
        await newTweet.save()
        res.json({message:"tweet created!"})
    } catch(err){ res.json({message:err.message})}
}

const getTweetsOfOne = async (req, res) => {
    try {
        let page = parseInt(req.query.page)
        const tweetsOfOne = await tweet.find({username:req.params.username}).sort({time:-1}).limit(5).skip(page)
        res.json({tweetsOfOne})
    } catch(e){ res.send(e)}
}

const getTweetsOfMine = async (req, res) => {
    try {
        let page = parseInt(req.query.page)
        const tweetsOfOne = await tweet.find({username:req.authData.name}).sort({time:-1}).limit(5).skip(page)
        res.json({tweetsOfOne})
    } catch(e){ res.send(e)}
}


const getTweetsOfMany = async (req, res) => {
       
        let page = parseInt(req.query.page)
        const Followings = await following.find({username: req.authData.name})
        const allFollowings = Followings.map((name) => name.following)
        const tweetsOfMany = await tweet.find({username: allFollowings}).sort({time:-1}).limit(5).skip(page)
     
        res.json({tweetsOfMany})

}




module.exports = {
    getHelloWorld,
    createTweet,
    getTweetsOfOne,
    getTweetsOfMany,
    getTweetsOfMine
}