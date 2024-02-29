const connection = require('../../config/bd');

const Livre = {
    getAllLivres: (callback) => {
         connection.query("SELECT * FROM livres", callback);
    },
    
    addLivre: (nouveauLivre, callback) => {
        connection.query("INSERT INTO livres SET ?)", nouveauLivre, callback);
    },

    updateLivre: (id, livreModifie, callback) => {
        connection.query("UPDATE livres SET ? WHERE id= ?", [livreModifie , id], callback);
    },

    deleteLivre: (id, callback) => {
        connection.query("DELETE FROM livres WHERE id=?", [id], callback);
    }
};

module.exports = Livre;

