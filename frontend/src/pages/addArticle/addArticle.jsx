import Tags from "../../components/Tags/tags";

function AddArticle(){
    
    return (
    <>
        <h1>Novo Artigo</h1>
        <p>Titulo do Artigo *</p>
        <input type="text" placeholder="Titulo"/>
        
        <p>Imagem do Artigo</p>
        <input type="url" id="imagem" placeholder="URL da imagem" />

        <Tags />

        <p>Conteudo</p>
        <input type="text" />
    </>
    )
};

export default AddArticle;