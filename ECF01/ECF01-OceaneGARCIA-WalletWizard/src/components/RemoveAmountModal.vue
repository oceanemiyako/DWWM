<script setup>
import { ref } from 'vue';
import { defineEmits } from 'vue';

const emits = defineEmits(['confirm', 'close']);

const amountToRemove = ref(0);

const closeModal = () => {
    showRemoveModal.value = false;
};

const confirmRemove = () => {
    if (amountToRemove.value > 0) {
    emits('confirm', amountToRemove.value);
    }
};
</script>


<template>
    <div class="modal" @click="modalBgClickHandler">
        <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <h2>Retirer un montant</h2>
        <form @submit.prevent="confirmRemove">
            <label>Montant à retirer:</label>
            <input type="number" v-model.number="amountToRemove" required>
            <button type="submit">Confirmer</button>
        </form>
        </div>
    </div>
</template>

<style scoped>
</style>


