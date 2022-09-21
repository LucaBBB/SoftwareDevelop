"use strict";

let readlineSync = require('readline-sync');

let arrayDiTasks = [];

main();

function main() {
    menu();
    let opzione = readlineSync.questionInt("Inserire il valore per l'operazione desiderata: ");
    while (opzione < 5) {
        switch (opzione) {
            case 1:
                aggiungiNuovoTask();
                break;

            case 2:
                rimuoviTask();
                break;

            case 3:
                rimuoviTaskPerData();
                break;

            case 4:
                mostraTuttiTask();
                break;
        }
        menu();
        opzione = readlineSync.questionInt("Inserire il valore per l'operazione desiderata: ");
    }
    console.log("Arrivederci!");
}

function menu() {
    console.log("Digitare 1 per inserire un nuovo task");
    console.log("Digitare 2 per rimuovere un task");
    onsole.log("Digitare 3 per rimuovere un task per data");
    console.log("Digitare 4 per visualizzare tutti i task");
    console.log("Digitare 5 per chiudere il programma");
}

function aggiungiNuovoTask() {
    let descrizione = readlineSync.question("Inserire la descrizione del task: ");
    while (descrizione === "") {
        descrizione = readlineSync.question("Inserire la descrizione del task: ");
    }

    let importante = readlineSync.keyInYN("Importante?");

    let privato = readlineSync.keyInYN("Privato?");

    let data = new Date(readlineSync.question("Inserire la data di scadenza (aaaa-mm-gg): "));

    let nuovoTask = {
        descrizione: descrizione,
        importante: importante,
        privato: privato,
        data: data
    };

    arrayDiTasks.push(nuovoTask);
    arrayDiTasks.sort((a, b) => (a.descrizione > b.descrizione) ? 1 : ((b.descrizione > a.descrizione) ? -1 : 0));
}

function rimuoviTask() {
    let descrizione = readlineSync.question("Inserire la descrizione dei tasks da rimuovere: ");

    let daEliminare = [];
    for (let task of arrayDiTasks) {
        if (task.descrizione === descrizione)
            daEliminare.push(task);
    }
    for (let taskDaEliminare of daEliminare) {
        arrayDiTasks.splice(arrayDiTasks.indexOf(taskDaEliminare), 1);
    }
}

function rimuoviTaskPerData() {
    let data = new Date(readlineSync.question("Inserire la data dei tasks da rimuovere: "));

    let daEliminare = [];
    for (let task of arrayDiTasks) {
        if (task.data === data)
            daEliminare.push(task);
    }
    for (let taskDaEliminare of daEliminare) {
        arrayDiTasks.splice(arrayDiTasks.indexOf(taskDaEliminare), 1);
    }
}

function mostraTuttiTask() {
    for (let task of arrayDiTasks) {
        console.log(task);
    }
}