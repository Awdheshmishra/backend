const userModel = require("../models/user.model")
const jwt = require("jsonwebtoken")



async function registerUser(req, res){

    console.log(req.body)
    const { username, email, password} = req.body;


    const user = await userModel.create({
        username,email,password
    })

    const token = jwt.sign({
        id: user._id
    }, process.env.JWT_SECRET)//token creating

    res.cookie("token", token)//browser cokkie

    res.status(201).json({
        message: "user registered successfully",
        user
    })
    
}




module.exports = {registerUser}