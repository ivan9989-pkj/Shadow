document.addEventListener('DOMContentLoaded', function() {
    var formElements = document.querySelectorAll('input, textarea');

    formElements.forEach(function(element) {
        element.addEventListener('keyup', function() {
            validarElemento(element);
        });
    });
});

function validarElemento(element) {
    var id = element.id;
    var value = element.value.trim();
    var errorId = id + 'Error';
    var errorMessage = '';

    switch (id) {
        case 'name':
            if (!validatenombre(value)) {
                errorMessage = 'Por favor, ingrese un nombre válido.';
            }
            break;
        case 'email':
            if (!validateEmail(value)) {
                errorMessage = 'Por favor, ingrese un correo electrónico válido.';
            }
            break;
        case 'message':
            if (!value) {
                errorMessage = 'Por favor, ingrese su mensaje.';
            }
            break;
        default:
            break;
    }

    if (errorMessage) {
        mostrarError(errorId, errorMessage);
        marcarElementoInvalido(element);
    } else {
        ocultarError(errorId);
        marcarElementoValido(element);
    }
}

function marcarElementoInvalido(element) {
    element.classList.remove('valid');
    element.classList.add('invalid');
}

function marcarElementoValido(element) {
    element.classList.remove('invalid');
    element.classList.add('valid');
}

function mostrarError(elementId, message) {
    var errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

function ocultarError(elementId) {
    var errorElement = document.getElementById(elementId);
    errorElement.textContent = '';
    errorElement.style.display = 'none';
}

// Función para inicializar la base de datos IndexDB
function initDatabase() {
    var request = window.indexedDB.open('formularioDB', 1);

    request.onerror = function(event) {
        console.error("Error al abrir la base de datos:", event.target.errorCode);
    };

    request.onupgradeneeded = function(event) {
        var db = event.target.result;
        var objectStore = db.createObjectStore('formularioStore', { keyPath: 'id', autoIncrement:true });
        objectStore.createIndex('name', 'name', { unique: false });
        objectStore.createIndex('email', 'email', { unique: false });
        objectStore.createIndex('message', 'message', { unique: false });
    };
}

// Función para agregar datos a la base de datos
function addDataToDB(data) {
    var request = window.indexedDB.open('formularioDB', 1);

    request.onsuccess = function(event) {
        var db = event.target.result;
        var transaction = db.transaction(['formularioStore'], 'readwrite');
        var objectStore = transaction.objectStore('formularioStore');

        var addRequest = objectStore.add(data);
        
        addRequest.onsuccess = function(event) {
            console.log("Datos agregados a la base de datos correctamente.");
        };
        
        addRequest.onerror = function(event) {
            console.error("Error al agregar datos a la base de datos:", event.target.errorCode);
        };
    };
}

// Función para cargar los datos de la base de datos
function loadFormDataFromDB() {
    var request = window.indexedDB.open('formularioDB', 1);

    request.onsuccess = function(event) {
        var db = event.target.result;
        var transaction = db.transaction(['formularioStore'], 'readonly');
        var objectStore = transaction.objectStore('formularioStore');

        objectStore.openCursor().onsuccess = function(event) {
            var cursor = event.target.result;
            if (cursor) {
                var data = cursor.value;
                document.getElementById('name').value = data.name;
                document.getElementById('email').value = data.email;
                document.getElementById('message').value = data.message;
                cursor.continue();
            }
        };
    };
}

document.addEventListener('DOMContentLoaded', function() {
    initDatabase();
    loadFormDataFromDB();

    var formElements = document.querySelectorAll('input, textarea');

    formElements.forEach(function(element) {
        element.addEventListener('keyup', function() {
            validarElemento(element);
        });
    });
});

function enviarFormulario() {
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();

    // Guardar datos en la base de datos
    var formData = { name: name, email: email, message: message };
    addDataToDB(formData);

    var validacionCorrecta = true;

    if (!name) {
        mostrarError('nameError', 'Por favor, ingrese su nombre.');
        validacionCorrecta = false;
    }

    if (!email || !validateEmail(email)) {
        mostrarError('emailError', 'Por favor, ingrese un correo electrónico válido.');
        validacionCorrecta = false;
    }

    if (!message) {
        mostrarError('messageError', 'Por favor, ingrese su mensaje.');
        validacionCorrecta = false;
    }

    if (validacionCorrecta) {
        alert("¡Ha sido enviado!");
    }
}

function borrarDatosDeDB() {
    var request = window.indexedDB.open('formularioDB', 1);

    request.onsuccess = function(event) {
        var db = event.target.result;
        var transaction = db.transaction(['formularioStore'], 'readwrite');
        var objectStore = transaction.objectStore('formularioStore');

        var clearRequest = objectStore.clear();

        clearRequest.onsuccess = function(event) {
            console.log("Datos borrados de la base de datos correctamente.");
        };
        
        clearRequest.onerror = function(event) {
            console.error("Error al borrar datos de la base de datos:", event.target.errorCode);
        };
    };
}

function borrarFormulario() {
    document.getElementById('contactForm').reset();
    ocultarError('nameError');
    ocultarError('emailError');
    ocultarError('messageError');

    // Reinicia los estilos de los elementos
    document.querySelectorAll('input, textarea').forEach(function(element) {
        element.classList.remove('valid');
        element.classList.remove('invalid');
    });

    // Borra los datos de la base de datos
    borrarDatosDeDB();
}
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function validatenombre(name) {
    var re = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
    return re.test(name);
}
