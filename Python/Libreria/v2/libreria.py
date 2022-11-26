import mysql.connector
from mysql.connector import cursor

from libro import Libro


db = mysql.connector.connect(
    host = "localhost",
    user = "root",
    password = "",
    database = "db_libreria"
)

cursor = db.cursor()
libreria = []

# Definizione delle query utili.
queries = {
  "query_insert": "INSERT INTO libri (isbn, titolo, autore, anno, copie, editore) VALUES (%s, %s, %s, %s, %s, %s)",
  "query_select_all": "SELECT * FROM libri ORDER BY autore ASC, anno ASC",
  "query_reset_tabella": "DELETE FROM libri"
}

menu_principale = "> Inserire:\n[0] per terminare,\n[1] per visualizzare i libri posseduti,\n[2] per aggiungere un nuovo libro,\n[3] per rimuovere un libro,\n[4] per cercare un libro per parametro,\n[5] per modificare un libro: "
menu_info_libro = "> Inserire:\n[0] per tornare al menu principale,\n[1] ricerca per ISBN,\n[2] ricerca per titolo,\n[3] ricerca per autore,\n[4] ricerca per anno,\n[5] ricerca per editore: "


# Funzione che effettua una query "select all" sul database per ottenere i dati dei libri, 
# serializzarli in un'istanza della classe Libro ed inserirlo nella lista libreria
def inizializza_libreria():
    cursor.execute(queries.get("query_select_all"))
    result = cursor.fetchall()
    for row in result:
        libreria.append(Libro(row[0], row[1], row[2], row[3], row[4], row[5]))


# Funzione che elimina il contenuto della tabella "libri" e salva il contenuto della lista libreria nel database.
def salva_libreria():
    cursor.execute(queries.get("query_reset_tabella"))
    for libro in libreria:
        cursor.execute(queries.get("query_insert"), (libro.isbn, libro.titolo, libro.autore, libro.anno, libro.copie, libro.editore))
        db.commit()


# Funzione di supporto che estrapola la posizione nella lista del libro con l'isbn coincidente con quello passato come parametro, -1 se non trovato.
def get_indici(chiave, valore):
    index_list = []

    for libro in libreria:
        if getattr(libro, chiave) == valore:
            index_list.append(libreria.index(libro))
            
    if len(index_list) > 0:
        return index_list
    return -1

def aggiungi_libro():
    print("--- Aggiunta di un libro ---")

    isbn = input("Inserire l'isbn: ")
    titolo = input("Inserire il titolo: ")
    autore = input("Inserire l'autore: ")
    anno = int(input("Inserire l'anno: "))
    copie = int(input("Inserire il numero di copie: "))
    editore = input("Inserire l'editore: ")

    indice_libro = get_indici("isbn", isbn)

    if indice_libro == -1:
        libreria.append(Libro(isbn, titolo, autore, anno, copie, editore))
        print("Il nuovo libro è stato aggiunto nella libreria.")
    else:
        libreria[indice_libro].copie += copie
        print(f'{copie} copie del libro già posseduto sono state aggiunte, nuovo info del libro: {libreria[indice_libro]}')

    print("----------------------------")
    


def rimuovi_libro():
    print("--- Rimozione di un libro ---")

    isbn = input("Inserire l'isbn: ")
    copie = int(input("Inserire il numero di copie: "))

    indice_libro = get_indici("isbn", isbn)

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
    index = get_indici("isbn", isbn)

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

        print(f'> Editore: {libreria[index].editore}')
        editore_nuovo = input("Inserire l'editore, invio per non modificare il campo: ")


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
        if (editore_nuovo != ""):
            libreria[index].editore = editore_nuovo

        print(f'Info libro modificato: {libreria[index]}')


def info_libro():
    print(menu_info_libro)
    scelta_utente_info = int(input("> "))

    while True:
        match scelta_utente_info:
            case 0:
                return
            case 1:
                info_libro_isbn()
            case 2:
                info_libro_titolo()
            case 3: 
                info_libro_autore()
            case 4: 
                info_libro_anno()
            case 5: 
                info_libro_editore()
        print(menu_info_libro)
        scelta_utente_info = int(input("> "))

def info_libro_isbn():
    isbn = input("> Inserire l'isbn del libro da cercare: ")
    index = get_indici("isbn", isbn)

    print("\n")
    if index == -1:
        print(f'>> Nessun libro con isbn {isbn} posseduto.')
    else:
        for i in index:
            print(f'>> Trovato libro: {libreria[i]}')
    print("\n")

def info_libro_titolo():
    titolo = input("> Inserire il titolo del libro da cercare: ")
    index = get_indici("titolo", titolo)

    print("\n")
    if index == -1:
        print(f'>> Nessun libro con titolo {titolo} posseduto.')
    else:
        for i in index:
            print(f'>> Trovato libro: {libreria[i]}')
    print("\n")

def info_libro_autore():
    autore = input("> Inserire l'autore del libro da cercare: ")
    index = get_indici("autore", autore)

    print("\n")
    if index == -1:
        print(f'>> Nessun libro con autore {autore} posseduto.')
    else:
        for i in index:
            print(f'>> Trovato libro: {libreria[i]}')
    print("\n")

def info_libro_anno():
    anno = input("> Inserire l'anno del libro da cercare: ")
    index = get_indici("anno", int(anno))

    print("\n")
    if index == -1:
        print(f'>> Nessun libro dell\'anno {anno} posseduto.')
    else:
        for i in index:
            print(f'>> Trovato libro: {libreria[i]}')
    print("\n")

def info_libro_editore():
    editore = input("> Inserire l'editore del libro da cercare: ")
    index = get_indici("editore", editore)

    print("\n")
    if index == -1:
        print(f'>> Nessun libro dell\'editore {editore} posseduto.')
    else:
        for i in index:
            print(f'>> Trovato libro: {libreria[i]}')
    print("\n")



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


def exit_point():
    print("\n>> Arrivederci, alla prossima!\n")
    salva_libreria()


def main():
    inizializza_libreria()

    print(menu_principale)
    scelta_utente = int(input("> "))

    while True:
        match scelta_utente:
            case 0:
                exit_point()
                break
            case 1:
                visualizza_libri()
            case 2:
                aggiungi_libro()
            case 3:
                rimuovi_libro()
            case 4:
                info_libro()
            case 5:
                modifica_libro()
            case _:
                print(f'\n>> Nessuna azione disponibile per la scelta {scelta_utente}\n')
        print(menu_principale)
        scelta_utente = int(input())
        


try:
    print("")
    main()
    print("")
except:
    print("\n>> Arrivederci, alla prossima!\n")