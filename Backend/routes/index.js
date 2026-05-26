const express = require('express');
const router = express.Router();
const path = require('path')

const articleControllers = require('../controllers/article.controllers')

router.get('/', articleControllers.getAllArticles());


module.exports = router;
