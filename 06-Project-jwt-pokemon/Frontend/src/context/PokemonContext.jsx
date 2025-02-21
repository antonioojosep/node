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
            const response = await axios.get('http://localhost:3000/user/favorites'  );
            setFavorites(response.data);
        } catch (error) {
            console.error("Error fetching favorites", error);
        }
    };

    const searchPokemons = async (searchTerm) => {
        if (!searchTerm) {
            fetchPokemons();
            return;
        }
        try {
            const name = searchTerm.toLowerCase();
            const response = await axios.get(`http://localhost:3000/pokemon/search?name=${name}`);
            setPokemons(response.data);
        } catch (error) {
            setPokemons([]);
        }
        
        
    };

    const toggleFavorite = async (pokemonId) => {
        try {
            if (favorites.some(favorite => favorite._id === pokemonId)) {
                await axios.delete(`http://localhost:3000/user/favorites/${user.userId}`, { data: { pokemonId: pokemonId }, headers: { 'Authorization': `Bearer ${user.token}` } }  );
                fetchFavorites();
                return;
            }
            await axios.post(`http://localhost:3000/user/favorites/${user.userId}`, { pokemonId: pokemonId }, { headers: { 'Authorization': `Bearer ${user.token}` } }  );
            fetchFavorites();
        } catch (error) {
            console.error("Error toggling favorite", error);
        }
    };

    useEffect(() => {
        if (user) {
            fetchPokemons();
            fetchFavorites();
        }
    }, [user]);

    return (
      <PokemonContext value={{ pokemons, favorites, toggleFavorite, searchPokemons }}>
        {children}
      </PokemonContext>
    );
};

export default PokemonContext;