// npm -> node package manager  like playstore or  packages of playstore
//npm -> naan paneer makhni, nahi pata mujhe, nail poslih makeover

//npm ek jagah hai jaha par khoob saare packages milte hain
// pcakage ->  bani banai chheze ya features or files of code

//

// var joke = require ('one-liner-joke')
// console.log(joke.getRandomJoke())


var figlet = require("figlet")
figlet("Awdhesh", function(err,data){
    if(err){
        console.log("something went wronf...")
        console.debug(err)
        return
    }
    console.log(data)
})

