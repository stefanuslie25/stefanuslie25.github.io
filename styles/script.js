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

document.addEventListener('DOMContentLoaded', function() {
	var toggleButton = document.querySelector('.list-nav-toggle');
	var listNav = document.querySelector('.list-nav');

	toggleButton.addEventListener('click', function() {
		listNav.classList.toggle('hidden');
	});
});

document.addEventListener('DOMContentLoaded', () => {
	const toggleButton = document.querySelector('.list-nav-toggle');
	
	toggleButton.addEventListener('click', () => {
		toggleButton.classList.toggle('active');
	});
});

function toggleDiv() {
	var div = document.getElementById('hisho');
	if (div.style.display === 'none') {
		div.style.display = 'block'; // Tampilkan div
	} else {
		div.style.display = 'none';  // Sembunyikan div
	}
}

// Function to scroll to a specific element
function scrollToPoint(targetId) {
	var element = document.getElementById(targetId);
	if (element) {
		element.scrollIntoView({ behavior: 'smooth' });
	}
}

// Add event listeners to buttons
document.querySelectorAll('button[data-target]').forEach(function(button) {
	button.addEventListener('click', function() {
		var targetId = this.getAttribute('data-target');
		scrollToPoint(targetId);
	});
});