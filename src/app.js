//server ko create krna 
/* const express = require("express")
const app = express()
app.use(express.json()) 
const notes = []
app.post('/notes',(req,res)=>{
    console.log(req.body)
    res.status(201).json({
        message: "note created successfully"
    })
})
app.get('/notes',(req,res)=>{
    res.status(200).json({
        message: "notes fetched successfully",
        notes: notes
    })
})
app.delete('/notes/:index', (req,res)=>{
    const index = req.params.index
    delete notes [ index ]
    res.status(200).json({
        message: "note deleted successfully"
    })
})
app.patch('/notes/:index', (req,res)=>{
    const index = req.params.index
    const description = req.body.description
    notes[ index  ].description = description
    res.status(200).json({
        message: "note updated successfully"
    })
})
module.exports = app */

/* ----------------------------------------------- */

const express = require('express')
const noteModel =require("./models/note.model")

const app = express()
app.use(express.json())

const notes = []

app.post("/notes",async (req,res)=>{
    const data = req.body //data object ke form me aayega title aur description
    await noteModel.create({
        title: data.title,
        description: data.description
    })
    res.status(201).json({
        message:"note created"
    })
})

app.get("/notes", async(req,res)=>{
//    const notes =  await noteModel.find() 
   // find always return array ye array of object return krti hai
   const notes = await noteModel.findOne({
    title: "test_title" //it's find the one valuse by it's name  ye single object return karti hai
    //agar ham findone ko aise condition de de jo ki exist hi nhi kti to output me null aayega
   })
    res.status(200).json({
        message: "notes fetched successfully",
        notes: notes
    })
})
//note me title aur description do chiz hote hain 


module.exports = app