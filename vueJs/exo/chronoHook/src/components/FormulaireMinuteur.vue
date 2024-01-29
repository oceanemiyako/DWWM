<script setup>
import { ref } from 'vue';

const props = defineProps(['duration']);
const emits = defineEmits(['addTimer']);

const duration = ref(props.duration);

const addTimer = () => {
if (duration.value > 0) {
    emits('addTimer', duration.value);
    duration.value = 0;  
}
};
</script>

<template>
<div class="form-container">
    <label for="duration">Durée du minuteur (en secondes): </label>
    <input type="number" id="duration" v-model="duration" />
    <button @click="addTimer">Ajouter Minuteur</button>
</div>
</template>

<style scoped>
.form-container {
margin: 20px;
}
</style>
