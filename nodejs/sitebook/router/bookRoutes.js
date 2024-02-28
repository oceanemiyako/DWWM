const express = require("express");
const router = express.Router();
const path = require('path');

// let livres = [
//     { id: 1, titre: 'Spy x Family', auteur: 'Blabla' },
//     { id: 2, titre: 'Hanako-kun', auteur: 'Blibi' },
//     { id: 3, titre: 'The apothecary diaries', auteur: 'Bloblo' }
// ];

// router.get('/', (req, res) => {
//     res.json(livres);
// });

// A faire méthode pour router avec un fichier json:
// const bookPath = path.parse("../data/livres.json")
// router.get('/livres', (req, res) => {
//         res.json(bookPath);
//     });
// console.log(bookPath)

router.get('/', (req, res)=> {
    res.render('test')
}) // pour afficher une vue 


const sampleController = require('../src/controller/controller');

// Définissez les routes associées aux fonctions du controller
router.get('/', sampleController.homePage);
router.get('/about', sampleController.aboutPage);
router.get('/contact', sampleController.contactPage);


module.exports = router;