"use strict";

// import
const express = require('express');
const morgan = require('morgan');
const sqlite = require('sqlite3');

// init express
const app = express();
const port = 3000;

const db = new sqlite.Database('./database.db', (err) => {
    console.error(err);
});


app.use(morgan('tiny'));
app.use(express.json());

// routes
app.get('/libri', (req, res) => {
    const query = 'SELECT * from Libri';
    db.all(query, (err, rows) => {
        if (err)
            throw err;

        res.json(rows);
    });
});

app.post('/add', (req, res) => {
    const titolo = req.body.titolo;
    const autore = req.body.autore;
    const isbn = req.body.isbn;
    let completato = 0;
    if (req.body.completato) completato = 1;

    const query = 'INSERT INTO Libri VALUES (?, ?, ?, ?)';

    db.run(query, [titolo, autore, isbn, completato], (err) => {
        if (err)
            throw err;

        res.end();
    });

});



app.listen(port, () =>
    console.log(`Server is listening at http://localhost:${port}`)
);