document.addEventListener('DOMContentLoaded', function() {
    var cookieConsent = document.getElementById('cookieConsent');
    var btnAceptar = document.getElementById('btnAceptar');
    var btnDenegar = document.getElementById('btnDenegar');

    // Verificar si el elemento 'cookieConsent' se encontró correctamente
    if (cookieConsent) {
        btnAceptar.addEventListener('click', function() {
            document.getElementById('cookieConsent').remove();
            setCookie('cookieConsent', 'aceptado', 365); // Establecer la cookie con una duración de 365 días

            // Solicitar nombre y apellidos
            solicitarNombreApellidos();
        });

        btnDenegar.addEventListener('click', function() {
            document.getElementById('cookieConsent').remove();
            setCookie('cookieConsent', 'denegado', 365); // Establecer la cookie con una duración de 365 días
        });

        // Verificar si la cookie de consentimiento ya está establecida
        if (getCookie('cookieConsent') !== '') {
            cookieConsent.style.display = 'none';
        }

        // Cargar y mostrar nombre y apellidos desde localStorage
        var nombreApellidos = localStorage.getItem('nombreApellidos');
        if (nombreApellidos) {
            console.log('Nombre y Apellidos:', nombreApellidos);
        }
    } else {
        console.error("El elemento 'cookieConsent' no se encontró en el DOM.");
    }
});
function solicitarNombreApellidos() {
    var nombreApellidos = prompt('Por favor, introduce tu nombre y apellidos:');
    if (nombreApellidos !== null && nombreApellidos !== '') {
        // Guardar nombre y apellidos en localStorage
        localStorage.setItem('nombreApellidos', nombreApellidos);
        // Mostrar los datos en la consola
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
    // Establecer la cookie para todo el dominio y solo para conexiones seguras (HTTPS)
    document.cookie = name + '=' + value + expires + '; path=/; domain=.tudominio.com; secure';
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
