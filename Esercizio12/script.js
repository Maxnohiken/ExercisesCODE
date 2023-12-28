const Lista=document.getElementsByTagName('li')
function EvidenziaElemento() {
    this.style.backgroundColor = 'lightgrey';
}

function DisevidenziaElemento() {
    this.style.backgroundColor = '';
}

for (let i = 0; i < Lista.length; i++) {
    Lista[i].addEventListener('mouseenter', EvidenziaElemento);
    Lista[i].addEventListener('mouseleave', DisevidenziaElemento);
}