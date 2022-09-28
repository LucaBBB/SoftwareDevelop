import Libro from './libro.js';

class BookManager {
    constructor() {
        this.libri = [];
    }

    async getLibri() {
        let response = await fetch('/libri');
        const libriJson = await response.json();

        if (response.ok) {
            return libriJson;
        } else {
            throw libriJson;
        }
    }
}

export default BookManager;