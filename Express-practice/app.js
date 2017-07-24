

var express = require("express");
var app = express();

function pr(key, num){
	var str="";
	for(var i=0; i<num; i++){
		str+=key+" ";
	} 
	return str;
}

app.get("/", function(req, res){
	res.send("Hi there! welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res){
	var animal = req.params.animal;
	if(animal == "pig"){
		res.send("The "+animal+" says 'Oink'");
	}else if(animal == "cow"){
		res.send("The "+animal+" says 'Moo'");
	}else if(animal == "dog"){
		res.send("The "+ animal+" says 'Woof! Woof!'");
	}else{
		res.send("Don't recognize the animal");
	}
});

app.get("/repeat/:keyword/:num", function(req, res){
	var key = req.params.keyword;
	var num = Number(req.params.num);
	res.send(pr(key, num));
});

app.get("*", function(req, res){
	res.send("Sorry! Page not found!!");
});

app.listen("2332", function(){
	console.log("Server started at localhost:2332");
});