const connection = require('../../config/bd');

const Livre = {
    getAllLivres: function(callback) {
        return connection.query("SELECT * FROM livres", callback);
    },
    // getLivreById: function(id, callback) {
    //     return connection.query("SELECT * FROM livres WHERE id=?", [id], callback);
    // },
    // addLivre: function(Livre, callback) {
    //     return connection.query("INSERT INTO livres(titre, auteur, annee_publication, disponible) VALUES(?,?,?,?)", [Livre.titre, Livre.auteur, Livre.annee_publication, Livre.disponible], callback);
    // },
    // updateLivre: function(id, Livre, callback) {
    //     return connection.query("UPDATE livres SET titre=?, auteur=?, annee_publication=?, disponible=? WHERE id=?", [Livre.titre, Livre.auteur, Livre.annee_publication, Livre.disponible, id], callback);
    // },
    // deleteLivre: function(id, callback) {
    //     return connection.query("DELETE FROM livres WHERE id=?", [id], callback);
    // }
};

module.exports = Livre;

