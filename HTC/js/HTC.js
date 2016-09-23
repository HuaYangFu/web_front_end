var arr = new Array ("img/image1.jpg","img/image2.jpg","img/image3.jpg");
var num = 1;
var t;

function show(){
	if(num==3) num=0;
	document.getElementById("img").src=arr[num];
	num++;
	t = setTimeout("show()", 1000);
}
function stop(){
	clearTimeout(t);
}

function star(){
	show();
}
function over(id){
	document.getElementById(id).style.display="block"
}
function out(id){
	document.getElementById(id).style.display="none"
}
function change(id){
	document.getElementById(id).src="img/phone-back.png";
}
function changeBack(id){
	document.getElementById(id).src="img/phone.png";
}