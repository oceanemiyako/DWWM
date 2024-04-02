<?php

function prompt($message) {
    echo $message . " ";
    return trim(fgets(STDIN));
}

function startGame() {
    echo "Vous vous tenez à l'entrée d'une forêt ancienne pleine de mystère. Un Pokémon légendaire est dit être caché quelque part à l'intérieur.\n";

    $response = prompt("Voulez-vous entrer ? (oui/non)");

    if (strtolower($response) === 'oui') {
        adventure();
    } else {
        echo "Dommage, peut-être une prochaine fois !\n";
    }
}

function adventure() {
    echo "Vous avancez dans la forêt...\n";

    $response = prompt("Vous arrivez à un carrefour. Allez-vous à gauche, à droite ou tout droit ? (gauche/droite/droit)");

    if (strtolower($response) === 'gauche') {
        echo "Vous avez choisi d'aller à gauche...\n";
        echo "Vous trouvez un étang, mais aucun signe du Pokémon légendaire.\n";
        continueAdventure();
    } elseif (strtolower($response) === 'droite') {
        echo "Vous avez choisi d'aller à droite...\n";
        echo "Vous trouvez une grotte sombre. Vous décidez de l'explorer...\n";
        exploreCave();
    } elseif (strtolower($response) === 'tout droit') {
        echo "Vous avez choisi d'aller tout droit...\n";
        echo "Vous trouvez un vieux temple abandonné. Peut-être que le Pokémon légendaire s'y trouve...\n";
        searchTemple();
    } else {
        echo "Désolé, je n'ai pas compris votre réponse.\n";
        adventure();
    }
}

function continueAdventure() {
    $response = prompt("Voulez-vous continuer à explorer ? (oui/non)");

    if (strtolower($response) === 'oui') {
        adventure();
    } else {
        echo "Vous décidez de faire demi-tour.\n";
        startGame();
    }
}

function exploreCave() {
    echo "Vous entrez dans la grotte...\n";
    echo "Après un moment de marche, vous trouvez une sortie de l'autre côté. Mais toujours pas de Pokémon légendaire en vue.\n";
    continueAdventure();
}

function searchTemple() {
    echo "Vous entrez dans le temple...\n";
    echo "À l'intérieur, vous découvrez des inscriptions anciennes et des symboles mystérieux. Soudain, une lueur étrange attire votre attention...\n";
    echo "Vous vous approchez et découvrez le Pokémon légendaire ! C'était Zacian ! Félicitations, vous l'avez attrapé !\n";
    playAgain();
}

function playAgain() {
    $response = prompt("Voulez-vous jouer à nouveau ? (oui/non)");

    if (strtolower($response) === 'oui') {
        startGame();
    } else {
        echo "Merci d'avoir joué ! Au revoir !\n";
    }
    return exit();
}

startGame();



