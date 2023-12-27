const Paragraph=document.getElementById('primo_paragrafo')

function ChangeColor(){
    Paragraph.style.color='blue'
}

Paragraph.addEventListener('click', ChangeColor)