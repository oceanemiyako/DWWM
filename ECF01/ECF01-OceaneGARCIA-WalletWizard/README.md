# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).


Pour lancer mon application il faut faire un npm run dev.

## App.vue 

On peut apercevoir dans le template <a> et <img> qui m'ont servie pour mettre un lien vers une image pour afficher un logo sur mon APP.
j'appelle les composant <spent/> et <spentModal/> avec cette balise et tout ces attribut fonctionnel personnalisé.  

<style scoped> est le style que j'ai donnée juste pour ce composant. La couleur avec color:, le front-size la taille du texte et align-items pour centrer les élèments. 

## SpentModal

J'importe la fonction emits depuis la bibliothèque vue. 
Et les emits définies est save et close qui sont la sauvegarde et la fermeture du modal. 

Je crée une nouvelle dépense que je défini avec une description et un montant. 

Puis la fermeture du modal et la sauvegarde du montant. Le constModalBgClickHandler sert à la fermeture du modal en cliquant sur le coter de celui_ci.

Dans template je crée le modal en rajotant les class="" pour activer ces fonctions. 

## SpentDetail

defineProps est une fonction de Vue permettant de définir les propriétés du composant. Elle est importée depuis la bibliothèque Vue.

En utilisant defineProps(['expense']), on déclare que le composant attend une seule propriété appelée expense. Cette propriété est ensuite extraite de l'objet renvoyé par defineProps.

Dans <template>, on utilise expense pour afficher la description de la dépense ({{ expense.description }}) et le montant ({{ expense.amount }}).

## Spent 

j'importe tout les composant SpentDetail, SpentModal et RemoveAmountModal. Que j'aurai besoin dans Spent. 
Importation de ref et computed de Vue qui sont des fonctionnalités permettant de créer des rédérences réactives et des propriétés calculées.

Je déclare ensuite des variables newExpense: Une référence réactive pour une nouvelle dépense à ajouter.
expenses: Une liste réactive contenant toutes les dépenses.
showAddModal et showRemoveModal: Des booléens réactifs pour afficher ou masquer les modales d'ajout et de suppression de dépense.
Et incoming et outgoing: Des propriétés calculées qui filtrent les dépenses pour obtenir les montants entrants et sortants respectivement.
totalExpenses: Une propriété calculée qui calcule le total des dépenses.

Puis je défini les méthodes ouvrir le modal et la suppression. 

Dans le <template> on retrouve les deux button ajouter et retirer un montant. 
L'affichage de l'historique de <SpentDetail>. 

Et le CSS permet d'afficher l'historique dans une card grise, pour la différencier. 

## RemoveAmountModal

J'importe encore ref pour avoir une réactivité . Et  emits pour déclarer confirm et close. 

Je déclare en suite des variables pour stocker, fermer le modal et confirmer le montant à retirer. 

Dans le template on retrouve la structure du modal pour retirer un montant avec une saisi du montant et d'un bouton confirmer. 

puis la fonction close pour fermer celui-ci. 








