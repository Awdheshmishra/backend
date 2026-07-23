const mongoose = require("mongoose")

//
async function connectDB(){
    await mongoose.connect("mongodb+srv://yt:Tsxh3swCwozfdPm9@backend.3zcpuiv.mongodb.net/halley") //hally-- database ka naam 


    console.log("connected to DB")
}

module.exports = connectDB