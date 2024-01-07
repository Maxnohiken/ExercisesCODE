// Otteniamo una NodeList degli elementi con la classe "colonna"
let elements = document.querySelectorAll("#colonna");

function listView() {
    elements.forEach(element => {
        element.style.width = "100%";
    });
}

function gridView() {
    elements.forEach(element => {
        element.style.width = "50%";
    });
}

document.getElementById('BottoneC').addEventListener('click', listView);
document.getElementById('BottoneG').addEventListener('click', gridView);
