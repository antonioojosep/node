import React, { useState, useEffect } from 'react'
import { use } from 'react'
import Navbar from '../components/Navbar'
import Spinner from '../components/Spinner'
import MovieCard from '../components/MovieCard'
import AuthContext from '../context/AuthContext'

const Favorites = () => {
    const { userId } = use(AuthContext)
    const [favorites, setFavorites] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const fetchFavorites = async () => {
        try {
            const response = await fetch(`http://localhost:3000/favorites/${userId}`)
            const data = await response.json()
            setFavorites(data)
            setIsLoading(false)
        } catch (error) {
            console.error("Error fetching favorites", error)
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchFavorites()
    }, [userId])

    return (
        <>
            <Navbar />
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-8">Mis Películas Favoritas</h1>
                {isLoading ? (
                    <Spinner />
                ) : favorites.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {favorites.map((movie) => (
                            <MovieCard key={movie._id} movie={movie} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center text-gray-600">
                        <p>No tienes películas favoritas aún.</p>
                    </div>
                )}
            </div>
        </>
    )
}

export default Favorites