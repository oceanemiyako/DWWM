export class Voiture {
    constructor(marque, modele, vitesse) {
        this.marque = marque;
        this.modele = modele;
        this.vitesse = vitesse;
    }

    accelerer(fois) {
        for (let i = 0; i < fois; i++) {
            this.vitesse += 10;
        }
    }

    tourner() {
        this.vitesse -= 5;
    }
}


