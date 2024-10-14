const toggleSwitch = document.getElementById('theme-toggle');
const themeLabel = document.getElementById('theme-label');

// Load saved theme from localStorage
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    toggleSwitch.checked = true;
    themeLabel.textContent = 'Dark Mode';
}

// Event listener for theme toggle
toggleSwitch.addEventListener('change', () => {
    if (toggleSwitch.checked) {
        document.body.classList.add('dark-mode');
        themeLabel.textContent = 'Dark Mode';
        localStorage.setItem('theme', 'dark'); // Save the user's preference
    } else {
        document.body.classList.remove('dark-mode');
        themeLabel.textContent = 'Light Mode';
        localStorage.setItem('theme', 'light'); // Save the user's preference
    }
});
