"use strict";

function anagramma(stringa1, stringa2) {
    let arrStringa1 = Array.from(stringa1);

    for (let i = 0; i < stringa2.length; i++) {
        let posLettera = arrStringa1.indexOf(stringa2[i]);
        if (posLettera != -1) 
            arrStringa1.splice(posLettera, 1);
        else
            return false;
    }

    return arrStringa1.length == 0;
}

const stringa1 = "notizia";
const stringa2 = "tiziano";

let isAnagramma = anagramma(stringa1.toLowerCase(), stringa2.toLowerCase());

console.log(`${stringa1} e' anagramma di ${stringa2}? ${isAnagramma}`);