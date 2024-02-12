<script setup>
import { useStore } from 'pinia';
import { ref } from 'vue';

const store = useStore();
const inventory = ref(store.state.inventory);

const deleteItem = (index) => {
    store.deleteItem(index);
};

const editItemName = (index) => {
    const newName = prompt('Nouveau nom :');
    if (newName) {
    store.editItemName(index, newName);
    }
};
export { inventory, deleteItem, editItemName };
</script>

<template>
<div>
    <h2>Liste d'inventaire</h2>
    <ul>
    <li v-for="(item, index) in inventory" :key="index">
        {{ item.name }}
        <router-link :to="{ name: 'item', params: { id: index }}">Détails</router-link>
        <button @click="deleteItem(index)">Supprimer</button>
        <button @click="editItemName(index)">Editer</button>
    </li>
    </ul>
</div>
</template>

<style scoped>
</style>
