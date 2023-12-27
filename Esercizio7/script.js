const Testo=document.getElementById('testo')

function ChangeText(){
    Testo.innerHTML='Nuovo testo'
}

Testo.addEventListener ('mouseenter', ChangeText)