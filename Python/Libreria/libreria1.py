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


def inizializza_libreria():
    f = open(filepath)
    data = json.load(f)

    for libro in data:
        isbn = libro['isbn']
        titolo = libro['titolo']
        autore = libro['autore']
        anno = libro['anno']
        copie = libro['copie']

        json_to_libro = Libro(isbn, titolo, autore, anno, copie)

        print(f'Letto da JSON il libro: {json_to_libro}')
   





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
    # libro_test = Libro("0001", "Il visconte dimezzato", "Italo Calvino", 1951, 1)
    # print(libro_test)
    #visualizza_libri()
    inizializza_libreria()


print("")
main()
print("")
