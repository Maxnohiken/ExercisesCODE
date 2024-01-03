const Menu=document.getElementById('Menu')

function ComparsaMenu(){
    const Lista=document.getElementById('Lista')
    if (Lista.style.display == "flex") {
        Lista.style.display = "none";
      } else {
        Lista.style.display = "flex";}
}

Menu.addEventListener('click',ComparsaMenu)