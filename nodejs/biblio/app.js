const express = require('express');
const app = express();
const connection = require('./config/bd');
const livreRoutes = require('./router/livreRoutes');
const bodyParser = require('body-parser');


connection.connect((err) => {
    if (err) {
        console.error('Erreur de connexion à la base de données :', err);
        return;
    }
    console.log('Connecté à la base de données MySQL');
});

// const livreData = { id : 2, titre: 'spy x family', auteur: 'Tatsuya Endo', annee_publication : 2019 , disponible : true};
// connection.query('INSERT INTO Livres SET ?', livreData, (err, result) => {
//     if (err) {
//         console.error('Erreur lors de l\exécution de la requête :', err)
//     } else {
//         console.log('Livre ajouté avec succès. ID :', result.insertId)
//     }
// });

app.use(bodyParser.json());

app.use('/livres', livreRoutes);

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Serveur en écoute sur le port ${PORT}`)
})










