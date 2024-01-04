/*# Exercice 19

  - Écrire une fonction **compterLettreA**.
  - Cette fonction prendra en **paramètre une chaîne**
  - Créer une boucle qui parcourt les lettres de la chaîne et compte le nombre de lettres égales à "a".
  - La fonction **renverra un entier**.
  - exemple : `compterLettreA("abba")` # résultat : 2
  - exemple : `compterLettreA("mixer")` # résultat : 0

  - Pour ce faire vous pourriez avoir besoin de `chaine.length` et de `chaine[i]` (ou l'équivalent `chaine.charAt(i)`)*/

  function compterLettreA(chaine) {
    let compteur = 0;

    for (let i = 0; i < chaine.length; i++) {
        if (chaine[i].toLowerCase() === 'a') {
            compteur++;
        }
    }

    return compteur;
}

console.log(compterLettreA("Oceane"));   
console.log(compterLettreA("Spy x Family"));  
console.log(compterLettreA("Givrali"))
console.log(compterLettreA("Cerise"))
console.log(compterLettreA("Abracadabra"))

