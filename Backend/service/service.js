export function validateArticle(data) {
    const errors = [];

    if (!data.title || data.title.trim() === '') {
        errors.push('Título é obrigatório');
    }

    if (!data.author || data.author.trim() === '') {
        errors.push('Autor é obrigatório');
    }

    if (!data.content || data.content.trim() === '') {
        errors.push('Conteúdo é obrigatório');
    }

    return errors; 
}