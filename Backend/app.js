import express from 'express'
import cors from 'cors'

import articleRoutes from './routes/index.js';

const app = express();

app.use(express.json()); // Permite trabalhar com json no express
app.use(cors()); // evitar alguns conflitos por rodar localmentee
app.use(express.urlencoded({ extended: false }));

app.use('/articles', articleRoutes);

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});


