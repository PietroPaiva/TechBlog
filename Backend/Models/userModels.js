import connection from "../database/connection.js";


export async function getUserByID(email, password){
    const [user] = await connection.query(
        `SELECT * FROM users 
        WHERE
        email = ?
        AND
        password = ? `,
        [email, password]
    )

    return user[0]

}