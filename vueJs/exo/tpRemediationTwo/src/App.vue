<script setup>
import { ref } from 'vue';
import { RouterView, RouterLink } from 'vue-router';
import AddItem from './components/AddItem.vue';
import InventoryList from './components/InventoryList.vue'; 
import { useStore } from './store'; 

const userName = ref('');

const handleUserStartAppUpdate = (newValue) => {
  userStartApp.value = newValue;
}

const userStartApp = ref(true);

const store = useStore();
const newItemName = ref('');

function addItem(newItemName) {
  store.addItem(newItemName);
}

function deleteItem(index) {
  store.deleteItem(index);
}

function editItemName(index, newName) {
  store.editItemName(index, newName);
}

</script>

<template>
  <main>
    <div v-if="userStartApp">
      <h1>Inventaire</h1>
      <p>Veuillez entrer un objet:</p>
      <input type="text" v-model="newItemName" />
      <button @click="addItem(newItemName)">Confirmer</button>
    </div>
    <div v-else>
      <InventoryList/>
      <RouterView @update:userStartApp="handleUserStartAppUpdate" :getUserName="userName"/>

      <div>
        <nav>
          <RouterLink to="/">Home |</RouterLink>
          <RouterLink to="/Inventaire">Inventaire</RouterLink>
        </nav>
      </div>      
    </div>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}
</style>
