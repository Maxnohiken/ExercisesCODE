const lightbox = document.getElementById('lightbox');
const risultato = document.getElementById('result');
const SpazioImmagine = document.getElementById('immaginediversa');

function ingrandisciImmagine(e) {
    const Immagini = e.target; // Usa e.target per ottenere l'elemento immagine cliccato
    SpazioImmagine.style.width = '360px';
    SpazioImmagine.style.height = '360px';
    SpazioImmagine.src = Immagini.src;
    risultato.appendChild(SpazioImmagine);
}

function SvuotaDiv() {
    SpazioImmagine.src = "";
    risultato.removeChild(SpazioImmagine); // Rimuovi l'elemento dal DOM
}
// Utilizza forEach per aggiungere l'event listener di click ad ogni elemento con classe 'immagine'
document.querySelectorAll('.immagine').forEach(function (immagine) {
    immagine.addEventListener('click', ingrandisciImmagine);
});

document.getElementById('togli').addEventListener('click', SvuotaDiv)