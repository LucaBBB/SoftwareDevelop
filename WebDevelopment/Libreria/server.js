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

    const libro = req.body;
    console.log(libro);

    dao.addNuovoLibro(libro)
        .then((result) => res.status(201).header('Location', `/libri/${result}`).end())
        .catch((err) => res.status(503).json({ error: `Errore interno al database durante l'aggiunta`}));
});

app.delete('/delete/:isbn', (req,res) => {
    dao.deleteLibro(req.params.isbn)
        .then((result) =>  {
            if(result)
                res.status(404).json(result);
            else
             res.status(204).end();
        })
        .catch((err) => res.status(500).json({
            errors: [{'param': 'Server', 'msg': err}],
        }));
});


app.listen(port, () =>
    console.log(`Server is listening at http://localhost:${port}`)
);