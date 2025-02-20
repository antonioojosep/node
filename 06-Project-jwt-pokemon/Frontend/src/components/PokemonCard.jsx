import React, { use } from 'react'
import PokemonContext from '../context/PokemonContext';

const PokemonCard = (props) => {
    const { pokemon } = props;
    const { favorites, toggleFavorite } = use(PokemonContext);
    const isFavorite = favorites.some(Pokemon => Pokemon.id === pokemon.id);

  return (
    <div className="m-4 p-2 bg-blue-300 border-2 border-black rounded-lg flex flex-col justify-center items-center" 
        key={pokemon.id}
        >
        <img className=" w-28 h-32 " src={pokemon.image} alt="" />
        <h1 className="text-center">{pokemon.name}</h1>
        <p>{pokemon.height} Kg</p>
        <button 
          onClick={() => toggleFavorite(pokemon._id)}
          className={`mt-2 px-4 py-2 rounded-lg ${
            isFavorite 
            ? 'bg-yellow-500 hover:bg-yellow-600' 
            : 'bg-gray-300 hover:bg-gray-400'
          }`}
            >
                {isFavorite ? '★ Favorito' : '☆ Añadir a favoritos'}
        </button>
      </div>
  )
}

export default PokemonCard