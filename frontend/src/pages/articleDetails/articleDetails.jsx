import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import './articleDetails.css'

export default function ArticleDetails(){

    const { id } = useParams();
    const [article, setArticle] = useState([])
    const [comment, setComment] = useState([])
    const [newComment, setNewComment] = useState('')

    useEffect(() =>{

        axios.get(`http://localhost:3000/articles/${id}`)
        .then(response => {
            setArticle(response.data)
        })         
        
        .catch(error => {
            console.log('error', error)
        })
    }, [])


    useEffect(() => {
        axios.get(`http://localhost:3000/comments/${id}`)
        .then(response => {
            setComment(response.data)
            if(response.data.length > 0){
            setNewComment(response.data[0].content)
            }
        })
        .catch(error => {
            console.log('error', error)
        })
    }, [])

    async function saveComment(){
        try{
            if(comment.length > 0){
                await axios.put(
                    `http://localhost:3000/comments/${id}`,
                    { content: newComment }
                )
            } else {
                await axios.post(
                    `http://localhost:3000/comments/${id}`,
                    { content: newComment }
                )
            }
            alert('Comentário salvo!')
        }
        catch(error){
            console.log(error)
        }
}


    return(
        
    <main className="article-details-page">
        <section className="article-details-container">

            <h1 className="article-details-title">{article.title}</h1>

            <div className="article-tags">
                <p>{article.tag1}</p>
                <p>{article.tag2}</p>
                <p>{article.tag3}</p>
            </div>

            <p className="article-meta">Publicado por {article.author}</p>

            <textarea 
                className="article-body" 
                value={article.content}
                readOnly>
            </textarea>

            <div className="comments-section">
                <h2>Comentários</h2>

                <textarea 
                    className="comment-textarea"
                    placeholder="Escreva um comentário..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}>
                </textarea>

                <button className="comment-button" onClick={saveComment}>
                    Comentar
                </button>
            </div>

        </section>
    </main>

    )
}