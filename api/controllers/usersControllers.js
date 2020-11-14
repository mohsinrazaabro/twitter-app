const jwt = require('jsonwebtoken')
const user = require("../models/users")
const bcrypt = require('bcrypt')
const following = require('../models/following')
require("dotenv").config()

const getHelloWorld = async (req, res) => {
    const User = await user.find({name:req.query.name})
    res.json(User)
} 

const addUser = async (req, res) => {
    try{
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const User = await user.find({name: req.body.name})

        if(User.length == 0){
            const newUser = new user({
                name: req.body.name,
                password: hashedPassword
            })
            newUser.save()
            res.json({message: "user created succesfully"})
        } else {
            res.json({message: "user already exists",
        User})
        }
    } catch(err) {
        console.error(err)
    }
}

const makeToken = async (req, res) => { 
    
    const User = await user.findOne({name: req.body.name})

    if(User === null){
        return res.send({message: "User not found"})
    } 
    try {
        if(await bcrypt.compare(req.body.password, User.password)){
            const token = jwt.sign({name: User.name}, process.env.SECRET_JWT_KEY,{
                expiresIn: "1h"
            })
            res.json({token})
        } else{
            res.json({message: "Password didnt match"})
        }
    } catch(e){
        console.error(e)
    }
}

const findUsers = async (req, res) => {
    const Users = await user.find()
    const Followings = await following.find({username:req.authData.name})
    const newFollowings = Followings.map((following) => following.following)
    const newUsers = Users.map((user) => user.name).filter((name) => name!==req.authData.name)
    /*
    const newUsers = Users.map((user) => {
        return {user.name, newFollowings.filter((user) => user.name!==req.authData.name))
        }
    }*/

    const newResponse = newUsers.map((user) => {
        if(newFollowings.includes(user)){
            return {user, following: true}
        } else {
            return {user, following: false}
        }
    })
    
    res.json({newResponse})
}

const checkToken = async (req, res) => {
    const bearerHeaders = req.headers['authorization'];
    if (bearerHeaders !== 'undefined'){
        const bearerToken = bearerHeaders.split(' ')[1]; 
        jwt.verify(bearerToken, process.env.SECRET_JWT_KEY, (err, authData) => {
            if (err) return res.json({message:"invalid token"});   
                req.authData = authData
                res.json({message: "valid token"})        
        })
    }
}



module.exports = {
    getHelloWorld,
    addUser,
    makeToken,
    findUsers,
    checkToken
}