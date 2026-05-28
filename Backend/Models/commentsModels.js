import connection  from'../database/connection.js'

export async function getCommentsByArticle(article_id){

    const [comments] = await connection.query(
        'SELECT * FROM comments WHERE article_id = ?',
        [article_id]
    )
    return comments
}

export async function createComment(article_id, content){

    const [comments] = await connection.query(
        `INSERT INTO comments
        (article_id, content)
        VALUES
        (?, ?)`,

        [article_id, content]

    )

    return comments
    
}

export async function updateComments(article_id, content){

    const [comments] = await connection.query(
        `UPDATE comments 
        SET content = ?
        WHERE article_id = ?`,
    
        [content, article_id]
    )

    return comments
}