def initLista():
    lista = []
    val = input("Inserire un valore, x per uscire: ")
    while val != 'x':
        lista.append(int(val))
        val = input("Inserire un valore, x per uscire: ")
    return lista
    

def istogramma(lista):
    # metodo "classico"
    #for num in lista:
        #stringa = ""
        #for i in range(0, num):
            #stringa += "*"
        #print(stringa)

    # metodo python
    for num in lista:
        print("*" * num)
    

lista = initLista()
if len(lista) > 0:
    istogramma(lista)
else:
    print("Lista vuota!")