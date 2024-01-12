export class CompteBancaire {

    constructor(titulaire, solde) {
    this.titulaire = titulaire;
    this.solde = solde;
    
    }

    deposer(montant) {
    this.solde + montant;
    console.log(`Dépôt de ${montant} effectué. Nouveau solde : ${this.solde}`);
    }

    retirer(montant) {
    if (montant <= this.solde) {
        this.solde - montant;
        console.log(`Retrait de ${montant} effectué. Nouveau solde : ${this.solde}`);
    } else {
        console.log("Solde insuffisant pour effectuer le retrait.");
    }
    }

    afficherSolde() {
    console.log(`Solde du compte de ${this.titulaire} : ${this.solde}`);
    }
}
