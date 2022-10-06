"use strict";

/**
 * Funzione chiamata al 'Salva' del modale, aggiunge un nuovo libro (con i dati inseriti nel form) alla tabella.
 */
function aggiuntaNuovoLibroAllaTabella() {
    let libro = {
        titolo: $("#titolo").val(),
        autore: $("#autore").val(),
        isbn: $("#isbn").val(),
        completato: $('#completato').is(":checked")
    }
    
    let tbody = document.getElementById("body-tabella");
    let tr = costruisciRiga(libro);
    tbody.appendChild(tr);

    pulisciForm("#formNuovoLibro");
}

function pulisciForm(idForm) {
    $(':input', idForm)
        .not(':button, :submit, :reset, :hidden')
        .val('')
        .prop('checked', false)
        .prop('selected', false);
}