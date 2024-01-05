let elemento = document.getElementById("elemento");

function Animazione() {
    let startTime = Date.now();  
    function animate() {
        let currentTime = Date.now() - startTime;
        let progress = currentTime / 5000; 
        progress = Math.min(progress, 1);
        let newSize = 100 + progress * (400 - 100); 
        let newColor = `rgba(0, 0, 255, ${progress})`; 
        elemento.style.width = newSize + "px";
        elemento.style.height = newSize + "px";
        elemento.style.backgroundColor = newColor;
        if (progress < 1) {
            requestAnimationFrame(animate);
        }
    }
    animate();
}

elemento.addEventListener("click", Animazione);
