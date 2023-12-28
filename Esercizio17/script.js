const Menu=document.getElementById('Menu')

function ComparsaMenu(){
    const Lista=document.getElementById('Lista')
    if (Lista.style.display == "none") {
        Lista.style.display = "flex";
      } 
    else {
        Lista.style.display = "flex";}
}

Menu.addEventListener('click', ComparsaMenu)