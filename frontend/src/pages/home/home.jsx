import { useEffect, useState } from 'react'
import axios from 'axios'
import './home.css'
import {Link} from 'react-router-dom'

function Home() {

    const [articles, setArticles] = useState([])

    useEffect(() => {

        axios.get('http://localhost:3000/')

            .then(response => {

                console.log(response.data)

                setArticles(response.data)

            })

            .catch(error => {

                console.log(error)

            })

    }, [])

    return (

        <div className="container">

            <h1 className="title">
                Todos os artigos
            </h1>

            <button className="create-button">
                Criar artigo
            </button>

            <br />
            <br />

            <div className="header">

                <p>Título</p>
                <p>Autor</p>
                <p>Tag1</p>
                <p>Tag2</p>
                <p>Tag3</p>
                <p>Ações</p>

            </div>

            {articles.map(article => (

                <div
                    className="row"
                    key={article.id}
                >

                    <p>{article.title}</p>

                    <p>{article.author}</p>

                    <p>{article.tag1}</p>

                    <p>{article.tag2}</p>

                    <p>{article.tag3}</p>

                    <div id='actionButtons'>
                        <Link to={"/editDetails"}>
                            <button className="edit-button">
                                Editar
                            </button>
                        </Link>
                        <Link to={"/articleDetails"}>
                            <button className="edit-button">
                                Ler
                            </button>
                        </Link>
                    </div>

                </div>

            ))}

        </div>

    )
}

export default Home