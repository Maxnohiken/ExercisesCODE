function AddCounter (){
    const Counter = document.getElementById('Counter');
    let ValoreCounter = parseInt(Counter.textContent);
    ValoreCounter = ValoreCounter + 1;
    Counter.textContent = ValoreCounter;
}

document.getElementById('Bottone').addEventListener('click', AddCounter)