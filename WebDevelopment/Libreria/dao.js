"use strict";

const sqlite = require('sqlite3');

const db = new sqlite.Database('./database.db', (err) => {
    console.error(err);
});

exports.getTuttiLibri = function () {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM libri';

        db.all(query, (err, rows) => {
            if (err) {
                reject(err);
                return;
            }

            resolve(rows);
        })
    });
};

exports.addNuovoLibro = function (nuovoLibro) {
    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO libri VALUES (?, ?, ?, ?)';

        db.run(query, [nuovoLibro.titolo, nuovoLibro.autore, nuovoLibro.isbn, nuovoLibro.completato], function (err) {
            if (err) {
                reject(err);
                return;
            } else {
                resolve(this.lastID);
            }
        });
    });
}