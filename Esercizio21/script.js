function ChangeColor (){
    const BarraInput=document.getElementById('Input')
    const Testo=document.getElementById('Testo')
    if (BarraInput.value === 'blu'){
        Testo.style.color='blue'
    }
    else { 
        Testo.style.color='black'
    }
}

document.addEventListener('keypress', ChangeColor)