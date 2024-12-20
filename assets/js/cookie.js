
function gtag() {
    dataLayer.push(arguments);
}

function setCookieConsent(consent) {
    if (consent === 'denied' || consent === 'granted') {
        gtag('consent', 'update', {
            'analytics_storage': consent
        })
    } else {
        gtag('consent', 'default', {
            'ad_storage': 'denied',
            'ad_user_data': 'denied',
            'ad_personalization': 'denied',
            'analytics_storage': 'denied'
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.dataLayer = window.dataLayer || [];

    gtag('js', new Date());
    gtag('config', 'G-1SMKKF18WE');

    const getStoredCookieConsent = () => localStorage.getItem('cookieConsent')

    const setStoredCookieConsent = (consent) => localStorage.setItem('cookieConsent', consent)

    setCookieConsent(getStoredCookieConsent());

    if (!getStoredCookieConsent()) {
        setTimeout(() =>   {
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
        }, 0);
    }
});