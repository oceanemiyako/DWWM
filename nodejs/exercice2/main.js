//## Exercice récapitulatif sur le fs

// 1. **Créer un répertoire :** Utiliser `fs.mkdir` pour créer un répertoire appelé "nouveau_repertoire".

// 2. **Écrire dans un fichier :** Utiliser `fs.writeFile` pour écrire le texte "Contenu du fichier à écrire." dans un fichier appelé "nouveau_fichier.txt".

// 3. **Lire le contenu du fichier :** Utiliser `fs.readFile` pour lire le contenu du fichier "nouveau_fichier.txt" et afficher le résultat dans la console.

// 4. **Lister les fichiers du répertoire :** Utiliser `fs.readdir` pour lister tous les fichiers et répertoires dans le répertoire actuel et afficher le résultat dans la console.

// 5. **Supprimer le fichier :** Utiliser `fs.unlink` pour supprimer le fichier "nouveau_fichier.txt".

// 6. **Supprimer le répertoire :** Utiliser `fs.rmdir` pour supprimer le répertoire "nouveau_repertoire".


const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'nouveau_repertoire');
const filePath = path.join(__dirname, 'nouveau_fichier.txt');

// 1

fs.mkdir(directoryPath, (err) => {
if (err) {
    console.error('Erreur lors de la création du répertoire :', err);
    return;
}
console.log('Répertoire créé avec succès.');
});

// 2

fs.writeFile(filePath, 'Contenu du fichier à écrire.', (err) => {
if (err) {
    console.error('Erreur lors de l\'écriture dans le fichier :', err);
    return;
}
console.log('Contenu écrit dans le fichier avec succès.');
});

// 3

fs.readFile(filePath, 'utf8', (err, data) => {
if (err) {
    console.error('Erreur lors de la lecture du fichier :', err);
    return;
}
console.log('Contenu du fichier lu :\n', data);
});

// 4

fs.readdir(__dirname, (err, files) => {
if (err) {
    console.error('Erreur lors de la lecture du répertoire :', err);
    return;
}
console.log('Fichiers dans le répertoire actuel :\n', files);
});

// 5

fs.unlink(filePath, (err) => {
if (err) {
    console.error('Erreur lors de la suppression du fichier :', err);
    return;
}
console.log('Fichier supprimé avec succès.');
});

// 6

fs.rmdir(directoryPath, (err) => {
if (err) {
    console.error('Erreur lors de la suppression du répertoire :', err);
    return;
}
console.log('Répertoire supprimé avec succès.');
});


