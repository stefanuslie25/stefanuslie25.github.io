const themeLink = document.getElementById('theme-style');
const toggleBtn = document.getElementById('toggle-theme');

// Load theme dari localStorage jika ada
const savedTheme = localStorage.getItem('theme');
if (savedTheme) themeLink.href = savedTheme;

toggleBtn.onclick = () => {
    const newTheme = themeLink.href.includes('light') ? 'theme/theme-dark.css' : 'theme/theme-light.css';
    themeLink.href = newTheme;
    localStorage.setItem('theme', newTheme); // Simpan tema
	window.location.reload()
};
