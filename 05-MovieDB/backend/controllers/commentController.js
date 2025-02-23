import Comment from "../models/Comment.js";

export const addComment = async (req, res) => {
    try {
        const movieId = req.params.movieId;
        const { userId, comment } = req.body;
        const newComment = await Comment.create({ movieId, userId, comment });
        res.status(201).json(newComment);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al agregar comentario' });
    }
}

export const getCommentsByMovie = async (req, res) => {
    try {
        const movieId = req.params.movieId;
        const comments = await Comment.find({ movieId });
        res.json(comments);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener comentarios' });
    }
}

export const getCommentsByUser = async (req, res) => {
    try {
        const userId = req.params.userId;
        const comments = await Comment.find({ userId });
        res.json(comments);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener comentarios' });
    }
}

export const deleteComment = async (req, res) => {
    try {
        const commentId = req.params.commentId;
        const comment = await Comment.findByIdAndDelete(commentId);
        if (!comment) {
            return res.status(404).json({ mensaje: 'Comentario no encontrado' });
        }
        res.json({ mensaje: 'Comentario eliminado' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar comentario' });
    }
}