<script setup>
import { ref, computed } from 'vue';

const counter = ref(0);

const fizzBuzzValue = computed(() => {
  if (counter.value % 3 === 0 && counter.value % 5 === 0) {
    return 'FizzBuzz';
  } else if (counter.value % 3 === 0) {
    return 'Fizz';
  } else if (counter.value % 5 === 0) {
    return 'Buzz';
  } else {
    return counter.value;
  }
});

const increment = () => {
  counter.value++;
};

const decrement = () => {
  if (counter.value > 0) {
    counter.value--;
  }
};
</script>

<template>

<div>
    <span>{{ fizzBuzzValue }}</span>
    <button @click="increment" :disabled="counter.value <= 0">Increment</button>
    <button @click="decrement" :disabled="counter.value <= 0">Decrement</button>
</div>

</template>

<style scoped>

  button {
        background-color: rgb(144, 17, 17);
    }
     

</style>
