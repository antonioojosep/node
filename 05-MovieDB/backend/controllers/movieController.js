import Movie from "../models/Movie.js";

export const addMovie = async (req, res) => {
    try {
        const { title, poster, release_date, vote_average, overview } = req.body;
        const movie = await Movie.create({ title, poster, release_date, vote_average, overview });
        res.status(201).json(movie);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al crear la película' });
    }
}

export const getMovies = async (req, res) => {
    try {
        const movies = await Movie.find({});
        res.json(movies);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener las películas' });
    }
}

export const getMovieById = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (!movie) {
            return res.status(404).json({ mensaje: 'Película no encontrada' });
        }
        res.json(movie);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener la película' });
    }
}

export const saveMovies = async (req, res) => {
    try {
        if (await Movie.countDocuments() > 0) {
            return console.log("Ya hay películas en la base de datos");
        }
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=430f8d504489e4d548f4c1abbab10d12&language=es-ES&page=1');

        if (!response.ok) {
            return console.log("Error al obtener las películas");
        }
        const data = await response.json();
        
        for (const movie of data.results) {
            await Movie.create({
                title: movie.title,
                poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                release_date: movie.release_date,
                vote_average: movie.vote_average,
                overview: movie.overview
            });
            await new Movie.save();
        }
        console.log("Movies fetched and saved successfully!");  

    }catch (error) {
        console.log("Error al guardar las películas");
    }
}