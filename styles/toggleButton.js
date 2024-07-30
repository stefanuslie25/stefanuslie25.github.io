document.addEventListener('DOMContentLoaded', function() {
	const toggleButton = document.getElementById('toggleButton');
	
	window.addEventListener('scroll', function() {
		if (window.scrollY > 100) {
			toggleButton.textContent = 'Back to Top';
			toggleButton.setAttribute('href', '#top-page');
		} else {
			toggleButton.textContent = 'Back';
			toggleButton.setAttribute('href', 'previous-page.html');
		}
	});
});