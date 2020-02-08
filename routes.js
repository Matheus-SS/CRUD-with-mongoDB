import express from 'express';
import AnimeController from './src/controller/AnimeController';

const router = new express.Router();

router.post('/anime', AnimeController.store);
router.get('/anime/:id', AnimeController.show);
router.get('/anime', AnimeController.index);
router.put('/anime/:id', AnimeController.update);
router.delete('/anime/:id', AnimeController.delete);

export default router;
