import json
import mysql.connector
from mysql.connector import cursor

class Libro:
    def __init__(self, isbn, titolo, autore, anno, copie):
        self.isbn = isbn
        self.titolo = titolo
        self.autore = autore
        self.anno = anno
        self.copie = copie

    def __str__(self):
        return f'"{self.titolo}" di {self.autore}, pubblicato nel {self.anno}, isbn: {self.isbn}, n. copie: {self.copie}'


db = mysql.connector.connect(
    host = "localhost",
    user = "root",
    password = "",
    database = "db_libreria"
)

cursor = db.cursor()
libreria = []


query_insert = "INSERT INTO libri (isbn, titolo, autore, anno, copie) VALUES (%s, %s, %s, %s, %s)"
query_update_copie = "update libri set copie = copie + %s where isbn = %s"
query_select_all = "SELECT * FROM libri"

def get_indice_libro_by_isbn(isbn, list):
    if len(list) == 0:
        return -1
    else:
        for i in range(0, len(list)):
            if libreria[i].isbn == isbn:
                return i
        return -1



def aggiungi_libro():
    print("--- Aggiunta di un libro ---")

    cursor.execute(query_select_all)
    result = cursor.fetchall()

    isbn = input("Inserire l'isbn: ")
    titolo = input("Inserire il titolo: ")
    autore = input("Inserire l'autore: ")
    anno = int(input("Inserire l'anno: "))
    copie = int(input("Inserire il numero di copie: "))

    indice_libro = get_indice_libro_by_isbn(isbn, result)

    if indice_libro == -1:
        cursor.execute(query_insert, (isbn, titolo, autore, anno, copie))
        print("Il nuovo libro è stato aggiunto nella libreria.")
    else:
        cursor.execute(query_update_copie, (copie, isbn))
        print(f'{copie} copie del libro già posseduto sono state aggiunte.')

    print("----------------------------")



# Funzione che stampa le informazioni di tutti i libri (se posseduti), altrimenti un messaggio di errore.
def visualizza_libri():
    print("--- Visualizzazione di tutti i libri posseduti ---")

    cursor.execute(query_select_all)
    result = cursor.fetchall()

    n_libri_posseduti = len(result)

    if n_libri_posseduti == 0:
        print("Nessun libro posseduto")
    else:        
        for row in result:
            libro = Libro(row[0], row[1], row[2], row[3], row[4])
            print(libro)
            libreria.append(libro)

    print("--------------------------------------------------")



def menu():
    print("[0] per terminare, [1] per visualizzare i libri posseduti, [2] per aggiungere un nuovo libro, [3] per rimuovere un libro, [4] per cercare un libro per ISBN: ")


def main():

    menu()
    scelta_utente = int(input())

    while scelta_utente != 0:
        if scelta_utente == 1:
            visualizza_libri()
        elif scelta_utente == 2:
            aggiungi_libro()
        # elif scelta_utente == 3:
        #     rimuovi_libro()
            
        menu()
        scelta_utente = int(input())

    if scelta_utente == 0:
        print("Arrivederci, alla prossima!")


print("")
main()
print("")