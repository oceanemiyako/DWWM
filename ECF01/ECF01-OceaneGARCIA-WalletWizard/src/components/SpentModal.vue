<script setup>
import { defineProps, defineEmits } from 'vue';
import { ref } from 'vue';

const emits = defineEmits(['save', 'close']);

const newExpense = ref({
    description: '',
    amount: null
});

const closeModal = () => {
    emits('close');
};

const saveExpense = () => {
    emits('save', newExpense.value);
};


const modalBgClickHandler = (event) => {
    if (event.target.classList.contains('modal')) {
        closeModal();
    }
};


</script>
<template>
    <div class="modal" @click="modalBgClickHandler">
        <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <h2>Ajouter une dépense</h2>
        <form @submit.prevent="saveExpense">
            <label>Description:</label>
            <input type="text" v-model="newExpense.description" required>
            <label>Montant:</label>
            <input type="number" v-model.number="newExpense.amount" required>
            <button type="submit">Enregistrer</button>
        </form>
    </div>
    </div>
</template>


<style scoped>
.modal {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
    background-color: #110d2e;
    padding: 20px;
    border: 1px solid #717171;
    width: 60%;
}

.close {
    color: #989696;
    float: right;
    font-size: 28px;
    font-weight: bold;
}
</style>
