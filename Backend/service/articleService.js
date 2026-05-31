export function validateArticle(data) {
    const errors = [];

    if(!data.title) errors.push('Título é obrigatório')
    if(!data.author) errors.push('Autor é obrigatório')
    if(!data.content) errors.push('Conteúdo é obrigatório')



    return errors; 
}


