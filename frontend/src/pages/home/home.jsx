import Tags from '../../components/Tags/tags.jsx'
import articles from '../data.jsx'

export default function Home(){

  const data = articles()

    return(
        <>

        <Tags />

        <button>Criar Artigo</button>

        <input type="search" placeholder='Pesquisar'/>

        {data.map(article => (
            <div key={article.id}>
                <h2>{article.title}</h2>
            </div>
        ))}
  
    </>

    )
}