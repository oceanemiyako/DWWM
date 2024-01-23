<!-- # Exercice 03

Réaliser une application avec Vue.js

Cette application devra permettre à un utilisateur d'ajouter, de voir et de supprimer un élément de données de votre choix (si pas d'idées, faites une liste de contacts). 

L'ajout des éléments passera par un formulaire d'ajout qui devra comprendre au minimum 4 champs (nom, prenom, email et numéro de téléphone pour un contact, encore une fois si pas d'idée). 

L'affichage des éléments se fera dans un tableau HTML (`<table>`). Chaque ligne devra comprendre l'ensemble des informations de la données ainsi qu'un bouton permettant la suppression. 

Lors de l'appui sur le bouton supprimer, il y aura appel d'une fonction qui causera le retrait dans le tableau d'éléments de l'élément que l'utilisateur veut supprimer. 

<hr /> -->

<script setup>
import { ref, reactive } from 'vue'

const listeContacts = reactive([
    { nom: 'Garcia', prenom: 'Oceane', email: 'oceane.g@email.com', telephone: '123-456-7890' },
    { nom: 'Bouriez', prenom: 'Nicolas', email: 'nico.b@email.com', telephone: '987-654-3210' },
    { nom: 'Aude', prenom: 'Garcia', email: 'aude.g@email.com', telephone: '555-123-4567' }
]);

const nouveauContact = reactive({
    nom: "",
    prenom: "",
    email: "",
    telephone: ""
});

const ajouterContact = () => {
    listeContacts.push({ ...nouveauContact });
    nouveauContact.nom = "";
    nouveauContact.prenom = "";
    nouveauContact.email = "";
    nouveauContact.telephone = "";
};

const supprimerContact = (index) => {
    listeContacts.splice(index, 1);
};

</script>

<template>

<div>
    <form @submit.prevent="ajouterContact">
    <label>Nom: <input v-model="nouveauContact.nom" required /></label>
    <label>Prénom: <input v-model="nouveauContact.prenom" required /></label>
    <label>Email: <input type="email" v-model="nouveauContact.email" required /></label>
    <label>Téléphone: <input type="tel" v-model="nouveauContact.telephone" required /></label>
    <button type="submit">Ajouter</button>
    </form>

    <table>
    <thead>
        <tr>
        <th>Nom</th>
        <th>Prénom</th>
        <th>Email</th>
        <th>Téléphone</th>
        <th>Action</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="(contact, index) in listeContacts" :key="index">
        <td>{{ contact.nom }}</td>
        <td>{{ contact.prenom }}</td>
        <td>{{ contact.email }}</td>
        <td>{{ contact.telephone }}</td>
        <td>
            <button @click="supprimerContact(index)">Supprimer</button>
        </td>
        </tr>
    </tbody>
    </table>
</div>


</template>

<style scoped>

div {
    height: 65%;
    aspect-ratio: 1.1 / 1;
    padding: 10%;
    box-sizing: border-box;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    border-radius: 2em;
    gap: 5%;
    background-color: rgb(12, 86, 115);
}

table {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}



</style>