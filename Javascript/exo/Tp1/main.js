/*Créez un nouveau projet et réalisez le programme permettant: 
- d'après leurs ancienneté dans l'entreprise, il sera alloué aux cadres une indemnité de licenciement. 
- elle sera établie comme suit: 
la moitié du salaire d'un mois par année d'ancienneté : pour la tranche d'ancienneté entre 1 ans et 10 ans. 
Au-delà la 10 ans un mois de salaire par année d'ancienneté. 
une indemnité supplémentaire serait allouée aux cadres âgés de plus de 45 ans de :
2 mois de salaire si le cadre est âgé de 46 à 49 ans. 
5 mois si le cadre est âgé de plus de 50 ans. 
écrire un programme qui permet de saisir l'âge, l'ancienneté et le dernier salaire et d'affiche l'indeminité du cadre. 
stockez l'âge, l'ancienneté ainsi que le dernier salaire dans des variables numériques de type entier.
effectuer l'affichage du résutat dans la console comme indiqué dans l'exemple ci-dessus.
création et utilisation des structures conditionnelles  en Javascript

exemple : Le montant de l'indemnité pour un salarié de 54 ans et avec 16 d'ancienneté s'élève à 52160 euros*/

function calculerIndemnite() {

    const age = parseInt(document.getElementById('age').value);
    const anciennete = parseInt(document.getElementById('anciennete').value);
    const dernierSalaire = parseInt(document.getElementById('dernierSalaire').value);

    let indeminite = 0;

if (anciennete >= 1 && anciennete <= 10) {

    indeminite = (0.5 * dernierSalaire) * anciennete;    
} else {
    indemnite = dernierSalaire * anciennete;
}

if (age >= 46 && age <= 49) {
    indemnite += 2 * dernierSalaire;
} else if (age >= 50) {
    indemnite += 5 * dernierSalaire;
}

document.getElementById('resultat').innerHTML = "Le montant de l'indemnité pour un salarié de " + age + " et avec " + anciennete + " s'élève à " + indemnite + " euros.";


}