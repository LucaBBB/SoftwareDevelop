import Libro from './libro.js';

class BookManager {
    constructor() {
        this.libri = [];
    }

    /**
     * Funzione di GET di tutti i libri.
     * @returns 
     */
    async getLibri() {
        let response = await fetch('/libri');
        const libriJson = await response.json();

        if (response.ok) {
            return libriJson;
        } else {
            throw libriJson;
        }
    }

    /**
     * Funzione di POST di un nuovo libro.
     * @param {Libro} libro il nuovo libro da aggiungere nel db.
     * @returns 
     */
    async addLibro(libro) {
        let response = await fetch('/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(libro), // stringify removes undefined fields
        });
        if(response.ok) {
            return;
        }
        else {
            try {
                const errDetail = await response.json();
                throw errDetail.errors;
            }
            catch(err) {
                if(Array.isArray(err)) {
                    let errors = '';
                    err.forEach((e, i) => errors += `${i}. ${e.msg} for '${e.param}', `);
                    throw `Error: ${errors}`;
                }
                else
                    throw 'Error: cannot parse server response';
            }
        }
    }

    /**
     * Funzione di DELETE di un libro.
     * @param {string} isbn l'isbn corrispondente al libro da eliminare dal db.
     * @returns 
     */
    async deleteLibro(isbn) {
        let response = await fetch(`/delete/${isbn}`, {
            method: 'DELETE',
        });
        if(response.ok) {
            return;
        }
        else {
            try {
                const errDetail = await response.json();
                throw errDetail.errors;
            }
            catch(err) {
                if(Array.isArray(err)) {
                    let errors = '';
                    err.forEach((e, i) => errors += `${i}. ${e.msg} for '${e.param}', `);
                    throw `Error: ${errors}`;
                }
                else
                    throw 'Error: cannot parse server response';
            }
        }
    }
}

export default BookManager;