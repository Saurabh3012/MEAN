var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/blog_demo",{useMongoClient: true});


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
	posts: [postSchema]
});

//2. create model
var User = mongoose.model("User",userSchema);



//create new data
// var newUser = new User({
// 	email: "saurabh3012@gmail.com",
// 	name: "Saurabh Verma"
// });

// newUser.posts.push({
// 	title:"new ship",
// 	content: "zacuzzi"
// });

// newUser.save(function(err, user){
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log(user);
// 	}
// });

// var newPost = new Post({
// 	title: "First post",
// 	content: "Lorem ipsum sit dolor amet"
// });
// newPost.save(function(err, post){
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log(post);
// 	}
// });

