function DissolvenzaImg() {
    const Img = document.getElementById('Immagine');
    let Opacità = parseFloat(Img.style.opacity) || 1;

    function dissolvenza() {
        if (Opacità <= 1) {
            Opacità -= 0.01;
            Img.style.opacity = Opacità;
            requestAnimationFrame(dissolvenza);
        }
    }
    dissolvenza();
}

document.getElementById('Immagine').addEventListener('click', DissolvenzaImg);
