import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { use } from 'react'
import AuthContext from '../context/AuthContext'

const MovieCard = ({ movie }) => {
    const { isLogged } = use(AuthContext)
    const navigate = useNavigate()

    const handleClick = () => {
        if (!isLogged) {
            alert('Debes iniciar sesión para ver los detalles')
            navigate('/login')
            return
        }
        navigate(`/movie/${movie._id}`)
    }

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
            <img 
                className="w-full h-96 object-cover"
                src={movie.poster} 
                alt={movie.title} 
            />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{movie.title}</div>
                <p className="text-gray-700 text-base mb-2">
                    {new Date(movie.release_date).toLocaleDateString()}
                </p>
                <div className="flex items-center mb-2">
                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <p className="ml-2 text-gray-600">{movie.vote_average}</p>
                </div>
                <p className="text-gray-600 text-sm">
                    {movie.overview.length > 150 ? movie.overview.substring(0, 150) + '...' : movie.overview}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <button 
                    onClick={handleClick}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Ver más
                </button>
            </div>
        </div>
    )
}

export default MovieCard