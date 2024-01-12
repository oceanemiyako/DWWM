/*Créer une classe Personne : Créez une classe **Personne** avec des propriétés telles que **nom**, **prénom** et **âge**.
 Instanciez plusieurs objets de cette classe et affichez leurs **informations**.
Ajouter une méthode **parler** : Ajoutez une méthode **parler** à la classe Personne qui affiche un message de salutation avec le nom de la 
personne.
Créer une classe **Étudiant** : Créez une classe **Étudiant** qui hérite de la classe **Personne**. Ajoutez une propriété supplémentaire,
 comme le **numéro d'étudiant**, et une méthode pour **afficher l'information de l'étudiant**.
*/

import { Personne } from "./classes/Personne.js";
import { Etudiant } from "./classes/Etudiant.js";


const personne1 = new Personne("Oceane", "Garcia", 28);
const personne2 = new Personne("Bouriez", "Nicolas", 30);

console.log("Informations de la personne 1:");
console.log(personne1);
personne1.parler();

console.log("\nInformations de la personne 2:");
console.log(personne2);
personne2.parler();


const etudiant1 = new Etudiant("Garcia", "Ombeline", 18, "E12345");

console.log("\nInformations de l'étudiant 1:");
console.log(etudiant1);
etudiant1.parler();
etudiant1.afficherInfoEtudiant();



