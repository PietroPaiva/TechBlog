import connection  from'../database/connection.js'

export async function getAllArticles(){

    const [articles] = await connection.query(
        'SELECT * FROM articles'
    )

    return articles

}

export async function getArticle(id){

    const [article] = await connection.query(
        `SELECT * FROM articles WHERE id = ?`,
        [id]
    )

    return article[0]

}

export async function updateArticle(id, articleData){

    const {title, author, content, tag1, tag2, tag3} = articleData 
    await connection.query(
        `UPDATE articles 
        SET title = ?, author = ?, content = ?, tag1 = ?, tag2 = ?, tag3 = ?
        WHERE id = ?`,
    
        [title, author, content, tag1, tag2, tag3, id]
    )
}

export async function removeArticle(id){


    const [article] = await connection.query(
        `DELETE FROM articles WHERE id = ?`,

        [id]
    )
}

export async function CreateArticle(title, author, content, tags1, tags2, tags3){

    const [articleData] = await connection.query(
        `INSERT INTO articles
        (title, author, content, tag1, tag2, tag3)
        VALUES
        (?, ?, ?, ?, ?, ?)`,

        [title, author, content, tags1, tags2, tags3]
    )

    return articleData
}
