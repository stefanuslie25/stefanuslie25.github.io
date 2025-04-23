if (window.location.hostname === 'www.stefanuslie25.my.id' && window.location.pathname.endsWith('index.html')) {
	window.location.replace('/');
}

if (window.location.hostname === 'www.stefanuslie25.my.id' && window.location.pathname.endsWith('projects.html')) {
	window.location.replace(window.location.pathname.replace('projects.html', 'projects'));
}

if (window.location.hostname === 'www.stefanuslie25.my.id' && window.location.pathname.endsWith('info.html')) {
	window.location.replace(window.location.pathname.replace('info.html', 'info'));
}

document.querySelectorAll('.box').forEach(box => {
  const bgImage = box.getAttribute('data-bg');
  box.style.backgroundImage = `url(${bgImage})`;
});
