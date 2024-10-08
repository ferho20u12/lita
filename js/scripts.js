window.onload = function() {
    var audio = document.getElementById("miCancion");
    audio.play();
};
window.onload = function() {
    let images = document.querySelectorAll('.image');
    let index = 0;

    function showImages() {
        // Oculta todas las imágenes
        images.forEach(img => img.style.opacity = 0);

        // Muestra las imágenes de acuerdo al tamaño de pantalla
        if (window.innerWidth > 768) {
            // Para escritorio, mostrar dos imágenes
            images[index].style.opacity = 1;
            if (images[index + 1]) {
                images[index + 1].style.opacity = 1;
            }
        } else {
            // Para móvil, mostrar solo una imagen
            images[index].style.opacity = 1;
        }

        // Actualiza el índice
        index = (index + (window.innerWidth > 768 ? 2 : 1)) % images.length;
    }

    // Llama a la función showImages cada 3 segundos
    setInterval(showImages, 4000);

    // Inicia mostrando las primeras imágenes
    showImages();
};
