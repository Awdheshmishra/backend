//server ko create krna 
const express = require("express")

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

module.exports = app