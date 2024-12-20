function setCookieConsent(consent) {
    gtag('consent', 'update', {
            'analytics_storage': consent
    })
}

document.addEventListener('DOMContentLoaded', () => {
    const getStoredCookieConsent = () => localStorage.getItem('cookieConsent')
    const setStoredCookieConsent = (consent) => localStorage.setItem('cookieConsent', consent)

    if (!getStoredCookieConsent()) {

        const myModal = new bootstrap.Modal(document.getElementById('cookie'));
        myModal.show();

        document.querySelectorAll('[data-bs-cookie-value]')
            .forEach(element => {
                element.addEventListener('click', () => {
                    const consent = element.getAttribute('data-bs-cookie-value');
                    setStoredCookieConsent(consent);
                    setCookieConsent(consent);
                    myModal.hide();
                });
            })
    } else {
        setCookieConsent(getStoredCookieConsent());
    }
});