// fast, unopinioted,minimalist framework for node.js
//express usecase -> mainly use for routing
//routing -> GET POST PATCH DELETE (/)
// /profile = profile , /contact = contact and so on -> routes

//GET route me data URL me dikhta hai like serches on google 
//POST route me data URL me nhi dikhta hai like fb login


const express = require('express')
const app = express()

//middleware ek aisa function jo kisi v route se phle chalta hai jiska mtlv aapka route chalane se phle agr aap koi kaam karana chaahte ho to middleware ka upyog kiya ja skta hai     
// route pe chlne se phle print kro chala on console
//route chalane se phle route pe hots counter ki value
//iska mtlv route chlne se phle jo chlega o hai middleware 
//sirf ek d ikkat hai agr hamara middleware chl gaya to request jaam ho jati aur route tk nhi pahuch pati
//to ham push dete hain jiske liye next() ka use krte 
//ham kai sare middleware bana skte hain
app.use(function(req,res,next){
    console.log("hello from middleware")
    next()
})
app.use(function(req,res,next){
    console.log("hello from middleware2")
    next()
})
app.get('/', function(err,res){
    res.send("hdhjhjyuvuyvttvtyctthvctvsbsbshey")
})

app.get("/profile", function(req,res){
    res.send("hello from profile")
})

app.listen(3000)

//nodemon se run karane par baar baar server bnd krke run nhi karna pdega ye refresh feture add krta hai

 