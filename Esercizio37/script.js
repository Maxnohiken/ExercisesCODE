const targetNumber = Math.floor(Math.random() * 10) + 1;

function guessNumber() {
    const guessInput = document.getElementById("guessInput");
    const resultMessage = document.getElementById("resultMessage");
    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
        resultMessage.textContent = "Inserisci un numero valido tra 1 e 10.";
        return;
    }

    if (userGuess === targetNumber) {
        resultMessage.textContent = "Complimenti! Hai indovinato!";
        disableInputAndButton();
    } else {
        resultMessage.textContent = "Sbagliato! Prova di nuovo.";
    }
}
