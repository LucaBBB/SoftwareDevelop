"use strict";


$(document).ready(function () {
    var bookshelfDataSource = [
        { titolo: "Poirot a Styles Court", autore: "Agatha Christie", anno: 1920, editore: "Mondadori" },
        { titolo: "Aiuto, Poirot!", autore: "Agatha Christie", anno: 1923, editore: "Mondadori" },
        { titolo: "L'assassinio di Roger Ackroyd", autore: "Agatha Christie", anno: 1926, editore: "Mondadori" },
        { titolo: "Il pericolo senza nome", autore: "Agatha Christie", anno: 1932, editore: "Mondadori" },
        { titolo: "Assassinio sull'Orient Express", autore: "Agatha Christie", anno: 1934, editore: "Mondadori" },
        { titolo: "Casino Royale", autore: "Ian Fleming", anno: 1953, editore: "Adelphi" },
        { titolo: "Vivi e lascia morire", autore: "Ian Fleming", anno: 1954, editore: "Adelphi" }
    ];

    $("#grid").kendoGrid({
        dataSource: {
            data: bookshelfDataSource,
            pageSize: 10
        },
        columns: [
            {
                field: "titolo",
                title: "Titolo"
            }, {
                field: "autore",
                title: "Autore"
            }, {
                field: "anno",
                title: "Anno di pubblicazione"
            }, {
                field: "editore",
                title: "Casa editrice"
            }
        ],
        excel: {
            fileName: `libreria_${getDate()}.xlsx`
        },
        groupable: true,
        height: 550,
        pageable: {
            refresh: true,
            pageSizes: true,
            buttonCount: 5
        },
        search: {
            fields: [
                { name: "autore", operator: "contains" },
            ]
        },
        sortable: true,
        toolbar: ["excel", "search"],

    });
});

function getDate() {
    var nowDate = new Date();
    return nowDate.getFullYear() + ''
        + ('0' + (nowDate.getMonth() + 1)).slice(-2) + ''
        + ('0' + nowDate.getDate()).slice(-2);
}