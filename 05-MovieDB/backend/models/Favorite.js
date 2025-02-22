import mongoose from "mongoose";

const favoriteSchema = mongoose.Schema({
    movieId: {type: mongoose.Schema.Types.ObjectId, ref: 'Movie', required: true},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
});

export default mongoose.model('Favorite', favoriteSchema);