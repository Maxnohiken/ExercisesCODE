document.addEventListener("DOMContentLoaded", function() {
    var button = document.querySelector('.Button');
    var dropdown = document.getElementById('myDropdown');

    button.addEventListener('click', function() {
        dropdown.classList.toggle('show');
    });

    window.addEventListener('click', function(event) {
        if (!event.target.matches('.Button')) {
            var dropdowns = document.getElementsByClassName('dropdown-content');
            for (var i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    });

    dropdown.addEventListener('click', function(event) {
        if (event.target.tagName === 'A') {
            var links = dropdown.getElementsByTagName('a');
            for (var i = 0; i < links.length; i++) {
                links[i].classList.remove('selected');
            }

            event.target.classList.add('selected');
            
            // Aggiorna l'immagine in base al link selezionato
            updateImage(event.target.getAttribute('href'));
        }
    });

    function updateImage(teamName) {
        var imageUrl = ""; // Aggiungi l'URL dell'immagine per ciascuna squadra
    
        switch (teamName) {
            case "#Inter":
                imageUrl = "InterMilan.webp";
                break;
            case "#Milan":
                imageUrl = "Milan.webp";
                break;
            case "#Juventus":
                imageUrl = "Juventus.jpg";
                break;
            // Aggiungi altri casi per le squadre se necessario
        }
    
        if (imageUrl) {
            document.body.style.backgroundImage = "url(" + imageUrl + ")";
        } else {
            console.error("URL dell'immagine non valido per " + teamName);
        }
    }
});