function DimensioniImmagine() {
    let sizeSlider = document.getElementById('sizeSlider');
    let immagine = document.getElementById('immagine');

    sizeSlider.addEventListener('input', function() {
        let scaleFactor = sizeSlider.value / 100;
        immagine.style.transform = 'scale(' + scaleFactor + ')';
    });
}

document.addEventListener('DOMContentLoaded',DimensioniImmagine)