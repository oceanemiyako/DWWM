/*Une voiture se compose d’une marque, d’un modèle et d’une vitesse.
Une voiture peut accélérer et sa vitesse va augmenter de 10 km/h et elle peut aussi tourner 
et ainsi diminuer sa vitesse de 5km/h.
Vous allez créer 2 voitures avec les caractéristiques suivantes :
- Voiture 1 -> Bmw, Serie 1, 80 km/h
- Voiture 2 -> Mercedes, GLB, 100 km/h
Quelle sera la vitesse finale des 2 voitures avec les informations suivantes :
- La voiture 1 va accélérer 3 fois et la voiture 2 va accélérer 2 fois et tourner 2 fois*/

import { Voiture } from "./classes/voiture.js";


const voiture1 = new Voiture('Bmw', 'Serie 1', 80);
const voiture2 = new Voiture('Mercedes', 'GLB', 100);

voiture1.accelerer(3);
voiture2.accelerer(2);
voiture2.tourner();
voiture2.tourner();

console.log(`Vitesse finale de la ${voiture1.marque} ${voiture1.modele}: ${voiture1.vitesse} km/h`);
console.log(`Vitesse finale de la ${voiture2.marque} ${voiture2.modele}: ${voiture2.vitesse} km/h`);
