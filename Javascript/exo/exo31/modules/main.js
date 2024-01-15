/*Créer une classe **Client** avec gestion d'articles : Créez une classe **Client** qui peut **ajouter des articles** à un panier d'achat. 
Créez également une classe **Article** avec des propriétés telles que le **nom**, le **prix**, et la **quantité en stock**.
 Permettez au client de **passer une commande** et de **mettre à jour le stock d'articles**.*/

import { Client } from "./classes/Client.js";
import { Article } from "./classes/Article.js";

const article1 = new Article("Manga", 20, 10);
const article2 = new Article("Chocolat", 800, 5);
const article3 = new Article("Figurine Miku", 40 , 5);

const client = new Client();
const client2 = new Client();

client.ajouterAuPanier(article1, 2);
client.ajouterAuPanier(article2, 1);

client2.ajouterAuPanier(article3, 1);
client2.ajouterAuPanier(article2, 3);

console.log("Panier du client :", client.panier);
console.log("Panier du client 2 :", client2.panier);

client.passerCommande();
client2.passerCommande();

console.log("Nouveau stock d'articles :", article1.quantiteEnStock, article2.quantiteEnStock, article3.quantiteEnStock);

