//var express = require("express");
//var app = express();

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/cats_app',{useMongoClient: true});

var catSch = new mongoose.Schema({
	name: String,
	age: Number,
	temp: String
});

var Cat = mongoose.model("Cat", catSch);


//adding a new entry into db
var george = new Cat({
	name: "George",
	age: 11,
	temp: "Grouchy"
});
george.save(function(err, cat){
	if(err){
		console.log("ERROR!");
	}else{
		console.log("SAVED!!");
		console.log(cat);
	}
});

//create a new item in db
Cat.create({
	name: "George",
	age: 11,
	temp: "Grouchy"
}, function(err, cat){
	if(err){
		console.log(err);
	}else{
		console.log(cat);
	}
});


//retrieve cat data from db
Cat.find({}, function(err, cat){
	if(err){
		console.log(err);
	}else{
		console.log(cat);
	}
});