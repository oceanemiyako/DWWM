const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Serveur en écoute sur le port ${PORT}`)
})

app.get('/bienvenue', (req, res) => {
    res.send('Bienvenue sur la page d\'accueil !');
}); 

app.get('/info', (req, res) => {
    res.json({
        nom: 'Océane Garcia',
        age: 28,
        profession: 'Développeur Junior' 
        
    });
});

app.get('/acces-interdit', (req, res) => {
    res.status(403).send('DEGAGE');
});

app.get('/redirection-accueil', (req, res) => {
    res.redirect('/');
});

app.get('*', (req, res) => {
    res.send('Je n\'ai point trouvé ta page mon cher pandawan');
});

app.use(express.static('public'));



