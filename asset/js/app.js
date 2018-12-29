/**
* Key lock of the keyboard
*
*/ 

function keyboardKey(){
	return false;
}

function rightClick(){
	return false;
}

function disableText(e){
	return false;
}

function reEnable(){
	return true;
}

document.onselectstart = new Function("return false")
if (window.sidebar){
	document.onmousedown = disableText;
	document.onclick = reEnable;
	document.oncontextmenu = rightClick;
	document.onkeypress = keyboardKey;
	document.onkeydown = keyboardKey;
	document.onkeyup = keyboardKey;
}