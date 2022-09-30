"use strict";

import App from './app.js';


//const containerLibri = document.getElementById("body-tabella");
const containerLibri = $("#body-tabella");
const grigliaLibri = $("#griglia-libri");

const app = new App(containerLibri, grigliaLibri);