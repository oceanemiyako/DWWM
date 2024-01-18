/*
    Exercice 03

    Vai l'API public de Starwars API, réalisez une application permettant aux utilisateurs de voir les informations de base pour chaqu'un des
    6 films de base de la sage Star Wars (les originaux, pas les Disney). 

    Chacun de ces films va servir dans l'affichage à générer un bouton, qui, lorsque cliqué, va effectuer une requête à l'API dans le but de
    peupler un affichage (via des <li> ou dans une carte à la Bootstrap (vous pouvez en faire le design en CSS pur bien sur).

    Il vous faudra donc:
        * Faire une requête permettant d'avoir tous les titres des films de la saga Star Wars
        * Un bouton avec comme texte le titre du film pour chaque film de la saga 
        * Déclencher une requête spécifique au film au moment du clic sur le bouton de l'un des films de la saga
        * Afficher les informations dans un endroit de la page une fois finie
*/

document.addEventListener('DOMContentLoaded', () => {
    const filmsContainer = document.getElementById('films-container');

    async function fetchData(url) {
        const response = await fetch(url);
        return response.json();
    }



    function displayFilmDetails(film) {
        const filmDetails = document.createElement('ul');

        for (const key in film) {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<strong>${key}:</strong> ${film[key]}`;
            filmDetails.appendChild(listItem);
        }

        filmsContainer.appendChild(filmDetails);
    }



    function createFilmButton(film) {
        const button = document.createElement('button');
        button.innerText = film.title;

        button.addEventListener('click', async () => {
            const filmData = await fetchData(film.url);
            filmsContainer.innerHTML = `<h2>${film.title}</h2>`;
            displayFilmDetails(filmData);
        });

        return button;
    }




    fetchData('https://swapi.dev/api/films/')
        .then(data => {
            const films = data.results;

            films.forEach(film => {
                const button = createFilmButton(film);
                filmsContainer.appendChild(button);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

        
});
