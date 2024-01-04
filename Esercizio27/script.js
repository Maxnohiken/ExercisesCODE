function Progress (){
    let elem = document.getElementById("interno_barra");   
    let width = 1;
    let id = setInterval(frame, 100);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
      }
    }
}

document.getElementById('bottone').addEventListener('click', Progress) 