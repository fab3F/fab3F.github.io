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
        gtmScript.setAttribute("async");
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

















function cssPopup(){
    let div_cookie_popup = document.getElementById('cookie-popup');
    let div_cookie_popup_content = document.getElementById('cookie-popup-content');
    let div_cookie_popup_button_container = document.getElementById('cookie-popup-button-container');
    let button_cookie_popup_button_accept_cookies = document.getElementById('cookie-popup-button-accept-cookies');
    let button_cookie_popup_button_reject_cookies = document.getElementById('cookie-popup-button-reject-cookies');

    div_cookie_popup.style = "";
    div_cookie_popup_content.style = "";
    div_cookie_popup_button_container.style = "";
    button_cookie_popup_button_accept_cookies.style = "";
    button_cookie_popup_button_reject_cookies.style = "";

    div_cookie_popup.style.position = "fixed";
    div_cookie_popup.style.top = "0";
    div_cookie_popup.style.left = "0";
    div_cookie_popup.style.right = "0";
    div_cookie_popup.style.bottom = "0";
    div_cookie_popup.style.backgroundColor = "rgba(0,0,0,0.5)";
    div_cookie_popup.style.zIndex = "999";
    div_cookie_popup.style.display = "none";

    div_cookie_popup_content.style.position = "absolute";
    div_cookie_popup_content.style.top = "50%";
    div_cookie_popup_content.style.left = "50%";
    div_cookie_popup_content.style.transform = "translate(-50%, -50%)";
    div_cookie_popup_content.style.backgroundColor = "#27282c";
    div_cookie_popup_content.style.color = "#fff";
    div_cookie_popup_content.style.padding = "20px";
    div_cookie_popup_content.style.borderRadius = "10px";
    div_cookie_popup_content.style.textAlign = "enter";
    div_cookie_popup_content.style.maxWidth = "500px";
    div_cookie_popup_content.style.width = "90%";

    div_cookie_popup_button_container.style.marginTop = "20px";

    button_cookie_popup_button_accept_cookies.style.padding = "10px 20px";
    button_cookie_popup_button_accept_cookies.style.border = "none";
    button_cookie_popup_button_accept_cookies.style.borderRadius = "5px";
    button_cookie_popup_button_accept_cookies.style.cursor = "pointer";
    button_cookie_popup_button_accept_cookies.style.margin = "0 10px";
    button_cookie_popup_button_accept_cookies.style.backgroundColor = "#007bff";
    button_cookie_popup_button_accept_cookies.style.color = "#fff";
    button_cookie_popup_button_accept_cookies.style.transition = ".3s"
    // missing for button_cookie_popup_button_accept_cookies:hover {transform: scale(1.1);}

    button_cookie_popup_button_reject_cookies.style.padding = "10px 20px";
    button_cookie_popup_button_reject_cookies.style.border = "none";
    button_cookie_popup_button_reject_cookies.style.borderRadius = "5px";
    button_cookie_popup_button_reject_cookies.style.cursor = "pointer";
    button_cookie_popup_button_reject_cookies.style.margin = "0 10px";
    button_cookie_popup_button_reject_cookies.style.backgroundColor = "#dc3545";
    button_cookie_popup_button_reject_cookies.style.color = "#fff";
    button_cookie_popup_button_reject_cookies.style.transition = ".3s";
    // missing for button_cookie_popup_button_reject_cookies:hover {transform: scale(1.1);}
}