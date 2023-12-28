function ChangeText (){
    const Barra=document.getElementById('barra_input')
    const Testo=document.getElementById('testo')
    Testo.innerHTML=Barra.value
}

document.getElementById('bottone').addEventListener('click', ChangeText)