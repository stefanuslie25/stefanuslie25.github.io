if (window.location.hostname === 'www.stefanuslie25.my.id' && window.location.pathname.endsWith('index.html')) {
	window.location.replace('/');
}

if (window.location.hostname === 'www.stefanuslie25.my.id' && window.location.pathname.endsWith('list.html')) {
	window.location.replace(window.location.pathname.replace('list.html', 'list'));
}

if (window.location.hostname === 'www.stefanuslie25.my.id' && window.location.pathname.endsWith('credits.html')) {
	window.location.replace(window.location.pathname.replace('credits.html', 'credits'));
}

function copyAlert() {
	alert("Successfully copy the code!");
	
	var textToCopy = document.getElementById("textToCopy");
	
	textToCopy.select();
	textToCopy.setSelectionRange(0, 99999);
	
	document.execCommand("copy");
}

function comingsoonAlert() {
	alert("Coming soon!");
}