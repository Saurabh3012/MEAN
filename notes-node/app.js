// console.log("Starting app")

// const fs = require("fs");
// const os = require("os");

// const notes = require("./notes.js")

// const _ = require("lodash")


// console.log(_.isString(true))

// console.log(_.isString("saurabh"))

// console.log(_.uniq(["saurabh",2,3,4,5,1,2,4]))

// var res = notes.addNote()
// console.log(res)

// var user = os.userInfo();
// console.log(notes.age);

//fs.appendFile('hello.txt', `Hello ${user.usernme} !`);

// console.log(notes)

// console.log(notes.add(3,5))


// console.log(notes.add(-1,9))

// console.log(notes.add(5,0))


//Getting input from user through cpmmand line


const fs = require("fs");
const yargs = require("yargs");
const _ = require("lodash")


const notes = require("./notes.js")

const argv = yargs.argv
console.log(process.argv)
console.log(argv)



var command = process.argv[2]

if(command == "add"){
	console.log('adding new note')
	notes.addNote(argv.title, argv.body)

} else if (command === "list"){
	console.log("listing notes")
} else if( command === "read" ){
	console.log("reading a note")
}  else if(command === "delete"){
	console.log("delete a note")
} else{
	console.log("command not recognised")
}