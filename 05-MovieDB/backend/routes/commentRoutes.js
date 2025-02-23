import express from 'express';
import { addComment, deleteComment, getCommentsByMovie } from '../controllers/commentController.js';

const router = express.Router();

router.get('/:movieId', getCommentsByMovie);
router.post('/new/:movieId', addComment);
router.delete('/:commentId', deleteComment);

export default router;