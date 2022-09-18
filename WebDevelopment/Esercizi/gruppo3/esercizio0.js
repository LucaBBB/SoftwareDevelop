"use strict";

let array = ["primavera", "estate", "autunno", "inverno", "re", "regina", "presidente", "is"];
console.table(array);
riscaldamento(array);
console.table(array);

function riscaldamento(array) {
    let i = 0;
    for (const stringa of array) {
        if (stringa.length <= 2)
            array[i] = "";
        else
            array[i] = stringa.substring(0, 2) + stringa.substring(stringa.length - 2);
        i++;
    }
}