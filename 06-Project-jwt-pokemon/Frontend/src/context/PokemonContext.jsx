import { createContext, useEffect, useState } from "react";

const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
    const [pokemons, setPokemons] = useState([]);

    const fetchPokemons = async () => {
        try {
            const response = await fetch('http://localhost:3000/pokemon');
            const data = await response.json();
            setPokemons(data);
        } catch (error) {
            console.error("Error fetching pokemons", error);
        }
    };

    useEffect(() => {
        fetchPokemons();
    }, []);

    return (
      <PokemonContext value={{ pokemons }}>
        {children}
      </PokemonContext>
    );
};

export default PokemonContext;