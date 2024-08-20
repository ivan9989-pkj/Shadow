document.addEventListener('DOMContentLoaded', function () {
    // Manejar clicks en los enlaces de la navegación
    document.querySelectorAll('.navinfo a').forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            // Obtener el ID del objetivo desde el atributo href
            const targetId = this.getAttribute('href').substring(1);

            // Obtener el elemento de destino
            const targetElement = document.getElementById(targetId);

            // Desplazarse suavemente al elemento de destino
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
