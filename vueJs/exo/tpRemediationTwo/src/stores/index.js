import { defineStore } from 'pinia';

export const useStore = defineStore({
    id: 'inventory',
    state: () => ({
    inventory: [
    { id: 1, name: 'Naruto', description: 'Un manga sur un ninja adolescent.' },
    { id: 2, name: 'One Piece', description: 'Un manga sur des pirates à la recherche du One Piece.' },
    { id: 3, name: 'Bleach', genre: 'Action', author: 'Tite Kubo', description: 'pouet' },
    { id: 4, name: 'Attack on Titan', genre: 'Action', author: 'Hajime Isayama', description: 'pouet' },
    { id: 5, name: 'My Hero Academia', genre: 'Action', author: 'Kohei Horikoshi', description: 'pouet' },
    { id: 6, name: 'Death Note', genre: 'Mystery', author: 'Tsugumi Ohba', description: 'pouet' },
    { id: 7, name: 'Fullmetal Alchemist', genre: 'Adventure', author: 'Hiromu Arakawa', description: 'pouet' },
    { id: 8, name: 'Demon Slayer', genre: 'Action', author: 'Koyoharu Gotouge', description: 'pouet' },
    { id: 9, name: 'Hunter x Hunter', genre: 'Adventure', author: 'Yoshihiro Togashi', description: 'pouet' },
    { id: 10, name: 'One Punch Man', genre: 'Action', author: 'ONE', description: 'pouet' },
    { id: 11, name: 'Tokyo Ghoul', genre: 'Horror', author: 'Sui Ishida', description: 'pouet' },
    { id: 12, name: 'Fairy Tail', genre: 'Adventure', author: 'Hiro Mashima', description: 'pouet' },
    { id: 13, name: 'Spy x Family', genre: 'Action', author: 'Tatsuya Endo', description: 'pouet' }
    ]
}),
actions: {
    addItem(name) {
    const newItem = {
        id: this.inventory.length + 1,
        name,
        description: ''
    };
    this.inventory.push(newItem);
    },
    deleteItem(index) {
    this.inventory.splice(index, 1);
    },
    editItemName(index, newName) {
    this.inventory[index].name = newName;
    }
}
});
