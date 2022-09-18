"use strict";

const stringa = "Il mio nome e' Bond, James Bond!";
const lettera = "m";

let occorrenze = trovaLetteraEff(stringa, lettera);
console.log(`Numero di occorrenze della lettera '${lettera}' nella stringa "${stringa}": ${occorrenze}`);



/**
 * Funzione che conta quante occorrenze di una singola lettera ci sono in una stringa.
 * @param {string} stringa la stringa nella quale contare le occorrenze;
 * @param {char} lettera la lettera da cercare nella stringa. 
 * @returns il numero di occorrenze della lettera.
 */
function trovaLettera(stringa, lettera) {
    let contaOccorrenze = 0;

    for (let carattere of stringa) {
        if (carattere == lettera)
            contaOccorrenze++;
    }

    return contaOccorrenze;
}

/**
 * Funzione identica alla precedente, ma molto piu' efficiente.
 * @param {string} stringa la stringa nella quale contare le occorrenze;
 * @param {char} lettera la lettera da cercare nella stringa. 
 * @returns il numero di occorrenze della lettera.
 */
function trovaLetteraEff(stringa, lettera) {
    return [...stringa.matchAll(lettera)].length;
}