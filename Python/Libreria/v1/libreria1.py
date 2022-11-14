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
# 1) Visualizzare tutti i libri;                                            OK
# 2) Aggiungere un libro o n copie del libro esistente;                     OK
# 3) Rimuovere un libro o n copie del libro esistente;                      OK
# 4) Ricerca per un qualche criterio.                                       ISBN(OK)

# Zona variabili
filepath = "C:\\Users\\PC-di-Luca\\Desktop\\SoftwareDevelop\\Python\\Libreria\\dataset.json"
libreria = []

# ------------------------------------
# FUNZIONI DI INPUT/OUTPUT SUL DATASET
# ------------------------------------

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

# Funzione che scrive sul dataset al termine dell'esecuzione del programma.
def salva_libreria():
    with open(filepath, "w") as file:
        json.dump([ob.__dict__ for ob in libreria], file)

# Funzione di supporto che estrapola la posizione nella lista del libro con l'isbn coincidente con quello passato come parametro, -1 se non trovato.
def get_indice_libro_by_isbn(isbn):
    for i in range(0, len(libreria)):
        if libreria[i].isbn == isbn:
            return i
    return -1
# ------------------------------------


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
    

def rimuovi_libro():
    print("--- Rimozione di un libro ---")

    isbn = input("Inserire l'isbn: ")
    copie = int(input("Inserire il numero di copie: "))

    indice_libro = get_indice_libro_by_isbn(isbn)

    if indice_libro == -1:
        print(f'Il libro con isbn {isbn} non è presente in libreria.')
    else:
        if libreria[indice_libro].copie == 1 or (libreria[indice_libro].copie - copie <= 0):
            libreria.pop(indice_libro)
            print(f'Libro con isbn {isbn} è stato rimosso.')
        else:
            libreria[indice_libro].copie -= copie
            print(f'{copie} copie del libro già posseduto sono state rimosse, nuovo info del libro: {libreria[indice_libro]}')

    print("----------------------------")

def info_libro_isbn():
    isbn = print("Inserire l'isbn del libro da cercare: ")
    index = get_indice_libro_by_isbn(isbn)
    if index == -1:
        print(f'Nessun libro con isbn {isbn} posseduto.')
    else:
        print(f'Trovato libro: {libreria[index]}')

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


def menu():
    print("[0] per terminare, [1] per visualizzare i libri posseduti, [2] per aggiungere un nuovo libro, [3] per rimuovere un libro, [4] per cercare un libro per ISBN: ")

def main():
    inizializza_libreria()

    menu()
    scelta_utente = int(input())

    while scelta_utente != 0:
        if scelta_utente == 1:
            visualizza_libri()
        elif scelta_utente == 2:
            aggiungi_libro()
        elif scelta_utente == 3:
            rimuovi_libro()
            
        menu()
        scelta_utente = int(input())

    if scelta_utente == 0:
        print("Arrivederci, alla prossima!")
        salva_libreria()


print("")
main()
print("")
