    // Obtener el nombre guardado en el localStorage
    const name = localStorage.getItem('name');
    // Obtener el color de fondo guardado en el localStorage
    const backgroundColor = localStorage.getItem('backgroundColor');
    // Obtener el color de texto guardado en el localStorage
    const textColor = localStorage.getItem('textColor');

    // Mostrar el nombre en el recuadro
    const userGreetingElement = document.getElementById('userGreeting');
    const h2color=document.getElementById('h2color')
    if (name) {
        userGreetingElement.textContent = `${name} , Ganas de Pegar de tiros!`;
    } else {
        userGreetingElement.textContent = "Hola!";
    }

    // Cambiar el color de fondo del recuadro
    if (backgroundColor) {
        document.querySelector('.saludo').style.backgroundColor = backgroundColor;
    }

    // Cambiar el color de texto del recuadro
    if (textColor) {
        userGreetingElement.style.color = textColor;
    }

    if (textColor) {
    h2color.style.color = textColor;
    }
    // Aplicar los colores al botón
    const botonBorrarPreferencias = document.getElementById('borrarPreferencias');
    if (backgroundColor) {
        botonBorrarPreferencias.style.backgroundColor = backgroundColor;
    }
    if (textColor) {
        botonBorrarPreferencias.style.color = textColor;
    }

    // Agrega un evento de clic al botón para borrar las preferencias
    document.getElementById('borrarPreferencias').addEventListener('click', function() {
        // Elimina las preferencias del localStorage
        localStorage.removeItem('name');
        localStorage.removeItem('backgroundColor');
        localStorage.removeItem('textColor');
        // Redirige a la página de preferencias
        window.location.href = 'preferencias.html';
    });