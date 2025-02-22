import express from 'express';
import { addFavorite, deleteFavorite, getFavorites } from '../controllers/favoriteController.js';

const router = express.Router();

router.post('/:userId', addFavorite);
router.get('/:userId', getFavorites);
router.delete('/:userId/:movieId', deleteFavorite);

export default router;