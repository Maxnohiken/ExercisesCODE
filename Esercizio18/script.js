const Bottone=document.getElementById('bottone')
let posizioneAttuale = 0

function MoveElement(){
    posizioneAttuale += 20;

    // Seleziona il div e aggiorna la sua posizione
    const  Blocco= document.getElementById('blocco');
    Blocco.style.left = posizioneAttuale + 'px';
  }

Bottone.addEventListener('click', MoveElement)