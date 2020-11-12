const express = require("express");
const router = express.Router()
require("dotenv").config()
const jwt = require('jsonwebtoken')


const tweetsController = require("../controllers/tweetsControllers.js")
router.get("/", tweetsController.getHelloWorld)
router.post("/:username", verifyToken, tweetsController.getTweetsOfOne)
router.get("/tweetsofmany", verifyToken, tweetsController.getTweetsOfMany)
router.post("/", verifyToken, tweetsController.createTweet)
router.get("/tweetsofmine", verifyToken, tweetsController.getTweetsOfMine)









function verifyToken (req, res, next){

    const bearerHeaders = req.headers['authorization'];
    if (bearerHeaders !== 'undefined'){
        const bearerToken = bearerHeaders.split(' ')[1]; 
        jwt.verify(bearerToken, process.env.SECRET_JWT_KEY, (err, authData) => {
            if (err) return res.json({message:"error occured at verification"});   
                req.authData = authData
                next()        
        })
    }
    
}

module.exports = router