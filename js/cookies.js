// Automatically reject all cookies, disable google tag manager and google analytics
localStorage.setItem('gtm', 'false');
localStorage.setItem('ga', 'false');
localStorage.setItem('cookiePopupDisplayed', 'true');


// Popup-Fenster anzeigen, wenn der Benutzer die Website zum ersten Mal besucht
if (localStorage.getItem('cookiePopupDisplayed') !== 'true') {
    document.getElementById('cookie-popup').style.display = 'block';
    document.getElementById('cookie-content').style.display = 'block';
    document.getElementById('cookie-settings-content').style.display = 'none';

// Wenn der Benutzer schon zugestimmt hat, wird Google Analytics / Google Tag Manager ausgeführt
} else{
    document.getElementById('cookie-popup').style.display = 'none';
    loadGTM_GA();
}

// Wenn der Benutzer auf "Alle Akzeptieren" klickt, speichern wir das in Local Storage und schließen das Popup-Fenster
document.getElementById('cookie-accept-all').addEventListener('click', function() {
    localStorage.setItem('gtm', 'true');
    localStorage.setItem('ga', 'true');
    localStorage.setItem('cookiePopupDisplayed', 'true');
    document.getElementById('cookie-popup').style.display = 'none';
    loadGTM_GA();
});

// Wenn der Benutzer auf "Alle Ablehnen" klickt, speichern wir das in Local Storage und schließen das Popup-Fenster
document.getElementById('cookie-reject-all').addEventListener('click', function() {
    localStorage.setItem('gtm', 'false');
    localStorage.setItem('ga', 'false');
    localStorage.setItem('cookiePopupDisplayed', 'true');
    document.getElementById('cookie-popup').style.display = 'none';
    loadGTM_GA();
});

// Wenn der Benutzer auf "Einstellungen" klickt, wird die Funktion aufgerufen
document.getElementById('cookie-settings').addEventListener('click', function() {
    document.getElementById('cookie-content').style.display = 'none';
    document.getElementById('cookie-settings-content').style.display = 'block';
});

// Wenn der Benutzer seine Entscheidung ändern möchte, kann er das über einen Link in der Fußzeile tun
function showCookiePopup() {
    alert('Alle Cookies wurden deaktiviert');
    return;
    localStorage.removeItem('gtm');
    localStorage.removeItem('ga');
    localStorage.removeItem('cookiePopupDisplayed');
    document.getElementById('cookie-popup').style.display = 'block';
    document.getElementById('cookie-content').style.display = 'block';
    document.getElementById('cookie-settings-content').style.display = 'none';
};

// Cookie Einstellungen speichern
function saveCookieSettings() {
    var cookies = document.querySelectorAll("#cookie-settings-content input[type='checkbox']");
    var cookieValues = [];
    for (var i = 0; i < cookies.length; i++) {
      if (cookies[i].checked) {
        cookieValues.push(cookies[i].name);
      }
    }
    document.getElementById("cookie-popup").style.display = "none";
    (cookieValues.indexOf('gtm') !== -1) ? localStorage.setItem('gtm', 'true') : localStorage.setItem('gtm', 'false');
    (cookieValues.indexOf('ga') !== -1) ? localStorage.setItem('ga', 'true') : localStorage.setItem('ga', 'false');
    localStorage.setItem('cookiePopupDisplayed', 'true');
    loadGTM_GA();
  }

function loadGTM_GA(){

    let currentHostname = window.location.hostname;

    // Nur Google Tag Manager aktivieren, wenn der Benutzer das entsprechende Kontrollkästchen aktiviert hat
    if (localStorage.getItem('gtm') === 'true') {
        let gtmScript = document.createElement('script');
        gtmScript.setAttribute("async", "");
        if (currentHostname === 'mkaq.github.io') {
            gtmScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-4PVTVGRQH8';
        } else {
            gtmScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-YL9HZNY8V4';
        }
        document.head.appendChild(gtmScript);

        // Nur Google Analytics aktivieren, wenn der Benutzer das entsprechende Kontrollkästchen aktiviert hat
        if (localStorage.getItem('ga') === 'true') {
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            if (currentHostname === 'mkaq.github.io') {
                gtag('config', 'G-4PVTVGRQH8');
            } else {
                gtag('config', 'G-YL9HZNY8V4');
            }
            
        }
    }
}