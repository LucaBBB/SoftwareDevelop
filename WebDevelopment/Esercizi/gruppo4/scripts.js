"use strict";

window.onload = () => {
    //alert("Benvenuto nella libreria!");
    costruisciTabella();
};



$("#salva").click(function () {
    aggiuntaNuovoLibroAllaTabella();
});



/**
 * Funzione che preso un array di oggetti 'libri' costruisce la tabella dei libri.
 */
function costruisciTabella() {
    const libri = [
        {
            titolo: "L'assassinio di Roger Ackroyd",
            autore: "Agatha Christie",
            isbn: "0192837465"
        },
        {
            titolo: "Assassinio sull'Orient Express",
            autore: "Agatha Christie",
            isbn: "0192837466"
        },
        {
            titolo: "Il visconte dimezzato",
            autore: "Italo Calvino",
            isbn: "0192837467"
        },
        {
            titolo: "Il barone rampante",
            autore: "Italo Calvino",
            isbn: "0192837468"
        }
    ]

    let tbody = document.getElementById("body-tabella");

    for (let libro of libri) {
        let tr = document.createElement('tr');

        let tdTitolo = document.createElement('td');
        tdTitolo.innerHTML = libro.titolo;

        let tdAutore = document.createElement('td');
        tdAutore.innerHTML = libro.autore;

        let tdIsbn = document.createElement('td');
        tdIsbn.innerHTML = libro.isbn;

        tr.appendChild(tdTitolo);
        tr.appendChild(tdAutore);
        tr.appendChild(tdIsbn);

        tbody.appendChild(tr);
    }
}


/**
 * Funzione chiamata al 'Salva' del modale, aggiunge un nuovo libro (con i dati inseriti nel form) alla tabella.
 */
function aggiuntaNuovoLibroAllaTabella() {
    let titolo = $("#titolo").val();
    let autore = $("#autore").val();
    let isbn = $("#isbn").val();


    let tr = document.createElement('tr');

    let tdTitolo = document.createElement('td');
    tdTitolo.innerHTML = titolo;

    let tdAutore = document.createElement('td');
    tdAutore.innerHTML = autore;

    let tdIsbn = document.createElement('td');
    tdIsbn.innerHTML = isbn;


    tr.appendChild(tdTitolo);
    tr.appendChild(tdAutore);
    tr.appendChild(tdIsbn);

    document.getElementById("body-tabella").appendChild(tr);
}