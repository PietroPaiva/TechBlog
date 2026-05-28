import { getCommentsByArticle,createComment, updateComments } from "../Models/commentsModels.js";

export async function getComments(req, res){
    const { article_id } = req.params
    const comments = await getCommentsByArticle(article_id)

    res.status(200).json(comments)
}

export async function create(req, res){
    const { article_id } = req.params
    const { content } = req.body

    const comments = await createComment(article_id, content)
    res.status(200).json(comments)

}

export async function update(req, res){
    const { article_id } = req.params
    const { content } = req.body

    const comments = await updateComments(article_id, content)
    res.status(200).json(comments)

}