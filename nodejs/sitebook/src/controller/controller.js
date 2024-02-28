const homePage = (req,res) => {
    res.send("Bienvenue sur la page d'Accueil")
};

const aboutPage = (req, res) => {
    res.send("A propos");
};

const contactPage = (req,res) => {
    res.send("Contactez-nous");};

module.exports ={
    homePage,
    aboutPage,
    contactPage
}

