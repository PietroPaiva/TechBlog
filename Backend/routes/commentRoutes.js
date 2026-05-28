import express from 'express'
import { getComments, create, update } from '../controllers/comments.controllers.js';
const router = express.Router();

router.get('/:article_id', getComments);
router.post('/:article_id', create);
router.put('/:article_id', update);

export default router;