import express from 'express'
import cors from 'cors'
import 'dotenv/config'

import articleRoutes from './routes/articleRoutes.js';
import commentRoutes from './routes/commentRoutes.js'
import userRoutes from './routes/usersRoutes.js'


const app = express();

app.use(express.json()); 
app.use(cors()); 
app.use(express.urlencoded({ extended: false }));

app.use('/articles', articleRoutes);
app.use('/comments', commentRoutes);
app.use('/login', userRoutes);

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000/');
});


