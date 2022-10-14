# Scrivi una funzione "moltiplicatrice" che moltiplica tra loro tutti gli elementi di una lista di numeri.

def moltiplicatrice(lista):
    moltiplica = 1
    for valore in lista:
        if valore > 0:
            moltiplica *= valore
        else:
            print(valore, "impossibile da moltiplicare perche' < di 0!")
    print("moltiplicatrice: ", moltiplica)


def initLista():
    lista = []
    val = input("Inserire un valore, x per uscire: ")
    while val != 'x':
        lista.append(int(val))
        val = input("Inserire un valore, x per uscire: ")
    return lista


lista = initLista()
if (len(lista) > 0):
    moltiplicatrice(lista)
else:
    print("moltiplicatrice non funziona, serve inserire qualche valore!")
