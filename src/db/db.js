/* const mongoose = require("mongoose")

//
async function connectDB(){
    await mongoose.connect("process.env.MONGO_URI/halley") //hally-- database ka naam 


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