"use strict";

import App from './app.js';


//const containerLibri = document.getElementById("body-tabella");

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