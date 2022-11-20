class Libro:

    def __init__(self, isbn, titolo, autore, editore, anno, copie):
        self.isbn = isbn
        self.titolo = titolo
        self.autore = autore
        self.editore = editore
        self.anno = anno
        self.copie = copie

    def __str__(self):
        return f'{self.titolo}, {self.autore}, {self.editore}, {self.anno}, {self.isbn}, {self.copie}'