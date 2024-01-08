document.addEventListener("DOMContentLoaded", function() {
    const immagine = document.getElementById("immagine");

    window.addEventListener("scroll", function() {
        const offsetY = window.scrollY;
        immagine.style.transform = "translateY(" + offsetY * 0.4 + "px)";
    });
});
