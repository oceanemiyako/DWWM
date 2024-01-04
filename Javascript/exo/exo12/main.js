/*# Exercice 12

  - Réaliser un programme permettant à l'utilisateur d'entrer comme données :
    - Une population initiale.
    - Un taux d'accroissement
    - Une population visée.
  - Ce programme permettra à l'utilisateur de savoir en combien de temps la population visée sera atteinte.

Exemple : 
```
Saisir la population : 40000
Saisir le taux (%) : 2
Saisir la population visée : 80000
La population dépasse la population visée à l'année 36 (81595 habitants)
```*/

let populationInitiale = +prompt("Saisir la population");
let taux = +prompt("Saisir un taux en %");
let populationVisee = +prompt("Saisir la population visée");
let annee = 0;

while(populationInitiale < populationVisee) {
    populationInitiale *= 1 + (taux / 100);
    annee++;
}

console.log(`La population visée sera atteinte en ${annee} années avec une population de ${Math.ceil(populationInitiale)} personnes`);