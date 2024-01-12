import { Personne } from "./Personne.js";


export class Etudiant extends Personne {
    constructor(nom, prenom, age, numeroEtudiant) {
    super(nom, prenom, age);
    this.numeroEtudiant = numeroEtudiant;
    }

    afficherInfoEtudiant() {
    console.log(`Étudiant ${this.numeroEtudiant}: ${this.prenom} ${this.nom}, ${this.age} ans.`);
    }
}
