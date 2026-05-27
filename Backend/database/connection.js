import mysql from 'mysql2';

export const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "admin",
    database: "TechBlog"
});
