var express = require("express");

var app = express();

//specific routes

//index 
app.get("/",function(req, res){
	console.log("requested");
	res.send("First app")
});


//Custom route
app.get("/dog",function(req, res){
	console.log("requested");
	res.send("Hello Dogie!!!")
});

//the colon creates that position as a variable
app.get("/dog/:anything",function(req, res){
	console.log("requested");
	res.send("put anything after /dog/ and it'll work")
});


//for all other routes which are not defined yet!!
app.get("*",function(req, res){
	console.log("requested");
	res.send("404 page not found")
});


app.listen(3000,function(){
	console.log("Server started at localhost:3000");
});