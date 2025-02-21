import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const PokemonDetails = () => {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState(null);
  

    const fetchPokemon = async () => {
        const response = await fetch(`http://localhost:3000/pokemon/${id}`);
        const data = await response.json();
        setPokemon(data);
    }

    useEffect(() => {
        fetchPokemon();
    }, [id]);

    if (!pokemon) return <p className="text-center text-gray-500">Loading...</p>;

    return (
      <>
        <div className="flex items-center justify-center h-screen flex-col bg-gradient-to-b from-red-500 to-gray-500">
          <h1 className="text-2xl font-bold text-gray-700">Detalles del Pokémon</h1>
          <Link to="/" className="text-blue-500">Inicio</Link>
          <div className="p-8 px-52 shadow-md rounded-lg flex items-center bg-gray-200 justify-around w-full">
            
            <img className="w-xl" src={pokemon.image} alt={pokemon.name} />

            <div className="p-8">
              <h2 className=" mt-1 text-5xl font-bold text-black">{pokemon.name}</h2>
              <p className="mt-5 text-2xl text-gray-500">Height: {pokemon.height}</p>
            </div>

          </div>
        </div>
      </>
    )
}

export default PokemonDetails