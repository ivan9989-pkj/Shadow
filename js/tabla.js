function ordenarTabla(letra, idTabla) {
    var tabla = document.getElementById(idTabla);
    var tbody = tabla.querySelector('tbody');
    var filas = Array.from(tbody.getElementsByTagName('tr'));


    filas.sort(function(a, b) {
        // Obtener el contenido de la segunda celda (índice 1) de las filas a y b
        var textoA = a.getElementsByTagName('td')[1].textContent.toUpperCase();
        var textoB = b.getElementsByTagName('td')[1].textContent.toUpperCase();
    
        // Verificar si hay una letra específica para la clasificación
        if (letra === '') {
            // Si no hay letra específica, usaremos localeCompare para la comparación 
            return textoA.localeCompare(textoB);
        } else {
            // Calcular la distancia absoluta entre la letra y el primer carácter de cada texto
            var distanciaA = Math.abs(letra.charCodeAt(0) - textoA.charCodeAt(0));
            var distanciaB = Math.abs(letra.charCodeAt(0) - textoB.charCodeAt(0));
    
            // Si las distancias son iguales, usar localeCompare para la comparación estándar
            if (distanciaA === distanciaB) {
                return textoA.localeCompare(textoB);
            } else {
                // Ordenar según la diferencia de distancias
                return distanciaA - distanciaB;
            }
        }
    });
    

    for (var i = 0; i < filas.length; i++) {
        tbody.appendChild(filas[i]);
    }
}