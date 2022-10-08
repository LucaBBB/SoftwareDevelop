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

        $("#formNuovoLibro")[0].reset();
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


        let tdUpdate = document.createElement('td');
        var buttonUpdate = document.createElement("button");
        buttonUpdate.setAttribute('class', 'btn btn-outline-success cancelRow');
        let iUpdate = document.createElement('i');
        iUpdate.setAttribute('class', 'bi bi-pencil');
        buttonUpdate.appendChild(iUpdate);
        
        buttonUpdate.addEventListener('click', () => {
            this.wrapperDeleteLibro(libro.isbn);
        });
        tdUpdate.appendChild(buttonUpdate);


        // buttonUpdate.setAttribute('type', 'button');
        // buttonUpdate.setAttribute('data-toggle', 'tooltip');
        // buttonUpdate.setAttribute('data-placement', 'top');
        // buttonUpdate.setAttribute('title', 'Modifica libro');
        

        let tdCancel = document.createElement('td');
        var buttonCancel = document.createElement("button");
        buttonCancel.setAttribute('class', 'btn btn-outline-danger cancelRow');
        let iCancel = document.createElement('i');
        iCancel.setAttribute('class', 'bi bi-trash');
        buttonCancel.appendChild(iCancel);
        buttonCancel.addEventListener('click', () => {
            this.wrapperDeleteLibro(libro.isbn);
        });
        tdCancel.appendChild(buttonCancel);
        


        // button.setAttribute('type', 'button');
        // button.setAttribute('data-toggle', 'tooltip');
        // button.setAttribute('data-placement', 'top');
        // button.setAttribute('title', 'Elimina libro');
       


        tr.appendChild(tdTitolo);
        tr.appendChild(tdAutore);
        tr.appendChild(tdIsbn);
        tr.appendChild(tdCompletato);
        tr.appendChild(tdUpdate);
        tr.appendChild(tdCancel);

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