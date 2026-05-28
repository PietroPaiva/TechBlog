import { useEffect, useState } from "react";
import axios from 'axios'
import './home.css'
import { Link } from 'react-router-dom'

export default function Home(){
    const [articles, setArticles] = useState([]);
    const [search, setSearch] = useState('');

    const filteredArticles = articles.filter(article =>
        (article.title || '')
        .toLowerCase()
        .includes(search.toLowerCase())
    )
    

    useEffect(() => {
        axios.get('http://localhost:3000/articles')

        .then(response => {
            setArticles(response.data)
        })

        .catch(error => {
            console.log(error)
        })
    }, [])

    async function removeArticle(id){

        try{
            await axios.delete(`http://localhost:3000/articles/${id}`)
            setArticles(articles.filter(article => article.id !== id))
            alert('Artigo Removido') 
        }
        catch(error){
            console.log(error)
        }
    }


    return(
    <main className="home-page">


        <section className="container">
            <div className="top">
                <h1 className="title">Todos os artigos</h1>
                <Link className="create-button" to="/addArticle">Criar artigo</Link>
            </div>

            <input 
                className="search"
                type="text"
                placeholder="Pesquisar..."
                onChange={(e) => setSearch(e.target.value)} 
            />

            <div className="article-list">

                {filteredArticles.map(article => (
                    <article className="article-item" key={article.id}>

                        <div className="article-content">
                            <h2>{article.title}</h2>
                            <p>{article.author}</p>
                            <p>{article.content}</p>
                        </div>

                        <Link 
                            className="edit-button"
                            to={`/articleDetails/${article.id}`}
                            aria-label={`Ver ${article.title}`}
                        >
                            <span aria-hidden="true">👁</span>
                        </Link>

                        <Link 
                            className="edit-button"
                            to={`/editDetails/${article.id}`}
                            aria-label={`Editar ${article.title}`}
                        >
                            <span aria-hidden="true">✎</span>
                        </Link>

                        <button
                            className="delete-button"
                            type="button"
                            onClick={() => removeArticle(article.id)}
                            aria-label={`Remover ${article.title}`}
                        >
                            <span aria-hidden="true">🗑</span>
                        </button>
                    </article>
                ))}
            </div>
        </section>
    </main>
    )
}
