"use strict";

const listaCorsiString = "Metodologie di programmazione per il Web, Reti 1, Paradigmi di programmazione, Sistemi operativi, Basi di dati e sistemi informativi";

let listaCorsi = listaCorsiString.split(",");
let listaAcronimiCorsi = [];

for (let i = 0; i < listaCorsi.length; i++) {
    listaCorsi[i] = listaCorsi[i].trim();
    let corso = listaCorsi[i].split(" ");
    listaAcronimiCorsi.push("");
    corso.forEach(parola => {
        listaAcronimiCorsi[i] += parola.substring(0, 1).toUpperCase();
    });
}


console.log(listaCorsi);
console.log(listaAcronimiCorsi);
console.log(listaAcronimiCorsi.sort());