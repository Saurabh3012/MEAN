var express = require("express"),
	app = express(),
	passport = require("passport"),
	bodyParser = require("body-parser"),
	LocalStrategy = require("passport-local"),
	User = require("./models/user"),
	mongoose = require("mongoose"),
	passportLocalMongoose = require("passport-local-mongoose");

//APP config
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/auth_demo_app",{useMongoClient: true});
app.set("view engine", "ejs");

//to use session
app.use(require("express-session")({
	secret: "to be used to encode and decode",
	resave: false,
	saveUninitialized: false

}));

//to use passport
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({extended: true}));

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


//ROUTES

app.get("/",function(req,res){
	res.render("home");
});

app.get("/secret", isLoggedIn ,function(req,res){
	res.render("secret");
});


//AUTH ROUTES

//show sign up form
app.get("/register", function(req, res){
	res.render("register");
});

//handling user signup
app.post("/register", function(req, res){

	User.register(new User({username: req.body.username}), req.body.password, function(err, user){
		if(err){
			console.log(err);
			return res.render("register");
		}else{
			passport.authenticate("local")(req, res, function(){
				res.redirect("/secret");
			});
		}
	});

});


//Login routes

app.get("/login", function(req, res){
	res.render("login");
});

//login logic
//middleware
app.post("/login", passport.authenticate("local", {
	successRedirect: "/secret",
	failureRedirect: "/login"
}) , function(req, res){

});



//logout

app.get("/logout", function(req, res){
	req.logout();
	res.redirect("/");
});



function isLoggedIn(req, res, next){
	if(req.isAuthenticated() ){
		return next();		
	}
	res.redirect("/login");
}

app.listen(5000,function(){
	console.log("Server started at localhost:5000");
});




