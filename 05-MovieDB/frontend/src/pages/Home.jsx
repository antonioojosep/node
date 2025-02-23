import React from 'react'
import { useEffect } from 'react'

const Home = () => {
    const fetchMovies = async () => {
        try {
            const response = await fetch('http://localhost:3000/movies');
            const data = await response.json();
            setPokemons(data);
        } catch (error) {
            console.error("Error fetching Movies", error);
        }
    };
  return (
    <div>Home</div>
  )
}

export default Home