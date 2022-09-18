"use strict";

const stringa = "Il mio nome e' Bond, James Bond!";
const lettera = "m";

let occorrenze = trovaLetteraEff(stringa, lettera);
console.log(`Numero di occorrenze della lettera '${lettera}' nella stringa "${stringa}": ${occorrenze}`);


function trovaLettera(stringa, lettera) {
    let contaOccorrenze = 0;

    for (let carattere of stringa) {
        if (carattere == lettera)
            contaOccorrenze++;
    }

    return contaOccorrenze;
}

function trovaLetteraEff(stringa, lettera) {
    return [...stringa.matchAll(lettera)].length;
}