const express = require('express');
const router = express.Router();
const livreController = require('../src/controllers/livreController');


router.get('/', livreController.getAllLivres);
router.post('/add-livres', livreController.addLivre);
router.put('/update/:id', livreController.updateLivre);
router.delete('/delete/:id', livreController.deleteLivre);

module.exports = router;

