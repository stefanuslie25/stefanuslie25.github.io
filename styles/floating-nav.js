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


function hisho() {
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