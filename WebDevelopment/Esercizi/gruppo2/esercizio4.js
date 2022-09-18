"use strict";

let stringa = "{([()()])}";
let isNidificazioneValida = isValid(stringa);
console.log(isNidificazioneValida);



/**
 * Funzione che prende in input una stringa con una nidificazione di parentesi e verifica se e' valida.
 * @param {*} stringa la nidificazione di parentesi.
 * @returns true se e' una nificazione valida, false altrimenti.
 */
function isValid(stringa) {
    let array = [];

    for (let i = 0; i < stringa.length; i++) {
        if (stringa[i] == "{" || stringa[i] == "[" || stringa[i] == "(")
            array.push(stringa[i]);
        else if (stringa[i] == "}" && array[array.length - 1] == "{")
            array.splice(array.length - 1, 1);
        else if (stringa[i] == "]" && array[array.length - 1] == "[")
            array.splice(array.length - 1, 1);
        else if (stringa[i] == ")" && array[array.length - 1] == "(")
            array.splice(array.length - 1, 1);
        else
            return false;
    }

    return array.length == 0;
}