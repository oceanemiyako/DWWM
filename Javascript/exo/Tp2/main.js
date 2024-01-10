/*créez un nouveau projet et développez un programme permettant de proposer l'application suivante :

Générer un nombre mystère aléatoirement entre 1 et 50 inclus. 

A chaque proposition du joueur validée par la touche "enter" ou par un clic sur valider, vous indiquer au joueur si le nombre qu'il a saisi est :

Plus grand que le nombre mystère

Plus petit que le nombre mystère

comptez le nombre de tentatives jusqu'a la découverte du nombre mystère. 

Une fois trouvé, indiquez au joueur la fin de la partie en lui indiquant le score et empêcher de pouvoir poursuivre la partie

le bouton Rejouer relance une partie à tout moment des lors qu'il est cliqué

effectuer l'affichage du résultat dans la page HTML*/


let secretNumber;
let attempts = 0;

function startGame() {
    secretNumber = Math.floor(Math.random() * 50) + 1;
    attempts = 0;
    updateAttemptsCount();
    document.getElementById('result').innerText = '';
    document.getElementById('play-button').disabled = false;
}

function checkGuess() {
    const errorMessageElement = document.getElementById('error-message');
    const userGuess = parseInt(document.getElementById('user-input').value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 50) {
        errorMessageElement.innerText = "Veuillez entrer un nombre valide entre 1 et 50.";
        return;
    } else {
        errorMessageElement.innerText = '';
    }

    attempts++;

    if (userGuess === secretNumber) {
        document.getElementById('result').innerText = `Bravo ! Vous avez trouvé le nombre mystère en ${attempts} tentatives.`;
        document.getElementById('play-button').disabled = true;
    } else if (userGuess < secretNumber) {
        document.getElementById('result').innerText = "Le nombre mystère est plus grand.";
    } else {
        document.getElementById('result').innerText = "Le nombre mystère est plus petit.";
    }

    updateAttemptsCount();
}

function updateAttemptsCount() {
    document.getElementById('attempts-count').innerText = attempts;
}



