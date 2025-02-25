import express from 'express';
import { addComment, deleteComment, getCommentsByMovie } from '../controllers/commentController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/:movieId', getCommentsByMovie);
router.post('/new/:movieId', authMiddleware, addComment);
router.delete('/:commentId', authMiddleware, deleteComment);

export default router;