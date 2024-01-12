/*Créer une classe **CompteBancaire** : Créez une classe **CompteBancaire** avec des propriétés telles que le **solde** et le **titulaire du
 compte**. Ajoutez des méthodes pour **déposer de l'argent**, **retirer de l'argent** et **afficher le solde**.

Créer une classe **CompteÉpargne** : Créez une classe **CompteÉpargne** qui hérite de la classe **CompteBancaire**. Ajoutez une propriété de
 **taux d'intérêt** et une méthode pour **calculer les intérêts sur le solde**.*/

import { CompteEpargne } from "./classes/CompteEpargne.js";
import { CompteBancaire } from "./classes/CompteBancaire.js";

let compte1 = new CompteBancaire("Garcia Oceane", 1000);
compte1.deposer(500);
compte1.retirer(200);
compte1.afficherSolde();




let compteEpargne1 = new CompteEpargne("Bouriez Nicolas", 2000, 5);
compteEpargne1.deposer(1000);
compteEpargne1.calculerInterets();
compteEpargne1.afficherSolde();
