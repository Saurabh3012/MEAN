alert("connected!");

function change_color(){
	var elem = document.querySelector('body');
	if (elem.style.background == "") {
		elem.style.background = "purple";	
	}else{
		elem.style.background = "";
	}
	
}

var button = document.querySelector('button');
console.log(button)
button.addEventListener("click",change_color);