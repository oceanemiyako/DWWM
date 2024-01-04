/*# Exercice 15

  - Écrire la fonction "soustraire" qui prend en paramètre :
    - nombre **a**
    - nombre **b**
  - Elle **retournera un entier** qui sera la soustraction de ces deux nombres
  - exemple : `resultat = soustraire(2, 1)` resultat = 1
  - De plus, lors de l'exécution, la fonction affichera `"Je soustrais 2 et 1"`
  - Vous afficherez **ensuite** le résultat de l'**appel** cette fonction dans la console*/

function soustraire(nombrea, nombreb) {
    console.log("Je soustrais " + nombrea + " et " + nombreb);
    return nombrea - nombreb;
}

let resultat = soustraire(2, 1);

console.log("Résultat : " + resultat);
