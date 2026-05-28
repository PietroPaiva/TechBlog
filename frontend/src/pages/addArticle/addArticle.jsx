import { useState } from "react"
import axios from 'axios'
import './addArticle.css'


export default function AddArticle(){

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [content, setContent] = useState('')
    const [tag1, setTag1] = useState('')
    const [tag2, setTag2] = useState('')
    const [tag3, setTag3] = useState('')


    async function createArticle(){

        try{

            await axios.post(`http://localhost:3000/articles`,
                {
                    title,
                    author,
                    content,
                    tag1,
                    tag2,
                    tag3
                }
            )

            alert('Artigo criado')

        }

        catch(error){
           if(error.response){
        alert(error.response.data.errors.join('\n'))
            }
        }
    }


    return(
        <main className="add-article-page">
            <section className="add-article-container">
                <div className="add-article-top">
                    <h1>Novo artigo</h1>

                    <button type="button" onClick={createArticle}>
                        Criar artigo
                    </button>
                </div>

                <label htmlFor="article-title">Título do artigo *</label>
                <input
                    id="article-title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Título"
                />

                <label htmlFor="article-author">Autor *</label>
                <input
                    id="article-author"
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="Autor"
                />

                <label>Tags *</label>
                <div className="tags-fields">
                    <input
                        type="text"
                        value={tag1}
                        onChange={(e) => setTag1(e.target.value)}
                        placeholder="Tags"
                    />

                    <input
                        type="text"
                        value={tag2}
                        onChange={(e) => setTag2(e.target.value)}
                        placeholder="Tags"
                    />

                    <input
                        type="text"
                        value={tag3}
                        onChange={(e) => setTag3(e.target.value)}
                        placeholder="Tags"
                    />
                </div>

                <label htmlFor="article-content">Conteúdo *</label>
                <textarea
                    id="article-content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Escreva aqui seu artigo..."
                />
            </section>
        </main>
    )
}
