// var cat = require("cat-me");
// var joke = require("knock-knock-jokes");
// console.log(cat());
// console.log(joke());


// var express = require("express");

// var app = express();

// app.get("/",function(req,res){
//     res.send("Hello");
// });

// app.get("/bye",function(req,res){
//     res.send("GoodBye");
// });

// app.get("/dog",function(req,res){
//     res.send("MEOW!!!");
// });

// app.get("/r/:subRedditName",function(req,res){
//     var subreddit = req.params.subRedditName;
//     res.send("welcome to "+subreddit+" page");
// });

// app.get("/r/:subRedditName/:comments/:id/:title",function(req,res){
//     console.log(req.params);
//     res.send("welcome to subreddit page");
// })

// app.get("*",function(req,res){
//     console.log(req.params[0]);
//     var url = req.params['0'];
//     res.send("What are you doing");
// });

// app.listen(3000,function(){
//     console.log("SERVER STARTED");
// });


var express = require("express");
var app = express();

app.get("/",function(req,res){
    res.send('Hi there,welcome to my assignment!');
});

app.get("/speak/:animal",function(req,res){
    var sounds = {
        "pig":"Oink",
        "cow":"Moo",
        "dog":"Woof Woof"
    }
    var animal = req.params.animal;
    
    res.send("The "+animal+" says "+ sounds[animal]);
});

app.get("/repeat/:str/:num",function(req,res){
    var str = req.params.str;
    var num = req.params.num;
    var temp="";
    for(var i=0;i<num;i++){
      temp += str+" "; 
    }
    res.send(temp);
});

app.get("*",function(req,res){
    res.send("Sorry, page not found... What are you doing with your life?");
});


app.listen(3000,function(req,res){
    console.log("SERVER STARTED");
});