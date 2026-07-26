/* const mongoose = require("mongoose")

//
async function connectDB(){
    await mongoose.connect("mongodb+srv://yt:s9KQNvlPwnlloSxy@backend.3zcpuiv.mongodb.net/?appName=backend/halley") //hally-- database ka naam 


    console.log("connected to DB")
}

module.exports = connectDB */

/* ------------------------------------ */

const mongoose = require('mongoose')

async function connectDB(){
    await mongoose.connect(process.env.MONGO_URI)

    console.log("connected to DB")

}

module.exports = connectDB