const express = require("express");
const router = express.Router()
require("dotenv").config()
const jwt = require('jsonwebtoken');
const usersControllers = require("../controllers/usersControllers.js");


const usersController = require("../controllers/usersControllers.js")


router.get("/", usersController.getHelloWorld)
router.post("/create", usersController.addUser)
router.post('/maketoken', usersController.makeToken)
router.get('/findusers', verifyToken, usersController.findUsers)
router.get("/checktoken", verifyToken, usersControllers.checkToken)


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
