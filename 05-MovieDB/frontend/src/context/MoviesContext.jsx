import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const MoviesContext = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchMovies = async () => {
        try {
            const response = await fetch('http://localhost:3000/movies');
            const data = await response.json();
            setMovies(data);
            setIsLoading(false);
        } catch (error) {
            console.error("Error fetching Movies", error);
        }
    };

    useEffect(() => {
        fetchMovies();
    }, []);

  return (
    <MoviesContext value={{ movies }}>
      {children}
    </MoviesContext>
  )
}

export default MoviesContext