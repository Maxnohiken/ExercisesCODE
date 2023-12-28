const Bottone = document.getElementById('bottone');

function AddText() {
    const Barra = document.getElementById('barra_input');
    const Testo = document.getElementById('testo');
    
    // Creare un nuovo elemento li e aggiungerlo alla lista
    const CreazioneLista = document.createElement('li');
    CreazioneLista.textContent = Barra.value;
    Testo.appendChild(CreazioneLista);
}

Bottone.addEventListener('click', AddText);