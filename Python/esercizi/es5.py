# Scrivi una funzione "sommatrice" che somma tra loro tutti gli elementi di una lista di numeri.

def sommatrice(lista):
    somma = 0
    for valore in lista:
        somma += valore
    print("sommatrice: ", somma)


def initLista():
    lista = []
    val = input("Inserire un valore, x per uscire: ")
    while val != 'x':
        lista.append(int(val))
        val = input("Inserire un valore, x per uscire: ")
    return lista


lista = initLista()
if (len(lista) > 0):
    sommatrice(lista)
else:
    print("sommatrice non funziona, serve inserire qualche valore!")
