function Validazione() {
    let Nome = document.getElementById('nome').value;
    let Cognome = document.getElementById('cognome').value;
    let Email = document.getElementById('email').value;
    let Password = document.getElementById('password').value;

    if (Nome === "") {
        alert("Devi inserire un Nome");
        document.getElementById('nome').focus();
        return false;
    }

    if (Cognome === "") {
        alert("Devi inserire un Cognome");
        document.getElementById('cognome').focus();
        return false;
    }

    let email_valid = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-]{2,})+.)+([a-zA-Z0-9]{2,})+$/;
    if (!email_valid.test(Email) || Email === "" || Email === undefined) {
        alert("Devi inserire un indirizzo mail corretto");
        document.getElementById('email').focus();
        return false;
    }

    if (Password === undefined || Password.length < 6 || Password === "") {
        alert("Scegli una password di minimo 6 caratteri");
        Password.focus();
        return false;
    }
}

document.getElementById('bottone').addEventListener('click', Validazione);