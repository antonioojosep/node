import React from 'react'
import { use, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import AuthContext from '../context/AuthContext'
import Spinner from '../components/Spinner'

const Movie = () => {
    const { id } = useParams()
    const { userId } = use(AuthContext)
    const [movie, setMovie] = useState(null)
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [newComment, setNewComment] = useState('')

    // Obtener detalles de la película
    const fetchMovie = async () => {
        try {
            const response = await fetch(`http://localhost:3000/movies/${id}`)
            const data = await response.json()
            setMovie(data)
            setIsLoading(false)
        } catch (error) {
            console.error("Error fetching movie", error)
            setIsLoading(false)
        }
    }

    // Obtener comentarios
    const fetchComments = async () => {
        try {
            const response = await fetch(`http://localhost:3000/comments/${id}`)
            const data = await response.json()
            setComments(data)
        } catch (error) {
            console.error("Error fetching comments", error)
        }
    }

    // Añadir a favoritos
    const handleAddFavorite = async () => {
        try {
            await fetch(`http://localhost:3000/favorites/${userId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ movieId: id }),
            })
            alert('Añadido a favoritos')
        } catch (error) {
            console.error("Error adding to favorites", error)
        }
    }

    // Añadir comentario
    const handleAddComment = async (e) => {
        e.preventDefault()
        try {
            await fetch(`http://localhost:3000/comments/new/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ comment: newComment, userId: userId })
            })
            setNewComment('')
            fetchComments() // Recargar comentarios
        } catch (error) {
            console.error("Error adding comment", error)
        }
    }

    useEffect(() => {
        fetchMovie()
        fetchComments()
    }, [id])

    if (isLoading) return <Spinner />

    return (
        <>
            <Navbar />
            <div className="container mx-auto px-4 py-8">
                {movie && (
                    <div className="flex flex-col md:flex-row gap-8">
                        {/* Detalles de la película */}
                        <div className="md:w-1/3">
                            <img 
                                src={movie.poster} 
                                alt={movie.title}
                                className="w-full rounded-lg shadow-lg"
                            />
                        </div>
                        <div className="md:w-2/3">
                            <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
                            <p className="text-gray-600 mb-4">
                                {new Date(movie.release_date).toLocaleDateString()}
                            </p>
                            <div className="flex items-center mb-4">
                                <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <span className="ml-2 text-xl">{movie.vote_average}</span>
                            </div>
                            <p className="text-lg mb-6">{movie.overview}</p>
                                <button
                                    onClick={handleAddFavorite}
                                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                                >
                                    Añadir a Favoritos
                                </button>
                            
                        </div>
                    </div>
                )}

                {/* Sección de comentarios */}
                <div className="mt-12">
                    <h2 className="text-2xl font-bold mb-6">Comentarios</h2>
                    
                        <form onSubmit={handleAddComment} className="mb-8">
                            <textarea
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                                className="w-full p-2 border rounded-lg mb-2"
                                rows="3"
                                placeholder="Escribe tu comentario..."
                                required
                            />
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                            >
                                Publicar comentario
                            </button>
                        </form>

                    <div className="space-y-4">
                        {comments.map((comment) => (
                            <div key={comment._id} className="bg-white p-4 rounded-lg shadow">
                                <p className="text-gray-600 text-sm mb-2">
                                    {new Date(comment.date).toLocaleDateString()}
                                </p>
                                <p>{comment.comment}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Movie