"use strict";

// import
const express = require('express');
const morgan = require('morgan');

const dao = require('./dao.js');

// init express
const app = express();
const port = 3000;

app.use(morgan('tiny'));
app.use(express.json());

app.use(express.static('public'));
app.get('/', (req, res) => res.redirect('index.html'));


app.get('/libri', (req, res) => {
    dao.getTuttiLibri()
        .then((libri) => res.json(libri))
        .catch(() => res.status(500).end());
});

app.post('/add', (req, res) => {
    let completato = 0;
    if (req.body.completato) completato = 1;

    const nuovoLibro = {
        titolo: req.body.titolo,
        autore: req.body.autore,
        isbn: req.body.isbn,
        completato: completato
    }

    console.log(nuovoLibro);
    dao.addNuovoLibro(nuovoLibro)
        .then((result) => res.status(201).header('Location', `/libri/${result}`).end())
        .catch((err) => res.status(503).json({ error: `Errore interno al database durante l'aggiunta`}));
});


app.listen(port, () =>
    console.log(`Server is listening at http://localhost:${port}`)
);