import Pokemon from "../models/Pokemon.js";

export const savePokemons = async () => {
    const existingPokemons = await Pokemon.countDocuments();
    if (existingPokemons > 0) {
        console.log("Los Pokémon ya están en la base de datos");
        return;
    }

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20`);
    if (!response.ok) {
        console.error("Error fetching");
    }
    const data = await response.json();
    
    const pokemonPromises = data.results.map(pokemon => 
        fetch(pokemon.url).then(res => res.json())
    );

    const pokemonDetails = await Promise.all(pokemonPromises);

    // Guardamos todos los pokemon
    for (let i = 0; i < data.results.length; i++) {
        const newPokemon = Pokemon({
            id: pokemonDetails[i].id,
            name: data.results[i].name,
            image: pokemonDetails[i].sprites.other.dream_world.front_default ||
                   pokemonDetails[i].sprites.front_default ||
                   "",
            height: pokemonDetails[i].height,
        });
        await newPokemon.save();
    }

    console.log("Pokemons fetched and saved successfully!");  
};