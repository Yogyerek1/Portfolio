require('dotenv').config();
const mysql = require('mysql2/promise');

let connection;

async function initDB() {
    try {
        connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            port: process.env.DB_PORT || 3306,
            connectTimeout: 60000,
            charset: 'utf8mb4',
            timezone: 'local'
        });

        console.log('✅ Sikeres csatlakozás a MySQL adatbázishoz!');
        const [rows] = await connection.execute('SELECT 1 as test');
        console.log('📊 Teszt query eredménye:', rows);
    } catch (error) {
        console.error('❌ Hiba az adatbázis kapcsolatban:', error.message);
        process.exit(1);
    }
}

process.on('SIGINT', async () => {
    console.log("Kapcsolat zárása.");
    try {
        if (connection) await connection.end();
        console.log("Adatbazis kapcsolat bontva.");
        process.exit(0);
    } catch (error) {
        console.log("Hiba a kapcsolat bontasakor.");
        process.exit(1);
    }
});

initDB();

module.exports = {
    getConnection: () => connection
};