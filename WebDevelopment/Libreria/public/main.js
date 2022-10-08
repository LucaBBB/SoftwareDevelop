"use strict";

import App from './app.js';


$("#btn-nuovo-libro").kendoButton({
    themeColor: "primary",
    icon: "plus"
});
$("#btn-nuovo-libro").kendoTooltip({
    content: "Nuovo libro"
})



const containerLibri = $("#body-tabella");
const grigliaLibri = $("#griglia-libri");

const app = new App(containerLibri, grigliaLibri);


/**
 * WORK IN PROGRESS
 * 
 * 1) aggiunta funzionalità di modifica di un libro;
 * 2) aggiunta funzionalità di rimozione di un libro;   <--- COMPLETATO ---|
 * 3) aggiunto login all'applicazione;
 * 4) ampliamento del database (gestione autori)
 * 5) ampliamento campi griglie (data inizio lettura - data fine lettura)
 */