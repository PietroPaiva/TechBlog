import { getAllArticles, getArticle, updateArticle, removeArticle } from "../Models/articleModels";


export async function get(req, res){


    const articles = await getAllArticles() 

    res.status(200).json(articles)
}

export async function getOne(req, res){
    
    const {id} = req.params //req.params captura a rota

    const article = await getArticle(id)
    res.status(200).json(article)
}

export async function update(req, res){
    
    const {id} = req.params
    const updatedArticle = req.body //Campos que a gente passar

    const articleUpdated = await updateArticle(id, updatedArticle)
    res.status(200).json({message: 'Artigo Atualizado'})
}

export async function remove(req, res){
    const {id} = req.params

    const removedArticle = await removeArticle(id)
    res.status(200).json({message: 'Artigo removido'})
}