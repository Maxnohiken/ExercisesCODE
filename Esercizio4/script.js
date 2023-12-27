function DelateParagraph (){
    const ParagrafoDaEliminare= document.getElementById('Lonfo')
    ParagrafoDaEliminare.remove()
}

document.addEventListener ('DOMContentLoaded', DelateParagraph)