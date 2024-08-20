function obtenerGeolocalizacion() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var coordenadas = position.coords;
            console.log("Latitud: " + coordenadas.latitude + ", Longitud: " + coordenadas.longitude);
            // Aquí puedes hacer lo que quieras con las coordenadas, como mostrarlas en la página web o enviarlas al servidor
        }, function(error) {
            console.error("Error al obtener la ubicación: ", error);
            // Aquí puedes manejar el caso en el que el usuario haya denegado el permiso de geolocalización o haya ocurrido otro error
        });
    } else {
        console.error("¡Lo sentimos mucho! Tu navegador no soporta la geolocalización");
        // Aquí puedes mostrar un mensaje al usuario indicando que su navegador no soporta la geolocalización
    }
}

obtenerGeolocalizacion();