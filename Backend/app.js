import express from 'express'
import cors from 'cors'

import articleRoutes from './routes/articleRoutes.js';
import commentRoutes from './routes/commentRoutes.js'


const app = express();

app.use(express.json()); 
app.use(cors()); 
app.use(express.urlencoded({ extended: false }));

app.use('/articles', articleRoutes);
app.use('/comments', commentRoutes);

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000/');
});


