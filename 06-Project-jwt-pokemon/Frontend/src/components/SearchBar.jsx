import { useState, use } from 'react';
import PokemonContext from '../context/PokemonContext';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const { searchPokemons } = use(PokemonContext);

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        searchPokemons(value);
    };

    return (
        <div className="w-full max-w-md mx-auto mb-6 bg-white p-4 rounded-lg shadow-lg">
            <input
                type="text"
                placeholder="Buscar Pokémon..."
                value={searchTerm}
                onChange={handleSearch}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
            />
        </div>
    );
};

export default SearchBar; 