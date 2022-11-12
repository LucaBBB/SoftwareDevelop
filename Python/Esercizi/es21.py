class Libro:
    def __init__(self, titolo, quantita):
        self.titolo = titolo
        self.quantita = quantita

scaffale = [Libro("Il barone rampante", 10), Libro("Il visconte dimezzato", 1), Libro("Il cavaliere inesistente", 4)]
libri_da_comprare = []


def vendi_libri(libro_da_comprare):
    for i in range(0, len(scaffale)):
        if scaffale[i].titolo == libro_da_comprare:
            if scaffale[i].quantita == 1:
                