"use strict";
let arrayDiStringhe = ["re", "regina", "principe", "conte", "duca", "sovrano", "jazzista"];
let stringaPiuLunga = cercaPiuLungaForEach(arrayDiStringhe);

console.log(`La stringa piu' lunga contenuta in ${arrayDiStringhe} e' ${stringaPiuLunga}.`);

function cercaPiuLunga(arrayDiStringhe) {
    let stringaPiuLunga = "";

    for (let stringa of arrayDiStringhe) {
        if (stringa.length > lunghStringaPiuLunga.length) {
            stringaPiuLunga = stringa;
        }
    }

    return stringaPiuLunga;
}

function cercaPiuLungaForEach(arrayDiStringhe) {
    let stringaPiuLunga = "";

    arrayDiStringhe.forEach(parola => {
        if (parola.length > lunghStringaPiuLunga.length)
            stringaPiuLunga = parola;
    });

    return stringaPiuLunga;
}