//packages
/* var catMe = require ('cat-me');
console.log(catMe()); */

const express = require('express');
const app = express()

app.get("/",(req,res)=>{
    res.send("hello world")
})

app.get("/about", (req,res)=>{
    res.send("about page")
})
app.get("/contact", (req,res)=>{
    res.send("contact page")
})
app.get("/name", (req,res)=>{
    res.send("awdhesh mishra")
})


app.listen(3000)//server ko start krne ke app.listen ka use kiya jata hai

//REST API --> representational state trnasfer  API
//GET -> server se data fetch karwana ho tb use krte hain
//POST -> jab server pardata send krna ho to 
// PATCH -> jab data server par already hai aur us data ko update karna ho 
//DELETE -> server par data hai aur use delete karna hai tab ham delete method ka use karte hain
