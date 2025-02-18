import Pokemon from "../models/Pokemon.js";

export const savePokemons = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20`);
        if (!response.ok) {
          console.error("Error fetching");
        }
        const data = await response.json();
        
        for (let pokemon of data.results) {
            const response = await fetch(pokemon.url);
            if (!response.ok) {
            console.error("Error fetching");
            }
            const pokemonData = await response.json();

            const newPokemon = Pokemon({
                id: pokemonData.id,
                name: pokemon.name,
                image: pokemonData.sprites.other.dream_world.front_default  ||
                pokemonData.sprites.front_default ||
                "",
                height: pokemonData.height,
            })

            await newPokemon.save();
        }

    console.log("Pokemons fetched and saved successfully!");  
}