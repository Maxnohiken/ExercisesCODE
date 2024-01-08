document.addEventListener("DOMContentLoaded", function() {
    const editor = document.getElementById("editor");
    const cancellaButton = document.getElementById("cancella");
    const maiuscoloButton = document.getElementById("maiuscolo");
    const minuscoloButton = document.getElementById("minuscolo");
    const grandezzaInput = document.getElementById("grandezza");
    const fontSelezionato = document.getElementById("fontSelezionato");

    cancellaButton.addEventListener("click", function() {
        editor.value = "";
    });

    maiuscoloButton.addEventListener("click", function() {
        editor.value = editor.value.toUpperCase();
    });

    minuscoloButton.addEventListener("click", function() {
        editor.value = editor.value.toLowerCase();
    });

    grandezzaInput.addEventListener("input", function() {
        const grandezza = parseInt(grandezzaInput.value);
        editor.style.fontSize = grandezza + "px";
    });

    fontSelezionato.addEventListener("change", function() {
        const selectedFont = fontSelezionato.value;
        editor.style.fontFamily = selectedFont;
    });
});