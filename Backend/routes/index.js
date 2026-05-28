import express from 'express';
const router = express.Router();
import { get, getOne, update, remove, create } from '../controllers/article.controllers.js'

router.get('/', get);
router.get('/:id', getOne);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', remove);

export default router;
