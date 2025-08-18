const { getConnection } = require('./models/database.js');
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../frontend')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.get('/admin-log', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.post('/admin-log', async (req, res) => {
    const connection = getConnection();
    const password = req.body.pswd;

    if (!password) {
        return res.status(400).send("Please fill this input!");
    }

    try {
        const [rows] = await connection.execute('SELECT passw FROM admin WHERE id=1');
        if (rows.length > 0) {
            const db_pass = rows[0].passw;
            const match = await bcrypt.compare(password, db_pass);
            if (match) {
                return res.send("Sikeres bejelentkezés!"); // ide jön majd az admin oldal
            } else {
                return res.status(401).send("Hibás jelszó.");
            }
        } else {
            return res.status(500).send("Sikertelen lekérdezés.");
        }
    } catch (err) {
        console.error(err);
        return res.status(500).send("Adatbázis hiba.");
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}.`);
});