const express = require('express');
const app = express();
const bookRoutes = require('./router/bookRoutes');
const path = require('path');
const connection = require('./config/db');

const userData = { nom: 'Oceane Garcia', email: 'oceane@mail.fr'};
connection.query('INSERT INTO Users SET ?', userData, (err, result) => {
    if (err) {
        console.error('erreur lors de la connection :', err);
    } else {
        console.log('Utilisateur ajoutée avec Succès. ID:', result.insertId);
    }
});

app.set('view engine','pug')

app.set('views', path.join(__dirname, 'views'));

// app.use(express.static('public'));

// app.use(express.json());

// app.use('/livres', bookRoutes);

app.use('/', bookRoutes);


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Serveur en écoute sur le port ${PORT}`)
})






