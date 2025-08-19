const { getConnection } = require('./models/database.js');
const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');
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

app.post('/check-data', async (req, res) => {
    const password = req.body.data;
    if (!password) {
        return res.json({ success: false, message: 'Kérlek, add meg a jelszót!' });
    }
    const connection = getConnection();
    try {
        const [rows] = await connection.execute('SELECT passw FROM admin WHERE id=1');
        if (rows.length === 0) {
            return res.json({ success: false, message: 'Lekérdezés hiba!' });
        }

        const dbPass = rows[0].passw;

        if (await bcrypt.compare(password, dbPass)) {
            return res.json({ success: true, message: 'Sikeres bejelentkezés!' });
        } else {
            return res.json({ success: false, message: 'Rossz jelszó!' });
        }
    } catch (err) {
        console.log(err);
        return res.json({ success: false, message: 'Adatbázis hiba!' });
    }

});

app.post ('/add-data', async (req, res) => {
    const pname = req.body.pname;
    const pstack = req.body.pstack;
    if (!pname || !pstack) {
        return res.json({ success: false, message: 'Kérlek tölts ki minden mezőt!' });
    }
    const connection = getConnection();
    try {
        await connection.execute('INSERT INTO pname, pstack VALUES (?, ?)', [pname, pstack]);
        return res.json({ success: true, message: 'Projekt hozzáadva!' });
    } catch (err) {
        return res.json({ success: false, message: 'Adatbázis hiba!' });
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}.`);
});