if (window.location.hostname === 'www.stefanuslie25.my.id' && window.location.pathname.endsWith('index.html')) {
	window.location.replace('/');
}

if (window.location.hostname === 'www.stefanuslie25.my.id' && window.location.pathname.endsWith('list.html')) {
	window.location.replace(window.location.pathname.replace('list.html', 'list'));
}

if (window.location.hostname === 'www.stefanuslie25.my.id' && window.location.pathname.endsWith('credits.html')) {
	window.location.replace(window.location.pathname.replace('credits.html', 'credits'));
}

document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('sidebar-toggle');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');

    toggleButton.addEventListener('click', function () {
        sidebar.classList.toggle('open');
        overlay.classList.toggle('visible');
    });

    // Close sidebar and overlay when clicking outside
    document.addEventListener('click', function (event) {
        if (!sidebar.contains(event.target) && !toggleButton.contains(event.target)) {
            sidebar.classList.remove('open');
            overlay.classList.remove('visible');
        }
    });

    // Close sidebar and overlay when clicking on overlay
    overlay.addEventListener('click', function () {
        sidebar.classList.remove('open');
        overlay.classList.remove('visible');
    });
});