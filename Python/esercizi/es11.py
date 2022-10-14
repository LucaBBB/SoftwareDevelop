# Scrivi una funzione che data in ingresso una lista A contenente n parole, restituisca in output una lista B di interi che rappresentano la lunghezza delle parole contenute in A.

def initListaParole():
    lista = []
    parola = input("Inserire una parola: ")
    while parola != "":
        lista.append(parola)
        parola = input("Inserire una parola: ")
    return lista


def contaLunghParole(listaParole):
    lista = []
    i = 0
    for parola in listaParole:
        lista.append(len(parola))
        i += 1
    return lista


lista = initListaParole()
if (len(lista) > 0):
    listaLunghParole = contaLunghParole(lista)
    print(listaLunghParole)
else:
    print("Nessuna parola inserita")