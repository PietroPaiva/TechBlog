import { getAllArticles, getArticle, updateArticle, removeArticle, CreateArticle } from "../Models/articleModels.js";
import { validateArticle } from "../service/service.js";


export async function get(req, res){


    const articles = await getAllArticles() 

    res.status(200).json(articles)
}

export async function getOne(req, res){
    
    const {id} = req.params 

    const article = await getArticle(id)
    res.status(200).json(article)
}

export async function create(req, res){

    const errors = validateArticle(req.body);
    if (errors.length > 0) {
        return res.status(400).json({ errors });
    }

    const {title, author, content, tag1, tag2, tag3} = req.body
    const article = await CreateArticle(title, author, content, tag1, tag2, tag3)
    res.status(201).json(article)
}


export async function update(req, res){
    const errors = validateArticle(req.body);
    if (errors.length > 0) {
        return res.status(400).json({ errors });
    }

    const {id} = req.params
    const updatedArticle = req.body
    const articleUpdated = await updateArticle(id, updatedArticle)
    res.status(200).json({message: 'Artigo Atualizado'})
}

export async function remove(req, res){
    const {id} = req.params

    const removedArticle = await removeArticle(id)
    res.status(200).json({message: 'Artigo removido'})
}