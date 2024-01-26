<script setup>
import { defineProps, defineEmits, ref, reactive, computed } from 'vue';

const props = defineProps(['manga']);
const emits = defineEmits(['save', 'close']);

const manga = reactive({ ...props.manga, censored: false });

const isEditMode = computed(() => manga.id !== null);

const saveManga = () => {
    emits('save', { ...manga });
    closeModal();
};

const closeModal = () => {
    emits('close');
};
</script>

<template>
    <div class="modal-bg" @click.self="modalBgClickHandler">
        <div class="modal-content">
            <h3>{{ isEditMode ? 'Modifier' : 'Ajouter' }} un Manga</h3>
            <form @submit.prevent="saveManga">
                <div>
                    <label for="title">Titre:</label>
                    <input v-model="manga.title" type="text" id="title" required>
                </div>

                <div>
                    <label for="genre">Genre:</label>
                    <select v-model="manga.genre" id="genre">
                        <option value="">--Please choose an option--</option>
                        <option value="Action">Action</option>
                        <option value="Adventure">Adventure</option>
                        <option value="Comedy">Comedy</option>
                        <option value="Ecchi">Ecchi</option>
                        <option value="Mahou">Shoujo</option>
                        <option value="Music">Music</option>
                        <option value="Fantasy">Fantasy</option>
                        <option value="Romance">Romance</option>
                        <option value="Espion">Espion</option>
                        <option value="Triller">Triller</option>
                        <option value="Drama">Drama</option>
                        <option value="Horror">Horror</option>
                    </select>
                </div>

                <div>
                    <label for="author">Auteur:</label>
                    <input v-model="manga.author" type="text" id="author" required>
                </div>

                <div>
                    <label for="quantity">Note:</label>
                    <input v-model="manga.rating" type="number" id="quantity" name="quantity" min="1" max="10">
                </div>

                <div>
                    <input v-model="manga.censored" type="checkbox" id="censure" name="censure" value="Bike">
                    <label for="censure"> + 16</label><br>
                </div>

                <button type="submit">{{ isEditMode ? 'Modifier' : 'Ajouter' }}</button>
            </form>
        </div>
    </div>
</template>

<style scoped>
.modal-bg {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.8);
    display: grid;
    place-content: center;
}

.modal-content {
    height: 600px;
    padding: 5%;
    box-sizing: border-box;
    border-radius: 1rem;
    aspect-ratio: 1 / 1;
    background-color: hsl(188, 84%, 30%);
}
</style>
