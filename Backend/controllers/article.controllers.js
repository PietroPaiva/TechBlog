import {db} from '../model/connection.js'


export const getArticles = (req, res) => {
    const q = "SELECT * FROM articles";

    db.query(q, (err, data) => { // faz a query
        if(err) return res.json(err); // se tiver erro retorna o json com o erro

        return res.status(200).json(data) // se tiver ok retorn 200
    });
} 


