import Tags from '../../components/Tags/tags.jsx'
import articles from '../data.jsx'

export default function ArticleDetails(){

    const data = articles()

    return(

        <>
            <h1>Novo Artigo</h1>
            <p>Titulo do Artigo *</p>
            <input type="text" placeholder="Titulo"/>

            <p>Comentarios</p>
            <input type="text" />
        </>

    )
}