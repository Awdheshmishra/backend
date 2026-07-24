//agar url me kuch cheeze same hain to ham unka route ek me hi banate hain hain alg alg nhi
//facebook.com/profile/harsh
//facebook.com/profile/harshew
//facebook.com/profile/harsherer
//facebook.com/profile/harshre 
//dynamic routing kende ise ladle

const express = require("express")
const app = express()

app.get('/', function(req,res){
    res.send("hello wrld") 
})

app.get('/profile/:username', function(req,res){
    res.send(`hello from ${app}`)
})


