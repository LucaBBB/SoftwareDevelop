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
            isbn: "0192837465",
            completato: true
        },
        {
            titolo: "Assassinio sull'Orient Express",
            autore: "Agatha Christie",
            isbn: "0192837466",
            completato: true
        },
        {
            titolo: "Il sentiero dei nidi di ragno",
            autore: "Italo Calvino",
            isbn: "0192837467",
            completato: false
        },
        {
            titolo: "Il visconte dimezzato",
            autore: "Italo Calvino",
            isbn: "0192837468",
            completato: true
        },
        {
            titolo: "Il barone rampante",
            autore: "Italo Calvino",
            isbn: "0192837469",
            completato: true
        }
    ]

    let tbody = document.getElementById("body-tabella");

    for (let libro of libri) {
        let tr = costruisciRiga(libro);
        tbody.appendChild(tr);
    }
}


/**
 * Funzione chiamata al 'Salva' del modale, aggiunge un nuovo libro (con i dati inseriti nel form) alla tabella.
 */
function aggiuntaNuovoLibroAllaTabella() {
<<<<<<< HEAD
    let titolo = $("#titolo").val();
    let autore = $("#autore").val();
    let isbn = $("#isbn").val();
    let completato = false;
    if ($("#completato").is(":checked"))
        completato = true;
=======
    let libro = {
        titolo: $("#titolo").val(),
        autore: $("#autore").val(),
        isbn: $("#isbn").val(),
        completato: $('#completato').is(":checked")
    }
    
    let tbody = document.getElementById("body-tabella");
    let tr = costruisciRiga(libro);
    tbody.appendChild(tr);
>>>>>>> fbe26a20ec050a7b86f0383ef7586ab20b75b8a0

    pulisciForm("#formNuovoLibro");
}

function costruisciRiga(libro) {
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
<<<<<<< HEAD
    checkbox.checked = completato;
=======
    checkbox.checked = libro.completato;
>>>>>>> fbe26a20ec050a7b86f0383ef7586ab20b75b8a0
    tdCompletato.appendChild(checkbox);

    tr.appendChild(tdTitolo);
    tr.appendChild(tdAutore);
    tr.appendChild(tdIsbn);
    tr.appendChild(tdCompletato);

    return tr;
}

function pulisciForm(idForm) {
    $(':input', idForm)
        .not(':button, :submit, :reset, :hidden')
        .val('')
        .prop('checked', false)
        .prop('selected', false);
}