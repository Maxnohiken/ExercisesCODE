const Esempio=document.getElementById('esempio')

function ChangeColor(){
    Esempio.style.backgroundColor=('green')
}

Esempio.addEventListener('mouseout', ChangeColor)