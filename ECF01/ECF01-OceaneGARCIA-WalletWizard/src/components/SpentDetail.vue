<script setup>
import { defineProps } from 'vue';

const { expense } = defineProps(['expense']);

</script>

<template>
    
    <li>{{ expense.description }} - {{ expense.amount }} euros</li>

</template>

<style scoped>
li {
    list-style-type: none;
}


</style>