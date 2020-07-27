function changeImg(Img){
	document.getElementById("bigImg").style.backgroundImage = "url(" + Img.src + ")";
}

function check(){
	var email=document.getElementById('email');
	var content=document.getElementById('content');
	if(email.value==""||content.value==""){
		document.getElementById('email').style.backgroundColor="RED";
		document.getElementById('content').style.backgroundColor="RED";
	}
}