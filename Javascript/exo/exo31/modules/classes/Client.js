import { Article } from "./Article.js";

export class Client {

    constructor() {

    this.panier = [];

    }

    ajouterAuPanier(article, quantite) {

    if (article instanceof Article && quantite > 0 && quantite <= article.quantiteEnStock) {
        this.panier.push({
        article: article,
        quantite: quantite
        });

        article.quantiteEnStock -= quantite;
        console.log(`Article ajouté au panier : ${article.nom} (Quantité : ${quantite})`);
    } else {
        console.log("Impossible d'ajouter l'article au panier. Vérifiez la disponibilité en stock.");
    }
    }

    passerCommande() {

    console.log("Commande passée avec succès!");
    this.panier = [];


    }


}
