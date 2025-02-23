import mongoose from "mongoose";

const commentSchema =  mongoose.Schema({
    movieId: {type: mongoose.Schema.Types.ObjectId, ref: 'Movie', required: true},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    comment: {type: String, required: true},
    date: {type: Date, default: Date.now},
});

export default mongoose.model('Comment', commentSchema);