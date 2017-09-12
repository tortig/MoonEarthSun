/**
 * 
 */

var x1 = 375;
var y1 = 400;
var x2 = 394;
var y2 = 470;
var t;
var angle = 0;

function move() {
	document.getElementById("earth").style.left = x1 + "px";
	document.getElementById("earth").style.top = y1 + "px";
	document.getElementById("moon").style.left = x2 + "px";
	document.getElementById("moon").style.top = y2 + "px";
	
	// image of the moving earth
	x1 = 375 + 280 * Math.sin(angle * Math.PI / 180);
	y1 = 270 + 130 * Math.cos(angle * Math.PI / 180);
	
	// image of the moving moon
	x2 = (x1+25) + 60 * Math.sin(10*angle * Math.PI / 180);
	y2 = (y1+25) + 25 * Math.cos(10*angle * Math.PI / 180);
	
	angle++;
	
	t = setTimeout("move()",50);
}

function stop() {
	clearTimeout(t);
}

function time(){
	var date = new Date();

	var rope = date.getMinutes();
	var vayrkyan = date.getSeconds();
	document.getElementById("jam").innerHTML = rope + ":" + vayrkyan;
	
	t = setTimeout("time()",1000);
}