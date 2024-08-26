
document.addEventListener('DOMContentLoaded', () => {
    const navegacion = document.getElementById('menu--navegacion');
    const hamburguesa = document.getElementById('hamburguesa');

    hamburguesa.addEventListener('click', () => {
        navegacion.classList.toggle('resposive--dinamico');

        if (hamburguesa.src.includes('hamburguesa.svg')) {
            hamburguesa.src = './img/cruz.svg';
        } else {
            hamburguesa.src = './img/hamburguesa.svg';
        }
    });

    // Asegurarse de que la navegación esté oculta por defecto en pantallas pequeñas
    if (window.innerWidth > 768) {
        navegacion.classList.add('resposive--dinamico');
    }
});



