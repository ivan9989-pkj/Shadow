document.addEventListener('DOMContentLoaded', function() {
    var cookieConsent = document.getElementById('cookieConsent');
    var btnAceptar = document.getElementById('btnAceptar');
    var btnDenegar = document.getElementById('btnDenegar');

    if (cookieConsent) {
        btnAceptar.addEventListener('click', function() {
            document.getElementById('cookieConsent').remove();
            setCookie('cookieConsent', 'aceptado', 365);
            solicitarNombreApellidos();
        });

        btnDenegar.addEventListener('click', function() {
            document.getElementById('cookieConsent').remove();
            setCookie('cookieConsent', 'denegado', 365);
        });

        if (getCookie('cookieConsent') !== '') {
            cookieConsent.style.display = 'none';
        }
    } else {
        console.error("El elemento 'cookieConsent' no se encontró en el DOM.");
    }

    var btnBorrarPreferencias = document.getElementById('borrarPreferencias');
    if (btnBorrarPreferencias) {
        btnBorrarPreferencias.addEventListener('click', function() {
            reiniciarCookies();
            console.log('Preferencias borradas correctamente.');
        });
    } else {
        console.error("El botón 'borrarPreferencias' no se encontró en el DOM.");
    }
});

function solicitarNombreApellidos() {
    var nombreApellidos = prompt('Por favor, introduce tu nombre y apellidos:');
    if (nombreApellidos !== null && nombreApellidos !== '') {
        localStorage.setItem('nombreApellidos', nombreApellidos);
        console.log('Nombre y Apellidos:', nombreApellidos);
    }
}

function setCookie(name, value, days) {
    var expires = '';
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + value + expires + '; path=/';
}

function getCookie(name) {
    var nameEQ = name + '=';
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return '';
}

function reiniciarCookies() {
    setCookie('cookieConsent', '', -1);
    localStorage.removeItem('nombreApellidos');
}
