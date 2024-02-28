const Livre = require('../models/livre');

const livreController = {

getAllLivres: (req, res) => {
    Livre.getAllLivre((err, livres) => {
        if (err) {
        res.json(err);
    } else {
        res.json(livres);
        }
    });
},

// getLivreById: function(req, res) {
//     Livre.getLivreById(req.params.id, function(err, rows) {
//         if (err) {
//             res.json(err);
//         } else {
//             res.json(rows);
//         }
//     });
// },

// addLivre: (req, res) => {
//     const livreData = req.body;
//     Livre.addLivre(livreData, (err) => {
//         if (err) {
//         res.json(err);
//     } else {
//         res.send('Livre ajouté avec succès');
//         }
//     });
// },

// updateLivre: (req, res) => {
//     const livreId = req.params.id;
//     const livreData = req.body;
//     Livre.updateLivre(livreId, livreData, (err) => {
//         if (err) {
//         res.json(err);
//     } else {
//         res.send('Livre mis à jour avec succès');
//         }
//     });
// },

// deleteLivre: (req, res) => {
//     const livreId = req.params.id;
//     Livre.deleteLivre(livreId, (err) => {
//         if (err) {
//         res.json(err);
//     } else {
//         res.send('Livre supprimé avec succès');
//             }
//         });
//     },
};

console.log();

module.exports = livreController;
