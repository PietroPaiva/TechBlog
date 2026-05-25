function AddDetails(){
    
    return (
    <>
        <h1>Novo Artigo</h1>
        <p>Titulo do Artigo *</p>
        <input type="text" placeholder="Titulo"/>
        
        <p>Imagem do Artigo</p>
        <input type="text" id="imagem" placeholder="URL da imagem" />
    </>
    )
};

export default AddDetails;