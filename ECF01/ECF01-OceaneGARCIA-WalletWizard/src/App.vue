<!-- Sujet
Vous devez développer une application de gestion des dépenses qui permettra aux utilisateurs de :
- Ajouter une nouvelle dépense avec une description et un montant.
- Afficher l'historique des dépenses enregistrées.
- Calculer le total des dépenses.
- Afficher les opérations de crédit et de débit indépendemment (argent entrant et sortant).
- Veillez à soigner l'UI/UX de l'application. -->

<script setup>
import Spent from './components/Spent.vue';
import SpentModal from './components/SpentModal.vue';

</script>

<template>

  <a>
    <img src="https://adelekinesiologie.fr/wp-content/uploads/2022/03/cropped-Logo-Vert-sans-typo-carre.png" alt="logo">
  </a>
<div id="app">
    <header>
      <h1>Willet Wizard</h1>
    </header>
    <Spent @add-expense="openModal" @remove="removeExpense" />
    <SpentModal v-if="showModal" @close="closeModal" @save="saveExpense" />
  </div>
</template>

<style scoped>
h1{
  color: #294529;
  font-size: 32px;
  align-items: center;
}

img{
  height: 90px;
  width: 90px;
  float: left;
}
</style>
