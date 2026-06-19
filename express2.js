const express = require('express')
const app = express()

//middleware
//ek aisa function jo hr route se phle chlta hai usme likha code sbse phle execute hota hai 

app.use(function(req,res,next){
    console.log("middleware working")
    next();
    //jab data bhejna ho to res and jb data aayega to req

})

app.get('/', function(req,res){
    res.send("hello wrld") 
})

app.get('/profile', function(req,res){
    res.send("hello from profile")
})

app.get('/contact', function(req,res){
    res.send("hello from cotact the number 6388573740")
})

app.listen(3800)