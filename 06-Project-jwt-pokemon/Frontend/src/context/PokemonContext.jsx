import { createContext, useContext, useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import axios from "axios";

const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
    const [pokemons, setPokemons] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const { user } = useContext(AuthContext);

    const fetchPokemons = async () => {
        try {
            const response = await fetch('http://localhost:3000/pokemon');
            const data = await response.json();
            setPokemons(data);
        } catch (error) {
            console.error("Error fetching pokemons", error);
        }
    };

    const fetchFavorites = async () => {
        try {
            const response = await axios.get('http://localhost:3000/user/favorites');
            setFavorites(response.data.favorites);
        } catch (error) {
            console.error("Error fetching favorites", error);
        }
    };

    const toggleFavorite = async (pokemonId) => {
        try {
            const response = await axios.post(`http://localhost:3000/user/favorites/${user.userId}`, { pokemonId }  );
            setFavorites(response.data.favorites);
        } catch (error) {
            console.error("Error toggling favorite", error);
        }
    };

    useEffect(() => {
        fetchPokemons();
        fetchFavorites();
    }, []);

    return (
      <PokemonContext value={{ pokemons, favorites, toggleFavorite}}>
        {children}
      </PokemonContext>
    );
};

export default PokemonContext;