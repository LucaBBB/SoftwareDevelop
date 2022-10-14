# Scrivi un programma che, passata come parametro una lista di interi, fornisce in output il maggiore tra i numeri contenuti nella lista.

def max_list(lista):
    max = lista[0]

    for i in range(1, len(lista)):
        if lista[i] > max:
            max = lista[i]

    print("Valore maggiore: ", max)


lista = []
val = input("Inserire un valore, x per uscire: ")
while val != 'x':
    lista.append(int(val))
    val = input("Inserire un valore, x per uscire: ")

if len(lista) > 0:
    max_list(lista)
else:
    print("Nessun valore inserito!")
