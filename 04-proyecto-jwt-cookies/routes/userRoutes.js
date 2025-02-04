import express from "express";

const router = express.Router();

router.post('/',addUser);
router.get('/me', authMiddleware, getUserProfile)

export default router;