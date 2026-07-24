const mongoose = require("mongoose")

const noteSchema = new mongoose.Schema({

    title:String,
    description: String
    // age:Number,
    // dob:Date
})

const noteModel = mongoose.model("note", noteSchema)//opertion performs on database like CRUD  isliye noteModel ka  use krte hain agr nhi krenge to code bahut jyde likhna pdegaa

module.exports = noteModel