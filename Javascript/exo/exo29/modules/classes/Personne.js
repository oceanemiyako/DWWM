export class Personne {
    constructor(nom, prenom, age) {
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    }

    parler() {
    console.log(`Bonjour, je m'appelle ${this.prenom} ${this.nom}.`);
    }
}
