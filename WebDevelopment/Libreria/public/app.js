import BookManager from './book-manager.js';
import Libro from './libro.js';

class App {
    constructor(containerLibri, grigliaLibri) {
        $("#tabella").kendoGrid({
            height: 550,
            groupable: true,
            sortable: true
        });
        this.containerLibri = containerLibri;
        this.grigliaLibri = grigliaLibri;
        this.libreria = [];

        this.tbody = $("#table-body");

        this.bookManager = new BookManager();

        this.wrapperShowLibri();

        $("#salva").on('click', this.onFormSubmitted);
        $("#aggiorna").on('click', this.onFormSubmittedUpd);
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
            this.wrapperShowLibri();
        })

        $("#formNuovoLibro")[0].reset();
    }

    onFormSubmittedUpd = (event) => {
        event.preventDefault();

        let libro = new Libro(
            $("#titolo").val(),
            $("#autore").val(),
            $("#isbn").val(),
            $('#completato').is(":checked")
        );
    }

    /**
     * Metodo che per ogni libro salvato su db costruisce una row e la appende nella tabella.
     * @param {array[libri]} libri i libri salvati sul db.
     */
    mostraLibri(libri) {
        let tbody = document.getElementById("table-body");
        let index = 0;
        for (let libro of libri) {
            let tr = this.costruisciRiga(libro, index);
            tbody.appendChild(tr);
            index++;
        }

        
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
    costruisciRiga(libro, index) {
        let tr = document.createElement('tr');


        let tdTitolo = document.createElement('td');
        tdTitolo.setAttribute("style", "vertical-align: middle;");
        tdTitolo.innerHTML = libro.titolo;


        let tdAutore = document.createElement('td');
        tdAutore.setAttribute("style", "vertical-align: middle;");
        tdAutore.innerHTML = libro.autore;


        let tdIsbn = document.createElement('td');
        tdIsbn.setAttribute("style", "vertical-align: middle;");
        tdIsbn.innerHTML = libro.isbn;


        let tdCompletato = document.createElement('td');
        tdCompletato.setAttribute("style", "vertical-align: middle;");
        let checkbox = document.createElement('input');
        checkbox.setAttribute("type", "checkbox");
        checkbox.checked = libro.completato;
        tdCompletato.appendChild(checkbox);

        let tdEdit = document.createElement('td');
        tdEdit.setAttribute('class', 'edit-buttons')
        //let tdUpdate = document.createElement('td');
        var buttonUpdate = document.createElement("button");
        buttonUpdate.setAttribute('class', 'btn btn-outline-success cancelRow');
        let iUpdate = document.createElement('i');
        iUpdate.setAttribute('class', 'bi bi-pencil');
        buttonUpdate.setAttribute('data-bs-toggle', 'modal');
        buttonUpdate.setAttribute('data-bs-target', '#updateModal');
        buttonUpdate.appendChild(iUpdate);
        
        buttonUpdate.addEventListener('click', () => {
            this.wrapperUpdateLibro(libro);
        });


        var buttonCancel = document.createElement("button");
        buttonCancel.setAttribute('class', 'btn btn-outline-danger cancelRow');
        let iCancel = document.createElement('i');
        iCancel.setAttribute('class', 'bi bi-trash');
        buttonCancel.appendChild(iCancel);
        buttonCancel.addEventListener('click', () => {
            this.wrapperDeleteLibro(libro.isbn);
        });

        tdEdit.appendChild(buttonUpdate);
        tdEdit.appendChild(buttonCancel);       


        tr.appendChild(tdTitolo);
        tr.appendChild(tdAutore);
        tr.appendChild(tdIsbn);
        tr.appendChild(tdCompletato);
        tr.appendChild(tdEdit);

        return tr;
    }

    /**
     * Metodo estratto per comodità.
     * Effettua la chiamata al servizio che provvede ad eliminare un libro.
     * 
     * @param {*} isbn l'isbn del libro che si vuole eliminare.
     */
    wrapperDeleteLibro(isbn) {
        this.bookManager.deleteLibro(isbn)
            .then(() => {
                this.wrapperShowLibri();
            })
            .catch((err) => console.err(err));
    }

    wrapperUpdateLibro(vecchioLibro) {
        
    }

    /**
     * Metodo comune in più parti del codice, quindi estratto per evitare duplicazioni.
     * Effettua la chiamata al servizio che va a prendere i dati da db e a costruire la griglia.
     */
    wrapperShowLibri() {
        this.bookManager.getLibri().then(libri => {
            this.tbody.empty();
            this.mostraLibri(libri);
        });
    }
}

export default App;