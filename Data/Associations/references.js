var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/blog_demo_2",{useMongoClient: true});


//POST - title, content
var postSchema = mongoose.Schema({
	title: String,
	content: String
});
var Post = mongoose.model("Post",postSchema);


//1. Create schema
//USER -email,name
var userSchema = mongoose.Schema({
	email: String,
	name: String,
	posts: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Post"	
		}
	]
});

//2. create model
var User = mongoose.model("User",userSchema);


// Post.create({
// 	title: "New 2",
// 	content: "blah blah!!"
// }, function(err,post){
// 	User.findOne({email:"abc@gmail.com"},function(err, foundUser){
// 		if(err){
// 			console.log(err);
// 		}else{
// 			foundUser.posts.push(post);
// 			foundUser.save(function(err, data){
// 				if(err){
// 					console.log(err);
// 				}else{
// 					console.log(data);
// 				}
// 			});
// 		}
// 	});
// 	console.log(post);
// });

// User.create({
// 	email: "abc@gmail.com",
// 	name: "Abc"
// });


//findind user and all his posts in one go

User.findOne({email:"abc@gmail.com"}).populate("posts").exec(function(err, user){
	if(err){
		console.log(err);
	}else{
		console.log(user);
	}
});
