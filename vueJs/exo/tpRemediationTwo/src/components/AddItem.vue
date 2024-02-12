<script setup>
import { ref } from 'vue';
import { useStore } from 'pinia';

const store = useStore();
const newItemName = ref('');

const addItem = () => {
    if (newItemName.value.trim() !== '') {
    store.addItem(newItemName.value);
    newItemName.value = '';
    }
};
export { newItemName };
</script>

<template>
    <div>
    <h2>Ajouter un nouvel article</h2>
    <input type="text" v-model="newItemName" placeholder="Nom de l'article" />
    <button @click="addItem">Ajouter</button>
    </div>
</template>

<style scoped>
</style>
