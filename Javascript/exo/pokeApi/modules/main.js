/*
    Exercice 04 

    Réaliser une application permettant à un utilisateur de rechercher les informations d'un pokémon. 

    Pour cela, il aura à sa disposition deux <select>: 
      * Le premier select servira à sélectionner la région. De base, il est vide, mais via le code Javascript il sera peuplé d'options permettant
     de choisir la région voulue. Une fois l'option choisie, on ira peupler le seconde select avec les pokémons disponibles dans cette région
    * Un autre select peremettant de choisir un pokémon parmi une liste peuplée en fonction de sa région d'origine (Kanto, Aloha, Jotho, etc...).
      Lors de la sélection d'un pokémon dans ce select, on ira rechercher les informations du pokémon pour les afficher dans un élément HTML prévu
       pour
    

    Une fois les deux requêtes faites, l'utilisateur se verra ainsi présenté dans la div prévue le nom, le numéro dans le pokédex, les types, les
     noms de capacités, le poids et la taille de ce pokémon. Il y aura également l'image du pokémon, qui est présente en tant qu'URL dans le 
     retour JSON des informations d'un pokémon
*/


        
        
const BASE_URL = "https://pokeapi.co/api/v2/";
let regions = [];

const fetchAllRegions = async () => {
    try {
        const response = await fetch(BASE_URL + "region");
        if (response.ok) {
            const data = await response.json();
            regions = data.results;
        } else {
            throw new Error('Le serveur ne peut pas traiter la requête');
        }
    } catch (err) {
        throw new Error('Il y a eu un souci');
    }
};

const fetchPokemonsByRegion = async (regionUrl) => {
    try {
        const response = await fetch(regionUrl);
        if (response.ok) {
            const data = await response.json();
            const pokemons = data.pokemon_species;
            return pokemons;
        } else {
            throw new Error('Le serveur ne peut pas traiter la requête');
        }
    } catch (err) {
        throw new Error('Il y a eu un souci');
    }
};

const fetchPokemonDetails = async (id) => {
    try {
        const response = await fetch(BASE_URL + `pokemon/${id}`);
        if (response.ok) {
            const data = await response.json();
            return {
                name: data.name,
                dexNumber: data.id,
                types: data.types.map(type => type.type.name),
                abilities: data.abilities.map(ability => ability.ability.name),
                weight: data.weight,
                height: data.height,
                imageUrl: data.sprites.front_default
            };
        } else {
            throw new Error('Le serveur ne peut pas traiter la requête');
        }
    } catch (err) {
        throw new Error('Il y a eu un souci');
    }
};

document.addEventListener('DOMContentLoaded', async () => {
    const regionSelect = document.getElementById('regionSelect');
    const pokemonSelect = document.getElementById('pokemonSelect');
    const pokemonInfoDiv = document.getElementById('pokemonInfo');

    try {
        await fetchAllRegions();

        if (regions && regions.length > 0) {
            regions.forEach(region => {
                const option = document.createElement('option');
                option.value = region.url;
                option.text = region.name;
                regionSelect.appendChild(option);
            });
        } else {
            console.error('Aucune région trouvée.');
        }

        regionSelect.addEventListener('change', async () => {
            const selectedRegion = regionSelect.value;
            if (selectedRegion) {
                try {
                    const fetchedPokemons = await fetchPokemonsByRegion(selectedRegion);

                    if (fetchedPokemons && fetchedPokemons.length > 0) {
                        pokemonSelect.innerHTML = '<option value="" disabled selected>Choisissez un Pokémon</option>';
                        fetchedPokemons.forEach(pokemon => {
                            const option = document.createElement('option');
                            option.value = pokemon.name;
                            option.text = pokemon.name;
                            pokemonSelect.appendChild(option);
                        });
                        pokemonSelect.disabled = false;
                    } else {
                        console.error('Aucun Pokémon trouvé.');
                        pokemonSelect.disabled = true;
                    }
                } catch (error) {
                    console.error(error);
                }
            } else {
                pokemonSelect.innerHTML = '<option value="" disabled selected>Choisissez une région d\'abord</option>';
                pokemonSelect.disabled = true;
                pokemonInfoDiv.innerHTML = ''; 
            }
        });

        pokemonSelect.addEventListener('change', async () => {
            const selectedPokemonName = pokemonSelect.value;
            if (selectedPokemonName) {
                try {
                    const details = await fetchPokemonDetails(selectedPokemonName);
                    pokemonInfoDiv.innerHTML = `
                        <h2>${details.name}</h2>
                        <p>Numéro dans le Pokédex: ${details.dexNumber}</p>
                        <p>Types: ${details.types.join(', ')}</p>
                        <p>Capacités: ${details.abilities.join(', ')}</p>
                        <p>Poids: ${details.weight} kg</p>
                        <p>Taille: ${details.height} m</p>
                        <img src="${details.imageUrl}" alt="${details.name}">
                    `;
                } catch (error) {
                    console.error(error);
                }
            } else {
                pokemonInfoDiv.innerHTML = ''; 
            }
        });

    } catch (err) {
        console.error(err);
    }
});

