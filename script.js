// Funkcja pokazująca baner
window.onload = function() {
    if (!localStorage.getItem('cookiesAccepted')) {
        document.getElementById('cookieBanner').style.display = 'block';
    }
}

// Funkcja akceptacji plików cookies
function acceptCookies() {
    localStorage.setItem('cookiesAccepted', 'true');
    document.getElementById('cookieBanner').style.display = 'none';
    // Tutaj dodaj kod do uruchomienia Google Analytics
}

// Funkcja odrzucenia plików cookies
function declineCookies() {
    localStorage.setItem('cookiesAccepted', 'false');
    document.getElementById('cookieBanner').style.display = 'none';
    // Tutaj możesz dodać kod do blokowania śledzenia Google Analytics
}

// Funkcja dostosowania ustawień plików cookies
function customizeSettings() {
    alert("Funkcja dostosowania ustawień nie została jeszcze zaimplementowana.");
    // Możesz tutaj dodać logikę do personalizacji ustawień cookies
}
