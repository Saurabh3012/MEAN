//Imports
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var methodOverride = require("method-override");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/restful_blog_app",{useMongoClient:true});


//APP config
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride("_method"));


//Mongoose Model config
var blogSchema = new mongoose.Schema({
	title: String,
	image: String,
	body: String,
	created: {type: Date, default: Date.now}
});

var Blog = mongoose.model("Blog", blogSchema);


//RESTFUl ROUTES

app.get("/", function(req,res){
	res.redirect("/blogs");
});

app.get("/blogs", function(req,res){
	Blog.find({}, function(err, blogs){
		if(err){
			console.log(err);
		}else{
			res.render("index",{blogs: blogs});		
		}
	});
	
});

//NEW ROUTE
app.get("/blogs/new",function(req,res){
	res.render("new");
});

app.post("/blogs",function(req,res){
	//create blog
	Blog.create(req.body.blog,function(err,newBlog){
		if(err){
			res.render("new");
		}else{
				//redirect

			res.redirect("/blogs");
		}
	});
});

//show route
app.get("/blogs/:id", function(req, res){
	Blog.findById(req.params.id, function(err, foundBlog){
		if(err){
			res.redirect("/blogs");
		}else{
			res.render("show",{blog: foundBlog});			
		}
	});
});

//Edit Route
app.get("/blogs/:id/edit",function(req, res){
	Blog.findById(req.params.id, function(err, foundBlog){
		if(err){
			res.redirect("/blogs");
		}else{
			res.render("edit",{blog:foundBlog});
		}
	});
});

app.put("/blogs/:id",function(req,res){

	Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog){
		if(err){
			res.redirect("/blogs");
		}else{
			res.redirect("/blogs/"+req.params.id);
		}
	});

});

//destroy route
app.delete("/blogs/:id",function(req,res){

	Blog.findByIdAndRemove(req.params.id, function(err){
		if(err){
			res.redirect("/blogs");
		}else{
			res.redirect("/blogs");
		}
	});

});

app.listen(4949,function(){
	console.log("Blog server started at localhost:4949");
});
