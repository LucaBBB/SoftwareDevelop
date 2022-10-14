# Scrivi una funzione a cui vengono passati come parametro un elemento e una lista di elementi, e che ti dica in output se l'elemento passato sia presente o meno nella lista.
# Qualora l'elemento sia presente nella lista, la funzione dovrà inoltre comunicarci l'indice dell'elemento.

def presente(elemento, lista):
    trovato = False
    for i in range(len(lista)):
        if lista[i] == elemento:
            trovato = True
            print(elemento, " e' presente alla posizione ", i)
            break
    if not trovato:
        print(elemento, " non e' stato trovato nella lista!")

    # soluzione piu' rapida
    # if el in lista:
        # print(f"Il carattere '{el}' è presente nella lista passata, all'indice {lista.index(el)}!")
    # else:
        # print(f"Il carattere '{el}' NON è presente nella lista passata...")


presente("marco", ["pippo", "re", "marco", "samuele"])