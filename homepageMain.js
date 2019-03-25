window.onload = function(){var modal = document.getElementById("myModal");
var contact = document.getElementById("contact");
var modal_close = document.getElementById("close");

contact.onclick = function(){
	modal.style.display = "block";
	}

modal_close.onclick = function(){
	modal.style.display = "none";
}

window.onclick = function(event){
	if (event.target == modal) {
	modal.style.display = "none";
	}
}


}
function myFunction(){
	var box = document.getElementById("box0");
	var offset = box.offsetTop;
	var sticky = window.pageYOffset-80;
	if ( sticky >= offset){
		box.classList.add("sticky");
	} else {
		box.classList.remove("sticky");
	}
	
}
