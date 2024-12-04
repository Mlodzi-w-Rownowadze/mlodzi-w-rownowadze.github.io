document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleMode');

    toggleButton.addEventListener('click', function() {
        if (document.body.classList.contains('light-mode')) {
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
            console.log('Current theme:', document.body.classList);
        } else {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
            localStorage.setItem('theme', 'light-mode');
            console.log('Current theme:', document.body.classList);
        }
    });
});