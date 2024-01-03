function AddCounter (){
    const Counter = document.getElementById('Counter');
    const ValoreCounter = parseInt(Counter.textContent) + 1;
    Counter.textContent = ValoreCounter;
}

document.getElementById('Bottone').addEventListener('click', AddCounter)