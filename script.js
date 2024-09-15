// Dark mode toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Function to set dark mode
function setDarkMode(isDark) {
    if (isDark) {
        body.classList.add('dark-mode');
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        body.classList.remove('dark-mode');
        darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
}

// Set dark mode as default
setDarkMode(true);

darkModeToggle.addEventListener('click', () => {
    const isDarkMode = body.classList.toggle('dark-mode');
    setDarkMode(isDarkMode);
});

// Page navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
