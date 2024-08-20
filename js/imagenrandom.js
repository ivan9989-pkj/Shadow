
// Lista de nombres de archivos de imágenes en la carpeta "img"
const imageNames=[

    'foto-arma1.png',
    'foto-arma2.png',
    'foto-arma3.png',
    'foto-arma4.png'
];

const basePath='../img/';

// Función para cambiar la imagen de manera aleatoria
function changeImage(){
    const randomIndex = Math.floor(Math.random() * imageNames.length);
    const randomImageName = imageNames[randomIndex];
    const randomImageUrl = basePath + randomImageName;
    document.getElementById('random-image').src = randomImageUrl;
}

// Llamada inicial para mostrar una imagen al cargar la página
window.onload = function () {
    changeImage();
    
    // Cambia la imagen cada 3 segundos después de la carga inicial
    setInterval(changeImage, 3000);
};