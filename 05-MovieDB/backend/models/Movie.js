import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    title: {type: String, required: true},
    poster: {type: String, required: true},
    release_date: {type: Date, required: true},
    vote_average: {type: Number, required: true},
    overview: {type: String, required: true},
});

export default mongoose.model('Movie', movieSchema);