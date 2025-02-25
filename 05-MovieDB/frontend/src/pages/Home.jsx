import React from 'react'
import { use } from 'react'
import Navbar from '../components/Navbar'
import Spinner from '../components/Spinner'
import MoviesContext from '../context/MoviesContext'
import MovieCard from '../components/MovieCard'

const Home = () => {
  const { movies, isLoading } = use(MoviesContext)
    
  return (
    <>
      <Navbar />
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
          {movies?.map((movie) => (
            <MovieCard key={movie._id} movie={movie} />
          ))}
        </div>
      )}
    </>
  )
}

export default Home