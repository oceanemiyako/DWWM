const Livre = require('../models/livre');

const livreController = {

getAllLivres: (req, res) => {
    Livre.getAllLivres((err, result)=> {
        if (err) throw err;
        res.json(result)
    })
},

addLivre: (req, res) => {
    const nouveauLivre = req.body
    Livre.addLivre(nouveauLivre, (err)=> {
        if (err) throw err;
        res.json({message: "Livre ajouté avec sucès"})
    })
},


updateLivre: (req, res) => {
    const id = req.params.id
    const livreModifie = req.body
    Livre.updateLivre(livreModifie, (err) => {
    if (err) throw err;
    res.json({message: "Livre modifié avec succès"})
    })
},

deleteLivre: (req, res) => {
    const id = req.params.id
    const deleteLivre = req.body
    if (err) throw err;
    res.json({message:"Livre supprimé avec succès"})
    },
};

console.log();

module.exports = livreController;
