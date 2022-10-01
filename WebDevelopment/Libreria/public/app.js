import BookManager from './book-manager.js';
import Libro from './libro.js';

class App {
    constructor(containerLibri, grigliaLibri) {
        this.containerLibri = containerLibri;
        this.grigliaLibri = grigliaLibri;
        this.libreria = [];

        this.bookManager = new BookManager();

        this.bookManager.getLibri().then(libri => {
            this.mostraLibri(libri);
            this.setVariabileLibreria(libri);
        });

        $("#salva").on('click', this.onFormSubmitted);
    }

    onFormSubmitted = (event) => {
        event.preventDefault();

        let libro = new Libro($("#titolo").val(), $("#autore").val(), $("#isbn").val(), $('#completato').is(":checked"));            

        this.bookManager.addLibro(libro).then(() => {
            this.bookManager.getLibri().then(libri => {
                this.mostraLibri(libri);
                this.setVariabileLibreria(libri);
            });
        })
    }

    /**
     * Metodo che per ogni libro salvato su db costruisce una row e la appende nella tabella.
     * @param {array[libri]} libri i libri salvati sul db.
     */
    mostraLibri(libri) {
        console.log(libri);

        this.grigliaLibri.kendoGrid({
            dataSource: libri,
            filterable: true,
            sortable: true,
            columns: [
                { field: "titolo", title: "Titolo" },
                { field: "autore", title: "Autore" },
                { field: "isbn", title: "ISBN" },
                { template: '<input type="checkbox" #= completato ? \'checked="checked"\' : "" # class="chkbx k-checkbox k-checkbox-md k-rounded-md" />', title: "Completato", width: 110, attributes: { class: "k-text-center" } }
            ]
        });
    }

    setVariabileLibreria(libri) {
        this.libreria = libri;
    }

    /**
     * Metodo che per ogni libro salvato nel db costruisce la singola row.
     * @param {libro} libro uno dei libri salvati sul db.
     * @returns l'elemento di tipo tr.
     */
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