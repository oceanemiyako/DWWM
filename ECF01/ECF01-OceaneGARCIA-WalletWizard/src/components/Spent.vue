<script setup>
import { ref, computed } from 'vue';
import SpentDetail from './SpentDetail.vue';
import SpentModal from './SpentModal.vue';
import RemoveAmountModal from './RemoveAmountModal.vue';


const newExpense = ref({
    description: '',
    amount: null
});

const expenses = ref([]);

const incoming = computed(() => {
    return expenses.value.filter(expense => expense.amount > 0).reduce((total, expense) => total + expense.amount, 0);
});

const outgoing = computed(() => {
  return expenses.value.filter(expense => expense.amount < 0).reduce((total, expense) => total + expense.amount, 0) * -1;
});

const showAddModal = ref(false);
const showRemoveModal = ref(false);


const openAddModal = () => {
    showAddModal.value = true;
};

const addSpent = (newSpent) => {
    newSpent.id = expenses.value.length + 1;
    expenses.value.push(newSpent);
    closeModal();
};

const openModal = () => {
    showAddModal.value = true;
};

const openModalRemove = () => {
    showRemoveModal.value = true;
};

const closeModal = () => {
    showAddModal.value = false;
    showRemoveModal.value = false;

};

const removeAmount = (amount) => {
    if (amount <= totalExpenses.value) {
    totalExpenses.value -= amount;
    closeModal();
    } 
};

const totalExpenses = computed(() => {
    return expenses.value.reduce((total, expense) => total + expense.amount, 0);
});

</script>

<template>

<div>
    <button @click="openModal">Ajouter une dépense</button>
    <button @click="openModalRemove">Retirer un montant</button>
    <h2>Historique des dépenses</h2>
    <ul class="card">
        <SpentDetail v-for="expense in expenses" :key="expense.id" :expense="expense" />
    </ul>
    <div>
        <p>Total des dépenses: {{ totalExpenses }} euros</p>
        <p>Dépenses entrantes: {{ incoming }} euros</p>
        <p>Dépenses sortantes: {{ outgoing }} euros</p>
    </div>
    
    <SpentModal v-if="showAddModal" @save="addSpent" @close="closeModal"/>
    <RemoveAmountModal v-if="showRemoveModal" @confirm="removeAmount" @close="closeModal"/>

</div>
</template>

<style scoped>

.card{
    aspect-ratio: 1 / 1.5;
        background-color: rgb(181, 181, 181);
        border-radius: 2rem 2rem 1rem 1rem;
        display: grid;
        grid-template: 2fr 2fr 8fr / 1fr;
        
        color: rgba(19, 126, 15, 0.87);
        font-family: monospace;
}

button{
    margin-left: 25px;
}
</style>