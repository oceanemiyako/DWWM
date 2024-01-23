<script setup>
import {ref, computed } from 'vue';
const credentials = ref({
email: '',
password: ''
});

const isEmailValid = computed(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(credentials.value.email));
const isPasswordValid = computed(() => credentials.value.password.length >= 6);
const isFormValid = computed(() => isEmailValid.value && isPasswordValid.value);

const submitForm = () => {
if (isFormValid.value) {
    console.log('Credentials:', credentials.value);
}
};

</script>

<template>
<div>
    <form>

<div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="credentials.email" :class="{ 'invalid-input': !isEmailValid }">
        <span v-if="!isEmailValid" class="error-message">Veuillez saisir une adresse e-mail valide</span>
</div>

<div>
        <label for="password">Mot de passe:</label>
        <input type="password" id="password" v-model="credentials.password" :class="{ 'invalid-input': !isPasswordValid }">
        <span v-if="!isPasswordValid" class="error-message">Veuillez saisir un mot de passe valide</span>
</div>

<button type="submit" :disabled="!isFormValid">Se connecter</button>
    </form>
</div>

</template>

<style scoped>
.invalid-input {
    border: 1px solid #ff9999;
}

.error-message {
    color: red;
    font-weight: bold;
}
</style>