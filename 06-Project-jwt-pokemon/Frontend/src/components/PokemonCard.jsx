import React, { use } from 'react'
import PokemonContext from '../context/PokemonContext';

const PokemonCard = (props) => {
    const { pokemon } = props;

  return (
    <div className="m-4 p-2 bg-blue-300 border-2 border-black rounded-lg flex flex-col justify-center items-center" 
        key={pokemon.id}
        >
        <img className=" w-28 h-32 " src={pokemon.image} alt="" />
        <h1 className="text-center">{pokemon.name}</h1>
        <p>{pokemon.height} Kg</p>
      </div>
  )
}

export default PokemonCard