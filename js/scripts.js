window.onload = function() {
    var audio = document.getElementById("miCancion");
    audio.play();
};

// Inicializa el carrusel mostrando la primera imagen
showSlide(currentSlide);

const items = document.querySelectorAll('.favorite-item');
let currentIndex = 0;

function showNextItem() {
    items[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % items.length;
    items[currentIndex].classList.add('active');
}

setInterval(showNextItem, 4000);