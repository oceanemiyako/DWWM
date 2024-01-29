<!-- # Exercice 06

Réaliser une application Vue.js permettant à un utilisateur de mesurer jusqu'à 5 temps

Indices: 

* Chaque minuteur sera lancé via un composant et son hook onMounted(). L'arrêt du minuteur causera l'arrêt du décompte du temps via un clearInterval() déclenché au moment de la disparition du composant. 
* L'ajout d'un minuteur se fera via un composant de formulaire qui emettra un évènement reçu par App.vue. Cet évènement causera l'ajout d'un temps dans un tableau.
* Pour chaque temps dans le tableau, on aura donc un composant de type Minuteur qui causera l'écoulement d'un temps donné via les props. 

Bonus: 
* Faire en sorte d'animer l'écoulement du temps via une jauge qui se remplira en fonction de l'avancement du minuteur -->

<script setup>
import { ref } from 'vue';
import Minuteur from './components/Minuteur.vue';
import FormulaireMinuteur from './components/FormulaireMinuteur.vue';

const timers = ref([]);

const addTimer = (duration) => {
  timers.value.push(duration);
};
</script>

<template>
  <div id="app">
    <FormulaireMinuteur @add-timer="addTimer" />
    <Minuteur v-for="(timer, index) in timers" :key="index" :duration="timer" />
  </div>
</template>



<style scoped>
#app {
  text-align: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

