/*
# Exercice 18

- Écrire une fonction javascript qui vérifie une chaîne est un palindrome ou non, indépendamment des espaces
- On rappelle qu’une chaîne de caractères, un mot, une phrase, un nombre ou une autre séquence d’unités est dite palindrome, si elle se lit de la même manière dans les deux sens
- Exemple: "non", "touot" et "1234321" sont toutes des chaînes de caractères palindromes mais "pierre" et "palindrome" n'en sont pas*/

function estPalindrome(chaine) {
    const chaineSansEspaces = chaine.replace(/\s/g, '');

    const chaineInverse = chaineSansEspaces.split('').reverse().join('');

    return chaineSansEspaces === chaineInverse;
}

console.log(estPalindrome("non"));         
console.log(estPalindrome("touot"));       
console.log(estPalindrome("1234321"));     
console.log(estPalindrome("Pokemon"));      
console.log(estPalindrome("palindrome"));  
