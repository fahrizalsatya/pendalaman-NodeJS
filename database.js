import mysql from 'mysql2'

export fucntion connectionDB() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'product_catalog'
    })
}