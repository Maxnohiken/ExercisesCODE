const Paragraph=document.getElementById('Paragrafo')
const Aggiungi=document.getElementById('button_aggiungi')
const Togli=document.getElementById('button_togli')

function CancelParagraph (){
    Paragraph.style.display='none'
}

function AddParagraph (){
    Paragraph.style.display='block'
}

Togli.addEventListener ('click', CancelParagraph)
Aggiungi.addEventListener('click', AddParagraph)