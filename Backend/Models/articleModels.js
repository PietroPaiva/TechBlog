import connection  from'../database/connection.js'

export async function getAllArticles(){

    const [articles] = await connection.query(
        'SELECT * FROM articles'
    )

    return articles

}

export async function getArticle(id){

    const [article] = await connection.query(
        `SELECT * FROM articles WHERE id = ?`
    )

    return article

}

export async function updateArticle(id, articleData){

    const {title, author, content} = articleData 
    await connection.query(
        `UPDATE articles 
        SET title = ?, author = ?, content = ?
        WHERE id = ?`,
    
        [title, author, content, id]
    )

    
}

export async function removeArticle(id){


    const [article] = await connection.query(
        `DELETE FROM articles WHERE id = ?`,

        [id]
    )
}

export async function CreateArticle(articleData){

    const [article] = await.connection.query()
}
