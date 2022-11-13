import json


class Libro:
    def __init__(self, isbn, titolo, autore, anno, copie):
        self.isbn = isbn
        self.titolo = titolo
        self.autore = autore
        self.anno = anno
        self.copie = copie

    def __str__(self):
        return f'"{self.titolo}" di {self.autore}, pubblicato nel {self.anno}, isbn: {self.isbn}, n. copie: {self.copie}'


# TODO List:
# 1) Visualizzare tutti i libri;
# 2) Aggiungere un libro o n copie del libro esistente;
# 3) Rimuovere un libro o n copie del libro esistente;
# 4) Ricerca per un qualche criterio.

# Zona variabili
filepath = "C:\\Users\\PC-di-Luca\\Desktop\\SoftwareDevelop\\Python\\Libreria\\dataset.json"
libreria = []


# FUNZIONI DI INPUT/OUTPUT SUL DATASET

# Funzione che legge dal dataset presente su un file JSON i libri che sono già posseduti e va ad inserirli nella lista "libreria" running correntemente.
def inizializza_libreria():
    f = open(filepath)
    data = json.load(f)

    for libro in data:
        isbn = libro['isbn']
        titolo = libro['titolo']
        autore = libro['autore']
        anno = libro['anno']
        copie = libro['copie']
        libreria.append(Libro(isbn, titolo, autore, anno, copie))


def get_indice_libro_by_isbn(isbn):
    for i in range(0, len(libreria)):
        if libreria[i].isbn == isbn:
            return i
    return -1


def aggiungi_libro():
    print("--- Aggiunta di un libro ---")

    isbn = input("Inserire l'isbn: ")
    titolo = input("Inserire il titolo: ")
    autore = input("Inserire l'autore: ")
    anno = int(input("Inserire l'anno: "))
    copie = int(input("Inserire il numero di copie: "))

    indice_libro = get_indice_libro_by_isbn(isbn)

    if indice_libro == -1:
        libreria.append(Libro(isbn, titolo, autore, anno, copie))
        print("Il nuovo libro è stato aggiunto nella libreria.")
    else:
        libreria[indice_libro].copie += copie
        print(f'{copie} copie del libro già posseduto sono state aggiunte, nuovo info del libro: {libreria[indice_libro]}')

    print("----------------------------")
    

# Funzione che stampa le informazioni di tutti i libri (se posseduti), altrimenti un messaggio di errore.
def visualizza_libri():
    print("--- Visualizzazione di tutti i libri posseduti ---")

    n_libri_posseduti = len(libreria)

    if n_libri_posseduti == 0:
        print("Nessun libro posseduto")
    else:
        for i in range(0, n_libri_posseduti):
            print(f'{i+1}) {libreria[i]}')

    print("--------------------------------------------------")


def main():
    inizializza_libreria()

    scelta_utente = int(input("[0] per terminare, [1] per visualizzare i libri posseduti, [2] per aggiungere un nuovo libro: "))
    while scelta_utente != 0:
        if scelta_utente == 1:
            visualizza_libri()
        elif scelta_utente == 2:
            aggiungi_libro()
        scelta_utente = int(input("[0] per terminare, [1] per visualizzare i libri posseduti, [2] per aggiungere un nuovo libro: "))
    if scelta_utente == 0:
        print("Arrivederci, alla prossima!")


print("")
main()
print("")
