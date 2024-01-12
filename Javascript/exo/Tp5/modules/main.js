/*Créer la classe mère Vehicule avec les attributs et méthodes comme indiqué ci-dessus.
o La méthode display retourne une chaine concaténant les attributs de l’objet
Créer les class enfants Voiture et moto et pour chacune spécifier :
o Les attributs spécifiques (s’il y en a)
o Redéfinissez la méthode display en ajoutant « Auto : » ou « Moto : » avant de faire appel à la méthode display() du parent. Les
attributs spécifiques doivent être ajoutés à la suite.
*/

import { Vehicule } from "./classes/Vehicule.js";
import { Voiture } from "./classes/Voiture.js";
import { Moto } from "./classes/Moto.js";

const car = new Voiture("Toyota", "Camry", 2022, 4);
const bike = new Moto("Honda", "CBR500R", 2021, "Sport");

function displayInHTML(content) {
    const paragraph = document.createElement("p");
    paragraph.textContent = content;
    document.body.appendChild(paragraph);
}

console.log(car.display());
console.log(bike.display());

document.addEventListener("DOMContentLoaded", function() {
    displayInHTML(car.display());
    displayInHTML(bike.display());
});