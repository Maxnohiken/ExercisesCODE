const Testo=document.getElementById('Testo')
const Stile=document.getElementById('Stile')

function AddElementCss (){
    var nuovoStile= 'color: blue; font-size: 30px;';
    Testo.style.cssText = nuovoStile;
}

Stile.addEventListener('click', AddElementCss)