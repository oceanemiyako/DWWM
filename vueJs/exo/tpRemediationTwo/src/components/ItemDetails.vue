<script setup>
import { ref , computed } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'pinia';

const store = useStore();
const route = useRoute();
const itemId = route.params.id;
const item = store.state.inventory[itemId];
</script>

<template>
<div>
    <h2>Détails de l'article</h2>
    <p>Nom: {{ item.name }}</p>
    <p>ID: {{ item.id }}</p>
    <p>Description: {{ item.description }}</p>
</div>
</template>

<style scoped>
</style>