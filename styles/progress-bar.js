// Counter
const animateCounter = (elementId, targetNumber, duration) => {
	let currentNumber = 0;
	const interval = 20; // Update interval in milliseconds
	const increment = targetNumber / (duration / interval);
	const counterElement = document.getElementById(elementId);
	const updateCounter = () => {
		currentNumber += increment;
		if (currentNumber >= targetNumber) {
			currentNumber = targetNumber;
			clearInterval(counterInterval);
		}
		counterElement.textContent = Math.floor(currentNumber);
	};
	const counterInterval = setInterval(updateCounter, interval);
};

// Get Colors
function getColor(percentage) {
	let red = 225;
	let green = 0;

	if (percentage <= 50) {
		// Tahap 1: Merah ke Kuning (Green bertambah)
		green = Math.round((percentage / 50) * 200);
	} else {
		// Tahap 2: Kuning ke Hijau (Red berkurang)
		green = 190;
		red = Math.round(225 - ((percentage - 50) / 50) * 225);
	}

	return `rgb(${red}, ${green}, 0)`;
}

// Progress Bar Animation
function animateProgressBar(element, targetWidth) {
	let width = 0;
	const interval = setInterval(() => {
		if (width >= targetWidth) {
			clearInterval(interval);
		} else {
			width++;
			element.style.width = width + '%';
			element.style.backgroundColor = getColor(width);
			element.parentElement.previousElementSibling.textContent = width + '%';
		}
	}, 10);
}

// Progress Bar
const progressGroups = document.querySelectorAll('.progress-group');
progressGroups.forEach(group => {
	const progressBar = group.querySelector('.progress-bar');
	const target = group.querySelector('.counter').getAttribute('data-target');
	animateProgressBar(progressBar, target);
});