"use strict";

const voti = [20, 18, 30, 26, 19];
let votiModificati = eliminaVotiBassiEff(2);

console.log(voti + " con media di " + calcolaMediaVotiEff(voti));
console.log(votiModificati + " con media di " + calcolaMediaVotiEff(votiModificati));


/**
 * Funzione che itera su una copia dell'array originaria e va ad eliminare gli n voti piu' bassi.
 * @param {integer} quantiEliminare il numero di voti piu' bassi da eliminare.
 * @returns l'array con i voti piu' alti.
 */
function eliminaVotiBassi(quantiEliminare) {
    var votiModificati = voti.slice();

    for (let i = 0; i < quantiEliminare; i++) {
        let posMinore = 0;
        let minore = 31;
        let j = 0;

        for (let voto of votiModificati) {
            if (voto < minore) {
                minore = voto;
                posMinore = j;
            }
            j++;
        }

        votiModificati.splice(posMinore, 1);

        let duale = 30 - (min - 18);
        votiModificati.push(duale);
    }

    return votiModificati;
}

/**
 * Funzione come la precedente, ma piu' efficiente perche' usa Math.min() e indexOf().
 * @param {integer} quantiEliminare il numero di voti piu' bassi da eliminare.
 * @returns l'array con i voti piu' alti.
 */
function eliminaVotiBassiEff(quantiEliminare) {
    var votiModificati = voti.slice();

    for (let i = 0; i < quantiEliminare; i++) {
        let min = Math.min(...votiModificati);
        let posMin = votiModificati.indexOf(min);

        votiModificati.splice(posMin, 1);

        let duale = 30 - (min - 18);
        votiModificati.push(duale);
    }

    return votiModificati;
}

/**
 * Funzione come le precedenti, ma ancora piu' efficiente perche' codice ridotto all'osso.
 * @param {integer} quantiEliminare il numero di voti piu' bassi da eliminare.
 * @returns l'array con i voti piu' alti.
 */
function eliminaVotiBassiSuperEff(quantiEliminare) {
    var votiModificati = voti.slice();

    for (let i = 0; i < quantiEliminare; i++) {
        votiModificati.splice(                      // eliminiamo l'elemento all'indice del valore minore
            votiModificati.indexOf(                 // prendiamo l'indice del valore minore
                Math.min(...votiModificati)), 1);   // cerchiamo il valore minore

        votiModificati.push(30 - (min - 18));
    }

    return votiModificati;
}

/**
 * Funzione che calcola la media dei valori presenti nell'array voti.
 * @param {Array[integer]} i voti sui quali produrre la media.
 * @returns la media dei voti.
 */
function calcolaMediaVoti(voti) {
    let somma = 0;
    let media = 0;

    for (let voto of voti) {
        somma += voto;
    }
    media = somma / voti.length;

    return media
}

/**
 * Funzione come quella precedente, ma piu' efficiente perche' usa reduce().
 * @param {Array[integer]} voti i voti sui quali produrre la media.
 * @returns la media dei voti.
 */
function calcolaMediaVotiEff(voti) {
    let somma = voti.reduce(
        (valoreSommaPrecedente, valoreSommaAttuale) =>
            valoreSommaPrecedente + valoreSommaAttuale, 0);     // 0 e' il valore iniziale della sommatoria

    return somma / voti.length;
}