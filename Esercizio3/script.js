
function NuovoParagrafo (){
    const nuovopar=document.createElement('p')
    const container=document.getElementById('Paragrafo')
    nuovopar.innerText='Il lonfo non vaterca'
    container.appendChild(nuovopar)
}

document.addEventListener('DOMContentLoaded', NuovoParagrafo)