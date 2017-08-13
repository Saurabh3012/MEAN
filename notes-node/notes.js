// console.log("tsratr notesjs");


// module.exports.addNote = function(){
// 	console.log("addNote");
// 	return "New Note"
// }

// module.exports.add = function(a,b){
// 	return (a+b)
// }

// //console.log(module)




/* Another way to export */

var addNote = function(title, body){
	console.log("Adding note:", title, body)
}

module.exports = {
	addNote
}