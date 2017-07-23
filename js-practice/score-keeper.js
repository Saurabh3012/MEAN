var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");

var rst = document.getElementById('reset');

var limit = document.getElementById("limit");

var p1score=0;
var p2score=0;


p1.addEventListener("click",function(){
	p1score++;
	document.getElementById("p1d").textContent = p1score;
	console.log("in p1");
});


p2.addEventListener("click",function(){
	p2score++;
	document.getElementById("p2d").textContent = p2score;
	console.log("in p2");
});

rst.addEventListener("click",function(){
	p1score=0;
	p2score=0;
	document.getElementById("p1d").textContent = p1score;
	document.getElementById("p2d").textContent = p2score;
	console.log("in rst");
});


