import BookManager from './book-manager.js';

class App {
    constructor(containerLibri) {
        this.containerLibri = containerLibri;

        this.bookManager = new BookManager();

        this.bookManager.getLibri().then(libri => {
            this.mostraLibri(libri);
        });
    }

    mostraLibri(libri) {
        for (let libro of libri) {
            let tr = this.costruisciRiga(libro);
            this.containerLibri.appendChild(tr);
        }
    }

    costruisciRiga(libro) {
        let tr = document.createElement('tr');

        let tdTitolo = document.createElement('td');
        tdTitolo.innerHTML = libro.titolo;

        let tdAutore = document.createElement('td');
        tdAutore.innerHTML = libro.autore;

        let tdIsbn = document.createElement('td');
        tdIsbn.innerHTML = libro.isbn;

        let tdCompletato = document.createElement('td');
        let checkbox = document.createElement('input');
        checkbox.setAttribute("type", "checkbox");
        checkbox.checked = libro.completato;
        tdCompletato.appendChild(checkbox);

        tr.appendChild(tdTitolo);
        tr.appendChild(tdAutore);
        tr.appendChild(tdIsbn);
        tr.appendChild(tdCompletato);

        return tr;
    }


}

export default App;