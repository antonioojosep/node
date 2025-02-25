import React, { createContext, useState, useEffect } from 'react';

const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
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
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    return (
        <MoviesContext value={{ movies, isLoading }}>
            {children}
        </MoviesContext>
    );
};

export default MoviesContext;