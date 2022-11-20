import mysql.connector
from mysql.connector import cursor

from libro import Libro

# class Libro:
#     def __init__(self, isbn, titolo, autore, anno, copie):
#         self.isbn = isbn
#         self.titolo = titolo
#         self.autore = autore
#         self.anno = anno
#         self.copie = copie

#     def __str__(self):
#         return f'{self.titolo}, {self.autore}, {self.anno}, {self.isbn}, {self.copie}'


db = mysql.connector.connect(
    host = "localhost",
    user = "root",
    password = "",
    database = "db_libreria"
)

cursor = db.cursor()
libreria = []

# Definizione delle query utili.
query_insert = "INSERT INTO libri (isbn, titolo, autore, anno, copie) VALUES (%s, %s, %s, %s, %s)"
query_update_copie = "update libri set copie = copie + %s where isbn = %s"
query_select_all = "SELECT * FROM libri ORDER BY autore ASC, anno ASC"
query_reset_tabella = "DELETE FROM libri"


def inizializza_libreria():
    cursor.execute(query_select_all)
    result = cursor.fetchall()
    for row in result:
        libro = Libro(row[0], row[1], row[2], row[3], row[4])
        libreria.append(libro)


def salva_libreria():
    cursor.execute(query_reset_tabella)
    for libro in libreria:
        cursor.execute(query_insert, (libro.isbn, libro.titolo, libro.autore, libro.anno, libro.copie))
        db.commit()
        #print(f'{cursor.rowcount} record inseriti')



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


def modifica_libro():
    isbn = input("Inserire il codice isbn del libro da modificare: ")
    index = get_indice_libro_by_isbn(isbn)
    if index == -1:
        print(f'Nessun libro con isbn {isbn} posseduto.')
    else:
        print(f'> Isbn: {libreria[index].isbn}')
        isbn_nuovo = input("Inserire l'isbn, invio per non modificare il campo: ")
        print(f'> Titolo: {libreria[index].titolo}')
        titolo_nuovo = input("Inserire il titolo, invio per non modificare il campo: ")
        print(f'> Autore: {libreria[index].autore}')
        autore_nuovo = input("Inserire l'autore, invio per non modificare il campo: ")
        print(f'> Anno: {libreria[index].anno}')
        anno_nuovo = input("Inserire l'anno, invio per non modificare il campo: ")
        print(f'> Numero copie: {libreria[index].copie}')
        copie_nuovo = input("Inserire il numero di copie, invio per non modificare il campo: ")

        if (isbn_nuovo != ""):
            libreria[index].isbn = isbn_nuovo
        if (titolo_nuovo != ""):
            libreria[index].titolo = titolo_nuovo
        if (autore_nuovo != ""):
            libreria[index].autore = autore_nuovo
        if (anno_nuovo != ""):
            libreria[index].anno = int(anno_nuovo)
        if (copie_nuovo != ""):
            libreria[index].copie = int(copie_nuovo)

        print(f'Info libro modificato: {libreria[index]}')




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
    print("[0] per terminare, [1] per visualizzare i libri posseduti, [2] per aggiungere un nuovo libro, [3] per rimuovere un libro, [4] per cercare un libro per ISBN, [5] per modificare un libro: ")



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
        elif scelta_utente == 4:
            info_libro_isbn()
        elif scelta_utente == 5:
            modifica_libro()
            
        menu()
        scelta_utente = int(input())

    if scelta_utente == 0:
        print("Arrivederci, alla prossima!")
        salva_libreria()


try:
    print("")
    main()
    print("")
except:
    print("Arrivederci, alla prossima!")