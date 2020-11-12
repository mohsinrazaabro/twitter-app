const express = require("express");
const router = express.Router()
require("dotenv").config()
const jwt = require('jsonwebtoken')



const followingController = require("../controllers/followingControllers.js")


router.get("/", followingController.getHelloWorld)

router.post("/follow", verifyToken, followingController.follow)

router.post("/unfollow", verifyToken, followingController.unfollow)




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