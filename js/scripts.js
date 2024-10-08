window.onload = function() {
    var audio = document.getElementById("miCancion");
    audio.play();
};
let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    // Asegúrate de que el índice esté en el rango correcto
    currentSlide = (index + totalSlides) % totalSlides; // Ciclamos el índice
    const offset = -currentSlide * 100; // Calculamos el desplazamiento
    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.style.transform = `translateX(${offset}%)`; // Desplazamos el carrusel
}

function moveSlide(direction) {
    showSlide(currentSlide + direction);
}

// Inicializa el carrusel mostrando la primera imagen
showSlide(currentSlide);