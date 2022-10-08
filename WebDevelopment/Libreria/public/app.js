import BookManager from './book-manager.js';
import Libro from './libro.js';

class App {
    constructor(containerLibri, grigliaLibri) {
        this.containerLibri = containerLibri;
        this.grigliaLibri = grigliaLibri;
        this.libreria = [];

        this.tbody = $("#table-body");

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
            this.wrapperShowLibri();
        })
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

        let tdCancel = document.createElement('td');
        var button = document.createElement("button");
        button.setAttribute('class', 'btn btn-default cancelRow');
        button.id = "cancel" + index;
        button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                            </svg>`;
        button.addEventListener('click', () => {
            this.bookManager.deleteLibro(libro.isbn)
                .then(() => {
                    this.wrapperShowLibri();
                })
                .catch((err) => console.err(err));
        });
        tdCancel.appendChild(button);


        tr.appendChild(tdTitolo);
        tr.appendChild(tdAutore);
        tr.appendChild(tdIsbn);
        tr.appendChild(tdCompletato);
        tr.appendChild(tdCancel);

        return tr;
    }
}

export default App;