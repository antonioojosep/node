import express from 'express';
import { addFavorite, deleteFavorite, getFavorites } from '../controllers/favoriteController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/:userId', authMiddleware ,addFavorite);
router.get('/:userId', getFavorites);
router.delete('/:userId/:movieId', authMiddleware, deleteFavorite);

export default router;