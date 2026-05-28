import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import axios from 'axios';
import './editDetails.css'

export default function EditDetails(){
const [article, setArticle] = useState({
    title: '',
    author: '',
    content: '',
    tag1: '',
    tag2: '',
    tag3: ''
})

    const {id} = useParams()

    useEffect(() => {

        axios.get(`http://localhost:3000/articles/${id}`)

        .then(response => {
            setArticle(response.data)
        })

        .catch(error => {
            console.log('error', error)
        })
    }, [])

    async function handleUpdate(){
        try{
            await axios.put(
                `http://localhost:3000/articles/${id}`,
                article
            )
            alert('Artigo atualizado')

        }
        catch(error){
            console.log(error)

        }
    }


    return(
        <main className="edit-details-page">
            <section className="edit-details-container">
                <div className="edit-details-top">
                    <h1>Editar artigo</h1>

                    <button type="button" onClick={handleUpdate}>
                        Editar artigo
                    </button>

                </div>

                <label htmlFor="edit-title">Título do artigo *</label>
                <input id="edit-title" type="text" value={article.title || ''}
                onChange={(e) => setArticle({
                    ...article,
                    title: e.target.value
                })}
                />

                <label htmlFor="edit-author">Autor *</label>
                <input id="edit-author" type="text" value={article.author || ''} 
                onChange={(e) => setArticle({
                    ...article,
                    author: e.target.value
                })}
                />

                <label>Tags *</label>
                <div className="edit-tags-fields">
                    <input
                        type="text"
                        value={article.tag1 || ''}
                        onChange={(e) => setArticle({
                        ...article,
                        tag1: e.target.value
                })}
                    />

                    <input
                        type="text"
                        value={article.tag2 || ''}
                        onChange={(e) => setArticle({
                        ...article,
                        tag2: e.target.value
                })}
                    />

                    <input
                        type="text"
                        value={article.tag3 || ''}
                        onChange={(e) => setArticle({
                        ...article,
                         tag3: e.target.value
                })}
                    />
                </div>

                <label htmlFor="edit-content">Conteúdo *</label>

                <textarea
                    id="edit-content"
                    value={article.content || ''}
                    onChange={(e) =>
                        setArticle({
                            ...article,
                            content: e.target.value
                        })
                    }
                />
                
            </section>
        </main>
    )
}
