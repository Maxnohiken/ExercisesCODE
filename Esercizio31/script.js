function NumeroCasuale (){
    let Numero=document.getElementById('numero')
    Numero.innerHTML=Math.floor(Math.random()*1000)
    console.log(Numero)
}

document.getElementById('bottone').addEventListener('click', NumeroCasuale)