const CambiaElemento=document.getElementById('Testo')

function ChangeStyle (){
    CambiaElemento.style.color= 'red'
}

CambiaElemento.addEventListener('mouseenter', ChangeStyle)