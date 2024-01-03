let Secondi = 0
let intervalId
const Timer=document.getElementById('timer')

function AvviaTimer (){;
    Timer.textContent=Secondi;
}

function AvviaIntervallo() {
    clearInterval(intervalId);
    intervalId = setInterval(AvviaTimer, 1000);
}

function FermaIntervallo() {
    clearInterval(intervalId);
}

document.getElementById('start_button').addEventListener('click', AvviaTimer)
document.getElementById('start_button').addEventListener('click', AvviaIntervallo);
document.getElementById('stop_button').addEventListener('click', FermaIntervallo);