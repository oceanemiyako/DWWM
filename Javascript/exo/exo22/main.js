/*# Exercice 22
- Demander à l’utilisateur le nombre de chiffre que comportera un tableau
- Le programme générera aléatoirement des nombres entre 1 et 50 pour remplir les cellules de ce tableau.
- Enfin votre programme vérifiera s’ils sont pair ou impair puis les affichera sous cette forme :
```
Le nombre 30 est   pair.
Le nombre 31 est impair.
Le nombre  5 est impair.
Le nombre 12 est   pair.
```*/

var nombreTableau = prompt("Entrez le nombre de chiffres pour le tableau :");
var tableau = [];

for (var i = 0; i < nombreTableau; i++) {
    var nombreRandom = Math.floor(Math.random() * 50) + 1;
    tableau.push(nombreRandom);
}

for (var i = 0; i < tableau.length; i++) {
    var nombre = tableau[i];
    var pairOrImpair = (nombre % 2 === 0) ? "pair" : "impair";
    console.log("Le nombre " + nombre + " est " + pairOrImpair + ".");
}


