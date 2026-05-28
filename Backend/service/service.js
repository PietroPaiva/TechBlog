export function validateArticle(data) {
    const errors = [];

    if(!data.title) errors.push('Título é obrigatório')
    if(!data.author) errors.push('Autor é obrigatório')
    if(!data.content) errors.push('Conteúdo é obrigatório')



    return errors; 
}

export function validateUser(email, password){
    const errors = []

    if(!email) errors.push('Email é obrigatório')
    if(!password) errors.push('Senha é obrigatória')

    return errors
}