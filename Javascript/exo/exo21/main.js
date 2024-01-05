/*# Exercice 21

- Vous devez créer un tableau qui contiendra 10 valeurs.
- Faites en sorte que l’utilisateur puisse saisir les 10 valeurs afin de les stocker dans le tableau.
- Enfin procédez à l’itération de son contenu afin de l’afficher dans la console
- Effectuer l’affichage des résultats dans la console comme indiqué dans l'exemple ci-dessous.
- Pour aller plus loin créez une fonction permettant de le remplir automatiquement avec des nombres aléatoires
  
```
Affichage des valeurs saisies :
1
    4
        6
            23
                9
                    12
                        33
                            45
                                8
                                    30
```*/

let tableau = [];


for (let i = 0; i < 10; i++) {
    let valeur = prompt("Saisissez une valeur :");
    tableau.push(Number(valeur)); 
}


console.log("Affichage les valeurs saisies :");
for (let i = 0; i < tableau.length; i++) {
    let espacement = "    ".repeat(i); 
    console.log(espacement + tableau[i]);
}


function remplirTableaurandom() {
    tableau = []; 
    for (let i = 0; i < 10; i++) {
        tableau.push(Math.floor(Math.random() * 100) + 1); 
    }
}


remplirTableaurandom();


console.log("\nAffichage des valeurs en random :");
for (let i = 0; i < tableau.length; i++) {
    let espacement = "    ".repeat(i);
    console.log(espacement + tableau[i]);
}

