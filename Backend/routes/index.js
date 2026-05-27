import express from 'express';
const router = express.Router();
import { getArticles } from '../controllers/article.controllers.js'

router.get('/', getArticles);

export default router;
