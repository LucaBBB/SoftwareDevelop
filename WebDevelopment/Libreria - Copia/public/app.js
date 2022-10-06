import BookManager from './book-manager.js';
import Libro from './libro.js';

class App {
    constructor(containerLibri, grigliaLibri) {
        this.containerLibri = containerLibri;
        this.grigliaLibri = grigliaLibri;
        this.libreria = [];

        this.bookManager = new BookManager();

        this.wrapperShowLibri();

        $("#salva").on('click', this.onFormSubmitted);
    }

    /**
     * Funzione che viene eseguita nel momento in cui viene premuto il tasto di salvataggio nel modale di aggiunta di un nuovo libro.
     * @param {*} event 
     */
    onFormSubmitted = (event) => {
        event.preventDefault();

        let libro = new Libro(
            $("#titolo").val(),
            $("#autore").val(),
            $("#isbn").val(),
            $('#completato').is(":checked")
        );

        this.bookManager.addLibro(libro).then(() => {
            this.grigliaLibri.empty();
            this.wrapperShowLibri();
        })
    }

    /**
     * Metodo comune in più parti del codice, quindi estratto per evitare duplicazioni.
     * Effettua la chiamata al servizio che va a prendere i dati da db e a costruire la griglia.
     */
    wrapperShowLibri() {
        this.bookManager.getLibri().then(libri => {
            this.mostraLibri(libri);
        });
    }

    /**
     * Metodo che per ogni libro salvato su db costruisce una row e la appende nella tabella.
     * @param {array[libri]} libri i libri salvati sul db.
     */
    mostraLibri(libri) {
        this.grigliaLibri.kendoGrid({
            dataSource: {
                data: libri,
                pageSize: 10
            },
            columnMenu: true,
            groupable: true,
            pageable: {
                alwaysVisible: true,
                    pageSizes: [10, 20, 100]
            },
            sortable: true,
            resizable: true,
            toolbar: ["excel", "search"],
            excel: {
                fileName: `libreria_${this.getData()}.xlsx`
            },
            columns: [
                { field: "titolo", title: "Titolo" },
                { field: "autore", title: "Autore" },
                { field: "isbn", title: "ISBN" },
                { template: '<input type="checkbox" #= completato ? \'checked="checked"\' : "" # class="chkbx k-checkbox k-checkbox-md k-rounded-md" />', title: "Completato", width: 110, attributes: { class: "k-text-center" } }
            ]
        });
    }

    /**
     * Metodo che restituisce la data da applicare al nome del file da esportare.
     * @returns la concatenazione sotto forma di stringa dell'anno, del mese e del giorno attuali intervallati dal segno 'meno'.
     */
    getData() {
        const data = new Date();
        return `${data.getFullYear()}-${data.getMonth()}-${data.getDay()}`;
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