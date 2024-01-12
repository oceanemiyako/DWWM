import { CompteBancaire } from "./CompteBancaire.js";

export class CompteEpargne extends CompteBancaire {

constructor(titulaire, solde, tauxInteret) {
    super(titulaire, solde);
    this.tauxInteret = tauxInteret;
}

calculerInterets() {
    const interets = this.solde * (this.tauxInteret / 100);
    this.solde += interets;
    console.log(`Intérêts calculés. Nouveau solde : ${this.solde}`);
}


}

