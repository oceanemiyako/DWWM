/*Vous devrez, au moyen des fonctions setInterval() ou setTimeout(), réaliser au choix :
* Un Minuteur
Le minuteur devra être une application permettant à un utilisateur de saisir des minutes, des heures et des secondes. Il pourra ensuite,
par l'appui sur un bouton, lancer le minuteur qui affichera, en temps réel, le temps restant au format hh:mm:ss (soit pour 1 minute et 
17 secondes => 00:01:17). Vous ferez en sorte de faire sonner et clignoter le minuteur une fois le temps écoulé (Pour cela, n'hésitez
pas à lire la documentation sur l'objet Audio).*/

let timer;
let totalTime;
let remainingTime;

document.getElementById('startButton').addEventListener('click', startTimer);

function startTimer() {
    const hours = parseInt(document.getElementById('hours').value) || 0;
    const minutes = parseInt(document.getElementById('minutes').value) || 0;
    const seconds = parseInt(document.getElementById('seconds').value) || 0;

    totalTime = hours * 3600 + minutes * 60 + seconds;
    remainingTime = totalTime;

    updateDisplay();

    timer = setInterval(function () {
        if (remainingTime > 0) {
            remainingTime--;
            updateDisplay();
        } else {
            clearInterval(timer);
            resetInputs();
            blinkTimerDisplay();
            playSound();
        }
    }, 1000);
}

function updateDisplay() {
    const hours = Math.floor(remainingTime / 3600);
    const minutes = Math.floor((remainingTime % 3600) / 60);
    const seconds = remainingTime % 60;

    const formattedTime = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
    document.getElementById('timer-display').innerText = formattedTime;
}

function formatTime(value) {
    return value < 10 ? `0${value}` : value;
}

function resetInputs() {
    document.getElementById('hours').value = '0';
    document.getElementById('minutes').value = '0';
    document.getElementById('seconds').value = '0';
}

function blinkTimerDisplay() {
    const timerDisplay = document.getElementById('timer-display');
    timerDisplay.classList.add('blink');
    setTimeout(() => {
        timerDisplay.classList.remove('blink');
    }, 1000); 
}

function playSound() {
    const audio = document.getElementById('audio');
    audio.play();
}






