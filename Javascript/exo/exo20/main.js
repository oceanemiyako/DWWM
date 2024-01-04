/*# Exercice 20

  - Écrire un programme qui permet de **saisir une chaîne d’ADN** ainsi qu’une plus petite **séquence d’ADN** et qui retourne le **pourcentage d’occurrences** de la séquence dans la chaîne
  - Cette séquence sera composée uniquement de la combinaison de lettre suivante **'a', 't', 'c', 'g'**.
  1. Écrire une fonction **verificationAdn** qui permet de renvoyer la valeur **True** si la chaîne d’ADN est **valide**, **False** si elle est **invalide**
  2. Écrire une fonction **saisieAdn** qui récupère une **saisie**, vérifie sa validité (avec **verificationAdn**) et **renvoie la chaîne d’ADN valide** 
  3. Écrire une fonction **proportion** qui reçoit deux paramètres **une chaîne d’ADN** et **une séquence d’ADN** Elle renverra le **pourcentage d’occurrences**  de la séquence dans la chaîne
  4. Créer des instructions pour pouvoir tester les fonctions*/

function verificationAdn(adn) {
    const regex = /^[atcg]+$/i;
    return regex.test(adn);
}

function saisieAdn() {
    let adn;
    do {
        adn = prompt("Veuillez saisir une chaîne d'ADN (composée uniquement des lettres 'a', 't', 'c', 'g'):");
    } while (!verificationAdn(adn));
    return adn;
}

function proportion(adn, sequence) {
    let count = 0;
    const sequenceLength = sequence.length;

    for (let i = 0; i <= adn.length - sequenceLength; i++) {
        const substring = adn.substring(i, i + sequenceLength);
        if (substring === sequence) {
            count++;
        }
    }

    const percentage = (count / (adn.length - sequenceLength + 1)) * 100;
    return percentage.toFixed(2); 
}

const adnSaisi = saisieAdn();
console.log("Chaîne d'ADN saisie:", adnSaisi);

const sequenceSaisie = prompt("Veuillez saisir une séquence d'ADN à rechercher:");
if (verificationAdn(sequenceSaisie)) {
    const pourcentage = proportion(adnSaisi, sequenceSaisie);
    console.log(`Le pourcentage d'occurrences de la séquence est de ${pourcentage}%`);
} else {
    console.log("La séquence d'ADN saisie n'est pas valide.");
}
