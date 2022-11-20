class Libro:

    def __init__(self, isbn, titolo, autore, anno, copie, editore):
        self.isbn = isbn
        self.titolo = titolo
        self.autore = autore
        self.anno = anno
        self.copie = copie
        self.editore = editore

    def __str__(self):
        return f'{self.titolo}, {self.autore}, {self.anno}, {self.isbn}, {self.copie}, {self.editore}'