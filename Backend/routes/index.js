import express from 'express';
const router = express.Router();
import { get, getOne, update, remove } from '../controllers/article.controllers.js'

router.get('/', get);
router.get('/editDetails/:id', getOne);
router.get('/articleDetails/:id', getOne);
router.put('/editDetails/:id', update);
router.delete('/editDetails/:id', remove);

export default router;
