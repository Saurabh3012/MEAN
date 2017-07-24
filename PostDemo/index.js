var express = require("express");
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine","ejs");
var friends = ["A", "B", "C", "D"];


app.get("/",function(req,res){
	res.render("home");
});

app.get("/friends",function(req,res){
	res.render("friends",{friends:friends});
});

app.post("/addFriend",function(req,res){
	var newf = req.body.newf;
	friends.push(newf);
	res.redirect("/friends");
});

app.listen(4500,function(){
	console.log("Server for PostDemo started at localhost:4500 !!");
});
