"use strict";
let arrayDiStringhe = ["re", "regina", "principe", "conte", "duca", "sovrano", "jazzista"];
let stringaPiuLunga = cercaPiuLungaForEach(arrayDiStringhe);

console.log(`La stringa piu' lunga contenuta in ${arrayDiStringhe} e' ${stringaPiuLunga}.`);



/**
 * Funzione che cerca qual e' la stringa piu lunga.
 * @param {Array[string]} arrayDiStringhe array contenente delle stringhe.
 * @returns la prima stringa trovata piu' lunga.
 */
function cercaPiuLunga(arrayDiStringhe) {
    let stringaPiuLunga = "";

    for (let stringa of arrayDiStringhe) {
        if (stringa.length > lunghStringaPiuLunga.length) {
            stringaPiuLunga = stringa;
        }
    }

    return stringaPiuLunga;
}

/**
 * Funzione come la precedente, ma piu' efficiente perche' usa .forEach().
 * @param {Array[string]} arrayDiStringhe array contenente delle stringhe.
 * @returns la prima stringa trovata piu' lunga.
 */
function cercaPiuLungaForEach(arrayDiStringhe) {
    let stringaPiuLunga = "";

    arrayDiStringhe.forEach(parola => {
        if (parola.length > lunghStringaPiuLunga.length)
            stringaPiuLunga = parola;
    });

    return stringaPiuLunga;
}