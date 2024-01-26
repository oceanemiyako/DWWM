<!-- # Exercice 05

Réaliser en Vue.js une application permettant à un utilisateur d'ajouter, de visualiser, de modifier et de supprimer des données

Le type de données sera libre mais devra posséder au moins 4 données différentes (pas uniquement du texte)

L'ajout et l'edition passeront par un modal (un modal par feature) -->


<script>
import MangaForm from './components/MangaForm.vue';

export default {
    components: {
    MangaForm,
    },
};
</script>

<template>
    <div id="app">
    <MangaForm />
    </div>
</template>

