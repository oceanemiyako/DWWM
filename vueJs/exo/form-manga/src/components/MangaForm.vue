<script setup>
import { ref } from 'vue';
import MangaListModal from './MangaListModal.vue';

const mangaList = ref([
    { id: 1, title: 'One Piece', genre: 'Adventure', author: 'Eiichiro Oda', rating: 9 },
    { id: 2, title: 'Naruto', genre: 'Action', author: 'Masashi Kishimoto', rating: 8 },
    { id: 3, title: 'Bleach', genre: 'Action', author: 'Tite Kubo', rating: 8 },
    { id: 4, title: 'Attack on Titan', genre: 'Action', author: 'Hajime Isayama', rating: 9 },
    { id: 5, title: 'My Hero Academia', genre: 'Action', author: 'Kohei Horikoshi', rating: 8 },
    { id: 6, title: 'Death Note', genre: 'Mystery', author: 'Tsugumi Ohba', rating: 9 },
    { id: 7, title: 'Fullmetal Alchemist', genre: 'Adventure', author: 'Hiromu Arakawa', rating: 9 },
    { id: 8, title: 'Demon Slayer', genre: 'Action', author: 'Koyoharu Gotouge', rating: 8 },
    { id: 9, title: 'Hunter x Hunter', genre: 'Adventure', author: 'Yoshihiro Togashi', rating: 8 },
    { id: 10, title: 'One Punch Man', genre: 'Action', author: 'ONE', rating: 8 },
    { id: 11, title: 'Tokyo Ghoul', genre: 'Horror', author: 'Sui Ishida', rating: 8 },
    { id: 12, title: 'Fairy Tail', genre: 'Adventure', author: 'Hiro Mashima', rating: 8 },
    { id: 13, title: 'Spy x Family', genre: 'Action', author: 'Tatsuya Endo', rating: 9 }
]);

const showAddModal = ref(false);
const showEditModal = ref(false);
const selectedManga = ref(null);

const openAddModal = () => {
    showAddModal.value = true;
    showEditModal.value = false;
    selectedManga.value = null;
};

const editManga = (manga) => {
    selectedManga.value = { ...manga };
    showEditModal.value = true;
    showAddModal.value = false;

};

const addManga = (newManga) => {
    newManga.id = mangaList.value.length + 1;
    mangaList.value.push(newManga);
    closeModal();
};

const updateManga = (updatedManga) => {
    const index = mangaList.value.findIndex((m) => m.id === updatedManga.id);
    if (index !== -1) {
        mangaList.value.splice(index, 1, updatedManga);
    }
    closeModal();
};

const deleteManga = (id) => {
    mangaList.value = mangaList.value.filter((m) => m.id !== id);
    closeModal();
};

const closeModal = () => {
    showAddModal.value = false;
    showEditModal.value = false;
    selectedManga.value = null;
};
</script>

<template>
    <div>
        <header></header>
    <h2>Liste des Mangas à regarder</h2>
    <ul class="manga-list">
    <li v-for="manga in mangaList" :key="manga.id" class="manga-item">
        <img
        :src="`https://source.unsplash.com/random/50x50?${manga.title.split(' ').join('').toLowerCase()}`"
        alt=""
        class="manga-image"
        />
        <div class="manga-info">
        <span>{{ manga.title }} - {{ manga.genre }} - {{ manga.author }} - {{ manga.rating }}</span>
        <span v-if="manga.censored"> + 16</span>
        </div>
        <div class="manga-buttons">
        <button @click="editManga(manga)">Modifier</button>
        <button @click="deleteManga(manga.id)">Supprimer</button>
        </div>
    </li>
    </ul>
    <button @click="openAddModal">Ajouter un Manga</button>

    <MangaListModal v-if="showAddModal" @save="addManga" @close="closeModal" />
    <MangaListModal v-if="showEditModal" :manga="selectedManga" @save="updateManga" @close="closeModal" />
</div>
</template>

<style scoped>

.manga-list {
list-style-type: none;
padding: 0;
}

.manga-item {
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 10px;
}

.manga-image {
width: 50px;
height: 50px;
margin-right: 10px;
}

.manga-info {
flex-grow: 1;
}

.manga-buttons button {
margin-left: 5px;
}


</style>
