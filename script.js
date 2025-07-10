function toggleTheme() {
        document.body.classList.toggle('dark-mode');
        saveTheme();
    }

    function saveTheme() {
        const isDarkMode = document.body.classList.contains('dark-mode');
        // Store theme preference in a JavaScript variable instead of localStorage
        window.currentTheme = isDarkMode ? 'dark' : 'light';
    }

    function loadTheme() {
        // Check if there's a saved theme preference
        if (window.currentTheme === 'dark') {
            document.body.classList.add('dark-mode');
        }
    }

    // Load theme on page load
    document.addEventListener('DOMContentLoaded', function() {
        // Initialize with light theme by default
        window.currentTheme = 'light';
        loadTheme();
    });